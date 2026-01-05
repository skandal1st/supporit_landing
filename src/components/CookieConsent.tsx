import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Показываем баннер через небольшую задержку
      setTimeout(() => {
        setIsVisible(true)
      }, 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  const handleClose = () => {
    // При закрытии без выбора сохраняем как отклонено
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          {/* Иконка */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <Cookie className="text-primary-600" size={24} />
            </div>
          </div>

          {/* Текст */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Мы используем cookies
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Мы используем файлы cookie для улучшения работы сайта, персонализации контента
              и анализа трафика. Продолжая использовать наш сайт, вы соглашаетесь на{' '}
              <a
                href="#"
                className="text-primary-600 hover:text-primary-700 underline"
                onClick={(e) => e.preventDefault()}
              >
                использование cookies
              </a>
              . Вы можете отказаться от использования cookies в настройках браузера.
            </p>
          </div>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm whitespace-nowrap"
            >
              Отклонить
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-sm whitespace-nowrap"
            >
              Принять все
            </button>
          </div>

          {/* Кнопка закрытия */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
