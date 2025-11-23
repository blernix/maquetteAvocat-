'use client'

import { cn } from '@/lib/utils/cn'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'white'
  animated?: boolean
  className?: string
}

const variants = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary-dark',
  success: 'bg-green-100 text-green-800',
  white: 'bg-white text-gray-900 shadow-soft',
}

export default function Badge({
  children,
  variant = 'primary',
  animated = false,
  className,
}: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {animated && (
        <span className="h-2 w-2 rounded-full bg-current animate-pulse-soft" />
      )}
      {children}
    </motion.div>
  )
}
