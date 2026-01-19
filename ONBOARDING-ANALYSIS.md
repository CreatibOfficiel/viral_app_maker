# Analyse Onboarding - Référence pour App "Serein"

> Document créé le 18 janvier 2026
> Source : Screenshots Headspace (19 écrans) + Recherches concurrents

---

## Contexte du Projet

### App "Serein"
- **Concept** : App d'affirmations positives ciblée sur l'anxiété, le stress et le sommeil
- **Cible** : 18-35 ans souffrant d'anxiété légère/modérée
- **Modèle** : Freemium avec hard paywall + subscription
- **Marchés** : FR + EN (bilingue)
- **Template** : Shipnative ($99) - cloné dans `/Users/thibaud/Documents/development/serein-app/`

### Stack Technique
- Expo + React Native + TypeScript
- RevenueCat (subscriptions)
- Supabase ou Convex (backend)
- React Navigation (pas Expo Router)
- Zustand (state) + React Query (server state)
- React Native Unistyles 3.0 (styling)

---

## Analyse Headspace - Flow Complet (19 écrans)

### Screenshots disponibles
Dossier : `/Users/thibaud/Documents/development/viral_app/headspace_onboarding/`
Fichiers : `1.webp` à `20.webp` (19 images, pas de 18.webp)

### Breakdown du Flow

#### Phase 1 : Emotional Priming (Écrans 1-4)
| Écran | Fichier | Contenu | Technique |
|-------|---------|---------|-----------|
| 1 | `1.webp` | "Breathe out" + mascotte orange (yeux fermés, sourire) | Animation de respiration |
| 2 | `2.webp` | Logo Headspace centré | Branding moment |
| 3 | `3.webp` | "Breathe in" + mascotte monte | Continuation animation |
| 4 | `4.webp` | "Breathe out" + mascotte descend | Fin animation |

**Insight clé** : Headspace met l'utilisateur dans un état calme AVANT de demander quoi que ce soit. Réduit la friction cognitive.

#### Phase 2 : Account Creation (Écrans 5-12)
| Écran | Fichier | Contenu |
|-------|---------|---------|
| 5 | `5.webp` | Welcome - "Support for all of life's moments" + checkbox T&C |
| 6 | `6.webp` | Welcome avec checkbox cochée |
| 7 | `7.webp` | Social logins : Apple, Google, Facebook, Email, SSO |
| 8 | `8.webp` | Formulaire : First name, Last name, Email, Password |
| 9 | `9.webp` | Formulaire rempli + règles password |
| 10 | `10.webp` | Erreur password (modal) |
| 11 | `11.webp` | Formulaire avec erreur password (bordure rouge) |
| 12 | `12.webp` | Formulaire validé (tous les checks verts) |

**Insight clé** : Propose 5 méthodes de signup. Apple/Google en premier (moins de friction).

#### Phase 3 : Value Proposition (Écrans 13-15)
| Écran | Fichier | Titre | Sous-titre | Technique |
|-------|---------|-------|------------|-----------|
| 13 | `13.webp` | "Mindfulness for any moment" | "Stress less. Move more. Sleep soundly." | Features |
| 14 | `14.webp` | "We're better together" | "You're joining millions of people caring for their minds." | Social Proof |
| 15 | `15.webp` | "Science-backed meditation" | "Just 10 days of Headspace can increase happiness by 16%." | Crédibilité/Stats |

**Insight clé** : 3 slides avec pagination (dots). Ordre : Features → Community → Science. Chaque slide a une illustration colorée.

#### Phase 4 : Personalization (Écrans 16-19)
| Écran | Fichier | Contenu |
|-------|---------|---------|
| 16 | `16.webp` | "What's on your mind?" - Options non sélectionnées |
| 17 | `17.webp` | "What's on your mind?" - "Manage anxiety" sélectionné |
| 19 | `19.webp` | "Let's create your meditation practice" - Résultat personnalisé |

**Options de personnalisation :**
- Manage anxiety
- Sleep soundly
- Be present and mindful
- Reduce stress
- Feel calm and relaxed
- Something else

**Insight clé** : Une seule question, réponse immédiate personnalisée. L'utilisateur se sent compris.

#### Phase 5 : Paywall (Écran 20)
| Élément | Détail |
|---------|--------|
| Fichier | `20.webp` |
| Titre | "How your trial works" |
| Sous-titre | "First 14 days free, then $69.99 ($5.83/month)" |
| Toggle | Annual / Monthly (Annual sélectionné par défaut) |
| Timeline | Today → In 12 days (reminder) → In 14 days (charged) |
| CTA | "Start my free trial" (bleu, pleine largeur) |
| Secondary | "Restore Purchase" (lien texte) |
| Close | Bouton X en haut à droite |

**Insight clé** :
- Trial 14 jours (long = confiance)
- Timeline visuelle = transparence
- Reminder avant facturation = réduit anxiété
- Prix annuel affiché en mensuel ($5.83/month)
- Annuel mis en avant (meilleur LTV)

---

## Design System Headspace

### Couleurs
- **Primary** : Orange #FF8C00 (mascotte, accents)
- **Secondary** : Bleu #2B7DE9 (CTAs, liens)
- **Background** : Jaune/Orange gradient (haut) + Blanc (bas)
- **Text** : Noir/Gris foncé

### Mascotte
- Forme : Cercle orange avec visage minimaliste
- Expression : Yeux fermés (lignes courbes), sourire doux
- Animation : Monte/descend avec la respiration

### Typographie
- Titres : Sans-serif bold, ~28-32px
- Sous-titres : Sans-serif regular, ~16-18px, gris
- CTAs : Sans-serif semibold, blanc sur bleu

### Composants UI
- **Boutons primaires** : Bleu #2B7DE9, coins arrondis (radius ~25px), pleine largeur
- **Boutons secondaires** : Fond gris clair/blanc, bordure légère
- **Options de sélection** : Pills avec checkbox à droite, fond blanc, ombre légère
- **Pagination** : 3 dots, actif = noir, inactif = gris

---

## Onboarding "Serein" - Spécifications

### Flow Proposé (8 écrans)

#### Écran 1 : Animation d'ouverture
- **Contenu** : Affirmation qui apparaît doucement + animation breathing
- **Durée** : 3-4 secondes auto, puis transition
- **Objectif** : Calmer, créer l'ambiance

#### Écran 2 : Welcome
- **Titre** : "Bienvenue" / "Welcome"
- **Sous-titre** : "Tu mérites la paix intérieure." / "You deserve inner peace."
- **CTA** : "Commencer" / "Get Started"
- **Objectif** : Premier contact émotionnel

#### Écrans 3-5 : Value Slides (swipeable)
| Slide | Titre FR | Titre EN | Contenu |
|-------|----------|----------|---------|
| 1 | "Des mots qui apaisent" | "Words that heal" | Présentation des affirmations |
| 2 | "Rejoins des milliers d'autres" | "Join thousands of others" | Social proof |
| 3 | "Prouvé scientifiquement" | "Science-backed" | Stat sur efficacité affirmations |

#### Écran 6 : Goal Selection
- **Titre** : "Qu'est-ce qui te pèse ?" / "What's weighing on you?"
- **Options** :
  - Anxiété générale / General anxiety
  - Troubles du sommeil / Sleep issues
  - Stress au travail / Work stress
  - Manque de confiance / Low confidence
  - Pensées négatives / Negative thoughts
  - Autre chose / Something else

#### Écran 7 : Personnalisation (fake loading)
- **Titre** : "On prépare tes affirmations..." / "Preparing your affirmations..."
- **Animation** : Progress bar ou spinner
- **Durée** : 2-3 secondes
- **Objectif** : Créer anticipation + sentiment de personnalisation

#### Écran 8 : Paywall
- **Titre** : "Commence ton essai gratuit" / "Start your free trial"
- **Timeline** :
  - Aujourd'hui : Accès complet
  - Jour 2 : Rappel avant fin
  - Jour 3 : Facturation (annulable)
- **Prix** :
  - Annuel : €29.99/an (€2.50/mois) - RECOMMANDÉ
  - Mensuel : €4.99/mois
- **CTA** : "Essayer gratuitement" / "Try for free"
- **Secondary** : "Continuer gratuitement" (accès limité)
- **Restore** : "Restaurer mes achats"

---

## Fichiers Shipnative à Modifier

### Onboarding
```
/Users/thibaud/Documents/development/serein-app/apps/app/app/screens/OnboardingScreen.tsx
```
- Actuellement : 3 steps (Welcome, Goals, Notifications)
- À modifier : 8 steps selon notre flow

### Paywall
```
/Users/thibaud/Documents/development/serein-app/apps/app/app/screens/PaywallScreen.tsx
```
- Actuellement : Generic "Unlock Pro" avec features list
- À modifier : Timeline style Headspace, textes adaptés

### Traductions
```
/Users/thibaud/Documents/development/serein-app/apps/app/app/i18n/
```
- Ajouter toutes les clés FR/EN pour l'onboarding

### Composants à créer
```
/Users/thibaud/Documents/development/serein-app/apps/app/app/components/
```
- `BreathingAnimation.tsx` - Animation d'ouverture
- `ValueSlide.tsx` - Slides de value proposition
- `GoalSelector.tsx` - Sélection des objectifs
- `PaywallTimeline.tsx` - Timeline du trial

---

## Contenu à Générer

### Affirmations (400+ au total)
À générer avec Claude, structure JSON :
```json
{
  "id": "anx-001",
  "text_fr": "Je suis en sécurité. Tout va bien se passer.",
  "text_en": "I am safe. Everything will be okay.",
  "category": "anxiety",
  "premium": false
}
```

### Catégories
| ID | FR | EN | Quantité |
|----|----|----|----------|
| anxiety | Anxiété | Anxiety | 100 |
| sleep | Sommeil | Sleep | 75 |
| stress | Stress | Stress | 60 |
| confidence | Confiance | Confidence | 60 |
| gratitude | Gratitude | Gratitude | 50 |
| calm | Calme | Calm | 55 |

---

## Prochaines Étapes

1. [ ] Setup Shipnative (`yarn install && yarn setup`)
2. [ ] Générer les 400+ affirmations (JSON)
3. [ ] Modifier OnboardingScreen.tsx (8 steps)
4. [ ] Modifier PaywallScreen.tsx (timeline)
5. [ ] Créer les composants custom
6. [ ] Ajouter les traductions FR/EN
7. [ ] Configurer RevenueCat (produits, pricing)
8. [ ] Tester sur simulateur iOS
9. [ ] Créer compte TikTok pour marketing
10. [ ] Préparer assets App Store

---

## Ressources

### Transcriptions YouTube analysées
- Dossier Harry : `/Users/thibaud/Documents/development/viral_app/transcriptions/harryjmg/`
- Autres playlists : `/Users/thibaud/Documents/development/viral_app/transcriptions/`

### Documents d'analyse
- Analyse Harry : `/Users/thibaud/Documents/development/viral_app/harry-analysis.md`
- Insights combinés : `/Users/thibaud/Documents/development/viral_app/combined-insights.md`
- Plan projet : `/Users/thibaud/Documents/development/viral_app/PLAN.md`

### Outils mentionnés
- Mobbin : https://mobbin.com/search/ios/flows?filter=flowActions.Onboarding
- RevenueCat : https://www.revenuecat.com/
- Cursor : IDE avec IA
- Gladia : Transcription audio (script dans `/scripts/youtube-to-gladia.ts`)

---

---

## Points Clés Design à Retenir

### 1. Calmer AVANT de vendre

**Ce que fait Headspace** : Animation de respiration (4 écrans) avant même le signup

**Pourquoi ça marche** :
- L'utilisateur est dans un état émotionnel positif
- Réduit la résistance au signup/paywall
- Prouve la valeur de l'app immédiatement

**Pour Serein** : Commencer avec une affirmation animée qui apparaît doucement

---

### 2. Layout épuré et aéré

**Pattern observé** :
- Beaucoup d'espace blanc
- Un seul message par écran
- Mascotte/illustration = point focal visuel
- Texte centré, jamais plus de 2-3 lignes

**Règle** : Une idée = un écran. Pas de surcharge.

---

### 3. Hiérarchie visuelle claire

**Structure type Headspace** :
```
┌─────────────────────────────────────┐
│                                     │
│     [Illustration/Mascotte]         │  ← 40% écran (haut)
│                                     │
├─────────────────────────────────────┤
│                                     │
│     Titre bold (28-32px)            │
│     Sous-titre léger (16-18px)      │
│                                     │
│                                     │
│     [CTA principal - bleu]          │
│     [CTA secondaire - texte]        │
│                                     │
└─────────────────────────────────────┘
```

---

### 4. Couleurs : Adapter au segment

| App | Palette | Feeling |
|-----|---------|---------|
| **Headspace** | Orange/Jaune vif | Énergie, optimisme |
| **Calm** | Bleu nuit, vert | Calme, nature |
| **Serein** (recommandé) | Bleu nuit, violet doux | Calme, nuit, rêve |

**Pour anxiété** : Couleurs froides = plus apaisantes que couleurs chaudes

---

### 5. Personnalisation = 1 question suffit

**Ce que fait Headspace** :
- UNE seule question : "What's on your mind?"
- 6 options claires (pas de slider compliqué)
- Réponse immédiate personnalisée

**Pourquoi** : L'utilisateur se sent compris sans effort. Plus de questions = plus d'abandon.

**Contre-exemple Harry** : 26 écrans d'onboarding. Trop long ? Mais il segmente bien son audience.

---

### 6. Paywall transparent (Timeline)

**Le pattern qui convertit** :
```
Today          → Accès complet (icône cadenas ouvert)
    |
In X days      → Rappel (icône cloche)
    |
In Y days      → Facturation (icône étoile)
               "Cancel anytime before"
```

**Pourquoi** : Élimine l'anxiété de "je vais oublier d'annuler". Transparence = confiance.

---

### 7. Prix présenté intelligemment

**Techniques observées** :
- Afficher le prix ANNUEL en premier
- Montrer le prix MENSUEL équivalent : "$69.99 ($5.83/month)"
- Toggle Annual/Monthly (Annual sélectionné par défaut)
- Prix barré + promo (Harry : -43%)

**Pour Serein** : "€49.99 → €29.99/an (€2.50/mois)" + badge "-40%"

---

### 8. Micro-interactions

**Ce que fait Headspace** :
- Checkbox avec animation de check
- Options qui changent de couleur au tap
- Transitions douces entre écrans
- Mascotte qui "respire"

**Ce que fait Harry (Jour 85)** :
- Petits sons de feedback
- Animations sur les cœurs
- Progress bar en haut
- Emojis/icônes partout

**Pour Serein** : Animations subtiles (fade, scale) sur les interactions. Pas trop = distraction.

---

### 9. Les 3 phases de Harry (Jour 87)

Harry décrit sa structure d'onboarding :

**Phase 1 : Récompense immédiate**
> "Un petit biscuit. Tu te dis que l'app est vraiment bien, tu sens l'expérience bien faite."

**Phase 2 : Questions ciblées**
> "Des questions qui permettent à l'utilisateur de gagner en clarté sur le problème."

**Phase 3 : Paywall**
> "C'est parti et c'est gratuit les gars."

**Conseil Harry** : "Les petits sucres, le mieux c'est de les disséminer dans toute l'application."

---

### 10. Erreurs à éviter

| Erreur | Exemple | Solution |
|--------|---------|----------|
| Trop d'écrans | Harry : 26 écrans | 8-10 max pour une app simple |
| Demander l'email trop tôt | Avant de montrer la valeur | Montrer d'abord, demander après |
| Animations excessives | "Le cœur fait des loopings" (Harry) | Subtil > Spectaculaire |
| Prix incohérents | Trial 7j affiché, 3j en réalité (bug Harry) | Tester le flow complet |
| Paywall agressif | Popup immédiat | Attendre après personnalisation |

---

## Résumé en une phrase

> **"Calme → Valeur → Personnalisation → Transparence"**

C'est le flow psychologique optimal pour convertir sans friction.

---

*Document de référence pour sessions futures - Dernière mise à jour : 18 janvier 2026*
