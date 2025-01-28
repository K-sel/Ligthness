import convert from "color-convert";
class Colors {
  #hsl;
  #hex;
  #element;
  constructor([h, s, l]) {
    this.#hsl = [h, s, l];
    this.#hex = convert.hsl.hex(this.#hsl);
  }

  #generateElement() {
    let textColor = this.#hsl[2] < 60 ? "rgb(255,255,255)" : "rgb(0,0,0)";
    this.#element = `<div class="color" data-color="#${
      this.#hex
    }" style="background-color: #${
      this.#hex
    }"><p style="color: ${textColor}">#${this.#hex}</p></div>`;
  }

  display(parent) {
    this.#generateElement();
    parent.insertAdjacentHTML("afterbegin", this.#element);
  }
}

export default Colors;
