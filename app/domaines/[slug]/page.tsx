import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { domaines, getDomaineBySlug } from '@/lib/data/domaines'
import { Scale, Users, Briefcase, Building, CheckCircle2 } from 'lucide-react'

// Map des icônes
const iconMap: Record<string, any> = {
  Users,
  Scale,
  Briefcase,
  Building,
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return domaines.map((domaine) => ({
    slug: domaine.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const domaine = getDomaineBySlug(slug)

  if (!domaine) {
    return {
      title: 'Domaine non trouvé',
    }
  }

  return {
    title: domaine.title,
    description: domaine.description,
  }
}

export default async function DomainePage({ params }: Props) {
  const { slug } = await params
  const domaine = getDomaineBySlug(slug)

  if (!domaine) {
    notFound()
  }

  const Icon = iconMap[domaine.icon] || Scale

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-white/10">
            <Icon className="h-8 w-8 text-secondary" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            {domaine.title}
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-200">
            {domaine.description}
          </p>
        </div>
      </section>

      {/* Description détaillée */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
              Notre accompagnement
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              {domaine.detailedDescription}
            </p>

            <h3 className="mb-6 font-serif text-2xl font-semibold text-gray-900">
              Nos interventions
            </h3>
            <ul className="space-y-3">
              {domaine.services.map((service, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {domaine.faq.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
                Questions fréquentes
              </h2>
              <div className="space-y-6">
                {domaine.faq.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-white p-6"
                  >
                    <h3 className="mb-3 font-serif text-xl font-semibold text-primary">
                      {item.question}
                    </h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold">
              Besoin d&apos;un conseil en {domaine.title.toLowerCase()} ?
            </h2>
            <p className="mb-8 text-lg text-gray-200">
              Contactez-nous pour étudier votre situation et définir ensemble la meilleure stratégie
              à adopter.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Nous contacter
                </Button>
              </Link>
              <Link href="/domaines">
                <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white hover:text-primary">
                  Voir tous les domaines
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
