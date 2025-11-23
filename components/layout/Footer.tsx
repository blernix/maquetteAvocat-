import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { cabinetInfo } from '@/lib/data/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom">
        {/* Contenu principal du footer */}
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Informations cabinet */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-white">
              {cabinetInfo.name}
            </h3>
            <p className="mb-2 text-sm">
              {cabinetInfo.legalStructure}
            </p>
            <p className="text-sm">
              {cabinetInfo.lawyerFirstName} {cabinetInfo.lawyerName}
            </p>
            <p className="text-sm">
              Avocat au {cabinetInfo.barreauName}
            </p>
            <p className="text-sm">
              Toque n°{cabinetInfo.toqueNumber}
            </p>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-white">
              Coordonnées
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />
                <address className="not-italic text-sm">
                  {cabinetInfo.address.street}<br />
                  {cabinetInfo.address.postalCode} {cabinetInfo.address.city}
                </address>
              </div>
              <a
                href={`tel:${cabinetInfo.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-secondary"
              >
                <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>{cabinetInfo.contact.phone}</span>
              </a>
              <a
                href={`mailto:${cabinetInfo.contact.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-secondary"
              >
                <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>{cabinetInfo.contact.email}</span>
              </a>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />
                <p className="text-sm">{cabinetInfo.hours}</p>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-white">
              Liens rapides
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="transition-colors hover:text-secondary">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/domaines" className="transition-colors hover:text-secondary">
                  Domaines d&apos;intervention
                </Link>
              </li>
              <li>
                <Link href="/honoraires" className="transition-colors hover:text-secondary">
                  Honoraires
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="transition-colors hover:text-secondary">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-white">
              Informations légales
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mentions-legales" className="transition-colors hover:text-secondary">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="transition-colors hover:text-secondary">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <a
                  href="https://www.cnb.avocat.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-secondary"
                >
                  Conseil National des Barreaux
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs">
                Assurance RCP :
              </p>
              <p className="text-xs">
                {cabinetInfo.insurance.company}
              </p>
              <p className="text-xs">
                {cabinetInfo.insurance.coverage}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center text-sm">
          <p>
            © {currentYear} {cabinetInfo.name}. Tous droits réservés.
          </p>
          <p className="mt-2 text-xs">
            SIRET : {cabinetInfo.siret}
          </p>
        </div>
      </div>
    </footer>
  )
}
