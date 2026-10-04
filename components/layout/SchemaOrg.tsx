'use client'

import { cabinetInfo, siteMetadata } from '@/lib/data/config'
import { domaines } from '@/lib/data/domaines'
import {
  useProspectIdentity,
  useProspectContact,
} from '@/components/ProspectPersonalization'

export default function SchemaOrg() {
  const identity = useProspectIdentity()
  const contact = useProspectContact()

  const name = identity.nom ?? cabinetInfo.name
  const city = identity.ville ?? cabinetInfo.address.city
  const barreau = `Barreau de ${city}`

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name,
    '@id': identity.active ? undefined : siteMetadata.url,
    url: identity.active ? undefined : siteMetadata.url,
    image: identity.active ? undefined : `${siteMetadata.url}/images/logo.png`,
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    knowsAbout: domaines.map((d) => d.title),
    memberOf: {
      '@type': 'Organization',
      name: barreau,
    },
  }

  // Ville desservie : jamais celle d'une autre ville. Absente → omise.
  const areaCity = identity.active ? identity.ville : cabinetInfo.address.city
  if (areaCity) {
    schema.areaServed = {
      '@type': 'City',
      name: areaCity,
    }
  }

  // Téléphone : jamais celui d'une autre ville. Absent → propriété omise.
  if (contact.phone) {
    schema.telephone = contact.phone
  }

  // Adresse : construite uniquement à partir de ce qui est connu.
  if (contact.showAddress) {
    const address: Record<string, unknown> = {
      '@type': 'PostalAddress',
      addressCountry: cabinetInfo.address.country,
    }
    const streetAddress = identity.active
      ? identity.adresse
      : cabinetInfo.address.street
    const postalCode = identity.active
      ? identity.code_postal
      : cabinetInfo.address.postalCode
    const addressLocality = identity.active
      ? identity.ville
      : cabinetInfo.address.city

    if (streetAddress) address.streetAddress = streetAddress
    if (addressLocality) address.addressLocality = addressLocality
    if (postalCode) address.postalCode = postalCode
    schema.address = address
  }

  // Coordonnées GPS de démonstration : uniquement sur la version d'origine.
  if (!identity.active) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: 48.8738,
      longitude: 2.3268,
    }
  }

  // L'adresse de démonstration n'est jamais inventée : sans `?email=`, on
  // omet simplement la propriété email. Le fondateur fictif n'est inclus que
  // sur la version d'origine (aucun paramètre).
  if (identity.email) {
    schema.email = identity.email
  } else if (!identity.active) {
    schema.email = cabinetInfo.contact.email
  }

  if (identity.active) {
    if (identity.prenom) {
      schema.founder = {
        '@type': 'Person',
        name: identity.prenom,
        jobTitle: 'Avocat',
      }
    }
  } else {
    schema.founder = {
      '@type': 'Person',
      name: `${cabinetInfo.lawyerFirstName} ${cabinetInfo.lawyerName}`,
      jobTitle: 'Avocat',
    }
  }

  return (
    <script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
