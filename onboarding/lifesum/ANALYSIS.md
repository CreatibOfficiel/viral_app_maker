# Analyse Onboarding - Lifesum

> App de nutrition/régime - 31 écrans analysés
> Screenshots : `1.png` à `31.png`

---

## Résumé

**Type d'app** : Nutrition, perte de poids, suivi alimentaire
**Segment** : Health & Fitness
**Pertinence pour Serein** : ⭐⭐ (Moyenne - structure questionnaire intéressante)

---

## Flow Complet

### Phase 1 : Splash + Welcome (Écrans 1-2)
| Écran | Contenu |
|-------|---------|
| 1 | Splash screen vert avec logo Lifesum + loader |
| 2 | Welcome - Photo femme souriante + "Healthy eating. Simplified." + CTA "Get Started" |

**Technique** : Image aspirationnelle (personne heureuse) + proposition de valeur simple

### Phase 2 : Questionnaire Personnalisation (Écrans 3-14)
| Écran | Question | Type d'input |
|-------|----------|--------------|
| 3-4 | "What goal do you have in mind?" | Cards (Lose/Maintain/Gain weight) |
| 5-6 | "What's your gender?" | Cards (Female/Male) |
| 7-8 | "How old are you?" | Number picker |
| 9-10 | "What's your current weight?" | Scroll picker (kg/lbs) |
| 11-12 | "What's your height?" | Scroll picker |
| 13-14 | "What's your goal weight?" | Scroll picker |

**Pattern clé** : Progress bar segmentée en haut (6 segments verts)

**Texte récurrent** : "We use this information to calculate and provide you with daily personalized recommendations."

### Phase 3 : Signup (Écran 15)
- Illustration watercolor (personne qui court + plantes)
- Popup iOS "Save Password in Keychain"

### Phase 4 : Value Slides (Écrans 16-19)
Probablement des slides montrant les features (non capturés en détail)

### Phase 5 : Paywall (Écrans 20-25)
| Élément | Détail |
|---------|--------|
| Header | "Lifesum PREMIUM" badge + image food |
| Social Proof | ⭐⭐⭐⭐⭐ "I've lost 10 pounds in the last month" - Kevin, US |
| Stat | "Join 55+ million success stories" |
| Promo Banner | "50% off Premium" (vert) |
| Options | 3 mois / **6 mois (MOST POPULAR)** / 12 mois |

**Pricing observé** :
| Plan | Prix | Prix/mois | Badge |
|------|------|-----------|-------|
| 3 mois | $18.48 ~~$36.98~~ | $6.16/month | - |
| **6 mois** | $29.98 ~~$58.98~~ | **$5.00/month** | MOST POPULAR |
| 12 mois | $36.98 ~~$73.98~~ | $3.08/month | - |

**Footer** :
- "Secured with App Store. Auto-renewable billing. Cancel anytime."
- RESTORE PURCHASE | REDEEM CODE
- Privacy Policy & Terms of Use

### Phase 6 : Confirmation (Écran 25)
- Modal "You're all set - Your purchase was successful" + OK button

---

## Design System

### Couleurs
| Usage | Couleur |
|-------|---------|
| Primary | Vert #4CAF50 |
| Background | Beige clair #F5F5DC |
| Cards | Blanc |
| Text | Noir/Gris foncé |
| CTA | Vert vif |

### Typographie
- Titres : Serif élégant (style Playfair)
- Body : Sans-serif clean
- Questions : Grande taille, centrées

### Composants
- **Progress bar** : Segments horizontaux, vert = complété
- **Cards de sélection** : Blanc, coins arrondis, ombre légère
- **Picker scroll** : Style iOS natif customisé
- **CTA** : Vert, pleine largeur, coins arrondis

---

## Points Clés à Retenir

### ✅ À copier

1. **Progress bar segmentée**
   - Montre clairement la progression
   - Chaque segment = une question

2. **Justification des questions**
   - "We use this information to..." rassure sur la vie privée
   - L'utilisateur comprend pourquoi on demande ces infos

3. **Paywall avec 3 options**
   - Middle option = "MOST POPULAR" (effet d'ancrage)
   - Prix barré + nouveau prix (valeur perçue)

4. **Social proof quantifié**
   - "55+ million success stories"
   - Témoignage avec nom + pays

5. **Promo visible**
   - Banner "50% off" au-dessus des prix
   - Crée l'urgence

### ❌ À éviter

1. **Trop de questions**
   - 6+ questions avant le paywall peut fatiguer
   - Pour une app d'affirmations, 2-3 questions suffisent

2. **Questions trop intimes**
   - Poids, âge, taille = OK pour nutrition
   - Pas adapté pour notre app

---

## Pertinence pour Serein

| Élément | Applicable | Notes |
|---------|------------|-------|
| Progress bar | ✅ Oui | Adapter avec moins de segments |
| Cards de sélection | ✅ Oui | Pour la question des objectifs |
| Paywall 3 options | ⚠️ Peut-être | On préfère Hebdo + Annuel |
| Social proof | ✅ Oui | "X personnes utilisent Serein" |
| Promo banner | ✅ Oui | "-40% nouveaux membres" |

---

*Analyse créée le 18 janvier 2026*
