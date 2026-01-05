# Инструкция по развертыванию на VDS сервере

## Вариант 1: Статический сайт через Nginx (рекомендуется)

### 1. Подготовка проекта

На вашем локальном компьютере или на сервере:

```bash
# Клонируем репозиторий (если еще не клонирован)
git clone git@github.com:skandal1st/supporit_landing.git
cd supporit_landing

# Устанавливаем зависимости
npm install

# Собираем проект для продакшена
npm run build
```

После сборки в папке `dist/` будут готовые файлы для развертывания.

### 2. Загрузка файлов на сервер

```bash
# Через SCP
scp -r dist/* user@your-server-ip:/var/www/supporit-landing/

# Или через rsync
rsync -avz dist/ user@your-server-ip:/var/www/supporit-landing/
```

### 3. Установка и настройка Nginx

На сервере:

```bash
# Установка Nginx (Ubuntu/Debian)
sudo apt update
sudo apt install nginx -y

# Создаем директорию для сайта
sudo mkdir -p /var/www/supporit-landing
sudo chown -R $USER:$USER /var/www/supporit-landing
```

### 4. Создание конфигурации Nginx

Создайте файл `/etc/nginx/sites-available/supporit-landing`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/supporit-landing;
    index index.html;

    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # Кеширование статических файлов
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA роутинг - все запросы на index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Безопасность
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### 5. Активация сайта

```bash
# Создаем символическую ссылку
sudo ln -s /etc/nginx/sites-available/supporit-landing /etc/nginx/sites-enabled/

# Проверяем конфигурацию
sudo nginx -t

# Перезапускаем Nginx
sudo systemctl restart nginx
```

### 6. Настройка SSL (Let's Encrypt)

```bash
# Установка Certbot
sudo apt install certbot python3-certbot-nginx -y

# Получение SSL сертификата
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Автоматическое обновление сертификата
sudo certbot renew --dry-run
```

## Вариант 2: Через PM2 (для dev режима)

Если нужен dev режим с hot reload:

```bash
# Установка PM2
npm install -g pm2

# Запуск в dev режиме
pm2 start npm --name "supporit-landing" -- run dev

# Сохранение конфигурации PM2
pm2 save
pm2 startup
```

Затем настройте Nginx как reverse proxy:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Вариант 3: Через Docker

Создайте `Dockerfile`:

```dockerfile
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

И `nginx.conf`:

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Запуск:

```bash
docker build -t supporit-landing .
docker run -d -p 80:80 supporit-landing
```

## Проверка работы

После развертывания проверьте:

1. Откройте в браузере: `http://your-server-ip` или `https://your-domain.com`
2. Проверьте консоль браузера на ошибки
3. Проверьте логи Nginx: `sudo tail -f /var/log/nginx/error.log`

## Полезные команды

```bash
# Перезапуск Nginx
sudo systemctl restart nginx

# Проверка статуса Nginx
sudo systemctl status nginx

# Просмотр логов
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Обновление сайта (после новой сборки)
cd /path/to/supporit-landing
git pull
npm install
npm run build
sudo cp -r dist/* /var/www/supporit-landing/
```

## Автоматизация обновления

Можно создать скрипт `deploy.sh`:

```bash
#!/bin/bash
cd /path/to/supporit-landing
git pull
npm install
npm run build
sudo cp -r dist/* /var/www/supporit-landing/
echo "Deployment completed!"
```

Сделайте его исполняемым: `chmod +x deploy.sh`
