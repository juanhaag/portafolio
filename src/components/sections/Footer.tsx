import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Terminal } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/juanhaag', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/juan-martin-haag/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contactojuanhaag@gmail.com', label: 'Email' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4 bg-industrial-900 border-t border-industrial-700">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-emerald/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-accent-emerald" />
              <span className="font-mono font-bold text-white">
                juan<span className="text-accent-emerald">.dev</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Analista en Sistemas & Seguridad especializado en desarrollo fullstack
              y código blindado. Disponible para proyectos freelance y
              consultoría.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-mono font-semibold text-white">
              {'// Enlaces'}
            </h4>
            <nav className="flex flex-col gap-2">
              {['Proyectos', 'Tech Stack', 'Contacto'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 hover:text-accent-emerald transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-mono font-semibold text-white">
              {'// Conectar'}
            </h4>
            <p className="text-gray-400 text-sm">
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-industrial-800 border border-industrial-600 rounded-lg text-gray-400 hover:text-accent-emerald hover:border-accent-emerald/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-industrial-700 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm font-mono">
            &copy; {currentYear} Juan. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
            <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></span>
            <span>Este portafolio fue optimizado con IA y posteriormente auditado manualmente para asegurar que cumple con los estándares OWASP</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
