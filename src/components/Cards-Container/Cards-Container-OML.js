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

  handleCardsProps() {
    let movie = this.getAttribute('data');

    let cards = this.shadowRoot.querySelectorAll('card-oml') || [];
    cards.length > 0
      ? cards.forEach((card) => {
          card.setAttribute('id', generarID());
          card.setAttribute('data', movie);
        })
      : null;
  }

  render() {
    this.shadowRoot.innerHTML =
      /*html*/
      `<div class="cards-container">
      ${
        this.getAttribute('data').length > 10
          ? JSON.parse(this.getAttribute('data')).map((item) => {
              return '<card-oml></card-oml>';
            })
          : 'Something went wrong'
      }
      </div>`;
    this.getAttribute('data').length > 10 && this.handleCardsProps();
    this.shadowRoot.innerHTML += styles;
  }

  connectedCallback() {
    document.addEventListener('[search-oml]-response-value', this);
    this.render();
  }
}

window.customElements.define('cards-container-oml', CardsContainerOML);
