import {
  Lock,
  Users,
  BarChart3,
  Smartphone,
  Moon,
  Bell,
  QrCode,
  MessageSquare,
  Database,
  FileText,
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Lock,
      title: 'Безопасная аутентификация',
      description:
        'JWT-токены и система ролей обеспечивают безопасный доступ к системе',
    },
    {
      icon: Users,
      title: 'Система ролей',
      description:
        'Три уровня доступа: Администратор, ИТ-специалист и Обычный сотрудник',
    },
    {
      icon: BarChart3,
      title: 'Dashboard и аналитика',
      description:
        'Визуализация данных, статистика и отчеты в реальном времени',
    },
    {
      icon: Smartphone,
      title: 'Адаптивный дизайн',
      description:
        'Полностью адаптивный интерфейс для работы на любых устройствах',
    },
    {
      icon: Moon,
      title: 'Темная тема',
      description: 'Поддержка темной и светлой темы для комфортной работы',
    },
    {
      icon: Bell,
      title: 'Уведомления',
      description:
        'Система уведомлений о новых заявках, изменениях статусов и событиях',
    },
    {
      icon: QrCode,
      title: 'QR-коды',
      description:
        'Генерация QR-кодов для быстрой идентификации оборудования',
    },
    {
      icon: MessageSquare,
      title: 'Комментарии к заявкам',
      description:
        'Обсуждение заявок с возможностью добавления комментариев и файлов',
    },
    {
      icon: Database,
      title: 'PostgreSQL',
      description:
        'Надежная реляционная база данных для хранения всех данных',
    },
    {
      icon: FileText,
      title: 'Экспорт данных',
      description:
        'Экспорт отчетов и данных в Excel, PDF и другие форматы',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Технические возможности
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современные технологии и функции, которые делают работу удобной и безопасной
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
