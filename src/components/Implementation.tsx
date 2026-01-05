import { CheckCircle2, Users, Settings, Database, GraduationCap, Headphones } from 'lucide-react'

export default function Implementation() {
  const steps = [
    {
      icon: Users,
      title: 'Консультация и анализ',
      description:
        'Наши специалисты изучают ваши процессы, анализируют текущую ситуацию и определяют оптимальную конфигурацию системы.',
      duration: '1-2 дня',
    },
    {
      icon: Settings,
      title: 'Установка и настройка',
      description:
        'Мы устанавливаем систему на ваш сервер, настраиваем все модули под ваши требования и интегрируем с существующими системами.',
      duration: '1-2 дня',
    },
    {
      icon: Database,
      title: 'Миграция данных',
      description:
        'Наши специалисты переносят все данные из ваших текущих систем (Excel, другие системы) в SupporIT с проверкой корректности.',
      duration: '2-3 дня',
    },
    {
      icon: GraduationCap,
      title: 'Обучение сотрудников',
      description:
        'Проводим обучение ваших сотрудников работе с системой. Обычные пользователи осваивают за 30 минут, администраторы — за 2-3 часа.',
      duration: '1 день',
    },
    {
      icon: Headphones,
      title: 'Поддержка и сопровождение',
      description:
        'После внедрения вы получаете техническую поддержку, регулярные обновления и помощь в решении любых вопросов.',
      duration: 'Постоянно',
    },
  ]

  return (
    <section id="implementation" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как происходит внедрение
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наши специалисты делают все за вас — от установки до обучения сотрудников
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200"></div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={index}
                  className="relative flex gap-6 lg:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-primary-600 font-bold text-xl">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8 lg:pb-12">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 break-words">{step.title}</h3>
                        <p className="text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 border-2 border-primary-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Вам не нужно ничего делать самостоятельно
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Все работы по установке, настройке, миграции данных и обучению выполняют наши специалисты.
              Вы просто получаете готовую к работе систему.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 bg-white/80 rounded-lg p-4">
              <CheckCircle2 className="text-primary-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <div className="font-semibold text-gray-900 mb-1">Без технических знаний</div>
                <div className="text-sm text-gray-600">Вам не нужно разбираться в технических деталях</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/80 rounded-lg p-4">
              <CheckCircle2 className="text-primary-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <div className="font-semibold text-gray-900 mb-1">Без найма специалистов</div>
                <div className="text-sm text-gray-600">Все делает наша команда</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/80 rounded-lg p-4">
              <CheckCircle2 className="text-primary-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <div className="font-semibold text-gray-900 mb-1">Быстро и без рисков</div>
                <div className="text-sm text-gray-600">Внедрение за 1-7 дней</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
