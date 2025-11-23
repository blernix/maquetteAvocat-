import Script from 'next/script'
import { cabinetInfo, siteMetadata } from '@/lib/data/config'
import { domaines } from '@/lib/data/domaines'

export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: cabinetInfo.name,
    image: `${siteMetadata.url}/images/logo.png`,
    '@id': siteMetadata.url,
    url: siteMetadata.url,
    telephone: cabinetInfo.contact.phone,
    email: cabinetInfo.contact.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: cabinetInfo.address.street,
      addressLocality: cabinetInfo.address.city,
      postalCode: cabinetInfo.address.postalCode,
      addressCountry: cabinetInfo.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8738,
      longitude: 2.3268
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    areaServed: {
      '@type': 'City',
      name: 'Paris'
    },
    knowsAbout: domaines.map(d => d.title),
    memberOf: {
      '@type': 'Organization',
      name: cabinetInfo.barreauName
    },
    founder: {
      '@type': 'Person',
      name: `${cabinetInfo.lawyerFirstName} ${cabinetInfo.lawyerName}`,
      jobTitle: 'Avocat'
    }
  }

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
