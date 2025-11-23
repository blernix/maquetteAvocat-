'use client'

import { useState, FormEvent } from 'react'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Checkbox from '@/components/ui/Checkbox'
import Button from '@/components/ui/Button'
import { validateEmail, validatePhone, validateRequired, validateMinLength } from '@/lib/utils/validators'
import { ContactFormData } from '@/lib/types'

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    rgpdConsent: false,
    newsletterConsent: false,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const subjectOptions = [
    { value: '', label: 'Sélectionnez un sujet' },
    { value: 'famille', label: 'Droit de la Famille' },
    { value: 'penal', label: 'Droit Pénal' },
    { value: 'travail', label: 'Droit du Travail' },
    { value: 'affaires', label: 'Droit des Affaires' },
    { value: 'autre', label: 'Autre demande' },
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Effacer l'erreur quand l'utilisateur modifie le champ
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}

    if (!validateRequired(formData.firstName)) {
      newErrors.firstName = 'Le prénom est requis'
    }

    if (!validateRequired(formData.lastName)) {
      newErrors.lastName = 'Le nom est requis'
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = 'L\'email est requis'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email invalide'
    }

    if (!validateRequired(formData.phone)) {
      newErrors.phone = 'Le téléphone est requis'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide'
    }

    if (!validateRequired(formData.subject)) {
      newErrors.subject = 'Veuillez sélectionner un sujet'
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = 'Le message est requis'
    } else if (!validateMinLength(formData.message, 10)) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }

    if (!formData.rgpdConsent) {
      newErrors.rgpdConsent = 'Vous devez accepter le traitement de vos données personnelles'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulation d'envoi (en production, vous connecteriez à votre micro-service)
      // const response = await fetch('https://api.mon-serveur.fr/send-email', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-API-Key': 'MA_CLE_API'
      //   },
      //   body: JSON.stringify(formData)
      // })

      // Simulation d'un délai d'envoi
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        rgpdConsent: false,
        newsletterConsent: false,
      })

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error)
      alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      {submitSuccess && (
        <div
          className="mb-6 rounded-lg bg-green-50 p-4 text-green-800"
          role="alert"
        >
          <p className="font-medium">Message envoyé avec succès !</p>
          <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Prénom"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required
          />
          <Input
            label="Nom"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            required
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <Input
            label="Téléphone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
        </div>

        <Select
          label="Objet de la demande"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          options={subjectOptions}
          error={errors.subject}
          required
        />

        <Textarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          rows={6}
          required
        />

        <div className="space-y-4">
          <Checkbox
            name="rgpdConsent"
            checked={formData.rgpdConsent}
            onChange={handleChange}
            error={errors.rgpdConsent}
            label={
              <>
                J&apos;accepte que mes données soient utilisées pour traiter ma demande conformément à la{' '}
                <a
                  href="/politique-confidentialite"
                  className="text-primary underline hover:text-primary-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  politique de confidentialité
                </a>
                .
              </>
            }
            required
          />

          <Checkbox
            name="newsletterConsent"
            checked={formData.newsletterConsent}
            onChange={handleChange}
            label="J'accepte de recevoir des informations du cabinet (actualités juridiques, événements)."
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>

        <p className="text-xs text-gray-600">
          Les champs marqués d&apos;un astérisque (*) sont obligatoires.
        </p>
      </form>
    </div>
  )
}
