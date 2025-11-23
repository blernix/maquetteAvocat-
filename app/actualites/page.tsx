import type { Metadata } from 'next'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import { articles } from '@/lib/data/articles'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Suivez l\'actualité juridique : réformes, jurisprudence, conseils pratiques en droit de la famille, droit pénal et droit du travail.',
}

export default function ActualitesPage() {
  // Trier les articles par date (plus récent en premier)
  const sortedArticles = [...articles].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Actualités juridiques
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-200">
            Suivez les dernières évolutions législatives, jurisprudentielles et nos conseils
            pratiques
          </p>
        </div>
      </section>

      {/* Liste des articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedArticles.map((article) => (
              <Card key={article.slug} hover className="flex flex-col">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                    {article.category}
                  </span>
                </div>
                <h2 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                  {article.title}
                </h2>
                <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <p className="mb-4 flex-1 text-gray-600">
                  {article.excerpt}
                </p>
                <Link
                  href={`/actualites/${article.slug}`}
                  className="inline-flex items-center font-medium text-primary transition-colors hover:text-primary-dark"
                >
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Card>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600">
                Aucun article pour le moment. Revenez bientôt pour découvrir nos actualités
                juridiques.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center shadow-md">
            <h2 className="mb-4 font-serif text-2xl font-bold text-gray-900">
              Besoin d&apos;un conseil personnalisé ?
            </h2>
            <p className="mb-6 text-gray-600">
              Les informations générales ne remplacent pas un conseil juridique adapté à votre
              situation. N&apos;hésitez pas à nous contacter.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
