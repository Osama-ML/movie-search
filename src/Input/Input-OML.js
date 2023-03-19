import { styles } from './Input-OML.styles.js';

class InputOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  handleInput(e) {
    console.log(e.target.value);
    e.target.value = this.input.value;
    document.querySelector('.container').textContent = e.target.value;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
        <input placeholder="Busca tu película"/>
    `;
    this.shadowRoot.innerHTML += styles;

    this.input = this.shadowRoot.querySelector('input');
    this.input.type = 'text';
    this.input.className = 'input-html';
    this.input.addEventListener('input', (e) => this.handleInput(e));
  }
}

window.customElements.define('input-oml', InputOML);
