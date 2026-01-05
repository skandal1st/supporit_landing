import {
  DollarSign,
  Clock,
  Shield,
  Users,
  BarChart3,
  Zap,
  CheckCircle2,
} from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Экономьте деньги',
      description:
        'Избегайте перерасхода на оборудование и расходники. Контролируйте остатки и получайте уведомления о низких запасах.',
      value: 'До 30% экономии',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Clock,
      title: 'Экономьте время',
      description:
        'Автоматизация учета экономит до 40% времени ИТ-отдела. Больше никаких ручных таблиц и поиска информации.',
      value: '40% времени',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Shield,
      title: 'Избегайте штрафов',
      description:
        'Автоматические напоминания об истечении лицензий помогут избежать штрафов и проблем с проверками.',
      value: '0 штрафов',
      color: 'from-red-500 to-rose-600',
    },
    {
      icon: Users,
      title: 'Улучшите сервис',
      description:
        'Централизованная система заявок ускоряет обработку в 3 раза. Сотрудники получают помощь быстрее.',
      value: '3x быстрее',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: BarChart3,
      title: 'Принимайте решения на данных',
      description:
        'Полная аналитика и отчеты показывают реальную картину: что нужно докупить, что списать, где оптимизировать.',
      value: '100% прозрачность',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Работайте из anywhere',
      description:
        'Доступ 24/7 с любого устройства. Мобильная версия позволяет создавать заявки и проверять статусы на ходу.',
      value: '24/7 доступ',
      color: 'from-yellow-500 to-amber-600',
    },
  ]

  const guarantees = [
    'Внедрение нашими специалистами за 1-7 дней',
    'Полная настройка и миграция данных без вашего участия',
    'Работает на вашем сервере — ваши данные в безопасности',
    'Техническая поддержка и обновления включены',
    'Обучение ваших сотрудников работе с системой',
    'Масштабируется под любой размер компании',
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Что вы получите с SupporIT
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Конкретные выгоды, которые окупят систему уже в первый месяц
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    {benefit.value}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 border-2 border-primary-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Гарантии, которые дают уверенность
            </h3>
            <p className="text-lg text-gray-700">
              Мы уверены в продукте и готовы доказать это
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/80 rounded-lg p-4"
              >
                <CheckCircle2 className="text-primary-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-800 font-medium">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
