import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Lock,
  Bot,
  BarChart3,
  GraduationCap,
  Stethoscope,
  ShieldCheck,
} from 'lucide-react'
import { ProjectCard } from '../ui/ProjectCard'
import { ImageGallery } from '../ui/ImageGallery'
import type { Project } from '@/types'

const projects: Project[] = [
  {
    id: 'isft-academic-manager',
    title: 'ISFT Academic ERP (SIU-Style)',
    description:
      'Sistema integral de gestión académica con lógica de correlatividades, gestión de legajos digitales y actas de examen. Incluye un motor de auditoría interna inmutable.',
    icon: GraduationCap,
    technologies: ['Next.js', 'PostgreSQL', 'TypeScript', 'Laravel'],
    isSecurityAudited: true,
    githubUrl: 'https://github.com/juanhaag/insti',
    demoUrl: 'https://sigees.isft151.edu.ar/',
    mockups: [
      { src: '/demo/isft/screen.png', alt: 'Dashboard Principal', caption: 'Panel de control principal del sistema' },
      { src: '/demo/isft/screen2.png', alt: 'Vista General', caption: 'Vista general del sistema académico' },
      { src: '/demo/isft/carreras.png', alt: 'Gestión de Carreras', caption: 'Módulo de gestión de carreras y planes de estudio' },
      { src: '/demo/isft/legajo.png', alt: 'Legajo Digital', caption: 'Sistema de legajos digitales de estudiantes' },
    ],
  },
  {
    id: 'healthsync-pwa',
    title: 'HealthSync PWA',
    description:
      'Plataforma médica con cifrado AES-256 en el lado del cliente para historias clínicas. Gestión de turnos con notificaciones push y funcionamiento offline.',
    icon: Stethoscope,
    technologies: ['React', 'Supabase', 'Crypto-js', 'Tailwind'],
    isSecurityAudited: true,
    githubUrl: 'https://github.com/juanhaag/pwa-medical',
    mockups: [
      { src: '/demo/healt/screen.png', alt: 'Dashboard Médico', caption: 'Panel principal de la plataforma médica' },
      { src: '/demo/healt/lolgin.png', alt: 'Login Seguro', caption: 'Pantalla de inicio de sesión con seguridad reforzada' },
      { src: '/demo/healt/2fa.png', alt: 'Autenticación 2FA', caption: 'Sistema de autenticación de dos factores' },
      { src: '/demo/healt/agenda.png', alt: 'Agenda de Turnos', caption: 'Gestión de agenda y turnos médicos' },
      { src: '/demo/healt/vistapaciente.png', alt: 'Vista Paciente', caption: 'Panel de vista del paciente' },
      { src: '/demo/healt/seguridad.png', alt: 'Configuración de Seguridad', caption: 'Opciones de seguridad y privacidad' },
      { src: '/demo/healt/auditorias.png', alt: 'Auditorías', caption: 'Registro de auditorías del sistema' },
    ],
  },
  {
    id: 'olas-forecast',
    title: 'Olas Forecast API',
    description:
      'API para la predicción de olas utilizando datos de servicios de terceros y modelos de IA. Proporciona reportes y consejos personalizados para una buena jornada de surf.',
    icon: BarChart3,
    technologies: ['TypeScript', 'PostgreSQL', 'Node.js', 'Express'],
    isSecurityAudited: true,
    githubUrl: 'https://github.com/juanhaag/olas-forescast-api',
  },
  {
    id: 'ai-n8n-risk-analyzer',
    title: 'Automata: AI Risk Analyzer',
    description:
      'Agente de IA integrado con n8n que automatiza la auditoría de documentos técnicos mediante RAG y análisis predictivo de vulnerabilidades en código.',
    icon: Bot,
    technologies: ['n8n', 'Python', 'OpenAI', 'LangChain'],
    isSecurityAudited: true,
    githubUrl: 'https://github.com/juanhaag',
  },
  {
    id: 'secure-inventory-logistics',
    title: 'Secure Logistics Shield',
    description:
      'PWA de inventario con escaneo QR/Barcode nativo. Control de stock en tiempo real con alertas automatizadas vía Webhooks y trazabilidad total de usuarios.',
    icon: ShieldCheck,
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
    isSecurityAudited: true,
    githubUrl: 'https://github.com/juanhaag',
  },
  {
    id: 'sentinel-auth-engine',
    title: 'Sentinel Auth Engine (Core)',
    description:
      'Framework de autenticación robusto con soporte Multi-tenant, RBAC avanzado, rotación de tokens y protección contra OWASP Top 10 (Injection, XSS).',
    icon: Lock,
    technologies: ['NestJS', 'TypeScript', 'Redis', 'PostgreSQL'],
    isSecurityAudited: true,
    githubUrl: 'https://github.com/juanhaag',
  },
  {
    id: 'data-viz-auditor',
    title: 'SaaS Security Dashboard',
    description:
      'Visualización de logs de auditoría en tiempo real para sistemas críticos. Monitorización de accesos sospechosos y exportación de reportes de cumplimiento.',
    icon: BarChart3,
    technologies: ['Next.js', 'GraphQL', 'D3.js', 'PostgreSQL'],
    isSecurityAudited: true,
    githubUrl: 'https://github.com/juanhaag',
  },
]

export function Projects() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleOpenGallery = (project: Project) => {
    setSelectedProject(project)
    setGalleryOpen(true)
  }

  const handleCloseGallery = () => {
    setGalleryOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-900 via-industrial-800/50 to-industrial-900" />

      <div className="relative z-10 max-w-7xl mx-auto">
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
            className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/20 rounded-full"
          >
            {'<Proyectos />'}
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Arquitecturas que{' '}
            <span className="text-gradient">Escalan</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Proyectos de código abierto enfocados en seguridad, rendimiento y
            mejores prácticas de ingeniería de software.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              icon={project.icon}
              technologies={project.technologies}
              isSecurityAudited={project.isSecurityAudited}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              mockups={project.mockups}
              index={index}
              onOpenGallery={() => handleOpenGallery(project)}
            />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent-emerald hover:text-accent-emerald-bright transition-colors font-mono text-sm"
          >
            Ver todos los proyectos en GitHub
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      {selectedProject?.mockups && (
        <ImageGallery
          images={selectedProject.mockups}
          isOpen={galleryOpen}
          onClose={handleCloseGallery}
          projectTitle={selectedProject.title}
        />
      )}
    </section>
  )
}
