import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'security' | 'tech'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-industrial-600 text-gray-300',
    security: 'bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/30',
    tech: 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
