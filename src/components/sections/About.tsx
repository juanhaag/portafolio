import { motion } from 'framer-motion'
import { Code2, Shield, Workflow, Terminal } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack',
    description: 'Node.js, PHP & JavaScript moderno',
  },
  {
    icon: Shield,
    title: 'Estudiante en ciberseguridad',
    description: 'OWASP Top 10 & Security Audits',
  },
  {
    icon: Workflow,
    title: 'Automatización',
    description: 'n8n & Workflows inteligentes',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">

      <div className="absolute inset-0 bg-industrial-900" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />


      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-emerald/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Terminal window */}
              <div className="bg-industrial-800 border border-industrial-600 rounded-xl overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-industrial-700/50 border-b border-industrial-600">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-gray-500">
                    ~/sobre-mi
                  </span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <Terminal className="w-4 h-4 text-accent-emerald" />
                    <span>whoami</span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-3"
                  >
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-accent-emerald">→</span> Analista de Sistemas y Desarrollador{' '}
                      <span className="text-accent-cyan">Full Stack</span> con foco en{' '}
                      <span className="text-accent-emerald">Backend</span>.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                      <span className="text-accent-emerald">→</span> Especializado en arquitecturas escalables
                      utilizando <span className="text-white">Node.js</span> y{' '}
                      <span className="text-white">PHP</span> para el lado del servidor, y{' '}
                      <span className="text-white">JavaScript moderno</span> para interfaces dinámicas.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                      <span className="text-accent-emerald">→</span> Integro conocimientos de{' '}
                      <span className="text-yellow-500">Ciberseguridad</span> y automatización con{' '}
                      <span className="text-accent-cyan">n8n</span> para crear ecosistemas digitales
                      seguros y eficientes.
                    </p>
                  </motion.div>

                  {/* Cursor */}
                  <div className="mt-4 flex items-center gap-2 text-gray-500">
                    <span className="text-accent-emerald">$</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-4 bg-accent-emerald"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent-emerald/20 rounded-lg -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent-cyan/20 rounded-lg -z-10" />
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full"
              >
                {'<SobreMí />'}
              </motion.span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Construyendo el{' '}
                <span className="text-gradient">Futuro Digital</span>
              </h2>

              <p className="text-gray-400">
                Transformo ideas complejas en soluciones técnicas elegantes,
                priorizando la seguridad y el rendimiento en cada línea de código.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-4 p-4 bg-industrial-800/50 border border-industrial-600 rounded-xl hover:border-accent-emerald/40 transition-all duration-300"
                >
                  <div className="p-3 bg-accent-emerald/10 rounded-lg group-hover:bg-accent-emerald/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-mono">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
