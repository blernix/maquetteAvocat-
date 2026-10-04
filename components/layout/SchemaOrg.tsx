'use client'

import { cabinetInfo, siteMetadata } from '@/lib/data/config'
import { domaines } from '@/lib/data/domaines'
import { useProspectIdentity } from '@/components/ProspectPersonalization'

export default function SchemaOrg() {
  const identity = useProspectIdentity()

  const name = identity.nom ?? cabinetInfo.name
  const city = identity.ville ?? cabinetInfo.address.city
  const street = identity.adresse ?? cabinetInfo.address.street
  const postalCode = identity.code_postal ?? cabinetInfo.address.postalCode
  const barreau = `Barreau de ${city}`

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name,
    '@id': identity.active ? undefined : siteMetadata.url,
    url: identity.active ? undefined : siteMetadata.url,
    image: identity.active ? undefined : `${siteMetadata.url}/images/logo.png`,
    telephone: cabinetInfo.contact.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: street,
      addressLocality: city,
      postalCode,
      addressCountry: cabinetInfo.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8738,
      longitude: 2.3268,
    },
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
    areaServed: {
      '@type': 'City',
      name: city,
    },
    knowsAbout: domaines.map((d) => d.title),
    memberOf: {
      '@type': 'Organization',
      name: barreau,
    },
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
