import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'
import SchemaOrg from '@/components/layout/SchemaOrg'
import { siteMetadata } from '@/lib/data/config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: ['avocat', 'Paris', 'droit de la famille', 'droit pénal', 'droit du travail', 'conseil juridique'],
  authors: [{ name: 'Cabinet Moreau & Associés' }],
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    url: siteMetadata.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/* Skip link pour l'accessibilité */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <CookieBanner />
        <SchemaOrg />
      </body>
    </html>
  )
}
