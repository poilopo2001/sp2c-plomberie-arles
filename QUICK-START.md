# ⚡ QUICK START - SP2C Plomberie Arles

## 🚀 Démarrage en 5 Minutes

### 1️⃣ Installation (30 secondes)

```bash
cd plombierarles
npm install
```

### 2️⃣ Lancer le serveur (10 secondes)

```bash
npm run dev
```

**→ Ouvrir** [http://localhost:3000](http://localhost:3000)

✅ **Votre site est maintenant actif en local !**

---

## 📝 Commandes Essentielles

```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Lancer en production (après build)
npm start

# Vérifier les erreurs
npm run lint
```

---

## 🎯 Tester le Site

### Pages à Vérifier

1. **Homepage** : `http://localhost:3000/`
   - ✅ Hero avec animations
   - ✅ Stats bar
   - ✅ Grille services
   - ✅ Before/After slider
   - ✅ Témoignages
   - ✅ FAQ

2. **Services** : `http://localhost:3000/nos-services`
   - ✅ Grille 12 services
   - ✅ Hover effects

3. **Contact** : `http://localhost:3000/contact`
   - ✅ Formulaire multi-étapes
   - ✅ Validation

4. **Devis** : `http://localhost:3000/devis-gratuit`
   - ✅ Formulaire 4 étapes

5. **Service individuel** : `http://localhost:3000/installation-reparation-robinetterie`
   - ✅ Page détaillée
   - ✅ FAQ

---

## ✏️ Personnalisation Rapide

### Modifier les Données

**Fichier** : `lib/constants.ts`

```typescript
// Ligne 7-40 : COORDONNÉES
export const COMPANY_INFO = {
  name: 'SP2C Plomberie...', // Votre nom
  phone: '+33 6 25 07 56 40', // ✅ Déjà configuré
  email: 'contact@...', // ⚠️ À MODIFIER
  // ...
}

// Ligne 43+ : SERVICES (12 services)
export const SERVICES = [...]

// Ligne 223+ : TÉMOIGNAGES (6 avis)
export const TESTIMONIALS = [...]
```

### Modifier les Couleurs

**Fichier** : `tailwind.config.js`

```javascript
colors: {
  primary: {
    DEFAULT: '#1a5490', // Votre bleu
  },
  accent: {
    DEFAULT: '#ff8c42', // Votre orange
  },
}
```

---

## 🌐 Déployer sur Vercel (3 étapes)

### Étape 1 : Pousser sur GitHub

```bash
git init
git add .
git commit -m "Site SP2C prêt"

# Créer un repo sur GitHub
# Puis :
git remote add origin https://github.com/VOUS/plombierarles.git
git push -u origin main
```

### Étape 2 : Connecter Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Cliquer "New Project"
4. Importer votre repo `plombierarles`

### Étape 3 : Déployer

1. Vercel détecte Next.js automatiquement
2. Cliquer "Deploy"
3. Attendre 2-3 minutes

✅ **Votre site est en ligne !**

---

## 📱 Test Mobile

1. Lancer : `npm run dev`
2. Sur votre mobile, aller à :
   - `http://VOTRE-IP-LOCAL:3000`
   - Exemple : `http://192.168.1.10:3000`

3. Vérifier :
   - ✅ Sticky bottom bar
   - ✅ Menu burger
   - ✅ Responsive
   - ✅ Téléphone cliquable

---

## 🔧 Personnalisations Prioritaires

### À Faire Maintenant

- [ ] Modifier l'email dans `lib/constants.ts` (ligne 14)
- [ ] Modifier le SIRET dans `lib/constants.ts` (ligne 18)
- [ ] Vérifier le numéro de téléphone (ligne 9)

### À Faire Avant Production

- [ ] Remplacer les images Unsplash par vos photos
- [ ] Modifier les témoignages (lignes 223-300)
- [ ] Ajouter vos vraies réalisations (lignes 350+)
- [ ] Tester tous les formulaires
- [ ] Vérifier sur mobile

---

## 📚 Documentation Complète

- **README.md** : Vue d'ensemble du projet
- **INSTRUCTIONS.md** : Guide détaillé complet
- **DEPLOY.md** : Guide de déploiement
- **PROJET-COMPLET.md** : Résumé exhaustif

---

## 🆘 Problèmes ?

### Le site ne démarre pas ?

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install
npm run dev
```

### Erreurs TypeScript ?

```bash
# Rebuild
rm -rf .next
npm run build
```

### Le build échoue ?

- Vérifier les erreurs dans le terminal
- Vérifier les imports dans les fichiers
- Consulter `INSTRUCTIONS.md`

---

## ✅ Checklist Rapide

### Avant de déployer

- [ ] `npm install` fonctionne
- [ ] `npm run dev` fonctionne
- [ ] `npm run build` fonctionne sans erreur
- [ ] Le site s'affiche correctement sur `localhost:3000`
- [ ] Les formulaires s'affichent
- [ ] Les images se chargent
- [ ] Le menu mobile fonctionne

### Après déploiement

- [ ] Le site est accessible sur l'URL Vercel
- [ ] Toutes les pages chargent
- [ ] Les formulaires fonctionnent
- [ ] Le site est responsive
- [ ] Les téléphones sont cliquables

---

## 🎉 C'est Tout !

Votre site SP2C Plomberie Arles est **prêt à l'emploi** !

**Prochaine étape** : Déployer sur Vercel (3 minutes) 🚀

**Besoin d'aide ?** Consulter `INSTRUCTIONS.md` ou `DEPLOY.md`

---

**Version** : 1.0.0
**Statut** : ✅ PRODUCTION READY
