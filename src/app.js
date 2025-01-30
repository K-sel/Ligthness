//Imports
import utils from "./modules/utils";
import Colors from "./modules/colors";
import convert from "color-convert";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

//Globales
const notyf = new Notyf();
const main = document.querySelector("main");
const form = document.querySelector("form");
const inputHex = document.querySelector("input#hexCode");
const header = document.querySelector("header");
const body = document.querySelector("body");
const root = document.documentElement;

//Fonctions
const displayColors = ([...palette]) => {
  main.replaceChildren();

  let paletteHex = palette.map((el) => convert.hsl.hex(el));

  const first = paletteHex[0];
  const middle = paletteHex[Math.floor(palette.length / 2)];
  const last = paletteHex.at(-1);

  body.style.background = `linear-gradient(-45deg, #${first}, #${middle}, #${last})`;
  body.style.backgroundSize = `400% 400%`;
  root.style.setProperty("--shadow-color", utils.hexToCSSHSL(inputHex.value));
  header.classList.add("minimized");

  palette.map((element) => new Colors(element).display(main));
};

const handleForm = (e) => {
  e.preventDefault();
  if (utils.isHexValue(inputHex.value)) {
    let palette = utils.generatePalette(inputHex.value, 20);
    displayColors(palette);
  } else {
    notyf.error(`${inputHex.value} is not a valid Hexadecimal color`);
  }
};

const copyColor = async (e) => {
  try {
    const color = e.target.closest(".color").dataset.color;
    await navigator.clipboard.writeText(color);
    notyf.success(`Copied ${color} to clipboard`);
  } catch (error) {
    notyf.error("Failed to copy color in the clipboard");
  }
};

//Event listeners
main.addEventListener("click", copyColor);
form.addEventListener("submit", handleForm);
