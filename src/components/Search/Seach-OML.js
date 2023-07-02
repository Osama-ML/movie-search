import { styles } from './Search-OML.styles';

export class SearchOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.setAttribute('titleToSearch', '');
    this.setAttribute('searchResponse', '');
  }

  static get observedAttributes() {
    return ['titleToSearch', 'searchResponse'];
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
    } else if (event.type === '[button-oml]-search-value') {
      this.setAttribute('searchResponse', JSON.stringify(event.detail.data));
      const searchResponsedEvent = new CustomEvent('[search-oml]-response-value', {
        detail: { data: this.getAttribute('searchResponse') },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(searchResponsedEvent);
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
    document.addEventListener('[button-oml]-search-value', this);
    this.render();
  }
}

window.customElements.define('search-oml', SearchOML);
