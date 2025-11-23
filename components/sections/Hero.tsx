import Link from 'next/link'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle?: string
  description: string
  ctaText?: string
  ctaLink?: string
  imageSrc?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Nous contacter',
  ctaLink = '/contact',
  imageSrc
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 text-white md:py-32">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Contenu */}
          <div className="space-y-6">
            {subtitle && (
              <p className="text-secondary-light font-medium uppercase tracking-wide">
                {subtitle}
              </p>
            )}
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-lg text-gray-200 md:text-xl">
              {description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={ctaLink}>
                <Button variant="secondary" size="lg" className="group">
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image (optionnelle) */}
          {imageSrc && (
            <div className="hidden lg:block">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={imageSrc}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Décoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
