'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Scale, Users, Briefcase, Building, ArrowRight } from 'lucide-react'
import { domaines } from '@/lib/data/domaines'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'

// Map des icones
const iconMap: Record<string, any> = {
  Users,
  Scale,
  Briefcase,
  Building,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const }
  },
}

export default function DomainesSection() {
  return (
    <Section background="gray" decorative>
      <SectionHeader
        subtitle="Nos expertises"
        title="Domaines d'intervention"
        description="Notre cabinet intervient dans plusieurs domaines du droit pour vous accompagner dans toutes vos problematiques juridiques."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {domaines.map((domaine) => {
          const Icon = iconMap[domaine.icon] || Scale
          return (
            <motion.div
              key={domaine.slug}
              variants={item}
              className="group"
            >
              <Link
                href={`/domaines/${domaine.slug}`}
                className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary/20 hover:shadow-medium hover:-translate-y-1"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {domaine.title}
                </h3>
                <p className="mb-4 flex-1 text-gray-600 leading-relaxed">
                  {domaine.description}
                </p>
                <div className="flex items-center font-medium text-primary">
                  <span>En savoir plus</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Link href="/domaines">
          <Button variant="primary" size="lg" className="btn-hover-lift">
            Voir tous nos domaines
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  )
}
