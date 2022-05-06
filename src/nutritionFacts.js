import template from "./nutritionShadowDom.js";

class NutritionFacts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.#render();
  }
  
  #render () {
    this.shadowRoot.querySelector(".fat:not(.calories)").innerText = `${this.getAttribute(
      "fat"
    ) && this.getAttribute("fat") !== "NaN" ? this.getAttribute("fat") : 0}g`;
    this.shadowRoot.querySelector(
      ".carbohydrates"
    ).innerText = `${this.getAttribute("carbohydrates") && this.getAttribute("carbohydrates") !== "NaN" ? this.getAttribute("carbohydrates") : 0}g`;
    this.shadowRoot.querySelector(".protein").innerText = `${this.getAttribute(
      "protein"
    ) && this.getAttribute("protein") !== "NaN" ? this.getAttribute("protein") : 0}g`;
    this.shadowRoot.querySelector(".calories").innerText =
      this.getAttribute("protein") * 4 +
      this.getAttribute("carbohydrates") * 4 +
      this.getAttribute("fat") * 9;

    this.shadowRoot.querySelector(".vit-a").innerText = `${this.getAttribute("vit-a-perc") && this.getAttribute("vit-a-perc") !== "NaN" ? this.getAttribute("vit-a-perc") : 0}%`;
    this.shadowRoot.querySelector(".vit-c").innerText = `${this.getAttribute("vit-c-perc") && this.getAttribute("vit-c-perc") !== "NaN" ? this.getAttribute("vit-c-perc") : 0}%`;
    this.shadowRoot.querySelector(".calcium").innerText = `${this.getAttribute("calcium-perc") && this.getAttribute("calcium-perc") !== "NaN" ? this.getAttribute("calcium-perc") : 0}%`;
    this.shadowRoot.querySelector(".iron").innerText = `${this.getAttribute("iron-perc") && this.getAttribute("iron-perc") !== "NaN" ? this.getAttribute("calcium-perc") : 0}%`;
    this.shadowRoot.querySelector(".serving").innerText = `Serving Size ${this.getAttribute("serving")}`;
      
    this.shadowRoot.querySelector(".calories.fat").innerText =`From fat: ${this.getAttribute("fat") * 9 && this.getAttribute("fat") !== "NaN" ? this.getAttribute("fat") * 9 : 0}`;
    this.shadowRoot.querySelector(".carbohydrates.percentage").innerText = `${this.getAttribute("carbohydrates") !== "NaN" ? Math.round(( this.getAttribute("carbohydrates") / 275 ) * 100) : 0}%`;
    this.shadowRoot.querySelector(".fat.percentage").innerText = `${ this.getAttribute("fat") !== "NaN" ? Math.round(( this.getAttribute("fat") / 65 ) * 100) : 0}%`;
    this.shadowRoot.querySelector(".protein.percentage").innerText = `${this.getAttribute("protein") !== "NaN" ? Math.round(( this.getAttribute("protein") / 50 ) * 100) : 0}%`;
  }

  static get observedAttributes() {
		return ["serving", "fat", "carbohydrates", "protein", "vit-a-perc", "vit-c-perc", "calcium-perc", "iron-perc"];
	}

  attributeChangedCallback(name, oldValue, newValue) {
    this.#render();
  }

}

window.customElements.define("nutrition-facts", NutritionFacts);
