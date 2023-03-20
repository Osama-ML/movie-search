import { styles } from './Search-OML.styles';

class SearchOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
        <div class="search-component">
            <input-oml></input-oml>
            <button-oml></button-oml>
        </div>
    `;
    this.shadowRoot.innerHTML += styles;
  }
}

window.customElements.define('search-oml', SearchOML);
