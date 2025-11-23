'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { cabinetInfo } from '@/lib/data/config'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Domaines d\'intervention', href: '/domaines' },
    { name: 'Honoraires', href: '/honoraires' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Barre de contact supérieure */}
      <div className="bg-primary text-white">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-between gap-2 py-2 text-sm sm:flex-row">
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
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-primary">
              {cabinetInfo.name}
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            className="lg:hidden"
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

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
