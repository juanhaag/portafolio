import { motion } from 'framer-motion'
import { Github, ExternalLink, ShieldCheck, LucideIcon, Image } from 'lucide-react'
import { Badge } from './Badge'
import { Button } from './Button'
import type { ProjectMockup } from '@/types'

interface ProjectCardProps {
  title: string
  description: string
  icon: LucideIcon
  technologies: string[]
  isSecurityAudited?: boolean
  githubUrl?: string
  demoUrl?: string
  mockups?: ProjectMockup[]
  index: number
  onOpenGallery?: () => void
}

export function ProjectCard({
  title,
  description,
  icon: Icon,
  technologies,
  isSecurityAudited = false,
  githubUrl,
  demoUrl,
  mockups,
  index,
  onOpenGallery,
}: ProjectCardProps) {
  const hasMockups = mockups && mockups.length > 0

  const handleDemoClick = () => {
    if (hasMockups && onOpenGallery) {
      onOpenGallery()
    } else if (demoUrl) {
      window.open(demoUrl, '_blank')
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <div className="h-full p-6 bg-industrial-800/60 border border-industrial-600 rounded-xl backdrop-blur-sm hover:border-accent-emerald/40 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.4 }}
            className="p-3 bg-gradient-to-br from-accent-emerald/20 to-accent-cyan/10 rounded-lg border border-accent-emerald/20"
          >
            <Icon className="w-6 h-6 text-accent-emerald" />
          </motion.div>

          {isSecurityAudited && (
            <Badge variant="security">
              <ShieldCheck className="w-3 h-3" />
              Security Audited
            </Badge>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-emerald transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-industrial-700/80 text-gray-300 rounded border border-industrial-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <Button
              variant="ghost"
              size="sm"
              icon={<Github className="w-4 h-4" />}
              onClick={() => window.open(githubUrl, '_blank')}
            >
              Código
            </Button>
          )}
          {(hasMockups || demoUrl) && (
            <Button
              variant="secondary"
              size="sm"
              icon={hasMockups ? <Image className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
              onClick={handleDemoClick}
            >
              {hasMockups ? 'Ver Demo' : 'Demo'}
            </Button>
          )}
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-emerald/5 via-transparent to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.article>
  )
}
