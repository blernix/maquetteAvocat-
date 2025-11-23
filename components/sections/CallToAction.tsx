'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cabinetInfo } from '@/lib/data/config'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark py-20 md:py-28">
      {/* Elements decoratifs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
            >
              <MessageCircle className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-white">Premier rendez-vous sur demande</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance"
            >
              Besoin d'un conseil juridique ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-10 text-lg text-gray-200 md:text-xl"
            >
              Contactez-nous pour un premier echange sur votre situation. Nous etudierons ensemble
              la meilleure strategie a adopter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="group btn-hover-lift shadow-large">
                  Nous contacter
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </Link>
              <a href={`tel:${cabinetInfo.contact.phone.replace(/\s/g, '')}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary"
                >
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  {cabinetInfo.contact.phone}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Badges de confiance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-white">Secret</p>
              <p className="text-sm text-gray-300">Professionnel</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{cabinetInfo.barreauName}</p>
              <p className="text-sm text-gray-300">TOQUE {cabinetInfo.toqueNumber}</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white">Assure</p>
              <p className="text-sm text-gray-300">{cabinetInfo.insurance.company}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
