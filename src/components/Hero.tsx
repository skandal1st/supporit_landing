import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              🚀 Экономьте до 40% времени на учете оборудования
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Прекратите терять{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              ИТ-оборудование
            </span>
            <br />
            и деньги на хаос в учете
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-medium">
            Единственная система, которая автоматизирует весь учет ИТ-оборудования,
            заявки и аналитику — от момента покупки до списания
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Больше никаких Excel-таблиц, потерянных заявок и неразберихи. 
            Все в одном месте, с доступом 24/7 и автоматическими уведомлениями.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:info@supporit.ru?subject=Запрос на консультацию"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 text-lg"
            >
              Получить консультацию
              <ArrowRight size={20} />
            </a>
            <a
              href="#problems"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-primary-600 shadow-lg hover:shadow-xl text-lg"
            >
              Узнать, как это решает ваши проблемы
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-primary-600" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
              <div className="text-gray-600">Экономия времени</div>
              <div className="text-sm text-gray-500 mt-1">на учете оборудования</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="text-primary-600" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
              <div className="text-gray-600">Потерянных заявок</div>
              <div className="text-sm text-gray-500 mt-1">благодаря автоматизации</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Zap className="text-primary-600" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Доступ к системе</div>
              <div className="text-sm text-gray-500 mt-1">с любого устройства</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
