import {
  Code,
  Database,
  Shield,
  Smartphone,
} from 'lucide-react'

export default function TechStack() {
  const categories = [
    {
      icon: Code,
      title: 'Frontend',
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'React Router', 'Zustand'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Backend',
      tech: ['Express.js', 'TypeScript', 'PostgreSQL', 'JWT', 'Node.js'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Безопасность',
      tech: ['JWT токены', 'Хеширование паролей', 'Ролевой доступ', 'CORS защита'],
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Smartphone,
      title: 'Интеграции',
      tech: ['Telegram Bot', 'Email (IMAP)', 'Zabbix', 'QR-коды'],
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <section id="tech" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Технологический стек
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Современные технологии для надежной и производительной системы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
