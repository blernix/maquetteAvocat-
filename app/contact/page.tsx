import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'
import { cabinetInfo } from '@/lib/data/config'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contactez le ${cabinetInfo.name} à Paris. Prenez rendez-vous ou envoyez-nous un message via notre formulaire de contact.`,
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Nous contacter
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-200">
            N&apos;hésitez pas à nous contacter pour toute question ou demande de rendez-vous
          </p>
        </div>
      </section>

      {/* Coordonnées et formulaire */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Informations de contact */}
            <div>
              <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Adresse</h3>
                    <address className="not-italic text-gray-600">
                      {cabinetInfo.address.street}<br />
                      {cabinetInfo.address.postalCode} {cabinetInfo.address.city}
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Téléphone</h3>
                    <a
                      href={`tel:${cabinetInfo.contact.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 transition-colors hover:text-primary"
                    >
                      {cabinetInfo.contact.phone}
                    </a>
                    <p className="mt-1 text-sm text-gray-500">
                      Fax : {cabinetInfo.contact.fax}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Email</h3>
                    <a
                      href={`mailto:${cabinetInfo.contact.email}`}
                      className="text-gray-600 transition-colors hover:text-primary"
                    >
                      {cabinetInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Horaires</h3>
                    <p className="text-gray-600">{cabinetInfo.hours}</p>
                    <p className="mt-2 text-sm text-gray-500">
                      Sur rendez-vous uniquement
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-secondary/10 p-6">
                <h3 className="mb-3 font-serif text-lg font-semibold text-gray-900">
                  Urgences
                </h3>
                <p className="text-gray-600">
                  En cas d&apos;urgence (garde à vue, comparution immédiate), notre cabinet assure une
                  permanence téléphonique 24h/24, 7j/7.
                </p>
              </div>

              <div className="mt-8 rounded-lg bg-gray-100 p-6">
                <h3 className="mb-3 font-serif text-lg font-semibold text-gray-900">
                  Accès
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Métro :</strong> Lignes 3, 9, 12 - Station Havre-Caumartin</p>
                  <p><strong>Bus :</strong> Lignes 20, 21, 22, 27, 29, 32, 66, 68, 81, 95</p>
                  <p><strong>Parking :</strong> Parking Haussmann Saint-Lazare</p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map (placeholder) */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-300">
            <div className="flex h-full items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-12 w-12" aria-hidden="true" />
                <p className="text-sm">
                  Carte Google Maps<br />
                  {cabinetInfo.address.street}, {cabinetInfo.address.city}
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Plan interactif Google Maps (à intégrer avec votre clé API)
          </p>
        </div>
      </section>
    </>
  )
}
