import convert from "color-convert";

export default {
  /*Cette méthode contrôle l'input et atteste 
    qu'elle est bien un code couleur HEX. 
    Regex pris sur W3C.*/
  isHexValue(input) {
    const regex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    return regex.test(input);
  },

  /*Cette méthode recoit une couleur en hexadécimal et la converti en HSL
  Ensuite elle crée des nuances en divisant 100 par le nombre de nuances souhaitées par défaut c'est 10
  Enfin elle retourne un tableau avec toutes les nuances en inculant le noir et le blanc aux extrémités.*/
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
};
