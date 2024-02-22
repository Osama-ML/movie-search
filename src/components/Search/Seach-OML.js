import { parseFetchedData, showLoader } from '../../utils';
import { styles } from './Search-OML.styles';

export class SearchOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.setAttribute('titleToSearch', '');
  }

  static get observedAttributes() {
    return [ 'titleToSearch' ];
  }

  async handleEvent(event) {
    if (event.type === '[input-oml]-new-value') {
      this.setAttribute('titleToSearch', event.detail.data);
      let titleToFetch = this.getAttribute('titleToSearch');
      try {
        this.dispatchEvent(showLoader());
        const response = await fetch(`https://search.imdbot.workers.dev/?q=${titleToFetch}`);
        const data = await response.json();
        let fetchData = parseFetchedData(data.description);
        const searchResponsedEvent = new CustomEvent('[search-oml]-response-value', {
          detail: { data: JSON.stringify(fetchData) },
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(searchResponsedEvent);
      }
      catch {
        const searchResponsedEvent = new CustomEvent('[search-oml]-response-value', {
          detail: { data: [] },
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(searchResponsedEvent);
      }
    }
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
        <div class="search-component">
            <input-oml></input-oml>
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
