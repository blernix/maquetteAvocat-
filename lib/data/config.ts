import { CabinetInfo } from '@/lib/types'

export const cabinetInfo: CabinetInfo = {
  name: 'Cabinet Moreau & Associés',
  legalStructure: 'SELARL',
  lawyerName: 'Moreau',
  lawyerFirstName: 'Sophie',
  barreauName: 'Barreau de Paris',
  toqueNumber: 'T1234',
  siret: '123 456 789 00012',
  address: {
    street: '42 Boulevard Haussmann',
    postalCode: '75009',
    city: 'Paris',
    country: 'France'
  },
  contact: {
    phone: '01 42 00 00 00',
    fax: '01 42 00 00 01',
    email: 'contact@cabinet-moreau.fr'
  },
  hours: 'Du lundi au vendredi : 9h00 - 18h00',
  insurance: {
    company: 'AXA France IARD',
    coverage: 'France et Union Européenne'
  }
}

export const siteMetadata = {
  title: 'Cabinet Moreau & Associés - Avocat Paris',
  description: 'Cabinet d\'avocat à Paris spécialisé en droit de la famille, droit pénal et droit du travail. Sophie Moreau, avocat au Barreau de Paris.',
  url: 'https://www.cabinet-moreau.fr',
  locale: 'fr_FR'
}
