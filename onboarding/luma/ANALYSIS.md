# Analyse Onboarding - Luma

> App événements/calendrier - 36 écrans analysés
> Screenshots : `1.png` à `36.png`

---

## Résumé

**Type d'app** : Gestion d'événements, calendrier social
**Segment** : Social / Productivité
**Pertinence pour Serein** : ⭐ (Faible - segment différent)

---

## Flow Observé

### Phase 1 : Splash (Écran 1)
- Logo étoile 4 branches, gradient violet/rose/magenta
- Fond blanc, minimaliste
- Animation de chargement

### Phase 2 : Welcome + Signup (Écrans 2-15)
| Écran | Contenu |
|-------|---------|
| 5 | Bottom sheet "Get Started" avec 4 options signup |
| 10 | Email input screen |
| 20 | Phone verification |
| 30 | Notifications permission |

**Options de signup** :
1. Continue with Phone (primary, noir)
2. Continue with Email (secondary)
3. Apple (icône)
4. Google (icône)

### Phase 3 : Account Setup
- Ajout numéro de téléphone (optionnel, "Skip for now")
- Vérification
- Photo de profil

### Phase 4 : Notifications (Écran 30)
- "Get Notified"
- Preview de notifications (faux messages)
- "Turn On Notifications" / "Not Right Now"

**Technique** : Montrer des exemples de notifications pour donner envie

---

## Design System

### Couleurs
| Usage | Couleur |
|-------|---------|
| Background | Blanc / Gris très clair |
| Primary | Noir (CTAs) |
| Accent | Gradient violet-rose-magenta |
| Text | Noir / Gris |

### Typographie
- Clean, moderne, sans-serif
- Titres bold en noir

### Composants
- **Boutons** : Noir primary, blanc secondary
- **Inputs** : Fond gris clair, coins arrondis
- **Bottom sheet** : Modal avec coins arrondis en haut

---

## Points Clés (Peu Pertinents pour Serein)

### À noter quand même

1. **Bottom sheet pour signup**
   - Alternative aux écrans plein page
   - Feeling plus léger, moins engageant

2. **Phone comme option principale**
   - Pas pertinent pour notre app
   - Apple/Google = nos options principales

3. **"Skip for now" visible**
   - Réduit la friction
   - Mais peut baisser la qualité des comptes

4. **Preview de notifications**
   - Montre concrètement ce qu'on rate
   - Applicable pour notre demande de notifs

---

## Pertinence pour Serein

| Élément | Applicable | Notes |
|---------|------------|-------|
| Design minimaliste | ✅ Oui | Clean mais pas notre style (trop froid) |
| Bottom sheet | ⚠️ Peut-être | Pour des modals |
| Notif preview | ✅ Oui | Montrer "Ton affirmation du matin est prête" |
| Gradient logo | ⚠️ Peut-être | Tendance actuelle |

---

## Conclusion

Luma est une app sociale/événementielle, très différente de notre segment bien-être. Le design est propre mais froid - pas l'ambiance qu'on veut pour une app anti-anxiété.

**Élément réutilisable** : Le pattern de preview des notifications pour convaincre l'utilisateur d'activer.

---

*Analyse créée le 18 janvier 2026*
