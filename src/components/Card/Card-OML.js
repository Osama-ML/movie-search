import { styles } from './Card-OML.styles.js';

class CardOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['data'];
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
          <div class="card">
            ${JSON.parse(this.getAttribute('data'))[0].Title}
          </div>
    `;
    this.shadowRoot.innerHTML += styles;
  }

  connectedCallback() {
    this.getAttribute('data') && this.render();
  }
}

window.customElements.define('card-oml', CardOML);
