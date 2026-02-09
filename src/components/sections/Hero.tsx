import { motion } from 'framer-motion'
import { Shield, Server, Brain, Terminal, ChevronDown } from 'lucide-react'
import { TypewriterText } from '../ui/TypewriterText'
import { Button } from '../ui/Button'

const pillars = [
  {
    icon: Server,
    title: 'Backend',
    description: 'Arquitecturas robustas y APIs escalables',
    color: 'text-accent-emerald',
  },
  {
    icon: Terminal,
    title: 'Fullstack',
    description: 'Soluciones end-to-end de alto rendimiento',
    color: 'text-accent-cyan',
  },
  {
    icon: Brain,
    title: 'IA Automation',
    description: 'Automatización inteligente de procesos',
    color: 'text-accent-emerald-bright',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2.5,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 md:pt-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-industrial-900/50 to-industrial-900" />

      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-emerald/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-industrial-800/80 border border-industrial-600 rounded-full"
        >
          <Shield className="w-4 h-4 text-accent-emerald" />
          <span className="text-sm font-mono text-gray-400">
            Analista en Sistemas & Seguridad
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <TypewriterText
            text="Sistemas Escalables."
            speed={70}
            delay={500}
            className="block text-white"
          />
          <TypewriterText
            text="Código Blindado."
            speed={70}
            delay={2200}
            className="block text-gradient mt-2"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Analista en Sistemas especializado en desarrollo fullstack,
          arquitecturas seguras y soluciones automatizadas con IA.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-6 bg-industrial-800/50 border border-industrial-600 rounded-xl backdrop-blur-sm hover:border-accent-emerald/50 transition-colors duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-industrial-700/50 mb-4 ${pillar.color}`}>
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-400">
                {pillar.description}
              </p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects">
            <Button variant="primary" size="lg">
              Ver Proyectos
            </Button>
          </a>
          <a href="mailto:contactojuanhaag@gmail.com">
            <Button variant="secondary" size="lg">
              Contactar
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs font-mono">scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
