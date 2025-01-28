# Générateur de Palettes de Couleurs

Un outil interactif permettant de générer des palettes de couleurs harmonieuses à partir d'un code couleur hexadécimal. Il est conçu pour les designers et développeurs souhaitant explorer et copier facilement des codes couleurs.

**URL de l'application : [https://lightness-jpd.netlify.app/](https://lightness-jpd.netlify.app/)**

---

## Fonctionnalités

1. **Génération de palettes :**
   - Entrez un code couleur hexadécimal valide (ex : `#ff5733`).
   - Une palette de 11 nuances (différentes luminosités) est générée dynamiquement à partir de ce code.

2. **Affichage dynamique :**
   - La palette est affichée sous forme de blocs colorés, chaque bloc montrant son code hexadécimal.
   - Le fond de l'application change selon les couleurs générées, avec un dégradé fluide.

3. **Copie rapide :**
   - Cliquez sur un bloc pour copier immédiatement le code couleur dans le presse-papier.
   - Une notification visuelle confirme l'action.

---

## Dépendances

Pour le bon fonctionnement du projet, les bibliothèques suivantes doivent être installées :

- **`color-convert`** : Pour convertir les couleurs entre différents formats (HEX, HSL, etc.).
- **`notyf`** : Pour afficher des notifications élégantes (succès ou erreur).
- **`notyf/notyf.min.css`** : Feuille de style liée à Notyf.

Installez-les avec :
```bash
npm install color-convert notyf
```

---

## Explications du Code

### **Structure principale**
- **`app.js`** : 
  - Gère l'interaction utilisateur (soumission de formulaire, clics).
  - Affiche la palette et met à jour dynamiquement l'interface utilisateur.
  
- **`utils.js`** : 
  - Contient les fonctions utilitaires :
    - `generatePalette(hex)` : Génère une palette basée sur la luminosité.
    - `isHexColor(hex)` : Vérifie la validité d'un code hexadécimal.
    - `hexToCSSHSL(hex)` : Convertit un code hexadécimal en HSL (pour les variables CSS).

- **`Color.js`** :
  - Déclare une classe `Color` pour créer et afficher chaque couleur.
  - Gère la conversion HSL -> HEX et applique les styles nécessaires.

### **Processus de génération**
1. **Entrée utilisateur :**
   - Le code hexadécimal est validé avec la fonction `isHexColor`.
2. **Création de la palette :**
   - Une palette de 11 nuances est générée à l'aide de `generatePalette`, en modifiant uniquement la luminosité (HSL).
3. **Affichage :**
   - Chaque couleur est instanciée avec la classe `Color` et ajoutée dynamiquement à l'interface.
4. **Copie au clic :**
   - Lorsqu'un bloc est cliqué, son code couleur est copié dans le presse-papier via l'API `navigator.clipboard`.

---

## Installation et Lancement

1. Clonez ce dépôt :
   ```bash
   git clone <URL_DE_VOTRE_REPO>
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez un serveur local pour tester :
   ```bash
   npm start
   ```

---

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l’utiliser, de le modifier et de le distribuer.
