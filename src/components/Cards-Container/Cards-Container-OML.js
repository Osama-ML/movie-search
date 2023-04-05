import { styles } from './Cards-Container-OML.styles.js';

class CardsContainerOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <div class="cards-container"></div>
    `;
    this.shadowRoot.innerHTML += styles;
  }

  connectedCallback() {
    this.render();
  }
}

window.customElements.define('cards-container-oml', CardsContainerOML);
