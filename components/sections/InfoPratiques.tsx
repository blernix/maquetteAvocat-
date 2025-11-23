'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Train, Car, Phone } from 'lucide-react'
import { cabinetInfo } from '@/lib/data/config'
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

export default function InfoPratiques() {
  const infos = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: [
        cabinetInfo.address.street,
        `${cabinetInfo.address.postalCode} ${cabinetInfo.address.city}`,
      ],
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: [cabinetInfo.hours, 'Sur rendez-vous uniquement'],
    },
    {
      icon: Train,
      title: 'Transports',
      content: ['Metro: Havre-Caumartin (L3, L9)', 'Bus: Lignes 20, 21, 22, 66'],
    },
    {
      icon: Car,
      title: 'Stationnement',
      content: ['Parking Haussmann', 'Parking Chaussee d\'Antin'],
    },
  ]

  return (
    <Section background="gray" decorative>
      <SectionHeader
        subtitle="Informations pratiques"
        title="Nous trouver"
        description="Notre cabinet vous accueille dans un cadre professionnel et confidentiel, au coeur de Paris."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Carte / Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-primary/5"
        >
          <div className="aspect-square lg:aspect-auto lg:h-full">
            {/* Placeholder pour la carte - a remplacer par Google Maps */}
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center p-8">
              <MapPin className="mb-4 h-16 w-16 text-primary/30" />
              <p className="text-center text-lg font-medium text-gray-700">
                {cabinetInfo.address.street}
              </p>
              <p className="text-center text-gray-500">
                {cabinetInfo.address.postalCode} {cabinetInfo.address.city}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${cabinetInfo.address.street}, ${cabinetInfo.address.postalCode} ${cabinetInfo.address.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary-dark btn-hover-lift"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </motion.div>

        {/* Informations */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {infos.map((info) => (
            <motion.div
              key={info.title}
              variants={item}
              className="rounded-xl bg-white p-6 shadow-soft"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <info.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-gray-900">
                {info.title}
              </h3>
              {info.content.map((line, i) => (
                <p key={i} className="text-sm text-gray-600">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bandeau telephone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-soft sm:flex-row sm:p-8"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
            <Phone className="h-7 w-7 text-secondary" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Besoin d'un rendez-vous ?</p>
            <p className="text-xl font-semibold text-gray-900">{cabinetInfo.contact.phone}</p>
          </div>
        </div>
        <a
          href={`tel:${cabinetInfo.contact.phone.replace(/\s/g, '')}`}
          className="rounded-lg bg-secondary px-6 py-3 font-medium text-white transition-all hover:bg-secondary-dark btn-hover-lift"
        >
          Appeler maintenant
        </a>
      </motion.div>
    </Section>
  )
}
