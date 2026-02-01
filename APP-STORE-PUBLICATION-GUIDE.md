# Guide Complet : Publication App Store pour Apaisé

> Document créé le 26 janvier 2026
> Basé sur l'expérience de Harry (5K App Challenge) et les bonnes pratiques App Store

---

## Table des Matières

1. [Choix du Nom de l'App](#1-choix-du-nom-de-lapp)
2. [Phase 1 : Documents Légaux (CRITIQUE)](#2-phase-1--documents-légaux-critique)
3. [Phase 2 : Configuration Production](#3-phase-2--configuration-production)
4. [Phase 3 : In-App Purchases](#4-phase-3--in-app-purchases)
5. [Phase 4 : Build & Test](#5-phase-4--build--test)
6. [Phase 5 : Assets App Store](#6-phase-5--assets-app-store)
7. [Phase 6 : Soumission](#7-phase-6--soumission)
8. [Erreurs Courantes à Éviter](#8-erreurs-courantes-à-éviter)
9. [Timeline Recommandée](#9-timeline-recommandée)
10. [Checklist Finale](#10-checklist-finale)

---

## 1. Choix du Nom de l'App

### Problème avec "Apaisé"

"Apaisé" est un mot français que les anglophones ne comprendront pas. Pour une app internationale, il faut un nom:
- Facile à prononcer en anglais
- Évoquant le calme/sérénité
- Non déjà pris sur l'App Store

### Recherche de Noms Disponibles

J'ai recherché des noms sur l'App Store et le web. Voici les résultats :

| Nom | Disponibilité | Commentaire |
|-----|---------------|-------------|
| Calm | ❌ Pris | Leader du marché |
| Headspace | ❌ Pris | Leader du marché |
| Serenity | ❌ Pris | App existante |
| StillMind | ❌ Pris | App récente avec AI |
| Breathly | ❌ Pris | App respiration open-source |
| MindEase | ❌ Pris | Plusieurs apps avec ce nom |
| Quietude | ❌ Pris | App de sons pour dormir |

### Noms Potentiellement Disponibles (Janvier 2026)

| Nom | Signification | Note |
|-----|---------------|------|
| **Serenly** | Blend de "Serene" + "-ly" | ✅ Aucun résultat trouvé |
| **Serenow** | "Serene" + "Now" | ✅ Aucun résultat trouvé |
| **Soulease** | "Soul" + "Ease" | ✅ Pas de match exact |
| **Hushly** | "Hush" (calme) + "-ly" | ✅ Aucun résultat trouvé |
| **Tranqly** | "Tranquil" raccourci | ✅ Variations existent mais pas exact |
| **Restora** | Évoque restauration/repos | ✅ Pas de match exact |
| **Soften** | "Adoucir" en anglais | ✅ Pas d'app standalone |

### Recommandation Finale

**Top 3 recommandés :**

1. **Serenly** - Court, mémorable, évoque la sérénité, facile à prononcer
2. **Serenow** - Urgence + calme ("sérénité maintenant")
3. **Soulease** - Poétique, "apaiser l'âme"

### Vérification Avant de Choisir

Avant de valider un nom, vérifier :

1. **App Store** : Rechercher le nom exact sur l'App Store
2. **Google Play** : Idem sur Google Play
3. **Domaine** : Vérifier disponibilité sur [Namecheap](https://namecheap.com) ou [GoDaddy](https://godaddy.com)
4. **Réseaux sociaux** : Vérifier @serenly sur Instagram/TikTok/X
5. **Trademark** : Rechercher sur [USPTO](https://www.uspto.gov/trademarks)

---

## 2. Phase 1 : Documents Légaux (CRITIQUE)

> ⚠️ **CAUSE DE REJET #1 DE HARRY (Jour 43)**
>
> Harry a été rejeté car il manquait :
> - Les liens Privacy Policy / Terms dans les métadonnées
> - Les liens accessibles DANS l'application

### 2.1 Documents Requis

| Document | Obligatoire | Où l'afficher |
|----------|-------------|---------------|
| **Privacy Policy** | ✅ Oui | App Store Connect + Dans l'app |
| **Terms of Service** | ✅ Oui | App Store Connect + Dans l'app |
| **EULA** | ⚠️ Recommandé | Peut utiliser le standard Apple |

### 2.2 Créer la Privacy Policy

#### Option A : Générateur Gratuit
1. Aller sur [TermsFeed](https://www.termsfeed.com/privacy-policy-generator/)
2. Remplir les informations de l'app
3. Télécharger le document généré

#### Option B : Template Manuel

Créer un fichier `privacy-policy.html` avec ces sections :

```markdown
# Privacy Policy for [Nom de l'App]

Last updated: [Date]

## 1. Information We Collect
- Account information (email, name)
- Usage data (app interactions)
- Device information

## 2. How We Use Your Information
- To provide the service
- To improve the app
- To send notifications (if enabled)

## 3. Data Storage
- Data stored securely via [Supabase/Firebase]
- Located in [région]

## 4. Third-Party Services
- RevenueCat (payments)
- Sentry (error tracking)
- PostHog (analytics)

## 5. Your Rights
- Access your data
- Delete your account
- Opt-out of communications

## 6. Contact
Email: support@[domain].com
```

### 2.3 Créer les Terms of Service

```markdown
# Terms of Service for [Nom de l'App]

Last updated: [Date]

## 1. Acceptance of Terms
By using this app, you agree to these terms.

## 2. Subscription Terms
- Free trial: [X] days
- Billing: Through Apple/Google
- Cancellation: Anytime via device settings

## 3. User Conduct
- No harmful content
- No reverse engineering
- No unauthorized access

## 4. Intellectual Property
All content is owned by [Company Name].

## 5. Limitation of Liability
The app is provided "as is".

## 6. Changes to Terms
We may update these terms. Continued use = acceptance.

## 7. Contact
Email: support@[domain].com
```

### 2.4 Héberger les Documents

#### Option 1 : Site Web Dédié (Recommandé)

Harry a créé un site avec Cursor en 15-20 minutes :

```bash
# Structure recommandée
website/
├── index.html          # Landing page
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
└── support.html        # Page de support
```

Hébergement gratuit :
- **Vercel** : [vercel.com](https://vercel.com) - Déploiement en 1 clic
- **Netlify** : [netlify.com](https://netlify.com)
- **GitHub Pages** : Gratuit avec repo GitHub

#### Option 2 : Notion (Rapide mais moins pro)

1. Créer une page Notion
2. Activer "Share to web"
3. Utiliser le lien public

### 2.5 Ajouter les Liens dans l'App

**✅ DÉJÀ FAIT dans serein-app :**

Les liens sont maintenant dans l'écran Profile/Settings :
- Help Center
- Privacy Policy
- Terms of Service

**Configuration des URLs** dans `apps/app/app/config/constants.ts` :

```typescript
export const LEGAL_URLS = {
  PRIVACY_POLICY: "https://[ton-domaine]/privacy",
  TERMS_OF_SERVICE: "https://[ton-domaine]/terms",
  SUPPORT: "https://[ton-domaine]/support",
} as const
```

### 2.6 Configurer dans App Store Connect

1. Aller sur [App Store Connect](https://appstoreconnect.apple.com)
2. Sélectionner ton app
3. **App Information** :
   - Privacy Policy URL : `https://[ton-domaine]/privacy`
4. **App Privacy** :
   - Remplir le questionnaire sur les données collectées

---

## 3. Phase 2 : Configuration Production

### 3.1 Variables d'Environnement

> ⚠️ **ERREUR CRITIQUE DE HARRY**
>
> Son app crashait sur TestFlight car les variables d'environnement n'étaient pas configurées en production !

#### Fichier `.env` requis :

```env
# Supabase
EXPO_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJhbGci...

# RevenueCat
EXPO_PUBLIC_REVENUECAT_IOS_KEY=appl_xxxxx
EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_xxxxx

# Analytics (optionnel mais recommandé)
EXPO_PUBLIC_POSTHOG_API_KEY=phc_xxxxx
EXPO_PUBLIC_POSTHOG_HOST=https://eu.posthog.com

# Error Tracking (optionnel mais recommandé)
EXPO_PUBLIC_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

### 3.2 Configurer Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Aller dans Settings > API
3. Copier :
   - Project URL → `EXPO_PUBLIC_SUPABASE_URL`
   - anon/public key → `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

### 3.3 Configurer RevenueCat

1. Créer un compte sur [revenuecat.com](https://revenuecat.com)
2. Créer un nouveau projet
3. Ajouter ton app iOS :
   - Bundle ID : `com.tonapp.serenly` (exemple)
   - App Store Connect API Key (voir section IAP)
4. Copier la Public API Key → `EXPO_PUBLIC_REVENUECAT_IOS_KEY`

### 3.4 Configurer EAS pour la Production

Créer/modifier `eas.json` :

```json
{
  "cli": {
    "version": ">= 3.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "env": {
        "EXPO_PUBLIC_SUPABASE_URL": "https://xxxxx.supabase.co",
        "EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY": "eyJhbGci..."
      }
    }
  }
}
```

Ou utiliser EAS Secrets :

```bash
eas secret:create --name EXPO_PUBLIC_SUPABASE_URL --value "https://xxxxx.supabase.co"
eas secret:create --name EXPO_PUBLIC_REVENUECAT_IOS_KEY --value "appl_xxxxx"
```

---

## 4. Phase 3 : In-App Purchases

### 4.1 Créer les Produits dans App Store Connect

> ⚠️ **CONSEIL DE HARRY**
>
> Soumettre les produits IAP **2-3 jours AVANT** l'app !
> Harry a eu des problèmes car ses produits ont été approuvés après l'app.

#### Étapes :

1. **App Store Connect** > Ton App > **In-App Purchases**

2. **Créer un abonnement** :
   - Type : Auto-Renewable Subscription
   - Reference Name : `Serenly Annual`
   - Product ID : `serenly_yearly_2999`

3. **Configurer le groupe d'abonnement** :
   - Nom : "Serenly Premium"

4. **Ajouter les détails de localisation** (FR + EN) :
   - Display Name : "Annual Premium"
   - Description : "Unlock all affirmations and features"

5. **Configurer le prix** :
   - Prix : €29.99/an (ou équivalent selon ta stratégie)

6. **Screenshot pour Review** :
   - Ajouter une capture d'écran du paywall dans l'app

### 4.2 Configurer dans RevenueCat

1. **Products** > Add Product
   - Identifier : `serenly_yearly_2999`
   - App Store Product ID : (même que ci-dessus)

2. **Entitlements** > Create
   - Identifier : `premium`
   - Products : Ajouter `serenly_yearly_2999`

3. **Offerings** > Create
   - Identifier : `default`
   - Packages : Ajouter le produit annual

### 4.3 Pricing Strategy (de PRICING-STRATEGY.md)

```
┌─────────────────────────────────────────────────────┐
│  ⭐ ANNUEL - MEILLEURE OFFRE                        │
│                                                     │
│  €49.99  →  €29.99/an                              │
│  (soit €2.50/mois)                                  │
│                                                     │
│  🔥 -40% pour les nouveaux membres                  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  HEBDOMADAIRE                                       │
│                                                     │
│  €4.99/semaine                                      │
│  Sans engagement                                    │
└─────────────────────────────────────────────────────┘

         ✓ 3 jours d'essai gratuit
         ✓ Annule quand tu veux
         ✓ Rappel avant facturation
```

---

## 5. Phase 4 : Build & Test

### 5.1 Créer le Build de Production

```bash
# S'assurer que EAS CLI est installé
npm install -g eas-cli

# Se connecter
eas login

# Créer le build iOS
eas build --platform ios --profile production
```

> ⏱️ **Temps estimé** : 20-40 minutes pour le build

### 5.2 Soumettre à TestFlight

```bash
# Après le build, soumettre à TestFlight
eas submit --platform ios
```

Ou depuis App Store Connect :
1. Le build apparaît automatiquement après `eas build`
2. Aller dans TestFlight > Builds
3. Sélectionner le build et "Submit for Review"

### 5.3 Tests Obligatoires

| Test | Description | Statut |
|------|-------------|--------|
| **Installation** | L'app s'ouvre sans crash | ⬜ |
| **Onboarding complet** | Parcourir tout le flow | ⬜ |
| **Création compte** | Email + mot de passe | ⬜ |
| **Social Login** | Apple Sign In / Google | ⬜ |
| **Paywall** | S'affiche correctement | ⬜ |
| **Essai gratuit** | Démarre correctement | ⬜ |
| **Restore Purchases** | Fonctionne | ⬜ |
| **Changement de langue** | FR/EN/etc. | ⬜ |
| **Mode sombre** | Toggle fonctionne | ⬜ |
| **Notifications** | Permission + réception | ⬜ |
| **Liens légaux** | Privacy/Terms s'ouvrent | ⬜ |
| **Suppression compte** | Fonctionne | ⬜ |

### 5.4 Test sur Différents Devices

- iPhone SE (petit écran)
- iPhone 15 Pro Max (grand écran)
- iPad (si supporté)
- iOS 15+ (minimum supporté)

---

## 6. Phase 5 : Assets App Store

### 6.1 Screenshots Requis

| Device | Taille | Requis |
|--------|--------|--------|
| iPhone 6.7" | 1290 x 2796 | ✅ |
| iPhone 6.5" | 1284 x 2778 | ✅ |
| iPhone 5.5" | 1242 x 2208 | ✅ |
| iPad Pro 12.9" | 2048 x 2732 | Si iPad supporté |

**Contenu des screenshots** (5-10 par langue) :
1. Écran principal / Feed d'affirmations
2. Catégories
3. Paywall avec pricing
4. Settings / Personnalisation
5. Widgets (si disponibles)

### 6.2 App Icon

- Taille : 1024 x 1024 pixels
- Format : PNG sans transparence
- Pas de coins arrondis (Apple les ajoute)

### 6.3 Description App Store

**Titre** (30 caractères max) :
```
Serenly - Daily Affirmations
```

**Sous-titre** (30 caractères max) :
```
Positive mindset every day
```

**Description** (4000 caractères max) :
```
Transform your mindset with Serenly, your daily companion for positive affirmations.

KEY FEATURES:
• Hundreds of carefully crafted affirmations
• Personalized categories for your goals
• Daily reminders to stay motivated
• Beautiful, calming interface
• Supports 7 languages

START YOUR JOURNEY:
Begin with a free 3-day trial and discover how daily affirmations can transform your life.

SUBSCRIPTION OPTIONS:
- Weekly: €4.99/week
- Annual: €29.99/year (best value!)

Cancel anytime. Your subscription will automatically renew unless canceled at least 24 hours before the end of the current period.

Questions? Contact us at support@serenly.app
```

**Keywords** (100 caractères max, séparés par virgules) :
```
affirmations,mindfulness,meditation,positive,motivation,self-care,mental health,wellness,calm
```

### 6.4 Catégorie

- Primary : Health & Fitness
- Secondary : Lifestyle

---

## 7. Phase 6 : Soumission

### 7.1 Avant de Soumettre - Checklist

```
[ ] Privacy Policy URL configurée
[ ] Terms of Service URL configurée
[ ] Liens accessibles DANS l'app
[ ] IAP créés et approuvés
[ ] Screenshots uploadés (toutes langues)
[ ] Description remplie (toutes langues)
[ ] App Icon 1024x1024 uploadé
[ ] Contact info rempli
[ ] Copyright rempli
[ ] Age Rating rempli
```

### 7.2 Soumettre pour Review

1. **App Store Connect** > Ton App
2. Vérifier que tout est vert ✅
3. Cliquer **"Submit for Review"**
4. Répondre aux questions :
   - Export compliance : "No" (sauf si tu utilises encryption custom)
   - Content rights : "Yes" (tu possèdes le contenu)
   - Advertising ID : "No" (sauf si tu utilises des pubs)

### 7.3 Temps de Review

- **Première soumission** : 24-48h généralement
- **Rejet** : Répondre rapidement (Harry a perdu 24h car il n'avait pas vu le mail)
- **Re-soumission après fix** : 24h environ

---

## 8. Erreurs Courantes à Éviter

### Erreur 1 : Variables d'Environnement Non Configurées

**Symptôme** : L'app crash au lancement sur TestFlight

**Solution** : Vérifier que toutes les variables sont dans EAS Secrets ou `eas.json`

### Erreur 2 : Liens Légaux Manquants

**Symptôme** : Rejet avec message "metadata is missing required information"

**Solution** :
- Ajouter Privacy/Terms URL dans App Store Connect
- Ajouter les liens DANS l'app (écran Settings)

### Erreur 3 : IAP Non Configurés

**Symptôme** : Rejet car "subscription information not visible"

**Solution** :
- Créer les produits 2-3 jours avant la soumission
- Ajouter les IAP à la soumission de l'app
- Inclure screenshot du paywall

### Erreur 4 : Build Cache Corrompu

**Symptôme** : Crash bizarre en production mais pas en dev

**Solution** :
```bash
# Nettoyer le cache
npx expo start --clear
rm -rf node_modules && npm install
eas build --clear-cache --platform ios
```

### Erreur 5 : Images IAP Refusées

**Symptôme** : Produits IAP refusés

**Solution** : Ne pas utiliser le logo de l'app comme image du produit (Harry a eu ce problème)

---

## 9. Timeline Recommandée

### Jour 1-3 : Documents Légaux + Configuration
- [ ] Choisir le nom final
- [ ] Créer Privacy Policy
- [ ] Créer Terms of Service
- [ ] Héberger les documents (site web)
- [ ] Ajouter liens dans l'app
- [ ] Configurer Supabase production
- [ ] Configurer RevenueCat

### Jour 3-5 : IAP Setup
- [ ] Créer produits dans App Store Connect
- [ ] Configurer RevenueCat
- [ ] Attendre approbation IAP (24-48h)

### Jour 5-7 : Premier Build TestFlight
- [ ] Configurer variables d'environnement
- [ ] Créer build production avec EAS
- [ ] Tester sur device réel
- [ ] Corriger bugs

### Jour 7-14 : Beta Testing
- [ ] Inviter testeurs (amis, famille, communauté)
- [ ] Collecter feedback
- [ ] Corriger bugs remontés
- [ ] Tester toutes les langues

### Jour 14-15 : Préparation Finale
- [ ] Créer screenshots App Store
- [ ] Rédiger descriptions (toutes langues)
- [ ] Vérifier checklist complète

### Jour 15 : Soumission
- [ ] Soumettre à l'App Store
- [ ] Surveiller les mails Apple (ne pas louper un rejet !)

### Jour 16-17 : Review Apple
- [ ] Attendre (24-48h)
- [ ] Si rejet : corriger et re-soumettre ASAP

### Jour 17+ : Live !
- [ ] Célébrer 🎉
- [ ] Commencer le marketing

---

## 10. Checklist Finale

### Configuration Technique
- [ ] Variables d'environnement configurées
- [ ] Supabase production prêt
- [ ] RevenueCat configuré
- [ ] Sentry/PostHog configurés (optionnel)

### Documents Légaux
- [ ] Privacy Policy créée et hébergée
- [ ] Terms of Service créés et hébergés
- [ ] URLs configurées dans App Store Connect
- [ ] Liens accessibles dans l'app (Settings)

### In-App Purchases
- [ ] Produits créés dans App Store Connect
- [ ] Produits approuvés par Apple
- [ ] RevenueCat synchronisé
- [ ] Paywall fonctionnel
- [ ] "Restore Purchases" fonctionne

### App Store Assets
- [ ] App Icon 1024x1024
- [ ] Screenshots (toutes tailles requises)
- [ ] Description (FR + EN minimum)
- [ ] Keywords optimisés
- [ ] Catégorie choisie

### Testing
- [ ] Build TestFlight fonctionne
- [ ] Onboarding complet testé
- [ ] Achat/Abonnement testé
- [ ] Toutes les langues testées
- [ ] Différents devices testés

### Soumission
- [ ] Tout est vert dans App Store Connect
- [ ] Export compliance rempli
- [ ] Age rating configuré
- [ ] Prêt à surveiller les mails Apple !

---

---

## 11. EAS Update (OTA Updates)

### Pourquoi configurer avant publication ?

Une fois ton app publiée, tu pourras pousser des corrections **en 5 minutes** au lieu d'attendre 24-48h de review Apple.

### Configuration

```bash
cd apps/app

# Configurer EAS Update
eas update:configure

# Créer les branches
eas channel:create production
eas channel:create preview
```

### Utilisation après publication

```bash
# Bug trouvé en prod ? Fix en 5 min :
eas update --branch production --message "Fix critical bug"
```

### Ce que tu PEUX mettre à jour en OTA

| ✅ Autorisé | ❌ Interdit |
|-------------|-------------|
| Code JavaScript | Code natif (Swift/Kotlin) |
| Images, sons | Nouvelles permissions |
| Traductions | Features majeures |
| Bug fixes | Contourner les règles Apple |
| Tweaks UI/UX | Changer le business model |

### Limites Apple

Apple autorise OTA pour les corrections, pas pour ajouter des fonctionnalités majeures. Si tu ajoutes une feature significative via OTA, ton app peut être retirée.

---

## Ressources Utiles

- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [RevenueCat Docs](https://docs.revenuecat.com/)
- [EAS Build Docs](https://docs.expo.dev/build/introduction/)
- [Transcription Harry Jour 42](./transcriptions/harryjmg/2026-01-18-Je-souffre-mais-j'envoie-à-l'app-store---Jour-4290.md)
- [Transcription Harry Jour 43 (Rejet)](./transcriptions/harryjmg/2026-01-18-Soumission-refusée-n°1---Jour-4390.md)

---

## 12. Attribution TikTok + AppsFlyer (Marketing)

> **Mise à jour : 31 janvier 2026**
>
> Cette section documente la configuration de l'attribution publicitaire TikTok via AppsFlyer MMP.

### 12.1 Pourquoi c'est important ?

Pour faire des pubs TikTok efficaces, tu dois pouvoir :
- Tracker les installations venant de TikTok
- Mesurer les conversions (achats, abonnements)
- Optimiser les campagnes sur le ROAS (Return on Ad Spend)

### 12.2 Architecture

```
User voit pub TikTok → Installe l'app → Event (purchase)
         ↓                    ↓              ↓
    TikTok Ads ←←←←← AppsFlyer MMP ←←←← Ton App
         ↓
   Optimisation automatique
```

### 12.3 Ce qui a été configuré ✅

#### AppsFlyer (MMP)
- [x] Compte créé
- [x] Dev Key : `9pD5kLYAB9XT2QnPv32P4T`
- [x] App ID : `app.peacely.app`
- [x] Intégration TikTok for Business - Advanced SRN activée
- [x] In-app events configurés :
  - `af_complete_registration` → Registration
  - `af_start_trial` → StartTrial
  - `af_subscribe` → Subscribe (avec revenue)
  - `af_purchase` → Purchase (avec revenue)
- [x] Install postbacks : All media sources including organic
- [x] iOS 14+ : Advanced Privacy activé

#### Code App (React Native)
- [x] `app/services/tracking.ts` - IDFA via ATT
- [x] `app/services/appsflyer.ts` - SDK AppsFlyer
- [x] `app/services/backend/supabase/profile.ts` - Stockage attribution
- [x] `.env` - Dev Key configuré
- [x] Types Supabase mis à jour avec colonnes attribution

#### TikTok Ads Manager
- [x] Compte créé
- [x] Secteur : Produits de santé / Gestion du bien-être / Santé mentale
- [x] Objectif : Promotion de l'application + iOS 14 dédié

### 12.4 Ce qui reste à faire ⏳

| Tâche | Bloqué par | Statut |
|-------|------------|--------|
| Connecter app dans TikTok Events Manager | App pas publiée sur App Store | ⏳ En attente |
| Récupérer TikTok App ID | Connexion app | ⏳ En attente |
| Ajouter TikTok App ID dans AppsFlyer | TikTok App ID | ⏳ En attente |
| Configurer SKAdNetwork (SKAN) | Connexion app | ⏳ En attente |
| Connecter RevenueCat ↔ AppsFlyer | - | ⏳ À faire |
| Activer Anonymous Sign-ins Supabase | - | ✅ Fait |
| Test complet du flow attribution | Tout le reste | ⏳ À faire |

---

## 13. Conformité EU - Digital Services Act (DSA)

> ⚠️ **OBLIGATOIRE pour publier dans l'Union Européenne**

### 13.1 Contexte

Apple exige de déclarer si tu es un **"trader"** (commerçant) pour se conformer au Digital Services Act (DSA) européen. Cette réglementation oblige Apple à vérifier et afficher les coordonnées des commerçants qui distribuent du contenu dans l'UE.

### 13.2 Es-tu un "Trader" ?

**OUI, tu es un trader si :**
- Tu vends des abonnements in-app (ce qui est ton cas avec Peacely)
- Tu es une entreprise ou auto-entrepreneur
- Tu génères des revenus avec l'app

**NON, tu n'es pas un trader si :**
- L'app est 100% gratuite sans achats in-app
- Tu es un particulier sans activité commerciale

### 13.3 Comment configurer

1. **App Store Connect** → Account → Business
2. Ou directement : [appstoreconnect.apple.com/business](https://appstoreconnect.apple.com/business)
3. Cliquer sur **"Complete Compliance Requirements"**
4. Remplir les informations :

| Champ | Valeur pour EI (Entreprise Individuelle) |
|-------|------------------------------------------|
| Trader Status | **Yes, I am a trader** |
| Legal Entity Name | Ton nom complet (ex: "Jean Dupont") |
| Address | Ton adresse professionnelle |
| Email | Email de contact public |
| Phone | Numéro de téléphone (optionnel) |

### 13.4 Ce qui sera affiché

Une fois configuré, Apple affichera sur ta page App Store :
- Ton nom / nom d'entreprise
- Ton adresse (pays au minimum)
- Email de contact

C'est une obligation légale EU, pas un choix Apple.

### 13.5 Checklist DSA

- [ ] Aller dans App Store Connect → Business
- [ ] Déclarer "Yes, I am a trader"
- [ ] Remplir les coordonnées commerciales
- [ ] Valider la conformité

### 12.5 Après publication App Store

Une fois l'app publiée, revenir ici et :

1. **TikTok Ads Manager** → Tools → Events → Connect data source
2. Entrer l'URL App Store : `https://apps.apple.com/app/peacely/id[APP_ID]`
3. TikTok génère un **TikTok App ID**
4. **AppsFlyer** → TikTok integration → Ajouter le TikTok App ID
5. **RevenueCat** → Integrations → AppsFlyer → Ajouter Dev Key
6. **Supabase** → Authentication → Providers → Activer Anonymous Sign-ins
7. **Tester** : Installer l'app via lien de test → Vérifier events dans AppsFlyer

### 12.6 TikTok Ads - Programme Incentive Nouveaux Annonceurs

> **Mise à jour : 31 janvier 2026**
>
> Offre promotionnelle pour les nouveaux annonceurs TikTok.

#### Notre offre personnalisée

| Détail | Valeur |
|--------|--------|
| **Coupon** | Q1 new advertiser coupon (GJHOEKBKBCBMMPEK) |
| **Type** | Match 1:1 (TikTok double les dépenses) |
| **Maximum** | Jusqu'à 5 200 € de crédits |
| **Expiration** | 02/03/2026 |
| **Fenêtre** | 31/01/2026 → 02/03/2026 (~30 jours) |

#### Comment ça marche

1. Tu dépenses X € en pub TikTok
2. TikTok te rembourse X € en crédits pub (1:1)
3. Les crédits arrivent 30 jours après avoir claim le coupon

#### Exemple avec budget ~500 €

| Dépense cash | Crédit reçu | Total pub effective |
|--------------|-------------|---------------------|
| 500 € | 500 € | **1 000 €** |

**ROI effectif : 100% de bonus** (mieux que le programme standard 50-60%)

#### Conditions importantes

- ⚠️ **Seules certaines campagnes sont éligibles** (vérifier les paramètres)
- Les crédits ont une date d'expiration
- Si la bannière promo disparaît avant inscription → offre invalide

#### Checklist TikTok Incentive

- [x] Offre identifiée (coupon Q1)
- [x] Compte TikTok Ads créé
- [ ] Claim le coupon dans TikTok Ads Manager
- [ ] Dépenser budget dans la fenêtre de 30 jours
- [ ] Utiliser les crédits avant expiration

> 📄 Voir aussi : `/Users/thibaud/Documents/development/app_mobile/tiktok-ads-incentive.md`

### 12.7 Ressources

- [AppsFlyer TikTok Integration](https://support.appsflyer.com/hc/en-us/articles/6722785184913-TikTok-for-Business-Advanced-SRN-integration-setup)
- [TikTok Events Manager](https://ads.tiktok.com/help/article/set-up-app-attribution-tiktok-ads-manager)
- [SKAdNetwork avec TikTok](https://support.appsflyer.com/hc/en-us/articles/360018499098-SKAN-interoperation-with-TikTok-for-Business)

---

## Récapitulatif Global - Statut Peacely

### Technique & Code
| Phase | Statut | Notes |
|-------|--------|-------|
| 1. Renommage Peacely | ✅ Terminé | Setup wizard exécuté |
| 2. AppsFlyer SDK | ✅ Terminé | Code intégré dans l'app |
| 3. Supabase Attribution | ✅ Terminé | Colonnes prêtes, anonymous auth activé |
| 4. EAS Update (OTA) | ⬜ À faire | `eas update:configure` + créer channels |

### Comptes & Dashboards
| Phase | Statut | Notes |
|-------|--------|-------|
| 5. Apple Developer | ✅ Terminé | App ID configuré |
| 6. RevenueCat iOS | ✅ Terminé | Clé IAP iOS configurée |
| 7. **RevenueCat Android** | ⬜ À faire | Ajouter app + Service Account Google |
| 8. AppsFlyer iOS | ✅ Terminé | TikTok integration configurée |
| 9. **AppsFlyer Android** | ⬜ À faire | Ajouter app Android dans dashboard |
| 10. **RevenueCat ↔ AppsFlyer** | ⬜ À faire | Intégration pour events d'achat |
| 11. TikTok Ads Account | ✅ Terminé | Compte créé, secteur santé mentale |
| 12. Google Play Console | ✅ En cours | Compte créé (25$), app "Peacely" en création |

### Administratif & Légal
| Phase | Statut | Notes |
|-------|--------|-------|
| 10. Micro-entreprise | ⬜ À faire | Créer statut auto-entrepreneur |
| 11. EU DSA Compliance | ⬜ À faire | Déclarer trader status dans App Store Connect |
| 12. W-8BEN Apple | ⬜ À vérifier | Formulaire fiscal US pour revenus App Store |

### Publication
| Phase | Statut | Notes |
|-------|--------|-------|
| 13. Publication App Store (iOS) | ⬜ À faire | Suivre phases 1-6 du guide |
| 14. Publication Play Store (Android) | 🔄 En cours | Compte créé, app en création |
| 15. TikTok ↔ AppsFlyer (iOS) | ⏳ En attente | Besoin app publiée |
| 16. TikTok ↔ AppsFlyer (Android) | ⏳ En attente | Besoin app publiée |
| 17. RevenueCat ↔ AppsFlyer | ⬜ À faire | Dashboard RevenueCat (iOS + Android) |
| 18. Test Attribution iOS | ⬜ À faire | Après publication iOS |
| 19. Test Attribution Android | ⬜ À faire | Après publication Android |

### Marketing & Acquisition
| Phase | Statut | Notes |
|-------|--------|-------|
| 20. TikTok Incentive Program | ✅ Identifié | Match 1:1 jusqu'à 5200€, expire 02/03/2026 |
| 21. Claim coupon TikTok | ⬜ À faire | Coupon Q1 (GJHOEKBKBCBMMPEK) |
| 22. Lancer campagne TikTok | ⬜ À faire | Budget prévu ~500€ → 1000€ de pub |

---

## 14. Création Micro-Entreprise (Auto-Entrepreneur)

> **Obligatoire** pour recevoir des paiements Apple/Google et être en règle fiscalement.

### 14.1 Pourquoi créer une micro-entreprise ?

- Recevoir légalement les paiements d'Apple et Google
- Déclarer tes revenus aux impôts
- Être en conformité avec le DSA (trader status)
- Déduire certaines charges (optionnel selon régime)

### 14.2 Étapes de création

#### Étape 1 : Inscription en ligne (Gratuit)
1. Aller sur [autoentrepreneur.urssaf.fr](https://www.autoentrepreneur.urssaf.fr)
2. Ou [guichet-entreprises.fr](https://www.guichet-entreprises.fr)
3. Créer un compte et remplir le formulaire

#### Étape 2 : Informations à préparer
| Information | Exemple |
|-------------|---------|
| Activité principale | **Édition de logiciels applicatifs** (code APE 5829C) |
| Activité secondaire | Conseil en systèmes informatiques (optionnel) |
| Adresse | Ton adresse personnelle ou domiciliation |
| Date de début | Date souhaitée |

#### Étape 3 : Choix du régime fiscal
| Régime | Avantage | Pour qui |
|--------|----------|----------|
| **Micro-fiscal classique** | Simple, % du CA | Revenus < 77 700€/an |
| **Versement libératoire** | Prélèvement à la source | Si revenus fiscaux < seuil |

#### Étape 4 : Réception des documents (2-4 semaines)
- **Numéro SIRET** : Identifiant de ton entreprise
- **Attestation INSEE** : Confirmation d'inscription
- **Notification URSSAF** : Pour les cotisations

### 14.3 Charges et cotisations

| Type | Taux (prestations de services) |
|------|-------------------------------|
| Cotisations sociales | ~22% du CA |
| CFE (après 1ère année) | Variable selon ville |
| Impôt sur le revenu | Selon ton taux marginal |

**Exemple** : 1000€ de revenus App Store → ~220€ de cotisations

### 14.4 Facturation Apple/Google

Apple et Google te versent les revenus **moins leur commission** (15-30%).

| Store | Commission | Tu reçois |
|-------|------------|-----------|
| App Store | 15% (Small Business) ou 30% | 70-85% |
| Play Store | 15% (première année) ou 30% | 70-85% |

### 14.5 Checklist Micro-Entreprise

- [ ] Créer compte sur autoentrepreneur.urssaf.fr
- [ ] Remplir formulaire de déclaration
- [ ] Choisir code APE : 5829C (Édition de logiciels)
- [ ] Recevoir numéro SIRET
- [ ] Configurer compte bancaire dédié (recommandé)
- [ ] Déclarer CA trimestriellement sur urssaf.fr

---

## 15. Publication Google Play Store (Android)

### 15.1 Prérequis

| Élément | Statut | Notes |
|---------|--------|-------|
| Compte Google Play Console | ⬜ À créer | 25$ frais uniques |
| Build Android (.aab) | ⬜ À générer | Via EAS Build |
| Assets Play Store | ⬜ À créer | Screenshots, icône, descriptions |
| Privacy Policy | ✅ Réutilisable | Même que iOS |

### 15.2 Créer un compte Google Play Console

1. Aller sur [play.google.com/console](https://play.google.com/console)
2. Se connecter avec un compte Google
3. Payer les **25$ de frais** (one-time, pas annuel comme Apple)
4. Remplir les informations développeur
5. Vérifier l'identité (peut prendre quelques jours)

### 15.3 Configurer l'app dans Play Console

#### Étape 1 : Créer l'application
1. Play Console → **Create app**
2. Nom : `Peacely`
3. Langue par défaut : Français ou Anglais
4. Type : App (pas Game)
5. Gratuit ou Payant : **Gratuit** (avec IAP)

#### Étape 2 : Store Listing (Fiche Play Store)

| Champ | Valeur |
|-------|--------|
| Titre | Peacely - Daily Affirmations |
| Description courte | Transform your mindset with positive affirmations |
| Description complète | (Réutiliser celle de l'App Store) |
| Icône | 512x512 PNG |
| Feature Graphic | 1024x500 PNG (bannière) |
| Screenshots | Min 2, max 8 par type d'appareil |

#### Étape 3 : Content Rating
1. Aller dans **Policy** → **App content** → **Content rating**
2. Remplir le questionnaire IARC
3. Pour une app de méditation : Rating **Everyone** / **PEGI 3**

#### Étape 4 : Privacy Policy
- Même URL que pour iOS : `https://[ton-domaine]/privacy`

### 15.4 Générer le Build Android

```bash
cd apps/app

# Build Android pour Play Store
eas build --platform android --profile production

# Le résultat est un fichier .aab (Android App Bundle)
```

### 15.5 Configurer les In-App Purchases + RevenueCat

> ⚠️ **IMPORTANT** : RevenueCat doit être configuré pour Android séparément d'iOS !

#### Dans Play Console :
1. **Monetize** → **Products** → **Subscriptions**
2. Créer un produit :
   - Product ID : `peacely_yearly_2999`
   - Nom : Premium Annual
   - Prix : €29.99/an

#### Dans RevenueCat (étapes détaillées) :
1. [RevenueCat Dashboard](https://app.revenuecat.com) → Ton projet
2. **Apps** → **Add New App** → **Google Play Store**
3. Renseigner :
   - **Package Name** : `app.peacely.app`
   - **Google Play Credentials** : Uploader le fichier JSON du service account
4. **Products** → Ajouter le même product ID que Play Console
5. Copier la **Public API Key Android** → `.env` :
   ```env
   EXPO_PUBLIC_REVENUECAT_ANDROID_KEY=goog_xxxxx
   ```
6. Vérifier que les **Entitlements** et **Offerings** sont synchronisés avec iOS

#### Créer le Service Account Google Play :
1. [Google Cloud Console](https://console.cloud.google.com) → Créer un projet
2. **APIs & Services** → Enable **Google Play Android Developer API**
3. **Credentials** → Create **Service Account**
4. Télécharger le fichier JSON
5. [Play Console](https://play.google.com/console) → **Users & Permissions** → Inviter le service account avec permissions **Financial**

### 15.6 Configurer AppsFlyer pour Android

> ⚠️ **IMPORTANT** : AppsFlyer doit aussi être configuré pour Android !

#### Dans AppsFlyer Dashboard :
1. [AppsFlyer](https://hq1.appsflyer.com) → **My Apps** → **Add App**
2. Sélectionner **Android**
3. Renseigner :
   - **Package Name** : `app.peacely.app`
   - **App Name** : Peacely
4. Copier le **Dev Key** (même que iOS) → déjà dans `.env`
5. Configurer **TikTok for Business** integration (même process que iOS)

#### Dans le code (déjà fait) :
Le code `appsflyer.ts` gère automatiquement iOS et Android :
```typescript
appId: Platform.OS === 'ios' ? Config.APPSFLYER_APP_ID : undefined,
```

#### Variables d'environnement :
```env
# AppsFlyer - Même Dev Key pour iOS et Android
EXPO_PUBLIC_APPSFLYER_DEV_KEY=9pD5kLYAB9XT2QnPv32P4T
EXPO_PUBLIC_APPSFLYER_APP_ID=app.peacely.app
```

### 15.7 Connecter RevenueCat ↔ AppsFlyer (iOS + Android)

> Cette intégration envoie automatiquement les events d'achat à AppsFlyer → TikTok

1. [RevenueCat Dashboard](https://app.revenuecat.com) → **Integrations**
2. **AppsFlyer** → **Enable**
3. Renseigner :
   - **AppsFlyer Dev Key** : `9pD5kLYAB9XT2QnPv32P4T`
   - **App ID iOS** : `app.peacely.app`
   - **App ID Android** : `app.peacely.app`
4. Activer les events :
   - [x] `initial_purchase`
   - [x] `trial_started`
   - [x] `renewal`
   - [x] `cancellation`
   - [x] `expiration`

### 15.8 Soumettre pour Review

1. **Release** → **Production** → **Create new release**
2. Uploader le fichier `.aab`
3. Ajouter les release notes
4. **Review and release**

### 15.9 Temps de Review Google

| Type | Durée |
|------|-------|
| Première soumission | 3-7 jours (parfois plus) |
| Mise à jour | 1-3 jours |
| Nouveau compte développeur | Peut être plus long (vérification) |

### 15.10 Différences iOS vs Android

| Aspect | iOS (App Store) | Android (Play Store) |
|--------|-----------------|----------------------|
| Frais développeur | 99$/an | 25$ one-time |
| Review time | 24-48h | 3-7 jours |
| Commission | 15-30% | 15-30% |
| Format build | .ipa | .aab |
| OTA Updates | EAS Update ✅ | EAS Update ✅ |
| TestFlight equivalent | TestFlight | Internal/Closed Testing |

### 15.11 Checklist Play Store

#### Store & Build
- [x] Créer compte Google Play Console (25$)
- [ ] Vérification identité complétée
- [x] App créée dans Play Console (nom: Peacely, type: Appli, gratuit)
- [ ] Store listing rempli (titre, description, screenshots)
- [ ] Content rating (questionnaire IARC)
- [ ] Privacy policy configurée
- [ ] Build .aab généré avec EAS

#### RevenueCat Android
- [ ] App Android ajoutée dans RevenueCat
- [ ] Service Account Google Play créé
- [ ] Credentials JSON uploadées dans RevenueCat
- [ ] Products synchronisés
- [ ] `EXPO_PUBLIC_REVENUECAT_ANDROID_KEY` ajouté dans `.env`

#### AppsFlyer Android
- [ ] App Android ajoutée dans AppsFlyer
- [ ] TikTok for Business connecté (Android)
- [ ] Events configurés (registration, trial, purchase)

#### Intégration RevenueCat ↔ AppsFlyer
- [ ] Integration activée dans RevenueCat
- [ ] Dev Key AppsFlyer renseigné
- [ ] Events activés (initial_purchase, trial_started, renewal, etc.)

#### Soumission
- [ ] In-App Purchases créés dans Play Console
- [ ] Test interne validé
- [ ] Soumission pour review

---

*Document de référence - Dernière mise à jour : 31 janvier 2026 (ajout RevenueCat Android + AppsFlyer Android + intégration RevenueCat↔AppsFlyer)*
