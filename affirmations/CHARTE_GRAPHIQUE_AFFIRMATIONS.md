# Charte Graphique - Apps d'Affirmations

Analyse de 7 screenshots d'apps d'affirmations (I AM, et autres) pour définir les codes visuels du genre.

---

## 1. Analyse des Apps Observées

### App 1 & 4 : I AM (Style Principal)

**Identité visuelle forte et reconnaissable**

| Élément | Description |
|---------|-------------|
| **Fond** | Dégradé doux violet/lavande (1) ou terre/mauve (4) |
| **Typographie affirmation** | **Serif italique**, grande taille, rose/blanc |
| **Illustrations** | Organiques, texturées (grain), papillons, champignons, arbres |
| **Palette** | Violet, rose, lavande, terracotta, doré |
| **Ambiance** | Onirique, féminin, nature mystique |

**Points clés :**
- L'affirmation est CENTRALE et GRANDE
- Illustrations en bas de l'écran (ne gênent pas la lecture)
- Police serif élégante avec italique pour les mots-clés
- Texture grain subtile sur les illustrations
- Boutons flottants pour partage Instagram Stories

---

### App 3 : Catégories (I AM)

**Design des cards de catégories**

| Élément | Description |
|---------|-------------|
| **Fond modal** | Noir/gris foncé semi-transparent |
| **Cards** | Coins très arrondis (16-20px), dégradés abstraits |
| **Typographie** | Sans-serif blanche, taille moyenne |
| **Disposition** | Grid 2 colonnes |
| **Couleurs cards** | Violet, bleu, rose, corail, teal - toutes différentes |

**Catégories identifiées :**
- Contact with yourself
- Relationships
- Self realization
- Physical and mental health
- Abundance of life
- Hard times

---

### App 5 : Style Éditorial (Fabulous-like)

**Approche contenu long-form**

| Élément | Description |
|---------|-------------|
| **Fond** | Blanc pur |
| **Typographie** | Serif noire, lisible, taille lecture |
| **Accents** | Surlignage jaune pour termes clés |
| **CTA** | Bouton rouge/corail "I BELIEVE" |
| **Navigation** | Dots de pagination |

**Particularité :** Style article/blog avec engagement psychologique ("Do you believe?")

---

### App 7 : Style Ultra-Minimaliste

**Approche épurée**

| Élément | Description |
|---------|-------------|
| **Fond** | Gris très clair (#F5F5F5) |
| **Card** | Blanc pur, ombre subtile |
| **Typographie** | Sans-serif noire, gras |
| **CTA** | Bouton noir arrondi "Embrace the Thought" |
| **Icônes** | Outline fines, noires |

**Tab bar :** Today, Inspirations, +, Library, Journey

---

### App 9 : Style Dashboard Moderne

**Approche structurée**

| Élément | Description |
|---------|-------------|
| **Fond** | Gris clair |
| **Typographie titre** | Sans-serif bold "today." |
| **Cards** | Blanc, coins arrondis |
| **Navigation** | YEAR / MONTH / WEEK / DAY |
| **Sous-titre** | Gris clair "Happy day" |

---

### App 10 : Style Corail/Wellness

**Approche chaleureuse**

| Élément | Description |
|---------|-------------|
| **Couleur dominante** | Corail/rose saumon |
| **Fond** | Blanc |
| **Cards** | Corail avec formes abstraites claires |
| **Typographie** | Sans-serif bold blanc sur fond corail |
| **CTA** | Blanc avec texte corail |

---

## 2. Tendances Communes Identifiées

### Typographie

```
AFFIRMATIONS = Serif (élégant, émotionnel, premium)
├── Playfair Display
├── Lora
├── Merriweather
└── Cormorant Garamond

UI / NAVIGATION = Sans-serif (moderne, lisible)
├── SF Pro (iOS natif)
├── Inter
├── Nunito
└── Poppins
```

### Palettes Couleurs Populaires

```
STYLE I AM (Onirique féminin)
├── Violet/Lavande : #B8A9C9, #9B7EBD
├── Rose : #F2B5D4, #E8A4C9
├── Terracotta : #D4A574, #C4956A
└── Doré : #D4AF37, #C9A227

STYLE MINIMALISTE
├── Blanc : #FFFFFF
├── Gris clair : #F5F5F5, #EBEBEB
├── Noir : #1A1A1A, #2D2D2D
└── Accent : variable (corail, bleu, violet)

STYLE TERRE/NATURE
├── Mauve : #8B7D7B, #9C8F8C
├── Beige : #D4C5B9, #E5DCD3
├── Vert sauge : #9CAF88, #A8B99C
└── Terracotta : #CC7A5C, #B8684D
```

### Illustrations

| Style | Caractéristiques |
|-------|-----------------|
| **Organique** | Formes naturelles (plantes, papillons, lune) |
| **Texturé** | Effet grain/noise subtil |
| **Abstrait** | Blobs, formes fluides, dégradés |
| **Position** | Toujours en périphérie, jamais sur le texte |

---

## 3. Recommandation pour Serein

### Direction Artistique Proposée

**Positionnement : "Élégance Apaisante"**

Mélange entre :
- L'aspect onirique de I AM (illustrations, serif)
- La clarté du minimalisme (lisibilité, espaces)

### Palette Recommandée

```scss
// Couleurs principales
$primary: #9B7EBD;       // Violet doux (confiance)
$secondary: #F2B5D4;     // Rose tendre (amour)
$accent: #D4A574;        // Doré/terracotta (chaleur)

// Fonds
$bg-gradient-start: #E8DFF5;  // Lavande clair
$bg-gradient-middle: #F5E6E8; // Rose pâle
$bg-gradient-end: #FDF6F0;    // Crème

// Texte
$text-primary: #2D2D2D;       // Quasi-noir
$text-secondary: #6B6B6B;     // Gris moyen
$text-on-gradient: #FFFFFF;   // Blanc sur gradient
```

### Typographie Recommandée

```scss
// Police affirmations (émotionnel)
$font-affirmation: 'Cormorant Garamond', serif;
// Alternative : 'Playfair Display', 'Lora'

// Police UI (fonctionnel)
$font-ui: 'Nunito', sans-serif;
// Alternative : 'Poppins', 'Inter'

// Tailles
$size-affirmation: 32px;      // Grande, impactante
$size-affirmation-line: 1.3;  // Interligne aéré
$size-title: 24px;
$size-body: 16px;
$size-caption: 14px;
```

### Style des Affirmations

```
Format recommandé :

     "I am worthy
      of love and
      happiness."

- Centré
- Italique sur mots-clés (worthy, love)
- 3-4 lignes max
- Espace généreux autour
```

### Cards de Catégories

```scss
// Style recommandé
.category-card {
  border-radius: 16px;
  background: linear-gradient(135deg, $color1, $color2);
  padding: 20px;
  aspect-ratio: 1.2;

  // Texture subtile
  &::after {
    background-image: url('noise.png');
    opacity: 0.05;
  }
}
```

### Illustrations

**Style recommandé :**
- Formes organiques douces (pas géométriques)
- Palette limitée (2-3 couleurs par illustration)
- Texture grain subtile (5-10% opacity)
- Position : coins et bords de l'écran
- Thèmes : nature, cosmos, éléments apaisants

**Éléments possibles :**
- Feuilles, fleurs stylisées
- Lune, étoiles
- Nuages doux
- Formes abstraites fluides

---

## 4. Exemples d'Écrans

### Écran Affirmation Principal

```
┌─────────────────────────────┐
│  ← [progress bar]      ⚙️   │  Header discret
│                             │
│                             │
│                             │
│      "Je mérite            │
│       d'être               │  Affirmation centrée
│       heureux."            │  Serif italique
│                             │
│                             │
│     🦋 [illustration] 🌿    │  Illustration bas
│                             │
│   [ ♡ ]  [ ↗ ]  [ → ]      │  Actions flottantes
└─────────────────────────────┘
```

### Écran Catégories

```
┌─────────────────────────────┐
│  Choisis ton thème          │
│                             │
│  ┌─────────┐ ┌─────────┐   │
│  │ Confiance│ │ Amour   │   │  Cards colorées
│  │    💜    │ │   💗    │   │  avec dégradés
│  └─────────┘ └─────────┘   │
│  ┌─────────┐ ┌─────────┐   │
│  │ Succès  │ │  Paix   │   │
│  │    ✨    │ │   🌿    │   │
│  └─────────┘ └─────────┘   │
│                             │
│     [ Continuer ]           │
└─────────────────────────────┘
```

---

## 5. À Éviter

| ❌ Ne pas faire | ✅ Faire plutôt |
|----------------|-----------------|
| Police sans-serif pour affirmations | Serif élégante |
| Fond blanc plat | Dégradé doux ou texture |
| Couleurs vives/saturées | Tons pastels/désaturés |
| Illustrations centrées | Illustrations en périphérie |
| Trop de texte | Affirmation courte, impactante |
| UI surchargée | Espaces généreux, minimalisme |
| Stock photos | Illustrations custom/abstraites |

---

## 6. Ressources Recommandées

### Polices (Google Fonts gratuit)
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- [Nunito](https://fonts.google.com/specimen/Nunito)

### Illustrations
- [Blush Design](https://blush.design) - Illustrations customisables
- [Humaaans](https://humaaans.com) - Personnages
- [unDraw](https://undraw.co) - Illustrations SVG

### Inspirations
- Dribbble : "affirmation app", "meditation app ui"
- Behance : "wellness app design"
- Mobbin : Apps catégorie Health & Fitness

---

## 7. Checklist Implémentation

- [ ] Installer polices (Cormorant Garamond + Nunito)
- [ ] Définir palette dans le thème Unistyles
- [ ] Créer composant AffirmationText avec style serif
- [ ] Implémenter dégradés de fond
- [ ] Créer assets illustrations (ou utiliser Blush)
- [ ] Appliquer texture grain subtile
- [ ] Tester sur écrans clairs et sombres
- [ ] Valider accessibilité (contrastes)

---

*Document généré à partir de l'analyse de 7 screenshots d'apps d'affirmations (I AM, et autres)*
