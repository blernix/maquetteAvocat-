'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail } from 'lucide-react'
import { cabinetInfo } from '@/lib/data/config'

export type ProspectField =
  | 'nom'
  | 'ville'
  | 'prenom'
  | 'email'
  | 'adresse'
  | 'code_postal'

export interface ProspectIdentity {
  nom: string | null
  ville: string | null
  prenom: string | null
  email: string | null
  adresse: string | null
  code_postal: string | null
  /** Vrai dès qu'au moins un paramètre reconnu est fourni dans l'URL. */
  active: boolean
}

const EMPTY_IDENTITY: ProspectIdentity = {
  nom: null,
  ville: null,
  prenom: null,
  email: null,
  adresse: null,
  code_postal: null,
  active: false,
}

const ProspectContext = createContext<ProspectIdentity>(EMPTY_IDENTITY)

const MAX_LENGTH = 60

function sanitize(value: string | null): string | null {
  if (value === null) return null
  const trimmed = value.trim()
  if (!trimmed) return null
  return trimmed.slice(0, MAX_LENGTH)
}

function replaceAll(input: string, search: string, replacement: string): string {
  if (!search) return input
  return input.split(search).join(replacement)
}

function personalizeDocumentText(
  text: string,
  identity: ProspectIdentity
): string {
  let result = text

  if (identity.nom) {
    result = replaceAll(result, cabinetInfo.name, identity.nom)
    result = replaceAll(
      result,
      `${cabinetInfo.lawyerFirstName} ${cabinetInfo.lawyerName}`,
      identity.nom
    )
  }

  if (identity.ville) {
    result = replaceAll(result, cabinetInfo.address.city, identity.ville)
  }

  return result
}

const META_SELECTORS = [
  'meta[name="description"]',
  'meta[name="author"]',
  'meta[name="keywords"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
]

export function useProspectIdentity(): ProspectIdentity {
  return useContext(ProspectContext)
}

export function ProspectPersonalization({
  children,
}: {
  children: ReactNode
}) {
  const [identity, setIdentity] = useState<ProspectIdentity>(EMPTY_IDENTITY)
  const pathname = usePathname()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const next = {
      nom: sanitize(params.get('nom')),
      ville: sanitize(params.get('ville')),
      prenom: sanitize(params.get('prenom')),
      email: sanitize(params.get('email')),
      adresse: sanitize(params.get('adresse')),
      code_postal: sanitize(params.get('code_postal')),
    }

    const active = Object.values(next).some((value) => value !== null)
    if (!active) return

    setIdentity({ ...next, active: true })
  }, [])

  useEffect(() => {
    if (!identity.active) return

    const apply = () => {
      const nextTitle = personalizeDocumentText(document.title, identity)
      if (document.title !== nextTitle) {
        document.title = nextTitle
      }

      META_SELECTORS.forEach((selector) => {
        const element = document.querySelector(selector)
        const content = element?.getAttribute('content')
        if (!element || !content) return
        const nextContent = personalizeDocumentText(content, identity)
        if (content !== nextContent) {
          element.setAttribute('content', nextContent)
        }
      })
    }

    apply()

    // Next.js réinjecte par moments le <title> et les meta par défaut après
    // l'hydratation : on réapplique (opération idempotente) tant que le head
    // change.
    const observer = new MutationObserver(apply)
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
    })
    const frame = window.requestAnimationFrame(apply)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [identity, pathname])

  return (
    <ProspectContext.Provider value={identity}>
      {children}
    </ProspectContext.Provider>
  )
}

export function ProspectText({
  field,
  fallback,
  prefix = '',
  suffix = '',
}: {
  field: ProspectField
  fallback: string
  prefix?: string
  suffix?: string
}) {
  const identity = useProspectIdentity()
  const value = identity[field]

  return (
    <>
      {prefix}
      {value ?? fallback}
      {suffix}
    </>
  )
}

/**
 * Adresse email du prospect.
 *
 * - `?email=` fourni : l'adresse est affichée et cliquable (mailto).
 * - Aucun `?email=` mais page personnalisée : libellé neutre « Nous écrire »
 *   pointant vers le formulaire de contact, jamais une adresse inventée.
 * - Aucun paramètre : adresse de démonstration d'origine, contenu intact.
 */
export function ProspectEmail({
  className,
  withIcon = false,
  iconClassName,
}: {
  className?: string
  withIcon?: boolean
  iconClassName?: string
}) {
  const identity = useProspectIdentity()
  const icon = withIcon ? (
    <Mail className={iconClassName} aria-hidden="true" />
  ) : null

  if (identity.email) {
    return (
      <a
        href={`mailto:${identity.email}`}
        className={className}
        data-prospect-email=""
      >
        {icon}
        {identity.email}
      </a>
    )
  }

  if (identity.active) {
    return (
      <Link href="/contact" className={className} data-prospect-email="neutral">
        {icon}
        Nous écrire
      </Link>
    )
  }

  return (
    <a
      href={`mailto:${cabinetInfo.contact.email}`}
      className={className}
      data-prospect-email="fallback"
    >
      {icon}
      {cabinetInfo.contact.email}
    </a>
  )
}
