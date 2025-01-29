#!/bin/bash

# Vérification des arguments
if [ -z "$1" ]; then
  echo "Erreur : Vous devez fournir un message de commit."
  echo "Usage : npm run deploy -- \"Votre message de commit\""
  exit 1
fi

MESSAGE="$1"

# Exécuter la build
npm run build
if [ $? -ne 0 ]; then
  echo "Erreur : La build a échoué."
  exit 1
fi
echo "Build successful"

# Ajouter les fichiers à Git
git add .
echo "git add . successful"

# Commit avec le message passé en argument
git commit -m "$MESSAGE"
if [ $? -ne 0 ]; then
  echo "Erreur : Le commit a échoué."
  exit 1
fi
echo "git commit successful"

# Push sur le repo distant
git push
if [ $? -ne 0 ]; then
  echo "Erreur : Le push a échoué."
  exit 1
fi
echo "git push successful"
