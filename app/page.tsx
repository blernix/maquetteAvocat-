import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import DomainesSection from '@/components/sections/DomainesSection'
import ChiffresCles from '@/components/sections/ChiffresCles'
import Engagements from '@/components/sections/Engagements'
import InfoPratiques from '@/components/sections/InfoPratiques'
import CallToAction from '@/components/sections/CallToAction'
import { ProspectText } from '@/components/ProspectPersonalization'
import { cabinetInfo } from '@/lib/data/config'

export const metadata: Metadata = {
  title: 'Accueil',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={
          <>
            Votre defense juridique a{' '}
            <ProspectText field="ville" fallback={cabinetInfo.address.city} />
          </>
        }
        subtitle="Cabinet d'avocat"
        description={
          <>
            <ProspectText
              field="nom"
              fallback={`${cabinetInfo.lawyerFirstName} ${cabinetInfo.lawyerName}`}
            />
            , avocat au{' '}
            <ProspectText
              field="ville"
              prefix="Barreau de "
              fallback={cabinetInfo.address.city}
            />
            , vous accompagne dans toutes vos demarches juridiques avec professionnalisme et
            confidentialite.
          </>
        }
        ctaText="Prendre rendez-vous"
        ctaLink="/contact"
      />

      {/* Chiffres cles */}
      <ChiffresCles />

      {/* Domaines d'intervention */}
      <DomainesSection />

      {/* Engagements */}
      <Engagements />

      {/* Informations pratiques */}
      <InfoPratiques />

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}
