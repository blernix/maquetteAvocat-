import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Euro, FileText, CreditCard, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Honoraires',
  description: 'Informations sur les honoraires du cabinet : tarifs, modes de facturation, convention d\'honoraires et aide juridictionnelle.',
}

export default function HonorairesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Honoraires
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-200">
            Transparence et clarté sur nos modes de facturation et nos tarifs
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 rounded-lg bg-secondary/10 p-6">
              <h2 className="mb-4 font-serif text-2xl font-semibold text-gray-900">
                Information importante
              </h2>
              <p className="text-gray-700">
                Conformément aux règles déontologiques de la profession d&apos;avocat, une convention
                d&apos;honoraires sera systématiquement établie et signée avant toute intervention.
                Ce document détaille précisément les modalités de notre collaboration et les
                conditions financières.
              </p>
            </div>

            <p className="mb-6 text-lg text-gray-600">
              Les honoraires varient en fonction de la nature du dossier, de sa complexité, du temps
              passé, de l&apos;urgence et des enjeux financiers. Nous nous engageons à vous informer
              avec transparence de nos modes de facturation lors de notre premier entretien.
            </p>
          </div>
        </div>
      </section>

      {/* Modes de facturation */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Modes de facturation
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Euro className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                Honoraires horaires
              </h3>
              <p className="mb-4 flex-1 text-gray-600">
                Facturation au temps passé sur votre dossier. Le taux horaire est de{' '}
                <strong>250€ HT</strong> (300€ TTC). Chaque intervention est comptabilisée au
                quart d&apos;heure.
              </p>
              <p className="text-sm text-gray-500">
                Mode adapté aux consultations, conseils, et dossiers dont la durée est difficile à
                prévoir.
              </p>
            </Card>

            <Card className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                Honoraires forfaitaires
              </h3>
              <p className="mb-4 flex-1 text-gray-600">
                Montant fixe déterminé à l&apos;avance pour une prestation définie (divorce par
                consentement mutuel, rédaction de contrat, etc.).
              </p>
              <p className="text-sm text-gray-500">
                Mode permettant une visibilité totale sur le coût de la prestation dès le départ.
              </p>
            </Card>

            <Card className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CreditCard className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                Honoraires mixtes
              </h3>
              <p className="mb-4 flex-1 text-gray-600">
                Combinaison d&apos;un forfait de base et d&apos;un honoraire de résultat (honoraire
                complémentaire en cas de succès).
              </p>
              <p className="text-sm text-gray-500">
                Mode adapté aux contentieux avec enjeux financiers importants.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Le mode de facturation le plus adapté à votre situation sera déterminé lors de notre
              premier entretien.
            </p>
          </div>
        </div>
      </section>

      {/* Exemples de tarifs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900">
              Exemples de tarifs forfaitaires
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <span className="text-gray-700">Consultation juridique (1h)</span>
                <span className="font-semibold text-primary">200€ TTC</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <span className="text-gray-700">Divorce par consentement mutuel (sans enfant)</span>
                <span className="font-semibold text-primary">À partir de 1 500€ TTC</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <span className="text-gray-700">Rédaction de contrat simple</span>
                <span className="font-semibold text-primary">À partir de 800€ TTC</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <span className="text-gray-700">Assistance en garde à vue</span>
                <span className="font-semibold text-primary">500€ TTC</span>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Ces tarifs sont donnés à titre indicatif. Le montant définitif sera précisé dans la
              convention d&apos;honoraires après étude de votre dossier.
            </p>
          </div>
        </div>
      </section>

      {/* Modalités de paiement */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900">
              Modalités de paiement
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                  Moyens de paiement acceptés
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  <li>Virement bancaire</li>
                  <li>Chèque</li>
                  <li>Espèces (dans la limite de 1 000€)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                  Provision
                </h3>
                <p className="text-gray-600">
                  Une provision sur honoraires pourra être demandée avant le début de la mission.
                  Elle sera déduite du montant final des honoraires. Un compte client est ouvert à
                  votre nom et tenu à jour régulièrement.
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                  Frais et débours
                </h3>
                <p className="text-gray-600">
                  Les frais engagés pour votre dossier (frais de déplacement, photocopies, droits
                  d&apos;enregistrement, etc.) sont facturés en sus des honoraires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aide juridictionnelle */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border-2 border-secondary bg-secondary/5 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                <HelpCircle className="h-6 w-6 text-secondary" aria-hidden="true" />
              </div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-gray-900">
                Aide juridictionnelle
              </h2>
              <p className="mb-4 text-gray-700">
                Si vos ressources sont insuffisantes, vous pouvez bénéficier de l&apos;aide
                juridictionnelle. Cette aide peut être totale ou partielle selon vos revenus.
              </p>
              <p className="mb-6 text-gray-700">
                Notre cabinet accepte les dossiers au titre de l&apos;aide juridictionnelle. N&apos;hésitez
                pas à nous interroger sur votre éligibilité et les démarches à effectuer.
              </p>
              <a
                href="https://www.justice.fr/aide-juridictionnelle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-secondary transition-colors hover:text-secondary-dark"
              >
                En savoir plus sur l&apos;aide juridictionnelle →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold">
              Des questions sur nos honoraires ?
            </h2>
            <p className="mb-8 text-lg text-gray-200">
              Contactez-nous pour un premier échange. Nous vous expliquerons en toute transparence
              les modalités financières adaptées à votre dossier.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
