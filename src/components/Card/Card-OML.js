import { styles } from './Card-OML.styles.js';

class CardOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title'];
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <div class="card">
          ${this.getAttribute('title')}
        </div>
    `;
    this.shadowRoot.innerHTML += styles;
  }

  connectedCallback() {
    this.render();
  }
}

window.customElements.define('card-oml', CardOML);
