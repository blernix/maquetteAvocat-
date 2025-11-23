import { Domaine } from '@/lib/types'

export const domaines: Domaine[] = [
  {
    slug: 'droit-famille',
    title: 'Droit de la Famille',
    description: 'Accompagnement dans toutes les procédures de droit familial : divorce, garde d\'enfants, pension alimentaire, adoption.',
    icon: 'Users',
    detailedDescription: 'Le droit de la famille régit l\'ensemble des relations juridiques entre les membres d\'une même famille. Notre cabinet vous accompagne avec écoute et professionnalisme dans ces moments souvent difficiles de votre vie.',
    services: [
      'Divorce (contentieux, amiable, pour faute, pour altération définitive du lien conjugal)',
      'Séparation de corps et liquidation du régime matrimonial',
      'Garde des enfants et droit de visite',
      'Pension alimentaire et contribution à l\'entretien et à l\'éducation des enfants',
      'Adoption (simple ou plénière)',
      'Filiation et reconnaissance de paternité',
      'Succession et testament',
      'PACS et concubinage',
      'Autorité parentale et délégation',
      'Médiation familiale'
    ],
    faq: [
      {
        question: 'Quels sont les différents types de divorce ?',
        answer: 'Il existe quatre types de divorce en France : le divorce par consentement mutuel (sans juge depuis 2017), le divorce pour acceptation du principe de la rupture, le divorce pour altération définitive du lien conjugal (après 2 ans de séparation), et le divorce pour faute.'
      },
      {
        question: 'Comment est fixée la pension alimentaire ?',
        answer: 'La pension alimentaire est fixée en fonction des ressources du parent débiteur et des besoins de l\'enfant. Le juge prend en compte les revenus de chaque parent, le mode de garde, et les dépenses liées à l\'enfant (scolarité, santé, loisirs).'
      },
      {
        question: 'Combien de temps dure une procédure de divorce ?',
        answer: 'La durée varie selon le type de divorce : quelques semaines pour un divorce par consentement mutuel, de 6 mois à 2 ans pour un divorce contentieux selon la complexité du dossier et l\'encombrement du tribunal.'
      }
    ]
  },
  {
    slug: 'droit-penal',
    title: 'Droit Pénal',
    description: 'Défense pénale devant toutes les juridictions : tribunal correctionnel, cour d\'assises, comparution immédiate.',
    icon: 'Scale',
    detailedDescription: 'Le droit pénal protège l\'ordre public en sanctionnant les comportements constitutifs d\'infractions. Notre cabinet assure votre défense à tous les stades de la procédure pénale, de la garde à vue au procès.',
    services: [
      'Assistance en garde à vue (24h/24, 7j/7)',
      'Défense devant le tribunal correctionnel',
      'Défense en cour d\'assises',
      'Comparution immédiate',
      'Appel et pourvoi en cassation',
      'Délits routiers (excès de vitesse, conduite sous l\'emprise, suspension de permis)',
      'Violences volontaires et involontaires',
      'Vol, escroquerie, abus de confiance',
      'Infractions économiques et financières',
      'Contentieux des victimes (constitution de partie civile)'
    ],
    faq: [
      {
        question: 'Que faire si je suis convoqué en garde à vue ?',
        answer: 'Vous avez le droit de demander l\'assistance d\'un avocat dès le début de la garde à vue. L\'avocat peut s\'entretenir avec vous confidentiellement, assister aux interrogatoires et consultez le dossier. Il est fortement recommandé d\'exercer ce droit.'
      },
      {
        question: 'Quelle est la différence entre le tribunal correctionnel et la cour d\'assises ?',
        answer: 'Le tribunal correctionnel juge les délits (infractions punies de 10 ans de prison maximum), tandis que la cour d\'assises juge les crimes (infractions punies de plus de 10 ans de réclusion). La cour d\'assises comprend des jurés populaires.'
      },
      {
        question: 'Puis-je contester une amende forfaitaire ?',
        answer: 'Oui, vous pouvez contester une amende forfaitaire dans un délai de 45 jours. Il est conseillé de se faire assister par un avocat pour constituer un dossier de contestation solide.'
      }
    ]
  },
  {
    slug: 'droit-travail',
    title: 'Droit du Travail',
    description: 'Conseil et contentieux en droit du travail pour salariés et employeurs : licenciement, harcèlement, rupture conventionnelle.',
    icon: 'Briefcase',
    detailedDescription: 'Le droit du travail régit les relations entre employeurs et salariés. Notre cabinet intervient tant en conseil qu\'en contentieux devant le Conseil de Prud\'hommes pour défendre vos intérêts.',
    services: [
      'Licenciement (économique, pour faute, inaptitude)',
      'Rupture conventionnelle',
      'Prise d\'acte de la rupture du contrat',
      'Résiliation judiciaire',
      'Harcèlement moral et sexuel',
      'Discrimination au travail',
      'Accident du travail et maladie professionnelle',
      'Contentieux prud\'homal',
      'Négociation de transaction',
      'Temps de travail et heures supplémentaires'
    ],
    faq: [
      {
        question: 'Quels sont mes recours en cas de licenciement abusif ?',
        answer: 'Vous pouvez saisir le Conseil de Prud\'hommes dans un délai de 12 mois à compter de la notification du licenciement. Si le licenciement est jugé sans cause réelle et sérieuse, vous pouvez obtenir des dommages et intérêts dont le montant varie selon votre ancienneté et la taille de l\'entreprise.'
      },
      {
        question: 'Comment se déroule une rupture conventionnelle ?',
        answer: 'La rupture conventionnelle nécessite un accord entre l\'employeur et le salarié. Après un ou plusieurs entretiens, une convention est signée. Un délai de rétractation de 15 jours est prévu, puis la convention est homologuée par la DREETS (anciennement DIRECCTE).'
      },
      {
        question: 'Que faire en cas de harcèlement au travail ?',
        answer: 'Rassemblez tous les éléments de preuve (emails, témoignages, certificats médicaux). Vous pouvez alerter votre employeur, les représentants du personnel, l\'inspection du travail ou la médecine du travail. Un avocat peut vous aider à engager une procédure devant le Conseil de Prud\'hommes ou déposer plainte au pénal.'
      }
    ]
  },
  {
    slug: 'droit-affaires',
    title: 'Droit des Affaires',
    description: 'Accompagnement juridique des entreprises : création de société, contrats commerciaux, contentieux commercial.',
    icon: 'Building',
    detailedDescription: 'Le droit des affaires englobe l\'ensemble des règles relatives à l\'activité des entreprises. Notre cabinet accompagne les entrepreneurs et dirigeants dans leurs opérations juridiques et leur contentieux.',
    services: [
      'Création et structuration de sociétés',
      'Rédaction de statuts',
      'Cession de parts sociales et fonds de commerce',
      'Contrats commerciaux (distribution, franchise, partenariat)',
      'Baux commerciaux',
      'Contentieux commercial',
      'Recouvrement de créances',
      'Procédures collectives (sauvegarde, redressement, liquidation)',
      'Concurrence déloyale',
      'Droit de la propriété intellectuelle'
    ],
    faq: [
      {
        question: 'Quelle forme juridique choisir pour créer mon entreprise ?',
        answer: 'Le choix dépend de plusieurs critères : nombre d\'associés, responsabilité souhaitée, régime fiscal et social, besoins de financement. Les formes les plus courantes sont : SARL, SAS, EURL, SASU, SA. Un avocat peut vous conseiller sur la structure la plus adaptée à votre projet.'
      },
      {
        question: 'Comment récupérer une créance impayée ?',
        answer: 'Plusieurs étapes : relance amiable, mise en demeure, injonction de payer, assignation devant le tribunal de commerce. L\'avocat peut intervenir dès la mise en demeure pour maximiser les chances de recouvrement.'
      },
      {
        question: 'Qu\'est-ce qu\'un bail commercial et quelle est sa durée ?',
        answer: 'Le bail commercial permet à un commerçant ou artisan de louer un local pour son activité professionnelle. Sa durée minimale est de 9 ans, avec possibilité pour le locataire de donner congé tous les 3 ans (bail 3-6-9).'
      }
    ]
  }
]

export function getDomaineBySlug(slug: string): Domaine | undefined {
  return domaines.find(d => d.slug === slug)
}
