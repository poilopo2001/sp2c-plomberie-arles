# SP2C Plomberie Chauffage Climatisation - Site Web

Site web professionnel pour SP2C Plomberie, entreprise de plomberie, chauffage et climatisation basée à Arles.

## 🚀 Technologies

- **Framework**: Next.js 14.2+ (App Router)
- **Langage**: TypeScript (Mode Strict)
- **Styling**: Tailwind CSS 3.4.17+
- **Animations**: Framer Motion 12+
- **Icônes**: Lucide React
- **Formulaires**: React Hook Form + Zod
- **Déploiement**: Vercel

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Structure du Projet

```
plombierarles/
├── app/                      # Pages Next.js (App Router)
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Homepage
│   ├── contact/             # Page contact
│   ├── nos-services/        # Page liste services
│   ├── devis-gratuit/       # Page devis
│   ├── realisations/        # Page réalisations
│   ├── [slug]/              # Pages services dynamiques
│   └── globals.css          # Styles globaux
├── components/
│   ├── ui/                  # Composants UI réutilisables
│   ├── layout/              # Header, Footer, Navigation
│   ├── sections/            # Sections de pages
│   └── forms/               # Formulaires
├── lib/
│   ├── constants.ts         # Données globales
│   ├── types.ts             # Types TypeScript
│   ├── metadata.ts          # SEO metadata
│   ├── schema.ts            # JSON-LD schemas
│   └── utils.ts             # Fonctions utilitaires
└── public/                  # Assets statiques
```

## 🎨 Design System

### Couleurs

- **Primary**: `#1a5490` (Bleu professionnel)
- **Accent**: `#ff8c42` (Orange conversion)
- **Neutral**: Palette gray de Tailwind

### Typographie

- **Police**: Inter (Google Fonts)
- **Échelle**: text-hero, text-h2, text-h3, text-body-large, text-body

## 🔧 Fonctionnalités

- ✅ Design responsive mobile-first
- ✅ Optimisation SEO avancée (metadata, JSON-LD)
- ✅ Formulaire multi-étapes avec validation
- ✅ Animations Framer Motion
- ✅ Sticky header & bottom bar mobile
- ✅ Before/After slider interactif
- ✅ FAQ avec accordion
- ✅ Témoignages clients
- ✅ Pages de services dynamiques
- ✅ Optimisation images (Next/Image)

## 📱 Pages

- **/** - Homepage avec toutes les sections
- **/nos-services** - Liste complète des services
- **/[slug]** - Pages individuelles de services
- **/contact** - Formulaire de contact multi-étapes
- **/devis-gratuit** - Page devis avec formulaire
- **/realisations** - Portfolio projets
- **/mentions-legales** - Mentions légales
- **/politique-confidentialite** - Politique RGPD

## 🚀 Déploiement sur Vercel

### Option 1: Via l'interface Vercel

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre repository GitHub
3. Importer le projet
4. Vercel détectera automatiquement Next.js
5. Cliquer sur "Deploy"

### Option 2: Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Variables d'environnement (si nécessaire)

Aucune variable d'environnement n'est requise pour ce projet.

## 📊 SEO

- Metadata optimisée pour chaque page
- JSON-LD structured data (LocalBusiness, Service, FAQPage)
- Sitemap.xml généré
- Robots.txt configuré
- Breadcrumbs avec schema
- Images optimisées avec alt text local

## 📞 Contact

- **Téléphone**: 06 25 07 56 40
- **Email**: contact@sp2c-plomberie-arles.fr
- **Adresse**: Arles, 13200

## 📝 License

© 2025 SP2C Plomberie Chauffage Climatisation. Tous droits réservés.
