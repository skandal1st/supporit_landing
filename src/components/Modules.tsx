import {
  LayoutDashboard,
  Server,
  Ticket,
  Package,
  Building2,
  Key,
  UserCog,
  Settings,
  TrendingUp,
  Mail,
  MessageCircle,
} from 'lucide-react'

export default function Modules() {
  const modules = [
    {
      icon: LayoutDashboard,
      title: 'Dashboard',
      description:
        'Центральная панель управления с ключевыми метриками, графиками и статистикой. Отслеживание состояния оборудования, активных заявок и производительности системы.',
      features: [
        'Визуализация данных в реальном времени',
        'Ключевые метрики и KPI',
        'Интерактивные графики и диаграммы',
        'Быстрый доступ к важным разделам',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Server,
      title: 'Учет оборудования',
      description:
        'Полный учет всего ИТ-оборудования: компьютеры, серверы, принтеры, мониторы и другое. Инвентарные номера, характеристики, местоположение и история использования.',
      features: [
        'CRUD операции для оборудования',
        'Привязка к помещениям и отделам',
        'QR-коды для быстрой идентификации',
        'Интеграция с Zabbix для мониторинга',
        'История изменений и перемещений',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Ticket,
      title: 'Система заявок',
      description:
        'Централизованная система обработки заявок от сотрудников. Отслеживание статусов, приоритетов, привязка к оборудованию и автоматические уведомления.',
      features: [
        'Создание и управление заявками',
        'Привязка к оборудованию и расходникам',
        'Фильтрация по отделу и кабинету',
        'Комментарии и история изменений',
        'Уведомления о статусах',
        'Работа с заявками (для ИТ-специалистов)',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Package,
      title: 'Расходные материалы',
      description:
        'Учет расходных материалов: картриджи, бумага, кабели и другие. Контроль остатков, минимальных порогов и история выдачи.',
      features: [
        'Учет всех расходных материалов',
        'Контроль остатков и минимальных порогов',
        'История выдачи материалов',
        'Привязка к оборудованию',
        'Автоматические уведомления о низких остатках',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Building2,
      title: 'Здания и помещения',
      description:
        'Управление структурой организации: здания, этажи, отделы и кабинеты. Привязка оборудования к конкретным местам.',
      features: [
        'Иерархическая структура зданий',
        'Управление отделами и кабинетами',
        'Привязка оборудования к помещениям',
        'Фильтрация по местоположению',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Key,
      title: 'Лицензии ПО',
      description:
        'Учет программного обеспечения и лицензий. Отслеживание сроков действия, привязка к оборудованию и уведомления об истечении.',
      features: [
        'Учет всех лицензий ПО',
        'Отслеживание сроков действия',
        'Привязка к оборудованию',
        'Уведомления об истечении лицензий',
        'Детальная информация о лицензиях',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: UserCog,
      title: 'Управление пользователями',
      description:
        'Централизованное управление пользователями системы. Назначение ролей, управление доступом и профилями.',
      features: [
        'Создание и редактирование пользователей',
        'Назначение ролей и прав доступа',
        'Управление профилями',
        'История активности пользователей',
      ],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Settings,
      title: 'Настройки системы',
      description:
        'Комплексные настройки системы: здания, справочники, интеграции и системные параметры.',
      features: [
        'Настройка зданий и помещений',
        'Управление справочниками',
        'Настройка Telegram-бота',
        'Системные параметры',
      ],
      color: 'from-gray-500 to-gray-600',
    },
    {
      icon: TrendingUp,
      title: 'Отчеты и аналитика',
      description:
        'Генерация отчетов по оборудованию, заявкам, расходным материалам. Экспорт в различные форматы.',
      features: [
        'Отчеты по оборудованию',
        'Аналитика по заявкам',
        'Отчеты по расходным материалам',
        'Экспорт в Excel, PDF',
      ],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Mail,
      title: 'Email интеграция',
      description:
        'Интеграция с почтовыми серверами для автоматической обработки заявок из email и отправки уведомлений.',
      features: [
        'Автоматическая обработка email-заявок',
        'Отправка уведомлений на email',
        'Поддержка IMAP/POP3',
      ],
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: MessageCircle,
      title: 'Telegram бот',
      description:
        'Интеграция с Telegram для создания заявок через бота, получения уведомлений и управления системой.',
      features: [
        'Создание заявок через Telegram',
        'Уведомления в Telegram',
        'QR-коды для регистрации',
        'Управление через бота',
      ],
      color: 'from-teal-500 to-teal-600',
    },
  ]

  return (
    <section id="modules" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Модули системы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный набор инструментов для управления ИТ-инфраструктурой
          </p>
        </div>

        <div className="space-y-12">
          {modules.map((module, index) => {
            const Icon = module.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {module.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {module.description}
                  </p>
                  <ul className="space-y-3">
                    {module.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl min-h-[300px] flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Icon size={120} className="opacity-20 mx-auto mb-4" />
                    <p className="text-sm">Интерфейс модуля</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
