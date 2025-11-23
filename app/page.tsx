import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import DomainesSection from '@/components/sections/DomainesSection'
import ChiffresCles from '@/components/sections/ChiffresCles'
import Engagements from '@/components/sections/Engagements'
import InfoPratiques from '@/components/sections/InfoPratiques'
import CallToAction from '@/components/sections/CallToAction'
import { cabinetInfo } from '@/lib/data/config'

export const metadata: Metadata = {
  title: 'Accueil',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Votre defense juridique a Paris"
        subtitle="Cabinet d'avocat"
        description={`${cabinetInfo.lawyerFirstName} ${cabinetInfo.lawyerName}, avocat au ${cabinetInfo.barreauName}, vous accompagne dans toutes vos demarches juridiques avec professionnalisme et confidentialite.`}
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
