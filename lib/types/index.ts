export interface Domaine {
  slug: string
  title: string
  description: string
  icon: string
  detailedDescription: string
  services: string[]
  faq: FAQ[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Article {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  category: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
  rgpdConsent: boolean
  newsletterConsent: boolean
}

export interface CabinetInfo {
  name: string
  legalStructure: string
  lawyerName: string
  lawyerFirstName: string
  barreauName: string
  toqueNumber: string
  siret: string
  address: {
    street: string
    postalCode: string
    city: string
    country: string
  }
  contact: {
    phone: string
    fax: string
    email: string
  }
  hours: string
  insurance: {
    company: string
    coverage: string
  }
}
