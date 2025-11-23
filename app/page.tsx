import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { domaines } from '@/lib/data/domaines'
import { cabinetInfo } from '@/lib/data/config'
import { Scale, Users, Briefcase, Building, Shield, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accueil',
}

// Map des icônes
const iconMap: Record<string, any> = {
  Users,
  Scale,
  Briefcase,
  Building,
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Votre défense juridique à Paris"
        subtitle="Cabinet d'avocat"
        description={`${cabinetInfo.lawyerFirstName} ${cabinetInfo.lawyerName}, avocat au ${cabinetInfo.barreauName}, vous accompagne dans toutes vos démarches juridiques avec professionnalisme et confidentialité.`}
        ctaText="Prendre rendez-vous"
        ctaLink="/contact"
      />

      {/* Présentation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Un accompagnement juridique de confiance
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              Le {cabinetInfo.name} met à votre disposition une compétence reconnue en droit de la
              famille, droit pénal et droit du travail. Notre cabinet intervient tant en conseil
              qu&apos;en contentieux devant l&apos;ensemble des juridictions.
            </p>
            <p className="text-lg text-gray-600">
              Nous privilégions une approche personnalisée, à l&apos;écoute de vos besoins, afin de vous
              proposer une stratégie juridique adaptée à votre situation.
            </p>
          </div>
        </div>
      </section>

      {/* Domaines d'intervention */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Domaines d&apos;intervention
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Notre cabinet intervient dans plusieurs domaines du droit pour vous accompagner dans
              toutes vos problématiques juridiques.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {domaines.map((domaine) => {
              const Icon = iconMap[domaine.icon] || Scale
              return (
                <Card key={domaine.slug} hover className="flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                    {domaine.title}
                  </h3>
                  <p className="mb-4 flex-1 text-gray-600">
                    {domaine.description}
                  </p>
                  <Link
                    href={`/domaines/${domaine.slug}`}
                    className="font-medium text-primary transition-colors hover:text-primary-dark"
                  >
                    En savoir plus →
                  </Link>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/domaines">
              <Button variant="primary" size="lg">
                Voir tous les domaines
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Nos engagements
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Shield className="h-8 w-8 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                Confidentialité
              </h3>
              <p className="text-gray-600">
                Le secret professionnel de l&apos;avocat garantit la protection absolue de vos
                informations et échanges.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Clock className="h-8 w-8 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                Réactivité
              </h3>
              <p className="text-gray-600">
                Nous nous engageons à vous répondre rapidement et à assurer un suivi régulier de
                votre dossier.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <MapPin className="h-8 w-8 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                Proximité
              </h3>
              <p className="text-gray-600">
                Un cabinet à taille humaine, à votre écoute, pour une relation de confiance sur le
                long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Besoin d&apos;un conseil juridique ?
            </h2>
            <p className="mb-8 text-lg text-gray-200">
              Contactez-nous pour un premier échange sur votre situation. Nous étudierons ensemble
              la meilleure stratégie à adopter.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Nous contacter
                </Button>
              </Link>
              <a href={`tel:${cabinetInfo.contact.phone.replace(/\s/g, '')}`}>
                <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white hover:text-primary">
                  {cabinetInfo.contact.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
