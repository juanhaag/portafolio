import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  children?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', icon, children, ...props }, ref) => {
    const variantStyles = {
      primary: 'bg-accent-emerald hover:bg-accent-emerald-bright text-industrial-900 font-semibold',
      secondary: 'bg-transparent border border-accent-emerald text-accent-emerald hover:bg-accent-emerald/10',
      ghost: 'bg-transparent text-gray-400 hover:text-accent-emerald hover:bg-industrial-700',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-emerald/50 disabled:opacity-50 disabled:pointer-events-none',
          variantStyles[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {icon}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
