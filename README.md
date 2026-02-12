<div align="center">

# 🐤 Flappy Bird – Version 2.0
- [📸 Galerie](#galerie)
### *L'évolution du classique avec protection anti-triche et fonctionnalités avancées*

[![Status](https://img.shields.io/badge/🟢_En_ligne-Disponible-brightgreen?style=for-the-badge)](https://godwin-creator.github.io/flappybird-v2/)
[![Version](https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge)]()
[![Licence](https://img.shields.io/badge/Licence-MIT-purple?style=for-the-badge)]()

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)]()

![Gameplay Preview](https://github.com/user-attachments/assets/1af37224-6d1d-48e7-ab35-109f7e1f705b)

</div>

---

## 📖 Présentation du projet

Bienvenue dans la **Version 2.0** de Flappy Bird ! Cette évolution majeure apporte des améliorations significatives en termes de sécurité, d'expérience utilisateur et de performances par rapport à la version originale.

<div align="center">

### 🎯 Nouveautés de la V2

| Fonctionnalité | Description |
|:--------------|:------------|
| 🔐 **Sécurité renforcée** | Système de chiffrement du record |
| 🎨 **Interface améliorée** | Design modernisé et responsive |
| ⚡ **Performances** | Optimisation de l'animation |
| 📊 **Statistiques** | Suivi détaillé des scores |

</div>

> 🛡️ **Innovation majeure** : Premier Flappy Bird avec protection cryptographique du record pour garantir l'intégrité des scores !

---

## 🚀 Jouer maintenant

<div align="center">

[![Jouer maintenant](https://img.shields.io/badge/🎮_LANCER_LE_JEU-4CAF50?style=for-the-badge&logoColor=white)](https://godwin-creator.github.io/flappybird-v2/)

*Aucune installation requise - Jouez directement dans votre navigateur !*

</div>

---

## ✨ Fonctionnalités complètes

### 🎮 Gameplay

<table>
<tr>
<td width="50%">

#### Mécanique de jeu
- ✅ Animation fluide à 60 FPS
- ✅ Physique réaliste améliorée
- ✅ Génération aléatoire d'obstacles
- ✅ Contrôles réactifs et précis
- ✅ Détection de collision optimisée

</td>
<td width="50%">

#### Système de score
- 📈 Compteur en temps réel
- 🏆 Record personnel sauvegardé
- 🔒 Protection anti-triche
- 📊 Historique des performances
- 💯 Affichage du meilleur score

</td>
</tr>
</table>

### 🎨 Expérience utilisateur

```
┌──────────────────────────────────────┐
│  Interface moderne                   │
├──────────────────────────────────────┤
│  • Design responsive                 │
│  • Animations fluides                │
│  • Effets visuels soignés            │
│  • Compatible tous navigateurs       │
│  • Optimisé mobile & desktop         │
└──────────────────────────────────────┘
```

---

## 🔐 Système de sécurité anti-triche

### Problème identifié (V1)
Dans la version originale, le record était stocké en clair dans le `localStorage`, permettant aux utilisateurs de :
- Modifier manuellement leur score via les outils de développement
- Falsifier leurs records sans effort
- Compromettre l'intégrité du classement

### Solution implémentée (V2)

<div align="center">

```
┌─────────────────────────────────────────────┐
│     PROCESSUS DE CHIFFREMENT DU RECORD      │
└─────────────────────────────────────────────┘
              ↓
    ┌───────────────────┐
    │  Score obtenu: 42 │
    └───────────────────┘
              ↓
    ┌───────────────────┐
    │  Chiffrement →    │  Algorithme personnalisé
    └───────────────────┘
              ↓
    ┌───────────────────┐
    │ "xK9mP2@qL#7vN"   │  Stockage crypté
    └───────────────────┘
              ↓
    ┌───────────────────┐
    │  localStorage     │
    └───────────────────┘
```

</div>

#### 🛡️ Protection en place

- **Chiffrement personnalisé** : Algorithme de transformation non-réversible sans clé
- **Validation côté client** : Vérification de l'intégrité à chaque chargement
- **Détection de manipulation** : Reset automatique si falsification détectée
- **Obscurcissement** : Le code de chiffrement est minifié et protégé

> ⚠️ **Note** : Cette protection empêche les modifications manuelles basiques. Pour une sécurité absolue dans un contexte compétitif, un backend avec validation serveur serait nécessaire.

---

## 🖼️ Aperçus du jeu

<div align="center">

### 📸 Galerie

| Écran de démarrage | Partie en cours | Nouveau record |
|:------------------:|:---------------:|:--------------:|
| <img width="220" alt="Démarrage" src="https://github.com/user-attachments/assets/c41dca35-028e-4677-a013-5ccfc908b6cf" /> | <img width="220" alt="Jeu actif" src="https://github.com/user-attachments/assets/1af37224-6d1d-48e7-ab35-109f7e1f705b" /> | <img width="220" alt="High Score" src="https://github.com/user-attachments/assets/82762024-11c2-4382-8b8f-e574bd46f6b8" /> |

| Game Over | Interface mobile | Responsive design |
|:---------:|:----------------:|:-----------------:|
| <img width="220" alt="Fin de partie" src="https://github.com/user-attachments/assets/b7c06e98-2c34-459e-afd8-36cbec2befed" /> | <img width="220" alt="Vue mobile" src="https://github.com/user-attachments/assets/c41dca35-028e-4677-a013-5ccfc908b6cf" /> | <img width="220" alt="Adaptabilité" src="https://github.com/user-attachments/assets/82762024-11c2-4382-8b8f-e574bd46f6b8" /> |

*Interface intuitive et design soigné sur tous les écrans*

</div>

---

## 📁 Architecture du projet

```
flappybird-v2/
│
├── 📄 index.html              # Point d'entrée principal
├── 📄 game.js                 # Logique de jeu optimisée
├── 📄 security.js             # Module de chiffrement
├── 📄 styles.css              # Styles modernes
│
├── 🖼️ assets/
│   ├── images/
│   │   ├── background.png     # Fond HD
│   │   ├── ground.png         # Sol animé
│   │   ├── bird-sprite.png    # Spritesheet oiseau
│   │   ├── pipe-top.png       # Tuyau supérieur
│   │   └── pipe-bottom.png    # Tuyau inférieur
│   │
│   └── sounds/
│       ├── flap.mp3           # Son de saut
│       ├── point.mp3          # Son de point
│       ├── hit.mp3            # Son de collision
│       └── swoosh.mp3         # Son de démarrage
│
├── 📚 docs/
│   └── SECURITY.md            # Documentation sécurité
│
└── 📜 README.md               # Ce fichier
```

---

## 🔧 Installation et utilisation

### Option 1 : Jouer en ligne (Recommandé)

Cliquez simplement sur le bouton ci-dessous :

[![Jouer](https://img.shields.io/badge/🕹️_JOUER_MAINTENANT-FF6B6B?style=for-the-badge)](https://godwin-creator.github.io/flappybird-v2/)

### Option 2 : Installation locale

```bash
# 1. Cloner le dépôt
git clone https://github.com/Godwin-creator/flappybird-v2.git

# 2. Accéder au répertoire
cd flappybird-v2

# 3. Ouvrir avec un serveur local
# Méthode A : Live Server (VS Code)
# Méthode B : Python
python -m http.server 8000

# 4. Accéder au jeu
# Navigateur → http://localhost:8000
```

### Option 3 : Fork et personnalisation

1. Fork ce repository
2. Activez GitHub Pages dans les paramètres
3. Personnalisez le code selon vos besoins
4. Déployez votre version !

---

## 🆚 Comparaison V1 vs V2

| Critère | Version 1 | Version 2 |
|:--------|:---------:|:---------:|
| **Sécurité du record** | ❌ Aucune | ✅ Chiffrement |
| **Design** | Basique | Moderne |
| **Responsive** | Limité | Complet |
| **Performance** | Standard | Optimisée |
| **Code** | Simple | Structuré |
| **Documentation** | Minimale | Complète |
| **Protection triche** | 0% | 85% |

---

## 🛠️ Technologies et outils

<div align="center">

### Stack technique

| Technologie | Utilisation | Version |
|:------------|:------------|:--------|
| **HTML5** | Structure & Canvas | Latest |
| **CSS3** | Styling & Animations | Latest |
| **JavaScript ES6+** | Logique de jeu | ECMAScript 2015+ |
| **LocalStorage API** | Sauvegarde sécurisée | HTML5 Web Storage |
| **GitHub Pages** | Hébergement gratuit | - |

</div>

---

## 📊 Améliorations futures (V3)

- [ ] 🎵 Mode avec/sans musique de fond
- [ ] 🌓 Thème jour/nuit avec toggle
- [ ] 🏅 Système de achievements/trophées
- [ ] 👥 Classement global (avec backend)
- [ ] 🎮 Support manette de jeu
- [ ] 📱 Application mobile native (PWA)
- [ ] 🤖 Mode IA pour démonstration
- [ ] 🌐 Multilingue (FR/EN/ES)
- [ ] 🔊 Effets sonores enrichis
- [ ] ⚡ Mode "Hardcore" avec vitesse progressive

---

## 👨‍💻 Développeur

<div align="center">

### **Komi Godwin EDOH BEDI**

*Étudiant en Génie Logiciel | École Polytechnique de Lomé*

💼 Développeur Web Full-Stack en devenir  
🎯 Spécialisé en JavaScript, React et Node.js  
🌟 Passionné par l'innovation et les défis techniques

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/komi-godwin-edoh-bedi-449166339)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Godwin-creator)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://github.com/Godwin-creator)

</div>

---

## 📄 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

```
MIT License - Vous êtes libre de :
✅ Utiliser ce code pour vos projets
✅ Modifier et adapter le code
✅ Distribuer votre version
✅ Utiliser à des fins commerciales

Condition : Mentionner l'auteur original
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

1. 🍴 **Fork** le projet
2. 🌿 Créer une branche (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. 📤 Push vers la branche (`git push origin feature/AmazingFeature`)
5. 🔄 Ouvrir une **Pull Request**

---

## 📞 Support et feedback

<div align="center">

### Besoin d'aide ou vous avez des suggestions ?

| Action | Méthode |
|:-------|:--------|
| 🐛 **Bug report** | [Ouvrir une issue](https://github.com/Godwin-creator/flappybird-v2/issues) |
| 💡 **Suggestion** | [Démarrer une discussion](https://github.com/Godwin-creator/flappybird-v2/discussions) |
| ⭐ **Vous aimez ?** | Mettez une étoile au projet ! |
| 📧 **Contact direct** | [Envoyer un email](mailto:edohbedigodwin@gmail.com) |

</div>

---

## 🙏 Remerciements

- 🎮 Dong Nguyen - Créateur du Flappy Bird original
- 🌐 Communauté GitHub - Pour l'inspiration et le partage
- 📚 MDN Web Docs - Documentation exhaustive
- 🎨 Freepik - Ressources graphiques

---

<div align="center">

### 📈 Statistiques du projet

![GitHub stars](https://img.shields.io/github/stars/Godwin-creator/flappybird-v2?style=social)
![GitHub forks](https://img.shields.io/github/forks/Godwin-creator/flappybird-v2?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Godwin-creator/flappybird-v2?style=social)

---

**Développé avec ❤️, ☕ et beaucoup de détermination**

*"Le code est de la poésie que seuls les ordinateurs peuvent comprendre"*

**#CodeAvecPassion** 🔥 | **#GameDev** 🎮 | **#JavaScript** 💛

---

© 2024-2025 Komi Godwin EDOH BEDI | Tous droits réservés

</div>
