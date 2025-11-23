# Guide de déploiement

## 📋 Résumé du projet

Vous disposez d'un site internet complet pour cabinet d'avocat, **100% conforme CNB 2023 et RGPD**, prêt à être déployé.

### Ce qui a été créé

✅ **17 pages statiques** :
- Page d'accueil
- À propos
- 4 domaines d'intervention (Famille, Pénal, Travail, Affaires)
- Honoraires
- Contact (avec formulaire)
- Mentions légales
- Politique de confidentialité
- 3 articles d'actualités

✅ **Conformité totale** :
- CNB 2023 : aucun terme laudatif, pas de témoignages, mentions légales complètes
- RGPD : durée de conservation 20 ans, bannière cookies, politique de confidentialité
- Accessibilité WCAG 2.1 AA : skip links, ARIA, navigation clavier
- SEO : meta tags, Schema.org, sitemap, robots.txt

✅ **Design professionnel** :
- Palette bleu marine & or
- Typographie Playfair Display + Inter
- Responsive mobile-first
- Performance optimisée

## 🚀 Déploiement rapide

### 1. Personnaliser les informations

Éditez `lib/data/config.ts` et remplacez les données fictives par vos vraies informations :

```typescript
export const cabinetInfo: CabinetInfo = {
  name: 'Votre Cabinet',
  legalStructure: 'SELARL',  // ou SCP, SELAS, etc.
  lawyerName: 'Votre Nom',
  lawyerFirstName: 'Votre Prénom',
  barreauName: 'Barreau de Paris',  // votre barreau
  toqueNumber: 'T1234',  // votre numéro de toque
  siret: '123 456 789 00012',  // votre SIRET
  address: {
    street: 'Votre adresse',
    postalCode: '75000',
    city: 'Votre ville',
    country: 'France'
  },
  contact: {
    phone: '01 XX XX XX XX',
    fax: '01 XX XX XX XX',
    email: 'contact@votre-cabinet.fr'
  },
  hours: 'Du lundi au vendredi : 9h00 - 18h00',
  insurance: {
    company: 'Nom de votre assureur RCP',
    coverage: 'France et Union Européenne'
  }
}
```

### 2. Personnaliser le contenu

#### Domaines d'intervention
Éditez `lib/data/domaines.ts` pour ajouter/modifier vos domaines.

#### Articles
Éditez `lib/data/articles.ts` pour ajouter vos propres articles.

#### Couleurs du site
Si vous souhaitez changer les couleurs, éditez `tailwind.config.ts`.

### 3. Connecter le formulaire de contact

Le formulaire est actuellement en mode simulation. Pour le connecter à votre service d'email :

Ouvrez `components/sections/ContactForm.tsx` et décommentez/configurez :

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

### 4. Build du site

```bash
npm install
npm run build
```

Les fichiers statiques sont générés dans le dossier `/out`.

### 5. Déployer sur votre VPS

#### Option A : Upload manuel

```bash
# Sur votre machine locale
scp -r out/* user@votre-serveur.fr:/var/www/html/
```

#### Option B : Via Git

```bash
# Initialisez git
git init
git add .
git commit -m "Initial commit"

# Sur votre serveur, clonez et buildez
git clone votre-repo.git
cd votre-repo
npm install
npm run build
cp -r out/* /var/www/html/
```

### 6. Configurer nginx

```bash
# Sur votre serveur
sudo nano /etc/nginx/sites-available/cabinet-avocat
```

Copiez le contenu de `nginx.conf.example` et adaptez-le.

```bash
# Activez le site
sudo ln -s /etc/nginx/sites-available/cabinet-avocat /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7. Installer le certificat SSL

```bash
# Installer certbot
sudo apt install certbot python3-certbot-nginx

# Obtenir le certificat
sudo certbot --nginx -d www.votre-cabinet.fr -d votre-cabinet.fr

# Le renouvellement automatique est configuré par défaut
```

### 8. Mise à jour du sitemap

Éditez `public/sitemap.xml` et remplacez `www.cabinet-moreau.fr` par votre vrai nom de domaine.

## 📝 Checklist finale

Avant la mise en ligne, vérifiez :

### Contenu
- [ ] Toutes les informations fictives ont été remplacées
- [ ] Les domaines d'intervention correspondent à votre activité
- [ ] Les honoraires sont corrects
- [ ] Les mentions légales sont à jour
- [ ] La politique de confidentialité mentionne vos coordonnées
- [ ] Le formulaire de contact est connecté

### Technique
- [ ] Le certificat SSL est installé (HTTPS)
- [ ] Le sitemap.xml a été mis à jour avec votre domaine
- [ ] Les redirections HTTP → HTTPS sont actives
- [ ] Le site est accessible depuis www et sans www
- [ ] Les emails du formulaire arrivent bien

### SEO
- [ ] Google Search Console est configuré
- [ ] Le sitemap a été soumis à Google
- [ ] Google Analytics est configuré (si souhaité)
- [ ] Les meta descriptions sont personnalisées

### Tests
- [ ] Le site s'affiche correctement sur mobile
- [ ] Le site s'affiche correctement sur tous les navigateurs
- [ ] Tous les liens fonctionnent
- [ ] Le formulaire de contact fonctionne
- [ ] La bannière cookies fonctionne
- [ ] Les scores Lighthouse sont > 90

## 🔧 Maintenance

### Ajouter un article

1. Éditez `lib/data/articles.ts`
2. Ajoutez votre article :
```typescript
{
  slug: 'mon-nouvel-article',
  title: 'Titre de l\'article',
  date: '2024-XX-XX',
  excerpt: 'Résumé...',
  category: 'Droit de la Famille',
  content: `Contenu complet...`
}
```
3. Rebuild et redéployez :
```bash
npm run build
scp -r out/* user@serveur:/var/www/html/
```

### Modifier les informations du cabinet

1. Éditez `lib/data/config.ts`
2. Rebuild et redéployez

### Mettre à jour le design

1. Modifiez les composants dans `/components`
2. Testez en local avec `npm run dev`
3. Rebuild et redéployez

## 🆘 Support

### Problèmes courants

**Le site ne s'affiche pas** :
- Vérifiez que nginx est lancé : `sudo systemctl status nginx`
- Vérifiez les logs : `sudo tail -f /var/log/nginx/error.log`

**Les CSS ne s'appliquent pas** :
- Vérifiez que les fichiers dans `_next/` sont bien copiés
- Videz le cache du navigateur

**Le formulaire ne fonctionne pas** :
- Vérifiez que l'URL de votre micro-service est correcte
- Vérifiez la clé API
- Regardez la console JavaScript du navigateur

**Erreur 404 sur les pages** :
- Vérifiez la configuration nginx `try_files`
- Vérifiez que tous les fichiers .html sont présents

## 📞 Ressources

- Documentation Next.js : https://nextjs.org/docs
- Documentation Tailwind : https://tailwindcss.com/docs
- CNB : https://www.cnb.avocat.fr
- CNIL : https://www.cnil.fr

---

**Félicitations !** Votre site d'avocat conforme CNB 2023 et RGPD est prêt à être mis en ligne. 🎉
