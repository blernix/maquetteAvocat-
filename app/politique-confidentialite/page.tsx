import type { Metadata } from 'next'
import { cabinetInfo } from '@/lib/data/config'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles - RGPD',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Protection de vos données personnelles - RGPD
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose prose-lg mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="rounded-lg bg-secondary/10 p-6 not-prose mb-8">
              <p className="text-gray-700">
                Le {cabinetInfo.name} attache une importance particulière à la protection de vos
                données personnelles. La présente politique vous informe de la manière dont nous
                collectons, utilisons et protégeons vos informations conformément au Règlement
                Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </div>

            {/* Responsable du traitement */}
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              1. Responsable du traitement des données
            </h2>
            <p>
              Le responsable du traitement de vos données personnelles est :
            </p>
            <div className="rounded-lg bg-gray-50 p-6 not-prose">
              <p className="mb-2"><strong>{cabinetInfo.name}</strong></p>
              <p className="mb-2">
                Représenté par {cabinetInfo.lawyerFirstName} {cabinetInfo.lawyerName}
              </p>
              <p className="mb-2">
                {cabinetInfo.address.street}<br />
                {cabinetInfo.address.postalCode} {cabinetInfo.address.city}
              </p>
              <p className="mb-2">Email : {cabinetInfo.contact.email}</p>
              <p className="mb-2">Téléphone : {cabinetInfo.contact.phone}</p>
            </div>

            {/* Données collectées */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              2. Données personnelles collectées
            </h2>
            <p>
              Nous collectons les données personnelles suivantes :
            </p>
            <h3 className="font-serif text-xl font-semibold text-gray-900 mt-6">
              2.1 Via le formulaire de contact
            </h3>
            <ul className="list-disc pl-6">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Objet de la demande</li>
              <li>Message</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold text-gray-900 mt-6">
              2.2 Via les cookies
            </h3>
            <ul className="list-disc pl-6">
              <li>Données de navigation (pages visitées, durée de visite)</li>
              <li>Adresse IP anonymisée</li>
              <li>Type de navigateur et système d&apos;exploitation</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold text-gray-900 mt-6">
              2.3 Dans le cadre de la relation client
            </h3>
            <p>
              Si vous devenez client du cabinet, d&apos;autres données pourront être collectées dans le
              cadre de la gestion de votre dossier (pièces d&apos;identité, justificatifs, documents
              juridiques, etc.).
            </p>

            {/* Finalités */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              3. Finalités du traitement
            </h2>
            <p>
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6">
              <li>Répondre à vos demandes d&apos;information via le formulaire de contact</li>
              <li>Gérer la relation client et les dossiers juridiques</li>
              <li>Respecter nos obligations légales et déontologiques</li>
              <li>Améliorer le fonctionnement du site (statistiques anonymisées)</li>
              <li>
                Vous envoyer des informations sur l&apos;actualité juridique (uniquement si vous avez
                donné votre consentement)
              </li>
            </ul>

            {/* Base légale */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              4. Base légale du traitement
            </h2>
            <p>
              Le traitement de vos données repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Consentement :</strong> Pour l&apos;envoi de notre newsletter et l&apos;utilisation
                de cookies analytiques
              </li>
              <li>
                <strong>Exécution d&apos;un contrat :</strong> Pour la gestion de votre dossier si vous
                êtes client
              </li>
              <li>
                <strong>Obligation légale :</strong> Pour le respect de nos obligations
                déontologiques et légales en tant qu&apos;avocat
              </li>
              <li>
                <strong>Intérêt légitime :</strong> Pour répondre à vos demandes de contact et
                améliorer notre site
              </li>
            </ul>

            {/* Durée de conservation */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              5. Durée de conservation des données
            </h2>
            <div className="rounded-lg bg-yellow-50 border-l-4 border-yellow-400 p-6 not-prose">
              <p className="font-semibold text-gray-900 mb-2">
                ⚠️ Durée de conservation spécifique à la profession d&apos;avocat
              </p>
              <p className="text-gray-700">
                En raison des obligations déontologiques et du délai de prescription spécifique à
                la profession d&apos;avocat, vos données personnelles sont conservées pendant une durée
                de <strong className="text-yellow-800">20 ANS</strong> à compter de la fin de notre
                relation ou de votre dernière interaction avec le cabinet.
              </p>
            </div>

            <p className="mt-6">
              Cette durée exceptionnellement longue se justifie par :
            </p>
            <ul className="list-disc pl-6">
              <li>
                Le délai de prescription des actions en responsabilité contre un avocat (20 ans)
              </li>
              <li>L&apos;obligation déontologique de conservation des dossiers</li>
              <li>La nécessité de pouvoir justifier des diligences accomplies</li>
            </ul>

            <p>
              <strong>Cas particuliers :</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>
                Formulaire de contact sans suite : 3 ans à compter de la demande
              </li>
              <li>
                Cookies analytiques : 13 mois maximum
              </li>
              <li>
                Newsletter : jusqu&apos;à votre désinscription
              </li>
            </ul>

            {/* Destinataires */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              6. Destinataires des données
            </h2>
            <p>
              Vos données personnelles sont destinées :
            </p>
            <ul className="list-disc pl-6">
              <li>Aux membres du cabinet habilités à traiter votre dossier</li>
              <li>
                Aux prestataires techniques assurant la maintenance du site (hébergeur, service
                d&apos;emailing)
              </li>
              <li>
                Aux autorités compétentes sur réquisition judiciaire ou dans le cadre de nos
                obligations légales
              </li>
            </ul>
            <p>
              Vos données ne sont <strong>jamais vendues ou louées</strong> à des tiers à des fins
              commerciales.
            </p>

            {/* Droits */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              7. Vos droits
            </h2>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits
              suivants concernant vos données personnelles :
            </p>

            <div className="grid gap-4 md:grid-cols-2 not-prose mt-6">
              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Droit d&apos;accès</h4>
                <p className="text-sm text-gray-600">
                  Obtenir la confirmation que vos données sont traitées et en obtenir une copie
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Droit de rectification</h4>
                <p className="text-sm text-gray-600">
                  Corriger vos données inexactes ou incomplètes
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Droit à l&apos;effacement</h4>
                <p className="text-sm text-gray-600">
                  Demander la suppression de vos données (sauf obligations légales de conservation)
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Droit à la limitation</h4>
                <p className="text-sm text-gray-600">
                  Limiter le traitement de vos données dans certains cas
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Droit d&apos;opposition</h4>
                <p className="text-sm text-gray-600">
                  Vous opposer au traitement de vos données pour des raisons légitimes
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Droit à la portabilité</h4>
                <p className="text-sm text-gray-600">
                  Recevoir vos données dans un format structuré et les transférer à un autre
                  responsable
                </p>
              </div>
            </div>

            <p className="mt-6">
              <strong>Comment exercer vos droits ?</strong>
            </p>
            <p>
              Pour exercer vos droits, vous pouvez nous contacter :
            </p>
            <ul className="list-disc pl-6">
              <li>Par email : {cabinetInfo.contact.email}</li>
              <li>Par courrier postal : {cabinetInfo.address.street}, {cabinetInfo.address.postalCode} {cabinetInfo.address.city}</li>
            </ul>
            <p>
              Nous vous répondrons dans un délai maximum d&apos;<strong>un mois</strong> à compter de la
              réception de votre demande. Une copie de votre pièce d&apos;identité pourra vous être
              demandée pour vérifier votre identité.
            </p>

            {/* Sécurité */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              8. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées
              pour protéger vos données personnelles contre la destruction, la perte, l&apos;altération,
              la divulgation non autorisée ou l&apos;accès non autorisé :
            </p>
            <ul className="list-disc pl-6">
              <li>Chiffrement SSL/TLS des données en transit (HTTPS)</li>
              <li>Hébergement sécurisé des données</li>
              <li>Accès restreint aux données (authentification)</li>
              <li>Sauvegardes régulières</li>
              <li>Sensibilisation du personnel au RGPD</li>
            </ul>

            {/* Transfert hors UE */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              9. Transfert de données hors Union Européenne
            </h2>
            <p>
              Vos données personnelles sont hébergées et traitées exclusivement au sein de l&apos;Union
              Européenne. Aucun transfert de données vers des pays tiers n&apos;est effectué.
            </p>

            {/* Réclamation */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              10. Droit de réclamation
            </h2>
            <p>
              Si vous estimez que le traitement de vos données personnelles constitue une violation
              du RGPD, vous avez le droit d&apos;introduire une réclamation auprès de la Commission
              Nationale de l&apos;Informatique et des Libertés (CNIL) :
            </p>
            <div className="rounded-lg bg-gray-50 p-6 not-prose">
              <p className="mb-2"><strong>CNIL</strong></p>
              <p className="mb-2">3 Place de Fontenoy</p>
              <p className="mb-2">TSA 80715</p>
              <p className="mb-2">75334 Paris Cedex 07</p>
              <p className="mb-2">Téléphone : 01 53 73 22 22</p>
              <p className="mb-2">
                Site internet :{' '}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>

            {/* Cookies */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              11. Cookies
            </h2>
            <p>
              Le site utilise des cookies. Pour plus d&apos;informations, veuillez consulter notre
              section dédiée dans les Mentions légales ou gérer vos préférences via la bannière de
              cookies.
            </p>

            {/* Modification */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              12. Modification de la politique de confidentialité
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout
              moment. Toute modification sera publiée sur cette page avec une nouvelle date de mise
              à jour.
            </p>

            {/* Contact */}
            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
              13. Contact
            </h2>
            <p>
              Pour toute question relative à cette politique de confidentialité ou au traitement de
              vos données personnelles, vous pouvez nous contacter :
            </p>
            <ul className="list-disc pl-6">
              <li>Email : {cabinetInfo.contact.email}</li>
              <li>Téléphone : {cabinetInfo.contact.phone}</li>
              <li>Courrier : {cabinetInfo.address.street}, {cabinetInfo.address.postalCode} {cabinetInfo.address.city}</li>
            </ul>

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
