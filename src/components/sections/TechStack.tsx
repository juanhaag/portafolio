import { motion } from 'framer-motion'
import { Server, Cloud, Shield } from 'lucide-react'
import type { TechCategory } from '@/types'

const techCategories: TechCategory[] = [
  {
    name: 'Dev',
    technologies: [
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'React', level: 'intermediate' },
      { name: 'Next.js', level: 'intermediate' },
      { name: 'Node.js', level: 'advanced' },
      { name: 'Python', level: 'intermediate' },
      { name: 'PHP', level: 'advanced' },
      { name: 'Laravel', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MySQL', level: 'advanced' },
      { name: 'MariaDB', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'GraphQL', level: 'intermediate' },
      { name: 'REST API', level: 'advanced' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    technologies: [
      { name: 'Linux', level: 'intermediate' },
      { name: 'SSH', level: 'intermediate' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'GitHub Actions', level: 'intermediate' },
      { name: 'VPS', level: 'intermediate' },
      { name: 'Nginx', level: 'intermediate' },
      { name: 'Git', level: 'intermediate' },
    ],
  },
  {
    name: 'Security Tools',
    technologies: [
      { name: 'OWASP Top 10', level: 'intermediate' },
      { name: 'Snyk', level: 'intermediate' },
      { name: 'Burp Suite', level: 'intermediate' },
      { name: 'Nmap', level: 'intermediate' },
      { name: 'SonarQube', level: 'intermediate' },
    ],
  },
]

const categoryIcons = {
  'Dev': Server,
  'Cloud & DevOps': Cloud,
  'Security Tools': Shield,
}

const categoryColors = {
  'Dev': {
    border: 'border-accent-emerald/30',
    bg: 'bg-accent-emerald/10',
    text: 'text-accent-emerald',
    glow: 'group-hover:shadow-accent-emerald/20',
  },
  'Cloud & DevOps': {
    border: 'border-accent-cyan/30',
    bg: 'bg-accent-cyan/10',
    text: 'text-accent-cyan',
    glow: 'group-hover:shadow-accent-cyan/20',
  },
  'Security Tools': {
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-500',
    glow: 'group-hover:shadow-yellow-500/20',
  },
}

const levelStyles = {
  expert: '',
  advanced: 'ring-2 ring-accent-emerald/40 bg-accent-emerald/5',
  intermediate: 'ring-1 ring-gray-500/30',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-industrial-900" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-emerald/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full"
          >
            {'<TechStack />'}
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Arsenal <span className="text-gradient">Tecnológico</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Herramientas y tecnologías que utilizo para construir sistemas
            seguros, escalables y de alto rendimiento.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.name as keyof typeof categoryIcons]
            const colors = categoryColors[category.name as keyof typeof categoryColors]

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                className="group"
              >
                {/* Category Card */}
                <div className={`p-6 bg-industrial-800/60 border ${colors.border} rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg ${colors.glow}`}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 ${colors.bg} rounded-lg`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white font-mono">
                      {category.name}
                    </h3>
                  </div>

                  {/* Tags Cloud */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {category.technologies.map((tech) => (
                      <motion.span
                        key={tech.name}
                        variants={tagVariants}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        className={`
                          px-3 py-1.5 text-sm font-mono
                          bg-industrial-700/80 text-gray-200
                          rounded-lg border border-industrial-600
                          hover:border-gray-500 hover:text-white
                          transition-all duration-200 cursor-default
                          ${levelStyles[tech.level || 'intermediate']}
                        `}
                      >
                        {tech.name}
                        {tech.level === 'expert' && (
                          <span className="ml-1.5 text-accent-emerald text-xs">●</span>
                        )}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Legend */}
                  <div className="mt-4 pt-4 border-t border-industrial-600/50">
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-accent-emerald"></span>
                        Advanced
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                        Intermediate
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4+', label: 'Años de experiencia' },
            { value: '10+', label: 'Tecnologías dominadas' },
            { value: '15+', label: 'Proyectos completados' },
            { value: '99.9%', label: 'Uptime garantizado' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center p-4 bg-industrial-800/40 rounded-lg border border-industrial-600/50"
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient font-mono">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
