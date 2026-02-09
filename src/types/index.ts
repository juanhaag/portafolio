import { LucideIcon } from 'lucide-react'

export interface ProjectMockup {
  src: string
  alt: string
  caption?: string
}

export interface Project {
  id: string
  title: string
  description: string
  icon: LucideIcon
  technologies: string[]
  isSecurityAudited: boolean
  githubUrl?: string
  demoUrl?: string
  mockups?: ProjectMockup[]
}

export interface TechCategory {
  name: string
  technologies: Technology[]
}

export interface Technology {
  name: string
  level?: 'expert' | 'advanced' | 'intermediate'
}

export interface TypewriterConfig {
  text: string
  speed?: number
  delay?: number
}
