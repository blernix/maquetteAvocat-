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
import { Mail, Phone } from 'lucide-react'
import { cabinetInfo } from '@/lib/data/config'
import {
  EMPTY_PROSPECT_IDENTITY,
  resolveProspectContact,
  type ProspectContact,
  type ProspectField,
  type ProspectIdentity,
} from '@/lib/prospect-contact'

export type {
  ProspectContact,
  ProspectField,
  ProspectIdentity,
} from '@/lib/prospect-contact'

const EMPTY_IDENTITY: ProspectIdentity = EMPTY_PROSPECT_IDENTITY

export function useProspectContact(): ProspectContact {
  return resolveProspectContact(useProspectIdentity(), {
    street: cabinetInfo.address.street,
    postalCode: cabinetInfo.address.postalCode,
    city: cabinetInfo.address.city,
    phone: cabinetInfo.contact.phone,
  })
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

function stripAccents(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function startsWithIgnoringCaseAndAccents(
  value: string,
  prefix: string
): boolean {
  return stripAccents(value)
    .toLowerCase()
    .startsWith(stripAccents(prefix).toLowerCase())
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
      code_postal: sanitize(params.get('cp') ?? params.get('code_postal')),
      tel: sanitize(params.get('tel')),
      acces: sanitize(params.get('acces')),
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
 * Nom personnel du praticien, déduit de `?nom=` et `?prenom=`.
 *
 * Rend uniquement du texte (jamais de HTML injecté), tronqué à 60 caractères.
 * Aucun `?nom=` → rien n'est rendu (bloc masqué, jamais de valeur inventée).
 * Le préfixe « Cabinet » éventuel est retiré, puis le prénom est ajouté
 * seulement s'il n'est pas déjà présent (comparaison sans casse ni accents).
 */
export function ProspectPractitionerName({
  className,
}: {
  className?: string
}) {
  const { nom, prenom } = useProspectIdentity()
  if (!nom) return null

  let base = nom
  if (startsWithIgnoringCaseAndAccents(base, 'Cabinet ')) {
    base = base.slice('Cabinet '.length).trim()
  }

  if (prenom && !startsWithIgnoringCaseAndAccents(base, prenom)) {
    base = `${prenom} ${base}`
  }

  const value = `Maître ${base}`.slice(0, MAX_LENGTH)

  return (
    <span className={className} data-prospect-practitioner="">
      {value}
    </span>
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

/**
 * Adresse postale (bloc multi-lignes). Masquée si aucune adresse ni ville
 * exploitable n'est disponible sur une page personnalisée.
 */
export function ProspectAddress({ className }: { className?: string }) {
  const { showAddress, addressLines } = useProspectContact()
  if (!showAddress) return null

  return (
    <address className={className} data-prospect-address="">
      {addressLines.map((line, index) => (
        <span key={line}>
          {index > 0 && <br />}
          {line}
        </span>
      ))}
    </address>
  )
}

/**
 * Affiche `children` uniquement si une adresse (ou une ville seule) est
 * disponible. Pratique pour masquer aussi l'icône associée.
 */
export function IfProspectAddress({ children }: { children: ReactNode }) {
  const { showAddress } = useProspectContact()
  if (!showAddress) return null
  return <>{children}</>
}

/**
 * Affiche `children` uniquement si un numéro de téléphone est disponible.
 */
export function IfProspectPhone({ children }: { children: ReactNode }) {
  const { phone } = useProspectContact()
  if (!phone) return null
  return <>{children}</>
}

/**
 * Affiche `children` uniquement sur la version d'origine (aucun paramètre).
 * Sert à réserver certaines mentions de démonstration (fax, accès parisien…).
 */
export function IfNoProspect({ children }: { children: ReactNode }) {
  const { active } = useProspectContact()
  if (active) return null
  return <>{children}</>
}

/**
 * Affiche `children` uniquement sur une page personnalisée (au moins un
 * paramètre d'URL reconnu).
 */
export function IfActive({ children }: { children: ReactNode }) {
  const { active } = useProspectContact()
  if (!active) return null
  return <>{children}</>
}

/**
 * Ligne « Accès » issue du paramètre `?acces=`. Rien si absent.
 */
export function ProspectAcces({ className }: { className?: string }) {
  const { acces } = useProspectContact()
  if (!acces) return null
  return <p className={className} data-prospect-acces="">{acces}</p>
}

/**
 * Affiche `children` uniquement si un accès (métro / bus / parking) est fourni
 * sur une page personnalisée. Sert à masquer tout le bloc « Accès » plutôt que
 * de laisser un titre orphelin.
 */
export function IfProspectAcces({ children }: { children: ReactNode }) {
  const { acces } = useProspectContact()
  if (!acces) return null
  return <>{children}</>
}

/**
 * Adresse sur une seule ligne (« 12 rue X, 31000 Toulouse » ou « Lyon »).
 * Rend `null` si rien n'est disponible.
 */
export function ProspectAddressInline() {
  const { showAddress, addressOneLine } = useProspectContact()
  if (!showAddress || !addressOneLine) return null
  return <>{addressOneLine}</>
}

/**
 * Numéro de téléphone cliquable. Masqué si aucun numéro n'est disponible.
 */
export function ProspectPhone({
  className,
  withIcon = false,
  iconClassName,
}: {
  className?: string
  withIcon?: boolean
  iconClassName?: string
}) {
  const { phone, phoneHref } = useProspectContact()
  if (!phone || !phoneHref) return null

  const icon = withIcon ? (
    <Phone className={iconClassName} aria-hidden="true" />
  ) : null

  return (
    <a href={phoneHref} className={className} data-prospect-phone="">
      {icon}
      {phone}
    </a>
  )
}

/**
 * Ligne « Téléphone : … » (libellé inclus). Rien n'est rendu si le numéro est
 * absent, afin de ne pas laisser un libellé orphelin.
 */
export function ProspectPhoneLine({
  label = 'Téléphone :',
  className,
}: {
  label?: string
  className?: string
}) {
  const { phone, phoneHref } = useProspectContact()
  if (!phone) return null

  return (
    <span className={className}>
      <strong>{label}</strong>{' '}
      {phoneHref ? <a href={phoneHref}>{phone}</a> : phone}
    </span>
  )
}

/**
 * Lien d'itinéraire Google Maps déduit de l'adresse affichée. Rend `null` si
 * aucune localisation n'est connue.
 */
export function ProspectMapLink({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  const { mapHref } = useProspectContact()
  if (!mapHref) return null

  return (
    <a
      href={mapHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-prospect-map=""
    >
      {children}
    </a>
  )
}
