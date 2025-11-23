import type { Metadata } from 'next'
import { cabinetInfo } from '@/lib/data/config'
import { GraduationCap, Award, Scale, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos',
  description: `Découvrez le parcours et les valeurs de ${cabinetInfo.lawyerFirstName} ${cabinetInfo.lawyerName}, avocat au ${cabinetInfo.barreauName}.`,
}

export default function AProposPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            À propos du cabinet
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Découvrez notre parcours et nos valeurs
          </p>
        </div>
      </section>

      {/* Présentation de l'avocat */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image (placeholder) */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                <div className="flex h-full items-center justify-center text-gray-400">
                  <Scale className="h-32 w-32" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                {cabinetInfo.lawyerFirstName} {cabinetInfo.lawyerName}
              </h2>
              <div className="mb-4 space-y-2 text-lg text-gray-600">
                <p>Avocat au {cabinetInfo.barreauName}</p>
                <p>Toque n°{cabinetInfo.toqueNumber}</p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Inscrite au {cabinetInfo.barreauName} depuis 2010, {cabinetInfo.lawyerFirstName}{' '}
                  {cabinetInfo.lawyerName} exerce principalement dans les domaines du droit de la
                  famille, du droit pénal et du droit du travail.
                </p>
                <p>
                  Diplômée de l&apos;Université Paris 1 Panthéon-Sorbonne, elle a développé au fil des
                  années une compétence reconnue dans l&apos;accompagnement des particuliers et des
                  entreprises face à leurs problématiques juridiques.
                </p>
                <p>
                  Son approche privilégie l&apos;écoute, le dialogue et la recherche de solutions
                  pragmatiques, tout en assurant une défense rigoureuse des intérêts de ses clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours professionnel */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Parcours professionnel
          </h2>

          <div className="mx-auto max-w-3xl space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">
                  Formation
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Master 2 Droit privé général - Université Paris 1 Panthéon-Sorbonne</li>
                  <li>Certificat d&apos;Aptitude à la Profession d&apos;Avocat (CAPA) - École de Formation professionnelle des Barreaux de la Cour d&apos;appel de Paris</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Scale className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">
                  Expérience
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Depuis 2015 :</strong> Cabinet Moreau & Associés (structure actuelle)</li>
                  <li><strong>2010-2015 :</strong> Collaboratrice au sein d&apos;un cabinet parisien spécialisé en droit de la famille</li>
                  <li><strong>2008-2010 :</strong> Formation et stages au Barreau de Paris</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">
                  Appartenance professionnelle
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Membre du {cabinetInfo.barreauName}</li>
                  <li>Soumise au Règlement Intérieur National (RIN) de la profession d&apos;avocat</li>
                  <li>Formations continues régulières (obligation déontologique)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">
                  Domaines de compétence
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Droit de la famille (divorce, autorité parentale, succession)</li>
                  <li>Droit pénal (assistance en garde à vue, défense pénale)</li>
                  <li>Droit du travail (licenciement, harcèlement, conseil prud&apos;homal)</li>
                  <li>Droit des affaires (création de société, contentieux commercial)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Nos valeurs
          </h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-serif text-xl font-semibold text-primary">
                Écoute et confidentialité
              </h3>
              <p className="text-gray-600">
                Chaque dossier est unique. Nous prenons le temps d&apos;écouter votre situation pour vous
                proposer une stratégie adaptée. Le secret professionnel de l&apos;avocat garantit la
                protection absolue de nos échanges.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-serif text-xl font-semibold text-primary">
                Rigueur et professionnalisme
              </h3>
              <p className="text-gray-600">
                Notre engagement déontologique nous impose une rigueur constante dans le traitement
                de vos dossiers. Nous assurons un suivi régulier et une information transparente sur
                l&apos;avancement de votre affaire.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-serif text-xl font-semibold text-primary">
                Disponibilité et réactivité
              </h3>
              <p className="text-gray-600">
                Nous nous efforçons de répondre rapidement à vos demandes et de rester disponibles
                tout au long de la procédure. Une permanence téléphonique est assurée en cas
                d&apos;urgence.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-serif text-xl font-semibold text-primary">
                Recherche de solutions
              </h3>
              <p className="text-gray-600">
                Au-delà du contentieux, nous privilégions, lorsque c&apos;est possible, les modes
                alternatifs de règlement des différends (médiation, transaction) pour trouver des
                solutions rapides et adaptées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Déontologie */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
              Respect de la déontologie
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              En tant qu&apos;avocat, nous sommes soumis au Règlement Intérieur National (RIN) et aux
              principes essentiels de la profession : indépendance, loyauté, confraternité, et
              respect du secret professionnel.
            </p>
            <p className="text-gray-600">
              Notre activité est contrôlée par le Conseil de l&apos;Ordre du {cabinetInfo.barreauName}.
              Nous sommes également couverts par une assurance Responsabilité Civile Professionnelle
              auprès de {cabinetInfo.insurance.company}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
