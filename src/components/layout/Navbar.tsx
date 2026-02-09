import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X, Download } from 'lucide-react'
import { Button } from '../ui/Button'

const CV_URL = '/cv-juanhaag.pdf'

const navLinks = [
  { href: '#about', label: 'Sobre Mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#tech-stack', label: 'Tech Stack' },
  // { href: '#contact', label: 'Contacto' }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-industrial-900/90 backdrop-blur-md border-b border-industrial-700'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2"
        >
          <Terminal className="w-6 h-6 text-accent-emerald" />
          <span className="font-mono font-bold text-white">
            juan<span className="text-accent-emerald">.dev</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-accent-emerald transition-colors text-sm font-mono"
            >
              {link.label}
            </motion.a>
          ))}
          <a href={CV_URL} download="CV-Juan-Haag.pdf">
            <Button variant="primary" size="sm" icon={<Download className="w-4 h-4" />}>
              Descargar CV
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-industrial-900/95 backdrop-blur-md border-b border-industrial-700"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-accent-emerald transition-colors font-mono py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href={CV_URL} download="CV-Juan-Haag.pdf" className="mt-2">
                <Button variant="primary" icon={<Download className="w-4 h-4" />} className="w-full">
                  Descargar CV
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
