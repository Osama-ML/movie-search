import { styles } from './Cards-Container-OML.styles.js';

class CardsContainerOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.data = ['GoT', 'Batman', 'SuperMan'];
  }

  handleEvent(event) {
    if (event.type === '[search-oml]-response-value') {
      this.data = event.detail;
      console.log(this.data);
    }
  }

  render() {
    this.shadowRoot.innerHTML =
      /*html*/
      `<div class="cards-container"></div>`;
    this.shadowRoot.innerHTML += styles;
  }

  createCards() {
    this.data.map((movie) => {
      const cardElement = document.createElement('card-oml');
      cardElement.setAttribute('title', movie);
      this.shadowRoot.querySelector('.cards-container').appendChild(cardElement);
    });
  }

  errorMessage() {
    const errorElement = document.createElement('p');
    errorElement.textContent = 'Movie not found, try later';
    errorElement.className = 'error';
    this.shadowRoot.querySelector('.cards-container').appendChild(errorElement);
  }

  connectedCallback() {
    document.addEventListener('[search-oml]-response-value', this);
    this.render();
    this.data.length ? this.createCards() : this.errorMessage();
  }
}

window.customElements.define('cards-container-oml', CardsContainerOML);
