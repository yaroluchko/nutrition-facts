import template from "./nutritionShadowDom.js";

class NutritionFacts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector(".fat:not(.calories)").innerText = `${this.getAttribute(
      "fat"
    )} g`;
    this.shadowRoot.querySelector(
      ".carbohydrates"
    ).innerText = `${this.getAttribute("carbohydrates")} g`;
    this.shadowRoot.querySelector(".protein").innerText = `${this.getAttribute(
      "protein"
    )} g`;
    this.shadowRoot.querySelector(".calories").innerText =
      this.getAttribute("protein") * 4 +
      this.getAttribute("carbohydrates") * 4 +
      this.getAttribute("fat") * 9;

    this.shadowRoot.querySelector(".vit-a").innerText = `${this.getAttribute("vit-a-perc")}%`;
    this.shadowRoot.querySelector(".vit-c").innerText = `${this.getAttribute("vit-c-perc")}%`;
    this.shadowRoot.querySelector(".calcium").innerText = `${this.getAttribute("calcium-perc")}%`;
    this.shadowRoot.querySelector(".iron").innerText = `${this.getAttribute("iron-perc")}%`;
      
    this.shadowRoot.querySelector(".calories.fat").innerText =`From fat: ${this.getAttribute("fat") * 9}`;
    this.shadowRoot.querySelector(".carbohydrates.percentage").innerText = `${ Math.round(( this.getAttribute("carbohydrates") / 275 ) * 100) }%`;
    this.shadowRoot.querySelector(".fat.percentage").innerText = `${ Math.round(( this.getAttribute("fat") / 65 ) * 100) }%`;
    this.shadowRoot.querySelector(".protein.percentage").innerText = `${ Math.round(( this.getAttribute("protein") / 50 ) * 100) }%`;
  }
}

window.customElements.define("nutrition-facts", NutritionFacts);
