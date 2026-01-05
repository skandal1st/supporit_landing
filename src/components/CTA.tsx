import { ArrowRight, Mail, Calendar, CheckCircle2 } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Готовы сэкономить время и деньги?
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-4">
            Получите бесплатную консультацию и демонстрацию системы
          </p>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Наши специалисты покажут, как SupporIT решит ваши задачи,
            рассчитают стоимость внедрения и ответят на все вопросы
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-white flex-shrink-0 mt-1" size={24} />
              <div>
                <div className="font-semibold text-white mb-1">Внедрение за вас</div>
                <div className="text-primary-100 text-sm">Наши специалисты делают все</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-white flex-shrink-0 mt-1" size={24} />
              <div>
                <div className="font-semibold text-white mb-1">Без рисков</div>
                <div className="text-primary-100 text-sm">Бесплатная консультация</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-white flex-shrink-0 mt-1" size={24} />
              <div>
                <div className="font-semibold text-white mb-1">Поддержка</div>
                <div className="text-primary-100 text-sm">Помощь на каждом этапе</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@supporit.ru?subject=Запрос на демонстрацию системы"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Mail size={22} />
              Заказать демонстрацию
            </a>
            <a
              href="mailto:info@supporit.ru?subject=Запрос на консультацию"
              className="px-8 py-4 bg-primary-500 text-white rounded-lg font-bold text-lg hover:bg-primary-400 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/30 flex items-center justify-center gap-2"
            >
              <Calendar size={22} />
              Записаться на консультацию
              <ArrowRight size={22} />
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-primary-200 text-sm mb-2">
            Или изучите подробную информацию о системе
          </p>
          <a
            href="#modules"
            className="inline-block text-white hover:text-primary-200 underline font-medium"
          >
            Посмотреть все модули →
          </a>
        </div>
      </div>
    </section>
  )
}
