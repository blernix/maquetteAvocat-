'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { usePathname } from 'next/navigation'
import { cabinetInfo } from '@/lib/data/config'

export type ProspectField = 'nom' | 'ville' | 'prenom'

export interface ProspectIdentity {
  nom: string | null
  ville: string | null
  prenom: string | null
}

const EMPTY_IDENTITY: ProspectIdentity = {
  nom: null,
  ville: null,
  prenom: null,
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
    const next: ProspectIdentity = {
      nom: sanitize(params.get('nom')),
      ville: sanitize(params.get('ville')),
      prenom: sanitize(params.get('prenom')),
    }

    if (!next.nom && !next.ville && !next.prenom) return

    setIdentity(next)
  }, [])

  useEffect(() => {
    if (!identity.nom && !identity.ville) return

    document.title = personalizeDocumentText(document.title, identity)

    const description = document.querySelector('meta[name="description"]')
    const content = description?.getAttribute('content')
    if (description && content) {
      description.setAttribute(
        'content',
        personalizeDocumentText(content, identity)
      )
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
