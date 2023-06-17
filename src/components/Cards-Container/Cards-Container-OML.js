import { generarID } from '../../utils.js';
import { styles } from './Cards-Container-OML.styles.js';

class CardsContainerOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.setAttribute('data', []);
  }

  static get observedAttributes() {
    return ['data'];
  }

  handleEvent(event) {
    if (event.type === '[search-oml]-response-value') {
      this.setAttribute('data', event.detail.data);
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML =
      /*html*/
      `<ul class="cards-container">
      ${
        this.getAttribute('data').length > 10
          ? JSON.parse(this.getAttribute('data')).map((item) => {
              return /*html*/ `<li class="card" id=${generarID()}>${item.Title}</li>`;
            })
          : 'Something went wrong'
      }
      </ul>`;
    this.shadowRoot.innerHTML += styles;
  }

  connectedCallback() {
    document.addEventListener('[search-oml]-response-value', this);
    this.render();
  }
}

window.customElements.define('cards-container-oml', CardsContainerOML);
