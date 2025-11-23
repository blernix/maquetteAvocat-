'use client'

import { cn } from '@/lib/utils/cn'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'primary' | 'gradient'
  padding?: 'sm' | 'md' | 'lg'
  decorative?: boolean
  id?: string
  animated?: boolean
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary text-white',
  gradient: 'bg-gradient-to-b from-white to-gray-50',
}

const paddings = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20 lg:py-24',
  lg: 'py-20 md:py-28 lg:py-32',
}

export default function Section({
  children,
  className,
  background = 'white',
  padding = 'md',
  decorative = false,
  id,
  animated = true,
}: SectionProps) {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  }

  return (
    <motion.section
      id={id}
      initial={animated ? 'hidden' : undefined}
      whileInView={animated ? 'visible' : undefined}
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
      className={cn(
        'relative overflow-hidden',
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      {/* Elements decoratifs */}
      {decorative && (
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-secondary blur-3xl" />
          <div className="absolute -left-10 bottom-10 h-96 w-96 rounded-full bg-primary blur-3xl" />
        </div>
      )}

      <div className="container-custom relative z-10">{children}</div>
    </motion.section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
  light?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
  light = false,
}: SectionHeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={cn(
        'mb-12 lg:mb-16',
        centered && 'mx-auto max-w-3xl text-center',
        className
      )}
    >
      {subtitle && (
        <p className={cn(
          'mb-4 text-sm font-medium uppercase tracking-wider',
          light ? 'text-secondary-light' : 'text-secondary'
        )}>
          {subtitle}
        </p>
      )}
      <h2 className={cn(
        'mb-4 font-serif text-3xl font-bold md:text-4xl lg:text-5xl text-balance',
        light ? 'text-white' : 'text-gray-900'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-lg leading-relaxed',
          light ? 'text-gray-200' : 'text-gray-600'
        )}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
