import convert from "color-convert";

export default {
  /**
   * Valide si une chaîne de caractères correspond à un code couleur hexadécimal valide.
   * Accepte les formats 3 caractères (#RGB) ou 6 caractères (#RRGGBB) avec le hashtag (#).
   * Utilise une expression régulière conforme aux standards W3C.
   *
   * @param {string} input - La chaîne à valider comme code couleur hexadécimal
   * @returns {boolean} True si la chaîne est un code hexadécimal valide, false sinon
   *
   * @example
   * // Format 6 caractères
   * isHexValue("#FF0000") // Returns true
   *
   * @example
   * // Format 3 caractères
   * isHexValue("#F00")    // Returns true
   *
   * @example
   * // Formats invalides
   * isHexValue("FF0000")  // Returns false (pas de #)
   * isHexValue("#FF00")   // Returns false (longueur incorrecte)
   *
   * Variables utilisées:
   * @var {RegExp} regex - Expression régulière validant le format hexadécimal
   *                       ^        - Début de la chaîne
   *                       #        - Caractère hashtag obligatoire
   *                       (        - Début du groupe
   *                       [A-Fa-f0-9]{6} - 6 caractères hex
   *                       |        - OU
   *                       [A-Fa-f0-9]{3} - 3 caractères hex
   *                       )        - Fin du groupe
   *                       $        - Fin de la chaîne
   */
  isHexValue(input) {
    const regex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    return regex.test(input);
  },

  /**
   * Génère une palette de couleurs HSL à partir d'une couleur hexadécimale.
   * La palette inclut des nuances allant du noir au blanc, en passant par la couleur d'origine.
   *
   * @param {string} hex - Code couleur hexadécimal (ex: "FF0000" ou "#FF0000")
   * @param {number} [steps=10] - Nombre de nuances à générer (par défaut: 10)
   * @returns {Array<Array<number>>} Tableau de couleurs HSL, chaque couleur étant un tableau [hue, saturation, lightness]
   *
   * @example
   * // Génère une palette de 10 nuances à partir du rouge
   * const palette = generatePalette("FF0000");
   * // Retourne: [[0,100,0], [0,100,10], ..., [0,100,100]]
   *
   * @example
   * // Génère une palette de 5 nuances à partir du bleu
   * const palette = generatePalette("0000FF", 5);
   *
   * Variables utilisées:
   * @var {Array<number>} hsl - Couleur HSL d'origine [hue, saturation, lightness]
   * @var {number} incrementationRate - Taux d'incrémentation de la luminosité (100/steps)
   * @var {number} startLightness - Luminosité initiale (0 pour commencer par le noir)
   * @var {Array<Array<number>>} palette - Tableau final contenant toutes les nuances
   * @var {Array<number>} newHsl - Nouvelle couleur HSL créée à chaque itération
   */
  generatePalette(hex, steps = 10) {
    let hsl = convert.hex.hsl(hex);
    let incrementationRate = 100 / steps;

    let startLightness = 0;
    let palette = [];

    for (let i = 0; i <= steps; i++) {
      const newHsl = [...hsl];
      newHsl[2] = Math.round(startLightness + incrementationRate * i);
      palette.unshift(newHsl);
    }
    return palette;
  },

  /**
   * Formate un tableau HSL en une chaîne CSS valide au format hsl().
   * Convertit les valeurs numériques en notation CSS complète avec les unités appropriées.
   *
   * @param {Array<number>} [h,s,l] - Tableau destructuré contenant les valeurs HSL
   *        h: Teinte (Hue) en degrés (0-360)
   *        s: Saturation en pourcentage (0-100)
   *        l: Luminosité (Lightness) en pourcentage (0-100)
   * @returns {string} Chaîne formatée pour CSS : "hsl(Xdeg Y% Z%)"
   *
   * @example
   * cssFormatForHsl([180, 50, 50]) // Returns "hsl(180deg 50% 50%)"
   *
   * @example
   * // Utilisation directe dans une règle CSS
   * element.style.backgroundColor = cssFormatForHsl([180, 50, 50])
   * // Résultat : element.style.backgroundColor = "hsl(180deg 50% 50%)"
   *
   * @example
   * // Dans un gradient
   * `linear-gradient(${cssFormatForHsl([180, 50, 50])}, ${cssFormatForHsl([240, 60, 60])})`
   * // Résultat : linear-gradient(hsl(180deg 50% 50%), hsl(240deg 60% 60%))
   */
  hexToCSSHSL(input) {
    let hsl = convert.hex.hsl(input)
    return `"hsl(${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%)"`;
  },
};
