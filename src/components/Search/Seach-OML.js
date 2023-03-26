import { styles } from './Search-OML.styles';

class SearchOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.setAttribute('titleToSearch', '');
  }

  static get observedAttributes() {
    return ['titleToSearch'];
  }

  handleEvent(event) {
    if (event.type === '[input-oml]-new-value') {
      this.setAttribute('titleToSearch', event.detail.data);
      const titleToSearchEvent = new CustomEvent('[search-oml]-search-value', {
        detail: { data: this.getAttribute('titleToSearch') },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(titleToSearchEvent);
    }
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
        <div class="search-component">
            <input-oml></input-oml>
            <button-oml ></button-oml>
        </div>
    `;
    this.shadowRoot.innerHTML += styles;
  }

  connectedCallback() {
    document.addEventListener('[input-oml]-new-value', this);
    this.render();
  }
}

window.customElements.define('search-oml', SearchOML);
