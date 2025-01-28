import utils from "./modules/utils";
import Colors from "./modules/colors";
import convert from 'color-convert';

const main = document.querySelector("main");
const form = document.querySelector("form");
const input = document.querySelector("input");
const header = document.querySelector("header");
const body = document.querySelector("body");

const displayColors = ([...palette]) => {
  main.replaceChildren();

  let paletteHex = palette.map((el)=>convert.hsl.hex(el))

  const first = paletteHex[0];
  const middle = paletteHex[Math.floor(palette.length/2)];
  const last = paletteHex.at(-1);

  body.style.background = `linear-gradient(-45deg, #${first}, #${middle}, #${last})`;
  body.style.backgroundSize = `400% 400%`;

  console.log(body.style.background);
  header.classList.add("minimized");
  palette.forEach((element) => {
    let color = new Colors([...element]);
    color.display(main);
  });
};



const handleForm = (e) => {
  e.preventDefault();
  try {
    if (utils.isHexValue(input.value)) {
      let palette = utils.generatePalette(input.value);
      displayColors(palette);
    } else {
      throw new Error(`${input.value} is not a valid Hexadecimal color`);
    }
  } catch (error) {
    console.error(error);
  }
};

form.addEventListener("submit", handleForm);
