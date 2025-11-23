'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react'
import { cabinetInfo } from '@/lib/data/config'
import { cn } from '@/lib/utils/cn'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Domaines', href: '/domaines' },
    { name: 'Honoraires', href: '/honoraires' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={cn(
      'sticky top-0 z-40 transition-all duration-300',
      scrolled ? 'bg-white shadow-medium' : 'bg-white/95 backdrop-blur-sm'
    )}>
      {/* Barre de contact supérieure */}
      <div className={cn(
        'bg-primary text-white transition-all duration-300',
        scrolled ? 'py-1' : 'py-2'
      )}>
        <div className="container-custom">
          <div className="flex flex-col items-center justify-between gap-2 text-sm sm:flex-row">
            <a
              href={`tel:${cabinetInfo.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 transition-colors hover:text-secondary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{cabinetInfo.contact.phone}</span>
            </a>
            <a
              href={`mailto:${cabinetInfo.contact.email}`}
              className="flex items-center gap-2 transition-colors hover:text-secondary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{cabinetInfo.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="container-custom" aria-label="Navigation principale">
        <div className={cn(
          'flex items-center justify-between transition-all duration-300',
          scrolled ? 'py-3' : 'py-4'
        )}>
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <span className="font-serif text-2xl font-bold text-primary transition-transform group-hover:scale-105">
              {cabinetInfo.name}
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary"
              >
                {item.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 bg-secondary transition-transform hover:scale-x-100" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-dark btn-hover-lift"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Menu mobile avec animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="space-y-1 border-t border-gray-100 pb-4 pt-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.05 }}
                  className="px-3 pt-3"
                >
                  <Link
                    href="/contact"
                    className="block w-full rounded-lg bg-primary px-4 py-3 text-center font-medium text-white transition-colors hover:bg-primary-dark"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Prendre rendez-vous
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
