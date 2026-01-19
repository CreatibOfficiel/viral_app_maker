# Analyse de l'Onboarding I AM Daily Affirmations

**App**: I AM - Daily Affirmations
**Revenue**: ~$400K/mois
**Total écrans analysés**: 51 écrans
**Date d'analyse**: 18 janvier 2026

---

## Résumé Exécutif

L'onboarding de I AM est **extrêmement long et détaillé** (~45+ écrans actifs) avec un **branching conditionnel** basé sur les réponses. La stratégie repose sur:

1. **Social proof immédiat** ("+20 millions de vies changées")
2. **Questions progressives** du général au spécifique
3. **Écrans éducatifs intercalés** pour justifier la valeur
4. **Personnalisation poussée** (nom, préférences, objectifs)
5. **Paywall avec timeline** montrant le parcours essai gratuit

---

## Structure Détaillée des Écrans

### PHASE 1: INTRO & SOCIAL PROOF (Écrans 1-4)

| # | Type | Contenu FR | Notes |
|---|------|-----------|-------|
| 1 | Splash | Logo I AM + "+20 millions de vies ont changé" | Animation du logo |
| 2 | Splash | + "Transformez votre état d'esprit grâce à des affirmations puissantes" | Texte apparaît progressivement |
| 3 | Splash + Review | + ⭐⭐⭐⭐⭐ "J'aime recevoir de petits rappels pour garder une pensée positive tout au long de la journée" | Social proof client |
| 4 | Splash + Review | + "Cette application m'a aidé à traverser tant de moments difficiles" + **[Commencer]** | 2ème review + CTA |

**Technique clé**: Animation progressive qui révèle les éléments un par un, créant de l'anticipation.

---

### PHASE 2: ATTRIBUTION & PROFIL DE BASE (Écrans 5-12)

| # | Type | Question | Options |
|---|------|----------|---------|
| 5 | Question Single | "Comment avez-vous entendu parler de I am ?" | TikTok, Instagram, Facebook, Google Play, Recherche web, Ami/famille, Autre |
| 6 | Input Text | "Comment voulez-vous être appelé ?" | Input libre + "Ignorer" en haut à droite |
| 7 | Question Single | "Quel âge avez-vous ?" | 13-17, 18-24, 25-34, 35-44, 45-54, 55+ |
| 8 | Question Single | "Quelle option vous représente le mieux, [Nom] ?" | Femme, Homme, Autre, Je préfère ne pas le dire |
| 9 | Question Single | "Obtenez affirmations selon votre statut relationnel" | Relation heureuse, C'est compliqué, Heureux célibataire, Célibataire ouvert, Séparation en cours, Pas intéressé |
| 10 | Question Single | "Quelle est votre situation professionnelle ?" | Étudiant, Recherche d'emploi, Employé, Retraité, Parent au foyer, Autre |
| 11 | Question Single | "Êtes-vous religieux ?" | Oui, Non, Spirituel mais pas religieux |
| 12 | Question Single (Conditionnel) | "Laquelle décrit le mieux vos convictions ?" | Christianisme, Judaïsme, Islam, Hindouisme, Bouddhisme, Autre |

**Branching détecté**: L'écran 12 n'apparaît que si réponse "Oui" à l'écran 11.

---

### PHASE 3: PERSONNALISATION ASTROLOGIE (Écran 13)

| # | Type | Question | Options |
|---|------|----------|---------|
| 13 | Question Single | "Quel est votre signe astrologique ?" | 12 signes avec symboles (Capricorne ♑, Verseau ♒, etc.) |

---

### PHASE 4: ÉDUCATION - QU'EST-CE QUE LES AFFIRMATIONS (Écrans 14-16)

| # | Type | Contenu |
|---|------|---------|
| 14 | Info | "Les affirmations sont de courtes phrases que vous vous répétez à vous-même" |
| 15 | Question Single | "Les affirmations vous sont-elles familières, [Nom] ?" | Nouvelles pour moi, Parfois utilisées, Utilise régulièrement |
| 16 | Question Multi | "Qu'est-ce qui vous aiderait à faire des affirmations une habitude quotidienne ?" | Rappels réguliers, Suivre mes progrès, Widget écran d'accueil, Pratique guidée, Je ne sais pas encore |

---

### PHASE 5: ÉDUCATION - BÉNÉFICES (Écrans 17-18)

| # | Type | Contenu |
|---|------|---------|
| 17 | Info | "En les répétant quotidiennement, vous pouvez changer vos croyances et votre état d'esprit" |
| 18 | Config Notifications | "Obtenez des affirmations tout au long de la journée" + Slider (0-20x) + Horaires (09:00-22:00) + **[Autoriser]** |

**Note**: Permission notifications demandée ICI après avoir montré la valeur.

---

### PHASE 6: ÉVALUATION ÉTAT ÉMOTIONNEL (Écrans 19-22)

| # | Type | Question | Options |
|---|------|----------|---------|
| 19 | Transition | "Voyons quelles sont les affirmations dont vous avez besoin en ce moment..." | |
| 20 | Question Single | "Comment vous sentez-vous ces derniers temps, [Nom] ?" | Excellent 😊, Bien 🙂, Neutre 😐, Mal 🙁, Terrible 😞, Autre |
| 21 | Question Multi | "Qu'est-ce qui vous fait ressentir de cette façon ?" | Famille, Amis, Emploi, Santé, Relation, Autre |
| 22 | Info (Social Proof) | "Des études montrent que les affirmations quotidiennes renforcent la confiance en soi, la résilience et le bien-être général" |

---

### PHASE 7: PRATIQUES BIEN-ÊTRE (Écrans 23-24)

| # | Type | Question | Options |
|---|------|----------|---------|
| 23 | Question Multi | "Comment améliorez-vous votre santé mentale ?" | Méditation, Journal, Exercice et alimentation, Temps dans la nature, Traitement thérapeutique, Soutien d'autrui |
| 24 | Question Multi | "Qu'est-ce qui vous empêche de prendre soin de vous ?" | Je ne vois pas d'effet immédiat, Je m'essouffle ou j'oublie, Rien je le fais tous les jours, Je ne sais pas par où commencer, Je n'ai pas trouvé comment, J'abandonne je me sens dépassé |

---

### PHASE 8: RÉPONSE PERSONNALISÉE (Écran 25)

| # | Type | Contenu |
|---|------|---------|
| 25 | Info (Branching) | "Vous verrez des résultats au bout de quelques semaines, en pratiquant seulement quelques minutes par jour" |

**Branching clé**: Ce message répond directement à "Je ne vois pas d'effet immédiat". C'est LE pattern de personnalisation qui augmente la conversion.

---

### PHASE 9: ENGAGEMENT & OBJECTIFS (Écrans 26-30)

| # | Type | Question | Options |
|---|------|----------|---------|
| 26 | Question Single | "Combien de temps allez-vous consacrer aux affirmations ?" | 1 min/jour, 3 min/jour, 10 min/jour |
| 27 | Question Single | "Quel est votre objectif de départ ?" | 3 jours consécutifs, 7 jours consécutifs, 21 jours consécutifs |
| 28 | Info Gamification | "1" + calendrier semaine + "Développe une routine d'affirmations quotidiennes durable" + "Construisez une série, un jour à la fois" |
| 29 | Question Single | "Avez-vous une vision claire de la vie que vous souhaitez ?" | Oui j'en ai une, J'y travaille, Je prends chaque jour comme il vient, Pas vraiment |
| 30 | Question Single | "Croyez-vous au pouvoir de la manifestation ?" | Oui absolument, Je suis curieux, Ce n'est pas mon truc |

---

### PHASE 10: CROYANCES & MINDSET (Écrans 31-32)

| # | Type | Question | Options |
|---|------|----------|---------|
| 31 | Question Single | "Croyez-vous que les pensées contribuent à façonner votre réalité ?" | Oui j'ai vu cela se produire, Je suis ouvert·e à cette idée, Pas vraiment |
| 32 | Question Single | "Savez-vous que les affirmations peuvent remodeler votre cerveau ?" | Oui j'y crois, J'en ai entendu parler, Je ne savais pas dites m'en plus, Je suis sceptique mais ouvert·e |

---

### PHASE 11: BÉNÉFICES PERSONNALISÉS (Écran 33)

| # | Type | Contenu |
|---|------|---------|
| 33 | Info Value | 📖 "Les avantages des affirmations personnalisées" + Liste: Concentrez-vous sur vos objectifs, Changez les pensées négatives, Améliorez votre santé mentale |

---

### PHASE 12: SÉLECTION CATÉGORIES (Écrans 34-35)

| # | Type | Question | Options |
|---|------|----------|---------|
| 34 | Question Multi | "Qu'aimeriez-vous changer grâce aux affirmations ?" | Comment je me parle, Gérer le stress et les revers, Comment je me montre, Me concentrer sur mes objectifs, Comment je pense à la vie, Je ne sais pas encore |
| 35 | Question Multi (Tags) | "Quelles sont les catégories qui vous intéressent ?" | Monologue intérieur, Réflexion excessive, Anxiété, Confiance, Rêver grand, Objectif, Matin, Enfant intérieur, Amour de soi, Attraction, Se sentir impertinent, Romance, Gratitude |

---

### PHASE 13: MODALITÉ DE PRATIQUE (Écran 36)

| # | Type | Question | Options |
|---|------|----------|---------|
| 36 | Question Multi | "Comment aimeriez-vous pratiquer les affirmations ?" | En écrivant dans un journal, En écrivant sur un post-it, En les disant à haute voix, En les écoutant, En les lisant sur mon téléphone, Je ne suis pas sûr |

---

### PHASE 14: SÉLECTION THÈME VISUEL (Écran 37)

| # | Type | Contenu |
|---|------|---------|
| 37 | Selection Grid | "Avec quel thème souhaitez-vous commencer ?" + 6 thèmes visuels (minimaliste, nature, cozy, plage, coucher de soleil, fleur) |

---

### PHASE 15: OBJECTIFS DÉTAILLÉS (Écrans 38-42)

| # | Type | Question | Options |
|---|------|----------|---------|
| 38 | Question Multi | "Que souhaitez-vous améliorer ?" | Développement personnel, Pensée positive, Relations, Bonheur, Stress et anxiété, Être reconnaissant, S'aimer soi-même |
| 39 | Question Multi | "De quoi avez-vous du mal à vous défaire ?" | Les souvenirs, Les espoirs mal placés, Blâme/ressentiment/colère, Les plans qui ont échoué, Les relations brisées, Autre |
| 40 | Question Multi | "Est-ce que vous évitez d'affronter quelque chose ?" | Guérir de mon passé, Fixer objectifs pour façonner l'avenir, Transformer mes relations, Faire progresser travail/carrière, Améliorer ma situation financière, Autre |
| 41 | Question Multi | "Qu'apprenez-vous à accepter de vous-même ?" | Mes croyances limitantes, Mes choix passés, Mes imperfections, Ma situation, Mes besoins émotionnels |
| 42 | Input Text | "Quels sont vos objectifs à l'heure actuelle ?" | Textarea libre (0/250) + "Je souhaite..." |

---

### PHASE 16: OBJECTIF FINAL (Écran 43)

| # | Type | Question | Options |
|---|------|----------|---------|
| 43 | Question Multi | "Que veux-tu réaliser avec I am ?" | Cultiver une mentalité positive, Se sentir plus sûr de moi, Apprendre à m'aimer, Développement personnel, Améliorer ma santé mentale, Être plus présent jouir de la vie |

---

### PHASE 17: PRÉ-PAYWALL (Écrans 44-45)

| # | Type | Contenu |
|---|------|---------|
| 44 | Info Offer | "Nous vous offrons trois jours d'accès premium, seulement pour vous" |
| 45 | Info Trust | "Nous vous enverrons un rappel 1 jour avant la fin de votre essai" + "Pas de surprises, pas de pression" + Illustration (main tenant téléphone avec cloche) |

---

### PHASE 18: PAYWALL (Écran 46)

| # | Type | Contenu |
|---|------|---------|
| 46 | Paywall Timeline | "Comment fonctionne l'essai gratuit ?" + Timeline verticale: |
| | | ✓ **Installez l'appli** - Paramétrez-la pour vos objectifs |
| | | 🔓 **Aujourd'hui: accès complet** - Entièrement gratuit pendant vos 3 premiers jours |
| | | 🔔 **20 janv. - Rappel** - Lorsque votre essai prendra fin |
| | | ☑️ **21 janv. - Devenir membre** - Votre essai prendra fin sauf... |
| | | Toggle: "Rappel avant la fin de l'essai" |
| | | **[Commencer essai gratuit]** |
| | | Prix: 4,16€/mois, facturé annuellement à **49,99€/an** |
| | | Footer: Conditions | Restaurer l'achat | Confidentialité |

---

### PHASE 19: POST-PAYWALL (Écrans 47-51)

| # | Type | Contenu |
|---|------|---------|
| 47 | Widget Promo | "Ajouter un widget à votre écran d'accueil" + Instructions + Aperçu widget + **[Installer le widget]** / "Me rappeler plus tard" |
| 48 | Welcome | "Bienvenue à I am" + Thème visuel sélectionné |
| 49 | Share Sheet | Partage ressourceShare.mp4 (pour viralité) |
| 50-51 | App Home | Affirmation "J'ai le contrôle." + Navigation (Grille, Pratique, etc.) |

---

## Patterns Clés Identifiés

### 1. Progression Émotionnelle
```
Curiosité → Identification → Compréhension → Engagement → Conversion
```

### 2. Branching Conditionnel
- Religion Oui → Question religion spécifique
- "Je ne vois pas d'effet immédiat" → Écran rassurant sur les résultats
- État émotionnel → Questions de suivi adaptées

### 3. Types d'Écrans (Répartition)
| Type | Quantité | % |
|------|----------|---|
| Question Single Select | 18 | 35% |
| Question Multi Select | 12 | 24% |
| Info/Éducation | 10 | 20% |
| Transition/Loading | 4 | 8% |
| Configuration | 3 | 6% |
| Paywall | 2 | 4% |
| Input Text | 2 | 4% |

### 4. Techniques de Conversion
1. **Social proof dès le départ** (+20M utilisateurs, reviews 5 étoiles)
2. **Personnalisation du nom** dans les questions
3. **Écrans éducatifs** pour justifier la valeur avant le paywall
4. **Réponses personnalisées** aux objections (branching)
5. **Timeline du trial** transparente
6. **Rappel avant fin d'essai** pour réduire la friction
7. **Widget post-signup** pour engagement quotidien
8. **Partage encouragé** pour viralité

### 5. Pricing
- **49,99€/an** (≈4,16€/mois)
- **3 jours d'essai gratuit**
- Rappel 1 jour avant la fin

---

## Recommandations pour Serein

### À Reproduire
1. ✅ Animation progressive sur l'intro
2. ✅ Social proof immédiat (reviews + stats)
3. ✅ Personnalisation avec le prénom
4. ✅ Questions progressives (démographie → émotions → objectifs)
5. ✅ Écrans éducatifs intercalés
6. ✅ Branching conditionnel sur les objections
7. ✅ Timeline transparente du trial
8. ✅ Sélection de thème visuel
9. ✅ Multi-select avec tags pour les catégories
10. ✅ Widget promotion post-paywall

### À Adapter pour Serein (Méditation/Anxiété)
1. 🔄 Remplacer "affirmations" par "exercices de respiration/méditation"
2. 🔄 Questions sur les déclencheurs d'anxiété
3. 🔄 Niveau de stress (échelle)
4. 🔄 Fréquence des symptômes d'anxiété
5. 🔄 Moments de la journée les plus difficiles
6. 🔄 Objectifs: dormir mieux, gérer le stress au travail, etc.

### Nombre d'Écrans Recommandé
**45-50 écrans** avec la structure suivante:
- Intro/Social Proof: 4-5 écrans
- Profil de base: 8-10 écrans
- Éducation + État émotionnel: 8-10 écrans
- Objectifs + Préférences: 15-18 écrans
- Pré-paywall + Paywall: 3-4 écrans
- Post-paywall: 3-5 écrans

---

## Annexe: Mapping Écrans

```
1-4:   INTRO (Splash + Social Proof)
5-12:  PROFIL (Attribution, Nom, Âge, Genre, Relation, Travail, Religion)
13:    ASTROLOGIE
14-18: ÉDUCATION AFFIRMATIONS + NOTIFICATIONS
19-22: ÉTAT ÉMOTIONNEL
23-25: PRATIQUES BIEN-ÊTRE + RÉPONSE PERSONNALISÉE
26-33: ENGAGEMENT + CROYANCES + VALUE PROPS
34-37: CATÉGORIES + MODALITÉ + THÈME
38-43: OBJECTIFS DÉTAILLÉS
44-46: PRÉ-PAYWALL + PAYWALL
47-51: POST-PAYWALL (Widget, Welcome, App)
```
