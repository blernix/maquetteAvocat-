# Site Internet Cabinet d'Avocat

Site internet professionnel et conforme pour cabinet d'avocat, développé selon les normes CNB 2023 et RGPD.

## 🎯 Caractéristiques principales

### Conformité déontologique CNB 2023

✅ **Respect strict de la déontologie** :
- Aucun témoignage client
- Aucune notation ou avis
- Aucun terme laudatif non justifié
- Aucune promotion commerciale
- Mentions légales complètes et conformes

✅ **Informations professionnelles** :
- Barreau et numéro de TOQUE
- Assurance RCP
- Structure juridique (SELARL)
- Lien vers le CNB

### Conformité RGPD

✅ **Protection des données** :
- Politique de confidentialité complète
- Durée de conservation : **20 ans** (spécifique aux avocats)
- Bannière cookies conforme
- Formulaire de contact avec consentements RGPD
- Droits des personnes (accès, rectification, effacement, etc.)

### Accessibilité WCAG 2.1 AA

✅ **Features d'accessibilité** :
- Skip link "Aller au contenu principal"
- Attributs ARIA sur les éléments interactifs
- Labels associés aux formulaires
- Contraste texte/fond conforme
- Navigation au clavier complète
- Focus visible sur tous les éléments

### SEO optimisé

✅ **Optimisations SEO** :
- Meta tags (title, description, keywords)
- Open Graph et Twitter Cards
- Schema.org JSON-LD (type: Attorney)
- Sitemap.xml
- Robots.txt
- Structure sémantique HTML5

## 🏗️ Stack technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript (typage strict)
- **Styling** : Tailwind CSS 4
- **Icons** : Lucide React
- **Fonts** : Google Fonts (Playfair Display, Inter)
- **Export** : Statique (100% HTML/CSS/JS)

## 📁 Structure du projet

```
/
├── app/                              # Pages Next.js (App Router)
│   ├── layout.tsx                    # Layout principal
│   ├── page.tsx                      # Page d'accueil
│   ├── a-propos/                     # Page À propos
│   ├── domaines/                     # Pages domaines d'intervention
│   │   ├── page.tsx                  # Liste des domaines
│   │   └── [slug]/page.tsx           # Page domaine individuel
│   ├── honoraires/                   # Page Honoraires
│   ├── contact/                      # Page Contact
│   ├── mentions-legales/             # Mentions légales
│   ├── politique-confidentialite/    # Politique de confidentialité
│   └── actualites/                   # Pages actualités
│       ├── page.tsx                  # Liste des articles
│       └── [slug]/page.tsx           # Article individuel
├── components/
│   ├── layout/                       # Composants de layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CookieBanner.tsx
│   │   └── SchemaOrg.tsx
│   ├── ui/                           # Composants UI de base
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Checkbox.tsx
│   │   └── Select.tsx
│   └── sections/                     # Composants de sections
│       ├── Hero.tsx
│       └── ContactForm.tsx
├── lib/
│   ├── data/                         # Données du site
│   │   ├── config.ts                 # Configuration cabinet
│   │   ├── domaines.ts               # Domaines d'intervention
│   │   └── articles.ts               # Articles de blog
│   ├── utils/                        # Utilitaires
│   │   ├── cn.ts                     # Fusion classes CSS
│   │   └── validators.ts             # Validateurs formulaires
│   └── types/                        # Types TypeScript
│       └── index.ts
├── public/
│   ├── robots.txt                    # Robots.txt
│   ├── sitemap.xml                   # Sitemap
│   ├── images/                       # Images
│   └── icons/                        # Icônes
└── styles/
    └── globals.css                   # Styles globaux
```

## 🚀 Installation et développement

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur http://localhost:3000

### Build et export statique

```bash
# Build pour production
npm run build

# Les fichiers statiques seront dans le dossier /out
```

## 📝 Pages disponibles

### Pages principales
- **/** - Page d'accueil avec hero et domaines
- **/a-propos** - Présentation de l'avocat et du cabinet
- **/domaines** - Liste des domaines d'intervention
- **/domaines/[slug]** - Page détaillée par domaine (4 domaines)
- **/honoraires** - Informations sur les honoraires
- **/contact** - Formulaire de contact
- **/actualites** - Liste des articles
- **/actualites/[slug]** - Article individuel (3 articles)

### Pages légales
- **/mentions-legales** - Mentions légales complètes
- **/politique-confidentialite** - Politique RGPD

## 🎨 Personnalisation

### Modifier les informations du cabinet

Éditez le fichier `lib/data/config.ts` :

```typescript
export const cabinetInfo: CabinetInfo = {
  name: 'Votre Cabinet',
  lawyerName: 'Votre nom',
  // ... autres informations
}
```

### Ajouter/modifier des domaines

Éditez le fichier `lib/data/domaines.ts` :

```typescript
export const domaines: Domaine[] = [
  {
    slug: 'mon-domaine',
    title: 'Mon Domaine',
    description: '...',
    // ...
  }
]
```

### Ajouter des articles

Éditez le fichier `lib/data/articles.ts` :

```typescript
export const articles: Article[] = [
  {
    slug: 'mon-article',
    title: 'Mon Article',
    content: '...',
    // ...
  }
]
```

### Personnaliser les couleurs

Éditez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    DEFAULT: '#1e3a5f',  // Votre couleur primaire
    // ...
  }
}
```

## 📧 Configuration du formulaire de contact

Le formulaire de contact est actuellement en mode "simulation". Pour le connecter à votre micro-service d'envoi d'emails :

1. Ouvrez `components/sections/ContactForm.tsx`
2. Décommentez et configurez la section suivante :

```typescript
const response = await fetch('https://api.votre-serveur.fr/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'VOTRE_CLE_API'
  },
  body: JSON.stringify(formData)
})
```

## 🌐 Déploiement

### Sur un VPS avec nginx

1. Buildez le site :
```bash
npm run build
```

2. Copiez le contenu du dossier `out/` sur votre serveur :
```bash
scp -r out/* user@votre-serveur.fr:/var/www/html/
```

3. Configurez nginx :
```nginx
server {
    listen 80;
    server_name www.votre-cabinet.fr;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Headers de sécurité
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
}
```

4. Activez HTTPS avec Let's Encrypt :
```bash
sudo certbot --nginx -d www.votre-cabinet.fr
```

## 📊 Performances

- ✅ Export 100% statique (pas de serveur Node.js requis)
- ✅ Temps de chargement optimisé
- ✅ Images optimisées (WebP recommandé)
- ✅ CSS et JS minifiés
- ✅ Score Lighthouse cible : 90+

## 🔒 Sécurité

- HTTPS obligatoire (certificat SSL/TLS)
- Headers de sécurité configurés
- Protection CSRF sur formulaires
- Validation des données côté client et serveur
- Pas de données sensibles dans le code

## 📜 Licence

Ce site est un exemple/maquette à des fins de démonstration.

## 🤝 Support

Pour toute question technique, consultez la documentation Next.js :
- https://nextjs.org/docs
- https://tailwindcss.com/docs

---

**Note importante** : Ce site est une maquette d'exemple. Les informations du cabinet (nom, adresse, téléphone, etc.) sont fictives. Avant mise en production, remplacez toutes les données par vos informations réelles.

## ✅ Checklist avant mise en production

- [ ] Remplacer les informations fictives dans `lib/data/config.ts`
- [ ] Ajouter vos vrais domaines d'intervention
- [ ] Connecter le formulaire à votre service d'email
- [ ] Ajouter vos photos professionnelles
- [ ] Vérifier les mentions légales
- [ ] Configurer Google Analytics (si souhaité)
- [ ] Tester sur tous les navigateurs
- [ ] Vérifier l'accessibilité
- [ ] Configurer HTTPS
- [ ] Soumettre le sitemap à Google Search Console
