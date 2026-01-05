import { Mail, Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">
                SupporIT
              </span>
            </div>
            <p className="text-gray-400">
              Современная система учета ИТ-оборудования для предприятий любого
              размера
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#problems"
                  className="hover:text-primary-400 transition-colors"
                >
                  Решаемые проблемы
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-primary-400 transition-colors"
                >
                  Ваши выгоды
                </a>
              </li>
              <li>
                <a
                  href="#modules"
                  className="hover:text-primary-400 transition-colors"
                >
                  Модули системы
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-primary-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Связаться с нами</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a
                  href="mailto:info@supporit.ru"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@supporit.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Code size={18} />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Документация
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="mailto:info@supporit.ru?subject=Запрос на демо-версию"
                className="inline-block px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors text-sm font-semibold"
              >
                Получить демо
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} SupporIT. Система учета
            ИТ-оборудования. MIT License.
          </p>
        </div>
      </div>
    </footer>
  )
}
