# Stratégie Pricing - App "Serein"

> Document créé le 18 janvier 2026
> Sources : Transcriptions Harry, App Store, recherches concurrents

---

## 1. Benchmark Concurrents

### Apps Méditation (Premium)

| App | Mensuel | Annuel | Lifetime | Trial |
|-----|---------|--------|----------|-------|
| **Headspace** | $12.99 | $69.99 | ❌ | 14 jours |
| **Calm** | $16.99 | $69.99-79.99 | $399.99 | 7 jours |

**Source** : [Headspace vs Calm Pricing Teardown](https://sbigrowth.com/insights/headspace-calm-pricing)

### Apps Affirmations (Notre segment)

| App | Mensuel | Annuel | Lifetime | Trial |
|-----|---------|--------|----------|-------|
| **I AM Daily Affirmations** | $14.99 | $35.99 | $99.99 | 3 jours |
| **Punchlines (Harry)** | - | €64.99 (ou €34.99 promo) | - | 7 jours |

**Sources** :
- [I AM - App Store](https://apps.apple.com/us/app/i-am-daily-affirmations/id874656917)
- Transcription Harry Jour 87/90

---

## 2. Analyse du Pricing de Harry (Punchlines)

### Structure observée (Jour 87/90)

```
Annuel plein :     €64.99
Annuel promo :     €34.99 (-43%)
Trial :            7 jours (parfois 3 jours)
```

### Techniques utilisées par Harry

1. **Fausse promo permanente**
   > "Il y a une petite réduc, vous avez vu, 43% de réduction si tu commences maintenant. Seulement si tu commences maintenant."

   → Crée l'urgence, même si la promo est toujours active.

2. **Prix barré**
   - Affiche €64.99 barré
   - Prix "promo" €34.99 en évidence
   - Psychologie : l'utilisateur pense faire une bonne affaire

3. **Trial 7 jours**
   - Plus long que I AM (3 jours)
   - Laisse le temps de s'habituer
   - Rappel avant facturation

### Résultats Harry
- Jour 85 : 180€ MRR, ~600€ total gagné
- Conversion onboarding v1 : 4-5%
- Objectif après refonte : x6 sur la rentabilité

---

## 3. Stratégie Recommandée pour "Serein"

### Option Retenue : Hybride (Hebdo + Annuel avec promo)

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

### Justification des prix

| Plan | Prix | Vs I AM | Vs Harry | Logique |
|------|------|---------|----------|---------|
| **Annuel promo** | €29.99 | -17% ($35.99) | -14% (€34.99) | Légèrement moins cher = moins de friction |
| **Annuel "plein"** | €49.99 | +39% | -23% (€64.99) | Prix fictif pour ancrage |
| **Hebdo** | €4.99 | N/A | N/A | Capture impulsive, prix d'un café |

### Pourquoi cet écart Annuel vs Hebdo ?

- Hebdo : €4.99 × 52 = **€259.48/an**
- Annuel : €29.99/an = **économie de 88%**

→ Pousse fortement vers l'annuel (meilleur LTV)

---

## 4. Configuration RevenueCat

### Produits à créer

| Product ID | Type | Prix | Trial |
|------------|------|------|-------|
| `serein_weekly_499` | Auto-renewable | €4.99/semaine | 3 jours |
| `serein_yearly_2999` | Auto-renewable | €29.99/an | 3 jours |

### Offering

```
Offering: default
├── Package: weekly
│   └── Product: serein_weekly_499
└── Package: annual
    └── Product: serein_yearly_2999
```

### Entitlement

```
Entitlement: premium
├── Grants access to: All premium content
└── Products: serein_weekly_499, serein_yearly_2999
```

---

## 5. Paywall Design

### Éléments obligatoires (App Store)

- [ ] Prix clairement affiché
- [ ] Durée de l'abonnement
- [ ] Durée du trial
- [ ] Date de facturation
- [ ] Lien "Restore purchases"
- [ ] Liens Terms & Privacy Policy

### Timeline visuelle (style Headspace)

```
Aujourd'hui          Jour 2              Jour 3
    ●──────────────────●───────────────────●
    │                  │                   │
 Accès            Rappel              Facturation
 complet          email               (annulable)
```

### Copy recommandé

**Titre** : "Commence ton voyage vers la sérénité"

**Sous-titre** : "3 jours gratuits, annule quand tu veux"

**CTA principal** : "Essayer gratuitement"

**CTA secondaire** : "Continuer avec la version limitée"

---

## 6. Métriques à suivre

| Métrique | Cible | Calcul |
|----------|-------|--------|
| Trial Start Rate | >15% | Trials / Installs |
| Trial Conversion | >20% | Paid / Trials |
| Overall Conversion | >3% | Paid / Installs |
| ARPU | >€1.50 | Revenue / Active Users |
| LTV | >€15 | Revenue / Paying Users |

### Formule rentabilité pub (ROAS)

```
ROAS = (Revenue - Apple Commission 30%) / Ad Spend

Exemple :
- 1000 installs à €0.50 CPI = €500 ad spend
- 3% conversion = 30 paying users
- 30 × €29.99 = €899.70 revenue
- Après Apple (70%) = €629.79
- ROAS = €629.79 / €500 = 1.26x ✓ Rentable
```

---

## 7. Tests A/B à faire

### Phase 1 : Prix

| Variant | Annuel | Hebdo |
|---------|--------|-------|
| A (control) | €29.99 | €4.99 |
| B | €34.99 | €5.99 |
| C | €24.99 | €3.99 |

### Phase 2 : Trial Duration

| Variant | Trial |
|---------|-------|
| A | 3 jours |
| B | 7 jours |

### Phase 3 : Paywall Design

| Variant | Style |
|---------|-------|
| A | Timeline (Headspace) |
| B | Features list |
| C | Social proof focused |

---

## 8. Checklist App Store

### In-App Purchases à configurer

- [ ] Créer les produits dans App Store Connect
- [ ] Ajouter les langues (FR, EN)
- [ ] Screenshot pour review team
- [ ] Soumettre pour validation

### Durée de validation Apple

- Nouveaux produits : 24-48h généralement
- Harry a eu des problèmes de timing (produits approuvés après l'app)
- **Conseil** : Soumettre les produits 2-3 jours avant l'app

---

## Résumé Décision Finale

| Élément | Choix |
|---------|-------|
| **Annuel affiché** | €49.99 barré → €29.99 |
| **Réduction** | -40% "nouveaux membres" |
| **Hebdo** | €4.99 |
| **Trial** | 3 jours |
| **Paywall style** | Timeline Headspace |

---

*Document de référence pricing - Dernière mise à jour : 18 janvier 2026*
