import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { articles, getArticleBySlug } from '@/lib/data/articles'
import { Calendar, ArrowLeft } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  // Convertir les paragraphes en HTML simple
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Si c'est un titre (commence par ##)
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="mb-4 mt-8 font-serif text-2xl font-bold text-gray-900">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }
      // Si c'est un sous-titre (commence par ###)
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="mb-3 mt-6 font-serif text-xl font-semibold text-gray-900">
            {paragraph.replace('### ', '')}
          </h3>
        )
      }
      // Sinon c'est un paragraphe normal
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <div className="mb-4">
            <Link
              href="/actualites"
              className="inline-flex items-center text-gray-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Retour aux actualités
            </Link>
          </div>
          <div className="mb-4">
            <span className="inline-block rounded-full bg-secondary px-4 py-1 text-sm font-medium text-white">
              {article.category}
            </span>
          </div>
          <h1 className="mb-4 max-w-4xl font-serif text-4xl font-bold md:text-5xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-200">
            <Calendar className="h-5 w-5" aria-hidden="true" />
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Chapô */}
            <div className="mb-8 rounded-lg border-l-4 border-secondary bg-secondary/5 p-6">
              <p className="text-lg font-medium text-gray-700">
                {article.excerpt}
              </p>
            </div>

            {/* Contenu */}
            <div className="prose prose-lg max-w-none">
              {renderContent(article.content)}
            </div>

            {/* Disclaimer */}
            <div className="mt-12 rounded-lg bg-yellow-50 p-6">
              <p className="text-sm text-gray-700">
                <strong>Important :</strong> Les informations contenues dans cet article sont
                données à titre indicatif et ne constituent pas un conseil juridique. Chaque
                situation étant unique, nous vous recommandons de consulter un avocat pour obtenir
                un conseil personnalisé adapté à votre cas.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <h2 className="mb-4 font-serif text-2xl font-bold text-gray-900">
                Une question sur ce sujet ?
              </h2>
              <p className="mb-6 text-gray-600">
                Nos avocats sont à votre disposition pour vous conseiller
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Articles similaires */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900">
            Articles similaires
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {articles
              .filter(a => a.slug !== article.slug && a.category === article.category)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/actualites/${relatedArticle.slug}`}
                  className="group rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <h3 className="mb-2 font-serif text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary">
                    {relatedArticle.title}
                  </h3>
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={relatedArticle.date}>
                      {new Date(relatedArticle.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <p className="text-sm text-gray-600">
                    {relatedArticle.excerpt.substring(0, 120)}...
                  </p>
                </Link>
              ))}
          </div>

          {articles.filter(a => a.slug !== article.slug && a.category === article.category).length === 0 && (
            <p className="text-center text-gray-600">
              Aucun article similaire pour le moment.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
