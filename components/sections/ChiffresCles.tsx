'use client'

import { motion } from 'framer-motion'
import { Scale, Users, Briefcase, Award } from 'lucide-react'
import Section from '@/components/ui/Section'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const }
  },
}

export default function ChiffresCles() {
  const stats = [
    {
      icon: Award,
      value: '15+',
      label: "Annees d'experience",
      description: 'Au service du droit',
    },
    {
      icon: Briefcase,
      value: '500+',
      label: 'Dossiers traites',
      description: 'Conseil et contentieux',
    },
    {
      icon: Users,
      value: '98%',
      label: 'Clients satisfaits',
      description: 'Relation de confiance',
    },
    {
      icon: Scale,
      value: '4',
      label: 'Domaines de competence',
      description: 'Expertise diversifiee',
    },
  ]

  return (
    <Section background="primary" padding="lg">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={item}
            className="relative text-center"
          >
            {/* Ligne separatrice (sauf premier element) */}
            {index > 0 && (
              <div className="absolute -left-4 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/20 lg:block" />
            )}

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <stat.icon className="h-8 w-8 text-secondary" aria-hidden="true" />
            </div>
            <p className="mb-1 font-serif text-4xl font-bold text-white md:text-5xl">
              {stat.value}
            </p>
            <p className="mb-1 text-lg font-medium text-white">
              {stat.label}
            </p>
            <p className="text-sm text-gray-300">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
