import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Benefits from './components/Benefits'
import Implementation from './components/Implementation'
import Features from './components/Features'
import Modules from './components/Modules'
import TechStack from './components/TechStack'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">
                  SupporIT
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('problems')}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Проблемы
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Выгоды
              </button>
              <button
                onClick={() => scrollToSection('modules')}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Модули
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                FAQ
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Документация
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button
                onClick={() => scrollToSection('problems')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Проблемы
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Выгоды
              </button>
              <button
                onClick={() => scrollToSection('modules')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Модули
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                FAQ
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Документация
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Problems />
        <Benefits />
        <Implementation />
        <Features />
        <Modules />
        <TechStack />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
