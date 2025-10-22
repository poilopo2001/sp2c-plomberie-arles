# 🚀 Guide de Déploiement - SP2C Plomberie Arles

## ✅ Checklist Pré-Déploiement

Avant de déployer, vérifiez que :

- [ ] Toutes les dépendances sont installées (`npm install`)
- [ ] Le build fonctionne localement (`npm run build`)
- [ ] Aucune erreur TypeScript
- [ ] Les images s'affichent correctement
- [ ] Les formulaires fonctionnent
- [ ] Le site est responsive (mobile/tablet/desktop)

## 📦 Installation des Dépendances

```bash
cd plombierarles
npm install
```

## 🧪 Test en Local

```bash
# Mode développement
npm run dev

# Ouvrir http://localhost:3000

# Build de production
npm run build

# Tester le build
npm start
```

## 🌐 Déploiement sur Vercel (Recommandé)

### Méthode 1 : Via l'Interface Vercel (La plus simple)

1. **Créer un compte Vercel**
   - Aller sur [https://vercel.com](https://vercel.com)
   - S'inscrire avec GitHub, GitLab ou email

2. **Pousser le code sur GitHub**
   ```bash
   # Initialiser git (si pas déjà fait)
   git init

   # Ajouter tous les fichiers
   git add .

   # Créer le premier commit
   git commit -m "Initial commit - SP2C Plomberie Arles website"

   # Créer un nouveau repo sur GitHub
   # Puis lier et pousser :
   git remote add origin https://github.com/VOTRE-USERNAME/plombierarles.git
   git branch -M main
   git push -u origin main
   ```

3. **Importer sur Vercel**
   - Se connecter sur Vercel
   - Cliquer sur "Add New..." → "Project"
   - Importer votre repository GitHub
   - Vercel détectera automatiquement Next.js
   - Cliquer sur "Deploy"

4. **Configuration (optionnel)**
   - Project Name: `sp2c-plomberie-arles`
   - Framework Preset: Next.js (auto-détecté)
   - Build Command: `npm run build` (par défaut)
   - Output Directory: `.next` (par défaut)
   - No environment variables needed

5. **Déployer**
   - Cliquer sur "Deploy"
   - Attendre 2-3 minutes
   - ✅ Site déployé !

### Méthode 2 : Via Vercel CLI

```bash
# Installer Vercel CLI globalement
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer en mode preview
vercel

# Déployer en production
vercel --prod
```

## 🔗 Domaine Personnalisé

### Ajouter votre domaine sur Vercel

1. Aller dans "Settings" → "Domains" de votre projet
2. Ajouter votre domaine (ex: `sp2c-plomberie-arles.fr`)
3. Configurer les DNS selon les instructions Vercel :
   - Type A : `76.76.21.21`
   - Ou CNAME : `cname.vercel-dns.com`
4. Attendre la propagation DNS (1-48h)

## 📊 Après le Déploiement

### Vérifications Importantes

1. **SEO**
   - ✅ Vérifier que le sitemap est accessible : `/sitemap.xml`
   - ✅ Vérifier robots.txt : `/robots.txt`
   - ✅ Tester sur Google Search Console
   - ✅ Soumettre le sitemap à Google

2. **Performance**
   - Tester sur [PageSpeed Insights](https://pagespeed.web.dev/)
   - Score cible : > 90/100

3. **Fonctionnalités**
   - ✅ Tester tous les formulaires
   - ✅ Vérifier les liens de navigation
   - ✅ Tester sur mobile
   - ✅ Vérifier les numéros de téléphone cliquables
   - ✅ Tester les CTAs

4. **Analytics (Optionnel)**
   - Ajouter Google Analytics
   - Ajouter Google Tag Manager
   - Configurer les conversions

## 🔄 Mises à Jour

Avec Vercel + GitHub, les mises à jour sont automatiques :

```bash
# Faire vos modifications
# Puis :
git add .
git commit -m "Description des modifications"
git push

# Vercel déploiera automatiquement !
```

## 🆘 Résolution de Problèmes

### Le build échoue

```bash
# Vérifier les erreurs TypeScript
npm run build

# Vérifier les dépendances
npm install

# Nettoyer le cache
rm -rf .next
npm run build
```

### Images ne s'affichent pas

- Vérifier la configuration `next.config.mjs`
- Les domaines d'images doivent être autorisés (Unsplash, placehold.co)

### Erreurs de formulaire

- Vérifier que React Hook Form et Zod sont bien installés
- Vérifier la validation des schémas

## 📞 Support

Pour toute question technique :
- Documentation Next.js : [https://nextjs.org/docs](https://nextjs.org/docs)
- Documentation Vercel : [https://vercel.com/docs](https://vercel.com/docs)

## 🎉 Votre site est prêt !

URL Vercel par défaut : `https://VOTRE-PROJECT.vercel.app`

Félicitations, votre site SP2C Plomberie est en ligne ! 🚀
