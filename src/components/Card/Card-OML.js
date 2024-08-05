import { styles } from "./Card-OML.styles.js";

export class CardOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML =
      /*html*/
      `<li class="card" id=${this.getAttribute("id")}>
                        <p class="card__title">${this.getAttribute("title")}</p>
                        <img class="card__image" src=${this.getAttribute("img")}>
                  </li>`;
    this.shadowRoot.innerHTML += styles;
  }
}
window.customElements.define("card-oml", CardOML);
