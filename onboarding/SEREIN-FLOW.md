# Flow Onboarding Serein - 48 Écrans

**Basé sur l'analyse de I AM Daily Affirmations**
**Objectif**: Conversion maximale pour app de méditation/gestion de l'anxiété

---

## Vue d'ensemble

```
Total: 48 écrans
├── INTRO & SOCIAL PROOF (5 écrans)
├── PROFIL DE BASE (8 écrans)
├── ÉTAT ÉMOTIONNEL (8 écrans)
├── ÉDUCATION & ENGAGEMENT (10 écrans)
├── PERSONNALISATION (10 écrans)
├── PRÉ-PAYWALL & PAYWALL (4 écrans)
└── POST-PAYWALL (3 écrans)
```

---

## PHASE 1: INTRO & SOCIAL PROOF (Écrans 1-5)

### Écran 1: `splash_logo`
```typescript
{
  id: "splash_logo",
  type: "splash",
  content: {
    animation: "breathing_circle", // Animation de respiration
    logo: true,
    stat: {
      number: "+2 millions",
      text: "de personnes plus sereines"
    }
  },
  autoAdvance: 2000, // 2 secondes
  next: "splash_tagline"
}
```

### Écran 2: `splash_tagline`
```typescript
{
  id: "splash_tagline",
  type: "splash",
  content: {
    title: {
      fr: "Retrouvez votre calme intérieur",
      en: "Find your inner calm"
    },
    subtitle: {
      fr: "grâce à la méditation et la respiration guidée",
      en: "through guided meditation and breathing"
    }
  },
  autoAdvance: 2000,
  next: "splash_review_1"
}
```

### Écran 3: `splash_review_1`
```typescript
{
  id: "splash_review_1",
  type: "splash",
  content: {
    rating: 5,
    review: {
      fr: "Cette app m'a aidé à gérer mes crises d'anxiété. Je la recommande à tous.",
      en: "This app helped me manage my anxiety attacks. I recommend it to everyone."
    }
  },
  autoAdvance: 3000,
  next: "splash_review_2"
}
```

### Écran 4: `splash_review_2`
```typescript
{
  id: "splash_review_2",
  type: "splash",
  content: {
    rating: 5,
    review: {
      fr: "Enfin une app qui m'aide vraiment à dormir. Les exercices de respiration sont incroyables.",
      en: "Finally an app that really helps me sleep. The breathing exercises are incredible."
    }
  },
  autoAdvance: 3000,
  next: "splash_cta"
}
```

### Écran 5: `splash_cta`
```typescript
{
  id: "splash_cta",
  type: "splash",
  content: {
    title: {
      fr: "Prêt à commencer votre transformation ?",
      en: "Ready to start your transformation?"
    }
  },
  cta: {
    fr: "Commencer",
    en: "Get Started"
  },
  next: "attribution"
}
```

---

## PHASE 2: PROFIL DE BASE (Écrans 6-13)

### Écran 6: `attribution`
```typescript
{
  id: "attribution",
  type: "question_single",
  content: {
    title: {
      fr: "Comment avez-vous découvert Serein ?",
      en: "How did you discover Serein?"
    },
    subtitle: {
      fr: "Sélectionnez une option pour continuer",
      en: "Select an option to continue"
    },
    options: [
      { id: "tiktok", label: { fr: "TikTok", en: "TikTok" } },
      { id: "instagram", label: { fr: "Instagram", en: "Instagram" } },
      { id: "facebook", label: { fr: "Facebook", en: "Facebook" } },
      { id: "appstore", label: { fr: "App Store", en: "App Store" } },
      { id: "friend", label: { fr: "Ami ou famille", en: "Friend or family" } },
      { id: "therapist", label: { fr: "Mon thérapeute", en: "My therapist" } },
      { id: "other", label: { fr: "Autre", en: "Other" } }
    ]
  },
  skippable: false,
  next: "name_input"
}
```

### Écran 7: `name_input`
```typescript
{
  id: "name_input",
  type: "input_text",
  content: {
    title: {
      fr: "Comment souhaitez-vous être appelé ?",
      en: "What would you like to be called?"
    },
    subtitle: {
      fr: "Votre prénom sera utilisé pour personnaliser votre expérience",
      en: "Your name will be used to personalize your experience"
    },
    placeholder: {
      fr: "Votre prénom",
      en: "Your first name"
    }
  },
  skippable: true,
  skipLabel: { fr: "Ignorer", en: "Skip" },
  next: "age"
}
```

### Écran 8: `age`
```typescript
{
  id: "age",
  type: "question_single",
  content: {
    title: {
      fr: "Quel âge avez-vous ?",
      en: "How old are you?"
    },
    subtitle: {
      fr: "Pour personnaliser votre contenu",
      en: "To personalize your content"
    },
    options: [
      { id: "13-17", label: { fr: "13 à 17 ans", en: "13 to 17 years" } },
      { id: "18-24", label: { fr: "18 à 24 ans", en: "18 to 24 years" } },
      { id: "25-34", label: { fr: "25 à 34 ans", en: "25 to 34 years" } },
      { id: "35-44", label: { fr: "35 à 44 ans", en: "35 to 44 years" } },
      { id: "45-54", label: { fr: "45 à 54 ans", en: "45 to 54 years" } },
      { id: "55+", label: { fr: "55 ans et plus", en: "55 years and older" } }
    ]
  },
  skippable: true,
  next: "gender"
}
```

### Écran 9: `gender`
```typescript
{
  id: "gender",
  type: "question_single",
  content: {
    title: {
      fr: "Comment vous identifiez-vous, {{name}} ?",
      en: "How do you identify, {{name}}?"
    },
    subtitle: {
      fr: "Pour adapter les méditations guidées",
      en: "To adapt guided meditations"
    },
    options: [
      { id: "female", label: { fr: "Femme", en: "Female" } },
      { id: "male", label: { fr: "Homme", en: "Male" } },
      { id: "other", label: { fr: "Autre", en: "Other" } },
      { id: "prefer_not", label: { fr: "Je préfère ne pas le dire", en: "Prefer not to say" } }
    ]
  },
  skippable: true,
  next: "occupation"
}
```

### Écran 10: `occupation`
```typescript
{
  id: "occupation",
  type: "question_single",
  content: {
    title: {
      fr: "Quelle est votre situation ?",
      en: "What is your situation?"
    },
    options: [
      { id: "student", label: { fr: "Étudiant", en: "Student" } },
      { id: "employed", label: { fr: "Employé", en: "Employed" } },
      { id: "entrepreneur", label: { fr: "Entrepreneur", en: "Entrepreneur" } },
      { id: "job_search", label: { fr: "En recherche d'emploi", en: "Job searching" } },
      { id: "parent", label: { fr: "Parent au foyer", en: "Stay-at-home parent" } },
      { id: "retired", label: { fr: "Retraité", en: "Retired" } },
      { id: "other", label: { fr: "Autre", en: "Other" } }
    ]
  },
  skippable: true,
  next: "loading_profile"
}
```

### Écran 11: `loading_profile`
```typescript
{
  id: "loading_profile",
  type: "loading",
  content: {
    title: {
      fr: "Création de votre profil...",
      en: "Creating your profile..."
    },
    animation: "breathing_dots"
  },
  duration: 2000,
  next: "stat_anxiety"
}
```

### Écran 12: `stat_anxiety`
```typescript
{
  id: "stat_anxiety",
  type: "info",
  content: {
    stat: "73%",
    title: {
      fr: "des utilisateurs Serein",
      en: "of Serein users"
    },
    subtitle: {
      fr: "ressentent une réduction de leur anxiété dès la première semaine",
      en: "feel a reduction in anxiety within the first week"
    },
    source: "Étude interne, 2025"
  },
  cta: { fr: "Continuer", en: "Continue" },
  next: "main_goal"
}
```

### Écran 13: `main_goal`
```typescript
{
  id: "main_goal",
  type: "question_single",
  content: {
    title: {
      fr: "Quel est votre objectif principal, {{name}} ?",
      en: "What is your main goal, {{name}}?"
    },
    subtitle: {
      fr: "Choisissez celui qui vous parle le plus",
      en: "Choose the one that speaks to you most"
    },
    options: [
      { id: "reduce_anxiety", label: { fr: "Réduire mon anxiété", en: "Reduce my anxiety" }, icon: "😰" },
      { id: "sleep_better", label: { fr: "Mieux dormir", en: "Sleep better" }, icon: "😴" },
      { id: "manage_stress", label: { fr: "Gérer mon stress", en: "Manage my stress" }, icon: "😤" },
      { id: "focus", label: { fr: "Améliorer ma concentration", en: "Improve my focus" }, icon: "🎯" },
      { id: "self_confidence", label: { fr: "Gagner en confiance", en: "Build confidence" }, icon: "💪" },
      { id: "inner_peace", label: { fr: "Trouver la paix intérieure", en: "Find inner peace" }, icon: "🧘" }
    ]
  },
  skippable: false,
  next: "loading_goal"
}
```

---

## PHASE 3: ÉTAT ÉMOTIONNEL (Écrans 14-21)

### Écran 14: `loading_goal`
```typescript
{
  id: "loading_goal",
  type: "loading",
  content: {
    title: {
      fr: "Excellent choix !",
      en: "Excellent choice!"
    },
    subtitle: {
      fr: "Nous avons des exercices parfaits pour cet objectif",
      en: "We have perfect exercises for this goal"
    }
  },
  duration: 1500,
  next: "current_feeling"
}
```

### Écran 15: `current_feeling`
```typescript
{
  id: "current_feeling",
  type: "question_single",
  content: {
    title: {
      fr: "Comment vous sentez-vous en ce moment ?",
      en: "How are you feeling right now?"
    },
    options: [
      { id: "great", label: { fr: "Très bien", en: "Great" }, icon: "😊" },
      { id: "good", label: { fr: "Bien", en: "Good" }, icon: "🙂" },
      { id: "okay", label: { fr: "Correct", en: "Okay" }, icon: "😐" },
      { id: "stressed", label: { fr: "Stressé", en: "Stressed" }, icon: "😰" },
      { id: "anxious", label: { fr: "Anxieux", en: "Anxious" }, icon: "😟" },
      { id: "overwhelmed", label: { fr: "Submergé", en: "Overwhelmed" }, icon: "😵" }
    ]
  },
  next: "anxiety_frequency"
}
```

### Écran 16: `anxiety_frequency`
```typescript
{
  id: "anxiety_frequency",
  type: "question_single",
  content: {
    title: {
      fr: "À quelle fréquence ressentez-vous de l'anxiété ou du stress ?",
      en: "How often do you feel anxiety or stress?"
    },
    options: [
      { id: "rarely", label: { fr: "Rarement", en: "Rarely" } },
      { id: "sometimes", label: { fr: "Parfois", en: "Sometimes" } },
      { id: "often", label: { fr: "Souvent", en: "Often" } },
      { id: "daily", label: { fr: "Tous les jours", en: "Every day" } },
      { id: "constant", label: { fr: "Presque constamment", en: "Almost constantly" } }
    ]
  },
  next: "anxiety_triggers"
}
```

### Écran 17: `anxiety_triggers`
```typescript
{
  id: "anxiety_triggers",
  type: "question_multi",
  content: {
    title: {
      fr: "Qu'est-ce qui déclenche votre stress ou anxiété ?",
      en: "What triggers your stress or anxiety?"
    },
    subtitle: {
      fr: "Sélectionnez tout ce qui s'applique",
      en: "Select all that apply"
    },
    options: [
      { id: "work", label: { fr: "Le travail", en: "Work" }, icon: "💼" },
      { id: "relationships", label: { fr: "Les relations", en: "Relationships" }, icon: "💑" },
      { id: "health", label: { fr: "Ma santé", en: "My health" }, icon: "🏥" },
      { id: "finances", label: { fr: "L'argent", en: "Money" }, icon: "💰" },
      { id: "future", label: { fr: "L'avenir", en: "The future" }, icon: "🔮" },
      { id: "social", label: { fr: "Les situations sociales", en: "Social situations" }, icon: "👥" },
      { id: "family", label: { fr: "La famille", en: "Family" }, icon: "👨‍👩‍👧" },
      { id: "unknown", label: { fr: "Je ne sais pas", en: "I don't know" }, icon: "❓" }
    ],
    minSelection: 1
  },
  next: "anxiety_symptoms"
}
```

### Écran 18: `anxiety_symptoms`
```typescript
{
  id: "anxiety_symptoms",
  type: "question_multi",
  content: {
    title: {
      fr: "Quels symptômes ressentez-vous ?",
      en: "What symptoms do you experience?"
    },
    subtitle: {
      fr: "Sélectionnez tout ce qui s'applique",
      en: "Select all that apply"
    },
    options: [
      { id: "racing_thoughts", label: { fr: "Pensées qui s'emballent", en: "Racing thoughts" } },
      { id: "trouble_sleeping", label: { fr: "Difficultés à dormir", en: "Trouble sleeping" } },
      { id: "tension", label: { fr: "Tensions musculaires", en: "Muscle tension" } },
      { id: "breathing", label: { fr: "Difficultés à respirer", en: "Difficulty breathing" } },
      { id: "heart", label: { fr: "Cœur qui s'emballe", en: "Racing heart" } },
      { id: "fatigue", label: { fr: "Fatigue constante", en: "Constant fatigue" } },
      { id: "focus", label: { fr: "Difficultés à me concentrer", en: "Difficulty focusing" } }
    ],
    minSelection: 1
  },
  next: "worst_time"
}
```

### Écran 19: `worst_time`
```typescript
{
  id: "worst_time",
  type: "question_single",
  content: {
    title: {
      fr: "À quel moment de la journée est-ce le plus difficile ?",
      en: "When is it hardest during the day?"
    },
    options: [
      { id: "morning", label: { fr: "Le matin au réveil", en: "Morning when waking up" } },
      { id: "workday", label: { fr: "Pendant la journée de travail", en: "During the workday" } },
      { id: "evening", label: { fr: "Le soir après le travail", en: "Evening after work" } },
      { id: "night", label: { fr: "La nuit avant de dormir", en: "At night before sleep" } },
      { id: "varies", label: { fr: "Ça varie", en: "It varies" } }
    ]
  },
  next: "loading_analysis"
}
```

### Écran 20: `loading_analysis`
```typescript
{
  id: "loading_analysis",
  type: "loading",
  content: {
    title: {
      fr: "Analyse de votre profil...",
      en: "Analyzing your profile..."
    },
    steps: [
      { fr: "Analyse de vos réponses", en: "Analyzing your responses" },
      { fr: "Identification de vos besoins", en: "Identifying your needs" },
      { fr: "Création de votre programme personnalisé", en: "Creating your personalized program" }
    ]
  },
  duration: 3000,
  next: "personalized_insight"
}
```

### Écran 21: `personalized_insight`
```typescript
{
  id: "personalized_insight",
  type: "info",
  content: {
    title: {
      fr: "{{name}}, nous avons compris vos besoins",
      en: "{{name}}, we understand your needs"
    },
    // BRANCHING: Le contenu change selon les réponses
    dynamicContent: (answers) => {
      if (answers.anxiety_frequency === "constant" || answers.anxiety_frequency === "daily") {
        return {
          fr: "Vous vivez avec un stress intense. Nos exercices de respiration d'urgence et nos méditations courtes sont conçus exactement pour cela.",
          en: "You're living with intense stress. Our emergency breathing exercises and short meditations are designed exactly for this."
        }
      }
      if (answers.worst_time === "night") {
        return {
          fr: "Les nuits difficiles peuvent être transformées. Nos histoires pour dormir et méditations nocturnes ont aidé des milliers de personnes.",
          en: "Difficult nights can be transformed. Our sleep stories and nighttime meditations have helped thousands."
        }
      }
      // Default
      return {
        fr: "Serein va vous accompagner pas à pas vers plus de calme et de sérénité au quotidien.",
        en: "Serein will guide you step by step towards more calm and serenity in your daily life."
      }
    }
  },
  cta: { fr: "Continuer", en: "Continue" },
  next: "education_intro"
}
```

---

## PHASE 4: ÉDUCATION & ENGAGEMENT (Écrans 22-31)

### Écran 22: `education_intro`
```typescript
{
  id: "education_intro",
  type: "info",
  content: {
    title: {
      fr: "La science derrière Serein",
      en: "The science behind Serein"
    },
    subtitle: {
      fr: "La respiration consciente active votre système nerveux parasympathique, réduisant instantanément le stress.",
      en: "Conscious breathing activates your parasympathetic nervous system, instantly reducing stress."
    },
    animation: "breathing_wave"
  },
  cta: { fr: "En savoir plus", en: "Learn more" },
  next: "education_benefits"
}
```

### Écran 23: `education_benefits`
```typescript
{
  id: "education_benefits",
  type: "info",
  content: {
    title: {
      fr: "Avec seulement 5 minutes par jour",
      en: "With just 5 minutes a day"
    },
    benefits: [
      { icon: "🧠", text: { fr: "Réduction du cortisol (hormone du stress)", en: "Reduced cortisol (stress hormone)" } },
      { icon: "❤️", text: { fr: "Amélioration de la variabilité cardiaque", en: "Improved heart rate variability" } },
      { icon: "😴", text: { fr: "Meilleure qualité de sommeil", en: "Better sleep quality" } },
      { icon: "🎯", text: { fr: "Concentration accrue", en: "Increased focus" } }
    ]
  },
  cta: { fr: "Continuer", en: "Continue" },
  next: "experience_meditation"
}
```

### Écran 24: `experience_meditation`
```typescript
{
  id: "experience_meditation",
  type: "question_single",
  content: {
    title: {
      fr: "Avez-vous déjà essayé la méditation ?",
      en: "Have you tried meditation before?"
    },
    options: [
      { id: "never", label: { fr: "Jamais", en: "Never" } },
      { id: "tried", label: { fr: "J'ai essayé mais abandonné", en: "I tried but gave up" } },
      { id: "sometimes", label: { fr: "De temps en temps", en: "Sometimes" } },
      { id: "regular", label: { fr: "Je pratique régulièrement", en: "I practice regularly" } }
    ]
  },
  next: (answers) => {
    if (answers.experience_meditation === "tried") {
      return "objection_handler"
    }
    return "barriers"
  }
}
```

### Écran 25: `objection_handler` (Conditionnel)
```typescript
{
  id: "objection_handler",
  type: "info",
  content: {
    title: {
      fr: "Vous n'êtes pas seul",
      en: "You're not alone"
    },
    subtitle: {
      fr: "68% des gens abandonnent la méditation traditionnelle. Serein est différent : nos exercices durent 3-5 minutes et sont guidés pas à pas.",
      en: "68% of people give up traditional meditation. Serein is different: our exercises last 3-5 minutes and are guided step by step."
    }
  },
  cta: { fr: "Découvrir", en: "Discover" },
  next: "barriers"
}
```

### Écran 26: `barriers`
```typescript
{
  id: "barriers",
  type: "question_multi",
  content: {
    title: {
      fr: "Qu'est-ce qui vous empêche de prendre soin de vous ?",
      en: "What prevents you from taking care of yourself?"
    },
    options: [
      { id: "no_time", label: { fr: "Je n'ai pas le temps", en: "I don't have time" } },
      { id: "forget", label: { fr: "J'oublie de le faire", en: "I forget to do it" } },
      { id: "no_results", label: { fr: "Je ne vois pas de résultats", en: "I don't see results" } },
      { id: "dont_know_how", label: { fr: "Je ne sais pas comment faire", en: "I don't know how" } },
      { id: "hard_to_focus", label: { fr: "J'ai du mal à me concentrer", en: "I have trouble focusing" } },
      { id: "nothing", label: { fr: "Rien, je le fais régulièrement", en: "Nothing, I do it regularly" } }
    ],
    minSelection: 1
  },
  next: "barrier_response"
}
```

### Écran 27: `barrier_response` (Branching dynamique)
```typescript
{
  id: "barrier_response",
  type: "info",
  content: {
    // Contenu dynamique basé sur les réponses
    dynamicContent: (answers) => {
      const barriers = answers.barriers || []

      if (barriers.includes("no_time")) {
        return {
          title: { fr: "Bonne nouvelle !", en: "Good news!" },
          subtitle: {
            fr: "Nos exercices les plus efficaces durent seulement 3 minutes. C'est moins que le temps de faire un café.",
            en: "Our most effective exercises last only 3 minutes. That's less than making a coffee."
          }
        }
      }
      if (barriers.includes("no_results")) {
        return {
          title: { fr: "Les résultats arrivent vite", en: "Results come quickly" },
          subtitle: {
            fr: "85% de nos utilisateurs ressentent une différence dès la première séance. La clé : la régularité.",
            en: "85% of our users feel a difference from the first session. The key: consistency."
          }
        }
      }
      if (barriers.includes("forget")) {
        return {
          title: { fr: "On s'occupe de tout", en: "We've got you covered" },
          subtitle: {
            fr: "Nos rappels intelligents s'adaptent à votre routine. Vous n'oublierez plus jamais.",
            en: "Our smart reminders adapt to your routine. You'll never forget again."
          }
        }
      }
      // Default
      return {
        title: { fr: "Parfait !", en: "Perfect!" },
        subtitle: {
          fr: "Serein s'adapte à votre rythme et vos besoins.",
          en: "Serein adapts to your pace and needs."
        }
      }
    }
  },
  cta: { fr: "Continuer", en: "Continue" },
  next: "time_commitment"
}
```

### Écran 28: `time_commitment`
```typescript
{
  id: "time_commitment",
  type: "question_single",
  content: {
    title: {
      fr: "Combien de temps pouvez-vous consacrer par jour ?",
      en: "How much time can you commit per day?"
    },
    subtitle: {
      fr: "Vous pourrez toujours ajuster plus tard",
      en: "You can always adjust later"
    },
    options: [
      { id: "3min", label: { fr: "3 minutes", en: "3 minutes" } },
      { id: "5min", label: { fr: "5 minutes", en: "5 minutes" }, recommended: true },
      { id: "10min", label: { fr: "10 minutes", en: "10 minutes" } },
      { id: "15min+", label: { fr: "15 minutes ou plus", en: "15 minutes or more" } }
    ]
  },
  next: "streak_goal"
}
```

### Écran 29: `streak_goal`
```typescript
{
  id: "streak_goal",
  type: "question_single",
  content: {
    title: {
      fr: "Quel est votre premier objectif ?",
      en: "What is your first goal?"
    },
    options: [
      { id: "3days", label: { fr: "3 jours consécutifs", en: "3 consecutive days" } },
      { id: "7days", label: { fr: "7 jours consécutifs", en: "7 consecutive days" }, recommended: true },
      { id: "21days", label: { fr: "21 jours consécutifs", en: "21 consecutive days" } }
    ]
  },
  next: "streak_preview"
}
```

### Écran 30: `streak_preview`
```typescript
{
  id: "streak_preview",
  type: "info",
  content: {
    title: {
      fr: "Créez une habitude durable",
      en: "Build a lasting habit"
    },
    subtitle: {
      fr: "Construisez votre série jour après jour",
      en: "Build your streak day by day"
    },
    weekPreview: true, // Affiche Lun-Dim avec le premier jour coché
    stat: {
      number: "21",
      text: {
        fr: "jours pour créer une habitude",
        en: "days to build a habit"
      }
    }
  },
  cta: { fr: "Continuer", en: "Continue" },
  next: "notifications_ask"
}
```

### Écran 31: `notifications_ask`
```typescript
{
  id: "notifications_ask",
  type: "notifications_config",
  content: {
    title: {
      fr: "Recevez vos rappels quotidiens",
      en: "Get your daily reminders"
    },
    subtitle: {
      fr: "Un rappel doux pour ne jamais oublier votre moment de calme",
      en: "A gentle reminder to never forget your moment of calm"
    },
    preview: {
      title: "Serein",
      body: {
        fr: "C'est l'heure de votre moment de sérénité 🧘",
        en: "Time for your moment of serenity 🧘"
      }
    },
    timeSelector: {
      default: "08:00",
      label: { fr: "Heure du rappel", en: "Reminder time" }
    }
  },
  cta: { fr: "Autoriser les notifications", en: "Allow notifications" },
  skipLabel: { fr: "Plus tard", en: "Later" },
  next: "personalization_intro"
}
```

---

## PHASE 5: PERSONNALISATION (Écrans 32-41)

### Écran 32: `personalization_intro`
```typescript
{
  id: "personalization_intro",
  type: "info",
  content: {
    title: {
      fr: "Personnalisons votre expérience",
      en: "Let's personalize your experience"
    },
    subtitle: {
      fr: "Quelques questions pour créer votre programme sur mesure",
      en: "A few questions to create your custom program"
    }
  },
  cta: { fr: "Continuer", en: "Continue" },
  next: "content_preferences"
}
```

### Écran 33: `content_preferences`
```typescript
{
  id: "content_preferences",
  type: "question_multi",
  content: {
    title: {
      fr: "Quels types de contenus vous intéressent ?",
      en: "What types of content interest you?"
    },
    options: [
      { id: "breathing", label: { fr: "Exercices de respiration", en: "Breathing exercises" }, icon: "🌬️" },
      { id: "meditation", label: { fr: "Méditations guidées", en: "Guided meditations" }, icon: "🧘" },
      { id: "sleep", label: { fr: "Histoires pour dormir", en: "Sleep stories" }, icon: "🌙" },
      { id: "emergency", label: { fr: "SOS anti-anxiété", en: "Anti-anxiety SOS" }, icon: "🆘" },
      { id: "music", label: { fr: "Musique relaxante", en: "Relaxing music" }, icon: "🎵" },
      { id: "nature", label: { fr: "Sons de la nature", en: "Nature sounds" }, icon: "🌿" }
    ],
    minSelection: 2
  },
  next: "voice_preference"
}
```

### Écran 34: `voice_preference`
```typescript
{
  id: "voice_preference",
  type: "question_single",
  content: {
    title: {
      fr: "Quelle voix préférez-vous pour les méditations ?",
      en: "What voice do you prefer for meditations?"
    },
    options: [
      { id: "female", label: { fr: "Voix féminine", en: "Female voice" } },
      { id: "male", label: { fr: "Voix masculine", en: "Male voice" } },
      { id: "no_preference", label: { fr: "Pas de préférence", en: "No preference" } }
    ]
  },
  next: "theme_selection"
}
```

### Écran 35: `theme_selection`
```typescript
{
  id: "theme_selection",
  type: "theme_grid",
  content: {
    title: {
      fr: "Choisissez votre ambiance",
      en: "Choose your ambiance"
    },
    subtitle: {
      fr: "Vous pourrez la changer à tout moment",
      en: "You can change it anytime"
    },
    themes: [
      { id: "minimal", name: { fr: "Minimaliste", en: "Minimalist" }, colors: ["#F5F5F5", "#333"] },
      { id: "nature", name: { fr: "Nature", en: "Nature" }, image: "theme_nature.jpg" },
      { id: "night", name: { fr: "Nuit étoilée", en: "Starry night" }, image: "theme_night.jpg" },
      { id: "ocean", name: { fr: "Océan", en: "Ocean" }, image: "theme_ocean.jpg" },
      { id: "forest", name: { fr: "Forêt", en: "Forest" }, image: "theme_forest.jpg" },
      { id: "sunset", name: { fr: "Coucher de soleil", en: "Sunset" }, image: "theme_sunset.jpg" }
    ]
  },
  next: "specific_goals"
}
```

### Écran 36: `specific_goals`
```typescript
{
  id: "specific_goals",
  type: "question_multi",
  content: {
    title: {
      fr: "Que souhaitez-vous améliorer ?",
      en: "What do you want to improve?"
    },
    subtitle: {
      fr: "Choisissez au moins un objectif",
      en: "Choose at least one goal"
    },
    options: [
      { id: "anxiety", label: { fr: "Gérer l'anxiété", en: "Manage anxiety" } },
      { id: "sleep", label: { fr: "Améliorer mon sommeil", en: "Improve my sleep" } },
      { id: "stress_work", label: { fr: "Stress au travail", en: "Work stress" } },
      { id: "confidence", label: { fr: "Confiance en moi", en: "Self-confidence" } },
      { id: "relationships", label: { fr: "Relations plus sereines", en: "More peaceful relationships" } },
      { id: "focus", label: { fr: "Concentration", en: "Focus" } },
      { id: "emotions", label: { fr: "Gérer mes émotions", en: "Manage my emotions" } },
      { id: "present", label: { fr: "Vivre le moment présent", en: "Live in the moment" } }
    ],
    minSelection: 1
  },
  next: "challenges"
}
```

### Écran 37: `challenges`
```typescript
{
  id: "challenges",
  type: "question_multi",
  content: {
    title: {
      fr: "Qu'est-ce qui vous pèse en ce moment ?",
      en: "What's weighing on you right now?"
    },
    options: [
      { id: "past", label: { fr: "Ruminations sur le passé", en: "Dwelling on the past" } },
      { id: "future", label: { fr: "Inquiétudes pour l'avenir", en: "Worries about the future" } },
      { id: "self_criticism", label: { fr: "Auto-critique sévère", en: "Harsh self-criticism" } },
      { id: "comparison", label: { fr: "Comparaison aux autres", en: "Comparing to others" } },
      { id: "perfectionism", label: { fr: "Perfectionnisme", en: "Perfectionism" } },
      { id: "loneliness", label: { fr: "Sentiment de solitude", en: "Feeling of loneliness" } },
      { id: "overwhelm", label: { fr: "Sensation d'être débordé", en: "Feeling overwhelmed" } }
    ],
    minSelection: 1
  },
  next: "loading_program"
}
```

### Écran 38: `loading_program`
```typescript
{
  id: "loading_program",
  type: "loading",
  content: {
    title: {
      fr: "Création de votre programme personnalisé...",
      en: "Creating your personalized program..."
    },
    steps: [
      { fr: "Analyse de vos objectifs", en: "Analyzing your goals" },
      { fr: "Sélection des exercices adaptés", en: "Selecting adapted exercises" },
      { fr: "Préparation de votre parcours", en: "Preparing your journey" }
    ]
  },
  duration: 3000,
  next: "program_preview"
}
```

### Écran 39: `program_preview`
```typescript
{
  id: "program_preview",
  type: "info",
  content: {
    title: {
      fr: "Votre programme est prêt, {{name}} !",
      en: "Your program is ready, {{name}}!"
    },
    programHighlights: [
      { icon: "🌬️", text: { fr: "Exercices de respiration quotidiens", en: "Daily breathing exercises" } },
      { icon: "🧘", text: { fr: "Méditations personnalisées", en: "Personalized meditations" } },
      { icon: "📊", text: { fr: "Suivi de vos progrès", en: "Progress tracking" } },
      { icon: "🔔", text: { fr: "Rappels intelligents", en: "Smart reminders" } }
    ]
  },
  cta: { fr: "Découvrir mon programme", en: "Discover my program" },
  next: "social_proof_final"
}
```

### Écran 40: `social_proof_final`
```typescript
{
  id: "social_proof_final",
  type: "info",
  content: {
    title: {
      fr: "Rejoignez notre communauté",
      en: "Join our community"
    },
    stats: [
      { number: "2M+", label: { fr: "Utilisateurs actifs", en: "Active users" } },
      { number: "4.8", label: { fr: "Note App Store", en: "App Store rating" }, icon: "⭐" },
      { number: "89%", label: { fr: "Recommanderaient Serein", en: "Would recommend Serein" } }
    ],
    testimonial: {
      text: {
        fr: "Serein a changé ma façon de gérer le stress. Je me sens enfin en contrôle.",
        en: "Serein changed how I handle stress. I finally feel in control."
      },
      author: "Marie, 34 ans"
    }
  },
  cta: { fr: "Continuer", en: "Continue" },
  next: "free_trial_intro"
}
```

### Écran 41: `free_trial_intro`
```typescript
{
  id: "free_trial_intro",
  type: "info",
  content: {
    title: {
      fr: "Essayez Serein gratuitement",
      en: "Try Serein for free"
    },
    subtitle: {
      fr: "Nous vous offrons 7 jours d'accès complet, sans engagement",
      en: "We offer you 7 days of full access, no commitment"
    },
    features: [
      { fr: "Accès illimité à tous les exercices", en: "Unlimited access to all exercises" },
      { fr: "Méditations personnalisées", en: "Personalized meditations" },
      { fr: "Suivi de progression", en: "Progress tracking" },
      { fr: "Annulation à tout moment", en: "Cancel anytime" }
    ]
  },
  cta: { fr: "Commencer mon essai gratuit", en: "Start my free trial" },
  next: "paywall_timeline"
}
```

---

## PHASE 6: PRÉ-PAYWALL & PAYWALL (Écrans 42-45)

### Écran 42: `paywall_timeline`
```typescript
{
  id: "paywall_timeline",
  type: "paywall",
  content: {
    title: {
      fr: "Comment fonctionne l'essai gratuit ?",
      en: "How does the free trial work?"
    },
    subtitle: {
      fr: "Aucun frais ne vous sera facturé aujourd'hui",
      en: "You won't be charged today"
    },
    timeline: [
      {
        icon: "✓",
        title: { fr: "Aujourd'hui", en: "Today" },
        subtitle: { fr: "Accès complet gratuit", en: "Full free access" },
        status: "completed"
      },
      {
        icon: "🔓",
        title: { fr: "Jours 1-7", en: "Days 1-7" },
        subtitle: { fr: "Profitez de tout Serein", en: "Enjoy all of Serein" },
        status: "current"
      },
      {
        icon: "🔔",
        title: { fr: "Jour 6", en: "Day 6" },
        subtitle: { fr: "Rappel avant la fin de l'essai", en: "Reminder before trial ends" },
        status: "upcoming"
      },
      {
        icon: "💳",
        title: { fr: "Jour 8", en: "Day 8" },
        subtitle: { fr: "Premier paiement si vous continuez", en: "First payment if you continue" },
        status: "upcoming"
      }
    ],
    reminderToggle: {
      label: { fr: "Rappel avant la fin de l'essai", en: "Reminder before trial ends" },
      default: true
    },
    pricing: {
      trial: {
        duration: 7,
        price: 0
      },
      plans: [
        {
          id: "yearly",
          name: { fr: "Annuel", en: "Yearly" },
          price: 49.99,
          period: { fr: "an", en: "year" },
          monthlyEquivalent: 4.17,
          savings: { fr: "Économisez 70%", en: "Save 70%" },
          recommended: true
        },
        {
          id: "monthly",
          name: { fr: "Mensuel", en: "Monthly" },
          price: 12.99,
          period: { fr: "mois", en: "month" }
        }
      ]
    },
    cta: { fr: "Commencer l'essai gratuit", en: "Start free trial" },
    legalLinks: ["conditions", "privacy", "restore"]
  },
  next: "payment_processing"
}
```

### Écran 43: `payment_processing`
```typescript
{
  id: "payment_processing",
  type: "loading",
  content: {
    title: {
      fr: "Activation de votre essai...",
      en: "Activating your trial..."
    }
  },
  duration: 2000,
  next: "welcome_success"
}
```

### Écran 44: `welcome_success`
```typescript
{
  id: "welcome_success",
  type: "success",
  content: {
    title: {
      fr: "Bienvenue dans Serein, {{name}} !",
      en: "Welcome to Serein, {{name}}!"
    },
    subtitle: {
      fr: "Votre voyage vers la sérénité commence maintenant",
      en: "Your journey to serenity starts now"
    },
    animation: "confetti"
  },
  cta: { fr: "Commencer", en: "Get started" },
  next: "widget_promo"
}
```

### Écran 45: `widget_promo`
```typescript
{
  id: "widget_promo",
  type: "info",
  content: {
    title: {
      fr: "Ajoutez le widget Serein",
      en: "Add the Serein widget"
    },
    subtitle: {
      fr: "Accédez à un exercice de respiration rapide directement depuis votre écran d'accueil",
      en: "Access a quick breathing exercise directly from your home screen"
    },
    widgetPreview: true
  },
  cta: { fr: "Ajouter le widget", en: "Add widget" },
  skipLabel: { fr: "Plus tard", en: "Later" },
  next: "onboarding_complete"
}
```

---

## PHASE 7: POST-PAYWALL (Écrans 46-48)

### Écran 46: `onboarding_complete`
```typescript
{
  id: "onboarding_complete",
  type: "transition",
  content: {
    title: {
      fr: "Tout est prêt !",
      en: "All set!"
    },
    subtitle: {
      fr: "Commençons par votre premier exercice",
      en: "Let's start with your first exercise"
    }
  },
  autoAdvance: 2000,
  next: "first_exercise"
}
```

### Écran 47: `first_exercise`
```typescript
{
  id: "first_exercise",
  type: "exercise_intro",
  content: {
    title: {
      fr: "Votre premier exercice",
      en: "Your first exercise"
    },
    exerciseType: "breathing_478", // Respiration 4-7-8
    duration: "3 min",
    description: {
      fr: "Un exercice simple et puissant pour calmer instantanément votre système nerveux",
      en: "A simple and powerful exercise to instantly calm your nervous system"
    }
  },
  cta: { fr: "Commencer l'exercice", en: "Start exercise" },
  skipLabel: { fr: "Explorer l'app d'abord", en: "Explore app first" },
  next: "app_home"
}
```

### Écran 48: `app_home`
```typescript
{
  id: "app_home",
  type: "redirect",
  destination: "HomeScreen"
}
```

---

## Résumé des Branchings

| Condition | Si... | Alors... |
|-----------|-------|----------|
| `experience_meditation === "tried"` | A essayé et abandonné | Affiche `objection_handler` |
| `barriers.includes("no_time")` | Pas le temps | Message "3 minutes suffisent" |
| `barriers.includes("no_results")` | Ne voit pas de résultats | Message "85% ressentent une différence" |
| `barriers.includes("forget")` | Oublie | Message sur les rappels intelligents |
| `anxiety_frequency === "constant"` | Anxiété constante | Message sur les exercices d'urgence |
| `worst_time === "night"` | Difficultés la nuit | Message sur les histoires pour dormir |

---

## Fichiers à Implémenter

1. `apps/app/app/data/onboardingFlow.ts` - Configuration du flow
2. `apps/app/app/stores/onboardingStore.ts` - State Zustand
3. `apps/app/app/screens/OnboardingScreen.tsx` - Écran principal
4. `apps/app/app/components/onboarding/` - Composants:
   - `SplashStep.tsx`
   - `QuestionSingleStep.tsx`
   - `QuestionMultiStep.tsx`
   - `InfoStep.tsx`
   - `LoadingStep.tsx`
   - `InputTextStep.tsx`
   - `NotificationsConfigStep.tsx`
   - `ThemeGridStep.tsx`
   - `PaywallStep.tsx`
   - `SuccessStep.tsx`
