'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { ArrowRight, Phone, Scale, Shield } from 'lucide-react'
import { cabinetInfo } from '@/lib/data/config'

interface HeroProps {
  title: string
  subtitle?: string
  description: string
  ctaText?: string
  ctaLink?: string
  imageSrc?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Nous contacter',
  ctaLink = '/contact',
  imageSrc
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark py-20 text-white md:py-32 lg:py-40">
      {/* Elements decoratifs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-primary-light/20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Contenu */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="white" animated>
                <Scale className="h-4 w-4" />
                Cabinet d'avocat Paris
              </Badge>
            </motion.div>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-medium uppercase tracking-wide text-secondary-light"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl text-lg text-gray-200 md:text-xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-4 pt-2 sm:flex-row"
            >
              <Link href={ctaLink}>
                <Button variant="secondary" size="lg" className="group btn-hover-lift shadow-large">
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </Link>
              <a href={`tel:${cabinetInfo.contact.phone.replace(/\s/g, '')}`}>
                <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  {cabinetInfo.contact.phone}
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Colonne droite - Cards flottantes */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Card principale */}
              <div className="relative rounded-2xl bg-white/10 p-8 backdrop-blur-md">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    <Scale className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{cabinetInfo.name}</p>
                    <p className="text-sm text-gray-300">{cabinetInfo.barreauName}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-secondary" />
                    <span className="text-white/90">Secret professionnel garanti</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-secondary" />
                    <span className="text-white/90">Assurance RCP {cabinetInfo.insurance.company}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-secondary" />
                    <span className="text-white/90">TOQUE n° {cabinetInfo.toqueNumber}</span>
                  </div>
                </div>
              </div>

              {/* Card flottante - Experience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 rounded-xl bg-white p-5 shadow-large"
              >
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-600">Annees d'experience</p>
              </motion.div>

              {/* Card flottante - Disponibilite */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-xl bg-white p-4 shadow-large"
              >
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-gray-700">RDV disponibles</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decoration vague */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
