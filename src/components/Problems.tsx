import { X, Check, AlertCircle, Clock, FileQuestion, DollarSign } from 'lucide-react'

export default function Problems() {
  const problems = [
    {
      icon: FileQuestion,
      problem: 'Потерянное оборудование и неразбериха в учете',
      pain: 'Не знаете, где находится оборудование, кто его использует, и сколько оно стоит',
      solution: 'Полный учет с QR-кодами, привязкой к помещениям и автоматической историей перемещений',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Clock,
      problem: 'Заявки теряются в почте и мессенджерах',
      pain: 'Сотрудники пишут в разные каналы, заявки дублируются или теряются, нет контроля',
      solution: 'Централизованная система заявок с автоматическими уведомлениями и отслеживанием статусов',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: DollarSign,
      problem: 'Перерасход на расходные материалы',
      pain: 'Не контролируете остатки, покупаете лишнее или наоборот — заканчивается в неподходящий момент',
      solution: 'Автоматический учет остатков, уведомления о низких запасах и история выдачи',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: AlertCircle,
      problem: 'Истекающие лицензии и штрафы',
      pain: 'Забываете продлить лицензии, получаете штрафы и проблемы с проверками',
      solution: 'Автоматические напоминания об истечении лицензий и полный учет ПО',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section id="problems" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Устали от этих проблем?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Если хотя бы одна из этих ситуаций знакома — SupporIT решит её раз и навсегда
          </p>
        </div>

        <div className="space-y-8">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                        <X className="text-red-600" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.problem}
                        </h3>
                        <p className="text-gray-600 text-lg">{item.pain}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mt-6 pt-6 border-t border-gray-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="text-green-600" size={18} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Решение с SupporIT:
                        </h4>
                        <p className="text-gray-700">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary-50 border-2 border-primary-200 rounded-xl p-6 max-w-2xl">
            <p className="text-lg text-gray-800 font-medium">
              <span className="text-primary-600 font-bold">Хватит терять деньги и время!</span>
              <br />
              SupporIT автоматизирует весь учет и сэкономит ваши ресурсы уже в первый месяц использования
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
