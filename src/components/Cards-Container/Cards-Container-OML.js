import { styles } from './Cards-Container-OML.styles.js';

class CardsContainerOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.data = ['GoT', 'Batman', 'SuperMan'];
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <div class="cards-container">
          ${this.data.map((movie) => /*html*/ `<card-oml title="${movie}"></card-oml>`)}
        </div>
    `;
    this.shadowRoot.innerHTML += styles;
  }

  connectedCallback() {
    this.render();
  }
}

window.customElements.define('cards-container-oml', CardsContainerOML);
