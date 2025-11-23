import type { Metadata } from 'next'
import Link from 'next/link'
import { cabinetInfo } from '@/lib/data/config'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du Cabinet Moreau & Associés - Avocat à Paris',
}

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Mentions légales
          </h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose prose-lg mx-auto max-w-4xl">
            {/* Éditeur du site */}
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              1. Éditeur du site
            </h2>
            <p>
              Le présent site internet est édité par :
            </p>
            <div className="rounded-lg bg-gray-50 p-6 not-prose">
              <p className="mb-2"><strong>{cabinetInfo.name}</strong></p>
              <p className="mb-2">{cabinetInfo.legalStructure}</p>
              <p className="mb-2">
                Représenté par {cabinetInfo.lawyerFirstName} {cabinetInfo.lawyerName}, Avocat
              </p>
              <p className="mb-2">
                <strong>Adresse :</strong><br />
                {cabinetInfo.address.street}<br />
                {cabinetInfo.address.postalCode} {cabinetInfo.address.city}
              </p>
              <p className="mb-2">
                <strong>Téléphone :</strong> {cabinetInfo.contact.phone}
              </p>
              <p className="mb-2">
                <strong>Email :</strong> {cabinetInfo.contact.email}
              </p>
              <p className="mb-2">
                <strong>SIRET :</strong> {cabinetInfo.siret}
              </p>
            </div>

            {/* Informations professionnelles */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              2. Informations professionnelles
            </h2>
            <div className="rounded-lg bg-gray-50 p-6 not-prose">
              <p className="mb-2">
                <strong>Profession :</strong> Avocat au {cabinetInfo.barreauName}
              </p>
              <p className="mb-2">
                <strong>Numéro de TOQUE :</strong> {cabinetInfo.toqueNumber}
              </p>
              <p className="mb-2">
                <strong>Assurance Responsabilité Civile Professionnelle :</strong><br />
                {cabinetInfo.insurance.company}<br />
                Couverture géographique : {cabinetInfo.insurance.coverage}
              </p>
              <p className="mb-2">
                <strong>Règles professionnelles applicables :</strong><br />
                - Règlement Intérieur National (RIN) de la profession d&apos;avocat<br />
                - Code de déontologie des avocats européens<br />
                Consultables sur{' '}
                <a
                  href="https://www.cnb.avocat.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.cnb.avocat.fr
                </a>
              </p>
            </div>

            {/* Directeur de publication */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              3. Directeur de publication
            </h2>
            <p>
              Le directeur de la publication du site est {cabinetInfo.lawyerFirstName}{' '}
              {cabinetInfo.lawyerName}.
            </p>

            {/* Hébergeur */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              4. Hébergement du site
            </h2>
            <p>
              Le site est hébergé par :
            </p>
            <div className="rounded-lg bg-gray-50 p-6 not-prose">
              <p className="mb-2"><strong>OVH</strong></p>
              <p className="mb-2">SAS au capital de 10 069 020 €</p>
              <p className="mb-2">RCS Lille Métropole 424 761 419 00045</p>
              <p className="mb-2">
                Siège social : 2 rue Kellermann - 59100 Roubaix - France
              </p>
              <p className="mb-2">Téléphone : 1007</p>
            </div>

            {/* Propriété intellectuelle */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              5. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le
              droit d&apos;auteur. Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le
              procédé utilisé, est interdite, sauf autorisation écrite préalable du{' '}
              {cabinetInfo.name}.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l&apos;un de ses éléments sera considérée
              comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des
              articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>

            {/* Cookies */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              6. Cookies et traceurs
            </h2>
            <p>
              Le site utilise des cookies pour améliorer l&apos;expérience utilisateur et réaliser des
              statistiques de visite.
            </p>
            <p>
              <strong>Types de cookies utilisés :</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Cookies nécessaires :</strong> Ces cookies sont indispensables au
                fonctionnement du site et ne peuvent être désactivés.
              </li>
              <li>
                <strong>Cookies analytiques :</strong> Ces cookies nous permettent de mesurer
                l&apos;audience du site (Google Analytics avec anonymisation IP).
              </li>
            </ul>
            <p>
              Vous pouvez à tout moment modifier vos préférences de cookies via la bannière
              affichée lors de votre première visite ou en supprimant les cookies de votre
              navigateur.
            </p>

            {/* Données personnelles */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              7. Données personnelles
            </h2>
            <p>
              Les informations recueillies sur ce site font l&apos;objet d&apos;un traitement informatique
              destiné à répondre à vos demandes de contact.
            </p>
            <p>
              Pour plus d&apos;informations sur le traitement de vos données personnelles et l&apos;exercice
              de vos droits, consultez notre{' '}
              <Link href="/politique-confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </Link>
              .
            </p>

            {/* Droit applicable */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              8. Droit applicable et juridiction compétente
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige
              relatif à l&apos;utilisation du site, les tribunaux français seront seuls compétents.
            </p>

            {/* Médiation */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              9. Médiation de la consommation
            </h2>
            <p>
              Conformément aux articles L.611-1 et R.616-1 du Code de la consommation, il est prévu
              un dispositif de médiation de la consommation.
            </p>
            <p>
              Le médiateur de la consommation pour la profession d&apos;avocat est :
            </p>
            <div className="rounded-lg bg-gray-50 p-6 not-prose">
              <p className="mb-2">
                <strong>Médiateur de la consommation des avocats</strong>
              </p>
              <p className="mb-2">180 Boulevard Haussmann</p>
              <p className="mb-2">75008 Paris</p>
              <p className="mb-2">
                Site internet :{' '}
                <a
                  href="https://mediateur-consommation-avocat.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mediateur-consommation-avocat.fr
                </a>
              </p>
            </div>
            <p>
              Le recours au médiateur est gratuit. La saisine du médiateur ne peut intervenir
              qu&apos;après une tentative préalable de résolution directe du litige avec le cabinet.
            </p>

            {/* Crédit */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              10. Crédits
            </h2>
            <p>
              Conception et développement : [Nom de l&apos;agence web]
            </p>
            <p>
              Icônes : Lucide Icons
            </p>
            <p>
              Polices : Google Fonts (Inter, Playfair Display)
            </p>

            {/* Date de mise à jour */}
            <div className="mt-12 border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
