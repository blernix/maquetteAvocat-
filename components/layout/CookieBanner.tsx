'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setShowBanner(false)
    // Ici, vous activeriez normalement Google Analytics ou autres trackers
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary')
    setShowBanner(false)
  }

  // Ne rien afficher côté serveur pour éviter les erreurs d'hydratation
  if (!mounted || !showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl"
      role="dialog"
      aria-label="Bannière de consentement aux cookies"
      aria-describedby="cookie-description"
    >
      <div className="container-custom py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h2 className="mb-2 font-serif text-lg font-semibold text-gray-900">
              Gestion des cookies
            </h2>
            <p id="cookie-description" className="text-sm text-gray-600">
              Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser
              l&apos;utilisation du site. En cliquant sur &quot;Tout accepter&quot;, vous consentez à
              l&apos;utilisation de TOUS les cookies. Vous pouvez également n&apos;accepter que les cookies
              nécessaires au fonctionnement du site.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Pour en savoir plus, consultez notre{' '}
              <a
                href="/politique-confidentialite"
                className="text-primary underline hover:text-primary-dark"
              >
                Politique de confidentialité
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="outline"
              size="sm"
              onClick={acceptNecessary}
              className="whitespace-nowrap"
            >
              Cookies nécessaires uniquement
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={acceptAll}
              className="whitespace-nowrap"
            >
              Tout accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
