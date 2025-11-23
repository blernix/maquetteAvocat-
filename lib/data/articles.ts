import { Article } from '@/lib/types'

export const articles: Article[] = [
  {
    slug: 'reforme-divorce-2024',
    title: 'Réforme du divorce : les changements en 2024',
    date: '2024-03-15',
    excerpt: 'La loi du 18 novembre 2023 apporte des modifications importantes en matière de divorce. Découvrez les principaux changements qui entreront en vigueur cette année.',
    category: 'Droit de la Famille',
    content: `La récente réforme du divorce introduit plusieurs modifications substantielles dans les procédures de divorce en France.

## Les principaux changements

### 1. Simplification du divorce par consentement mutuel

La procédure de divorce par consentement mutuel a été encore simplifiée. Le délai de réflexion minimal est désormais réduit, permettant aux époux de finaliser leur divorce plus rapidement.

### 2. Modifications concernant la prestation compensatoire

Les règles de calcul et de versement de la prestation compensatoire ont été clarifiées. La jurisprudence récente précise notamment les critères pris en compte par les juges.

### 3. Évolution de la garde des enfants

Le principe de coparentalité est renforcé, avec une présomption en faveur de la garde alternée lorsque les deux parents en font la demande et que l'intérêt de l'enfant le permet.

## Impact pratique

Ces réformes visent à accélérer les procédures tout en préservant les droits de chaque partie. Il est recommandé de consulter un avocat pour comprendre comment ces changements s'appliquent à votre situation personnelle.

## Conclusion

Cette réforme s'inscrit dans une volonté de modernisation du droit de la famille et d'adaptation aux réalités contemporaines des couples et des familles.`
  },
  {
    slug: 'harcelement-travail-preuve',
    title: 'Harcèlement au travail : constituer son dossier de preuves',
    date: '2024-02-20',
    excerpt: 'Le harcèlement moral au travail est difficile à prouver. Voici les éléments à rassembler pour constituer un dossier solide.',
    category: 'Droit du Travail',
    content: `Le harcèlement moral au travail est une réalité que subissent de nombreux salariés. Constituer un dossier de preuves solide est essentiel pour faire valoir vos droits.

## Qu'est-ce que le harcèlement moral ?

Le Code du travail définit le harcèlement moral comme des agissements répétés qui ont pour objet ou pour effet une dégradation des conditions de travail susceptible de porter atteinte aux droits et à la dignité du salarié, d'altérer sa santé physique ou mentale ou de compromettre son avenir professionnel.

## Les preuves à rassembler

### 1. Documents écrits

- Emails, SMS, courriers montrant des remarques déplacées ou humiliantes
- Notes de service discriminatoires
- Avertissements injustifiés
- Modifications unilatérales de vos conditions de travail

### 2. Témoignages

Les attestations de collègues ayant été témoins des faits sont précieuses. Elles doivent être précises, datées et signées.

### 3. Preuves médicales

- Certificats médicaux mentionnant un état anxieux ou dépressif en lien avec le travail
- Arrêts de travail
- Suivi psychologique

### 4. Main courante ou plainte

Un dépôt de main courante ou de plainte peut constituer un élément de preuve supplémentaire.

## Conseils pratiques

- Tenez un journal détaillé des faits de harcèlement (dates, heures, témoins, nature des faits)
- Conservez tous les documents et échanges
- Alertez votre employeur par écrit (LRAR)
- Contactez les représentants du personnel ou la médecine du travail
- Consultez un avocat spécialisé en droit du travail

## Conclusion

La charge de la preuve est aménagée en matière de harcèlement : le salarié doit présenter des éléments laissant supposer l'existence d'un harcèlement, puis l'employeur doit prouver que ces faits ne constituent pas un harcèlement. Un avocat vous aidera à constituer un dossier probant.`
  },
  {
    slug: 'garde-vue-droits',
    title: 'Garde à vue : vos droits et le rôle de l\'avocat',
    date: '2024-01-10',
    excerpt: 'Être placé en garde à vue est une situation stressante. Connaître vos droits et le rôle de l\'avocat est essentiel.',
    category: 'Droit Pénal',
    content: `La garde à vue est une mesure de contrainte qui permet aux forces de l'ordre de retenir une personne soupçonnée d'avoir commis ou tenté de commettre une infraction. Comprendre vos droits est fondamental.

## Vos droits pendant la garde à vue

### 1. Droit d'être informé

Dès le début de la garde à vue, vous devez être informé :
- De la nature de l'infraction suspectée
- De votre droit de faire prévenir un proche
- De votre droit à un examen médical
- De votre droit à l'assistance d'un avocat
- De votre droit de se taire

### 2. Droit à l'assistance d'un avocat

C'est un droit fondamental. L'avocat intervient dès le début de la garde à vue et peut :
- S'entretenir confidentiellement avec vous (30 minutes)
- Consulter certaines pièces du dossier
- Assister aux interrogatoires et confrontations
- Formuler des observations

### 3. Droit de se taire

Vous n'êtes pas obligé de répondre aux questions. Ce silence ne peut pas être interprété comme un aveu de culpabilité.

## Le rôle de l'avocat

### Avant l'interrogatoire

L'avocat s'entretient avec vous pour :
- Comprendre votre situation
- Vous expliquer vos droits
- Vous conseiller sur l'attitude à adopter

### Pendant les interrogatoires

L'avocat :
- Veille au respect de vos droits
- Peut demander des pauses si nécessaire
- Formule des observations consignées au procès-verbal
- Peut demander des actes d'investigation (audition de témoins, expertise, etc.)

### À la fin de la garde à vue

L'avocat peut :
- Demander votre libération
- En cas de prolongation, s'opposer devant le JLD (Juge des Libertés et de la Détention)
- Vous conseiller sur les suites de la procédure

## Conseils pratiques

- Demandez systématiquement l'assistance d'un avocat
- Si vous n'en connaissez pas, un avocat de permanence sera désigné gratuitement
- Restez calme et courtois
- Ne signez rien sans avoir lu attentivement
- Écoutez les conseils de votre avocat

## Conclusion

La garde à vue est une procédure encadrée par la loi. L'assistance d'un avocat est un droit fondamental qui vous permet de vous défendre efficacement. Notre cabinet assure une permanence 24h/24 pour vous assister en garde à vue.`
  }
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}
