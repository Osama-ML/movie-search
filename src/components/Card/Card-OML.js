import { styles } from './Card-OML.styles.js';

class CardOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <div class="cards"></div>
    `;
    this.shadowRoot.innerHTML += styles;
  }

  connectedCallback() {
    this.render();
  }
}

window.customElements.define('card-oml', CardOML);
