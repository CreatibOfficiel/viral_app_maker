# Plan de Développement : App Affirmations Anti-Anxiété

## Concept

**Nom de travail** : "Serein" (ou "Calm Words" pour l'anglais)

**Pitch** : Une app minimaliste d'affirmations positives ciblée sur l'anxiété, le stress et le sommeil. Design apaisant, contenu en FR + EN, monétisation via hard paywall + subscription.

**Cible** : 18-35 ans souffrant d'anxiété légère/modérée, stress quotidien, troubles du sommeil.

---

## Stack Technique

| Outil | Usage |
|-------|-------|
| **Expo + React Native** | Framework cross-platform |
| **TypeScript** | Langage |
| **RevenueCat** | Gestion subscriptions |
| **Expo Router** | Navigation |
| **AsyncStorage** | Stockage local (favoris) |
| **JSON local** | Contenu des affirmations |
| **Cursor / Claude** | Vibe coding |

**Pas de backend** — Tout est local pour la v1. Les affirmations sont dans un fichier JSON embarqué.

---

## Architecture de l'App

```
src/
├── app/                    # Expo Router
│   ├── (onboarding)/       # Flow d'onboarding
│   │   ├── index.tsx       # Écran 1: Welcome
│   │   ├── anxiety-level.tsx
│   │   ├── sleep-quality.tsx
│   │   ├── goals.tsx
│   │   └── personalization.tsx
│   ├── (main)/             # App principale (après paywall)
│   │   ├── index.tsx       # Feed d'affirmations
│   │   ├── categories.tsx  # Liste des catégories
│   │   ├── favorites.tsx   # Affirmations sauvegardées
│   │   └── settings.tsx    # Paramètres
│   ├── paywall.tsx         # Hard paywall
│   └── _layout.tsx
├── components/
│   ├── AffirmationCard.tsx
│   ├── CategoryPill.tsx
│   ├── OnboardingSlide.tsx
│   └── PaywallScreen.tsx
├── data/
│   ├── affirmations-fr.json
│   └── affirmations-en.json
├── hooks/
│   ├── useAffirmations.ts
│   ├── useFavorites.ts
│   └── useSubscription.ts
├── lib/
│   ├── revenueCat.ts
│   └── storage.ts
└── constants/
    ├── colors.ts
    └── typography.ts
```

---

## Features MVP (Semaine 1-2)

### 1. Onboarding (5-7 écrans)

| Écran | Contenu | But |
|-------|---------|-----|
| Welcome | "Bienvenue. Tu mérites la paix intérieure." | Émotion |
| Anxiety Level | Slider 1-10 | Personnalisation |
| Sleep Quality | "Comment dors-tu ?" | Personnalisation |
| Main Struggle | Checkboxes (anxiété sociale, overthinking, stress travail...) | Segmentation |
| Goals | "Que veux-tu améliorer ?" | Engagement |
| Personalization | "On prépare ton programme..." (fake loading) | Anticipation |
| Stats | "87% des utilisateurs se sentent mieux après 7 jours" | Social proof |

### 2. Paywall (Hard)

- **Après** l'onboarding, **avant** l'accès à l'app
- Free trial 3 jours
- Options : Hebdo (€4.99) / Annuel (€29.99)
- Bouton "Restore purchases"
- Design clean, pas agressif

### 3. Feed Principal

- Scroll vertical infini
- Une affirmation par écran (gros texte centré)
- Swipe up = suivante
- Double tap = favori (animation cœur)
- Fond dégradé doux (couleurs apaisantes)

### 4. Catégories

- Anxiété générale
- Anxiété sociale
- Sommeil
- Stress au travail
- Gratitude
- Confiance en soi
- Lâcher-prise

### 5. Favoris

- Liste des affirmations sauvegardées
- Possibilité de supprimer

### 6. Widget iOS (Semaine 2)

- Affirmation du jour sur l'écran d'accueil
- Refresh quotidien
- Tap → ouvre l'app

---

## Design Guidelines

### Couleurs

```typescript
const colors = {
  // Fond principal - dégradés doux
  background: {
    primary: '#1a1a2e',    // Bleu nuit profond
    secondary: '#16213e',  // Bleu marine
    accent: '#0f3460',     // Bleu moyen
  },
  // Texte
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255,255,255,0.7)',
    muted: 'rgba(255,255,255,0.5)',
  },
  // Accents
  accent: {
    primary: '#e94560',    // Rose doux
    secondary: '#7c3aed',  // Violet
    success: '#10b981',    // Vert menthe
  }
};
```

### Typographie

- **Affirmations** : Serif élégant (Playfair Display ou similaire)
- **UI** : Sans-serif clean (Inter ou SF Pro)
- **Tailles** : Affirmations en 28-32px, très lisible

### Ambiance

- Minimaliste, épuré
- Animations douces (fade, scale subtil)
- Pas de distractions visuelles
- Feeling "premium" et "calme"

---

## Contenu : Affirmations

### Structure JSON

```json
{
  "id": "anx-001",
  "text_fr": "Je suis en sécurité. Tout va bien se passer.",
  "text_en": "I am safe. Everything will be okay.",
  "category": "anxiety",
  "premium": false
}
```

### Répartition

| Catégorie | Gratuites | Premium | Total |
|-----------|-----------|---------|-------|
| Anxiété générale | 20 | 80 | 100 |
| Anxiété sociale | 15 | 60 | 75 |
| Sommeil | 15 | 60 | 75 |
| Stress travail | 10 | 50 | 60 |
| Gratitude | 10 | 40 | 50 |
| Confiance | 10 | 50 | 60 |
| Lâcher-prise | 10 | 40 | 50 |
| **Total** | **90** | **380** | **470** |

### Génération du contenu

Utiliser Claude pour générer les affirmations avec ce prompt :

```
Génère 50 affirmations positives pour quelqu'un souffrant d'anxiété légère.
- Ton doux et bienveillant
- Phrases courtes (max 15 mots)
- Pas de négations ("je ne suis pas anxieux" ❌)
- Formulations positives ("je suis calme" ✅)
- Varier les formules (Je suis, Je mérite, Je choisis, Aujourd'hui je...)
```

---

## Monétisation

### Pricing Strategy

| Option | Prix | LTV estimé |
|--------|------|------------|
| Hebdomadaire | €4.99/sem | Faible (churn élevé) |
| **Annuel** | €29.99/an | **Élevé (cible)** |

### Paywall Best Practices

1. Mettre l'annuel en premier (highlighted)
2. Montrer l'économie ("Économise 75%")
3. Free trial 3 jours obligatoire
4. Bouton CTA : "Commencer mon essai gratuit"
5. Petit texte : "Annule quand tu veux"

### RevenueCat Setup

- Créer des "Entitlements" : `premium`
- Produits : `weekly_499`, `yearly_2999`
- Activer le paywall A/B testing plus tard

---

## Marketing

### Phase 1 : Contenu Organique TikTok (Semaine 3-4)

**Formats à tester :**

1. **Screen recording de l'app**
   - "POV: tu scrolles ça à 3h du matin"
   - Musique douce en fond

2. **Text-on-screen relatable**
   - "Lis ça si t'as de l'anxiété sociale"
   - Affirmation en gros texte

3. **Talking head**
   - "J'ai créé une app pour les gens comme moi qui ont de l'anxiété"
   - Authentique, pas commercial

4. **Before/After format**
   - "Mon brain à 3h du matin" vs "Après 5 min sur cette app"

**Fréquence** : 2-3 vidéos/jour pendant 2 semaines

### Phase 2 : Paid Ads (Semaine 5+)

- Prendre les vidéos organiques qui marchent
- Les mettre en TikTok Ads / Meta Ads
- Budget : €30-50/jour pour commencer
- Objectif : Install + Trial Start
- Optimiser sur le ROAS

### Tracking

- **AppsFlyer** ou **Adjust** pour l'attribution
- **Mixpanel** pour les events in-app
- Events clés :
  - `onboarding_completed`
  - `paywall_viewed`
  - `trial_started`
  - `subscription_purchased`
  - `affirmation_favorited`

---

## Timeline

### Semaine 1 : Setup + Onboarding + Paywall

- [ ] Init projet Expo
- [ ] Setup RevenueCat
- [ ] Créer les écrans d'onboarding
- [ ] Implémenter le paywall
- [ ] Design système (couleurs, typo)

### Semaine 2 : Feed + Features + Widget

- [ ] Feed d'affirmations (scroll)
- [ ] Système de catégories
- [ ] Favoris (AsyncStorage)
- [ ] Générer 200+ affirmations (Claude)
- [ ] Widget iOS basique
- [ ] Settings screen

### Semaine 3 : Polish + Soumission

- [ ] Animations et polish UI
- [ ] Tests sur devices réels
- [ ] Screenshots App Store
- [ ] Soumission TestFlight
- [ ] Soumission App Store

### Semaine 4 : Marketing

- [ ] Créer compte TikTok dédié
- [ ] Produire 20 vidéos
- [ ] Publier 2-3/jour
- [ ] Analyser les performances
- [ ] Préparer les ads

---

## Métriques de Succès

| Métrique | Objectif Mois 1 |
|----------|-----------------|
| Downloads | 1,000+ |
| Trial Starts | 200+ (20% conversion) |
| Paid Conversions | 40+ (20% des trials) |
| MRR | €500+ |

---

## Prochaine Étape

1. Créer le projet Expo
2. Setup RevenueCat (compte + produits)
3. Commencer l'onboarding

---

*Plan créé le 18 janvier 2026*
