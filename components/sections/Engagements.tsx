'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, UserCheck, FileCheck, Scale, HeartHandshake } from 'lucide-react'
import Section, { SectionHeader } from '@/components/ui/Section'

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Engagements() {
  const engagements = [
    {
      icon: Shield,
      title: 'Secret professionnel',
      description:
        "Vos echanges sont proteges par le secret professionnel de l'avocat, garantie absolue de confidentialite.",
    },
    {
      icon: Clock,
      title: 'Reactivite',
      description:
        'Nous nous engageons a repondre sous 48h et a vous tenir informe de l\'avancee de votre dossier.',
    },
    {
      icon: UserCheck,
      title: 'Ecoute personnalisee',
      description:
        'Chaque situation est unique. Nous prenons le temps de comprendre vos besoins specifiques.',
    },
    {
      icon: FileCheck,
      title: 'Transparence tarifaire',
      description:
        'Une convention d\'honoraires claire et detaillee vous est systematiquement proposee.',
    },
    {
      icon: Scale,
      title: 'Expertise juridique',
      description:
        'Une formation continue et une veille juridique permanente garantissent un conseil actualise.',
    },
    {
      icon: HeartHandshake,
      title: 'Relation de confiance',
      description:
        'Un accompagnement dans la duree, fonde sur le dialogue et le respect mutuel.',
    },
  ]

  return (
    <Section background="white" decorative>
      <SectionHeader
        subtitle="Notre approche"
        title="Pourquoi nous choisir ?"
        description="Notre cabinet place la relation client au coeur de sa pratique. Decouvrez nos engagements pour vous accompagner au mieux."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {engagements.map((engagement) => (
          <motion.div
            key={engagement.title}
            variants={item}
            className="group rounded-xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary/20 hover:shadow-medium"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 transition-transform group-hover:scale-110">
              <engagement.icon
                className="h-7 w-7 text-primary"
                aria-hidden="true"
              />
            </div>
            <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">
              {engagement.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {engagement.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
