import type { Metadata } from 'next'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { domaines } from '@/lib/data/domaines'
import { Scale, Users, Briefcase, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Domaines d\'intervention',
  description: 'Découvrez les domaines d\'intervention du cabinet : droit de la famille, droit pénal, droit du travail, droit des affaires.',
}

// Map des icônes
const iconMap: Record<string, any> = {
  Users,
  Scale,
  Briefcase,
  Building,
}

export default function DomainesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Domaines d&apos;intervention
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-200">
            Notre cabinet intervient dans plusieurs domaines du droit pour vous accompagner dans
            toutes vos problématiques juridiques, tant en conseil qu&apos;en contentieux.
          </p>
        </div>
      </section>

      {/* Liste des domaines */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {domaines.map((domaine) => {
              const Icon = iconMap[domaine.icon] || Scale
              return (
                <Card key={domaine.slug} hover className="flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="mb-3 font-serif text-2xl font-semibold text-gray-900">
                    {domaine.title}
                  </h2>
                  <p className="mb-4 flex-1 text-gray-600">
                    {domaine.description}
                  </p>
                  <Link href={`/domaines/${domaine.slug}`}>
                    <Button variant="primary" className="w-full">
                      En savoir plus
                    </Button>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
              Vous avez une question juridique ?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              N&apos;hésitez pas à nous contacter pour un premier échange sur votre situation. Nous
              étudierons ensemble les solutions adaptées à votre problématique.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
