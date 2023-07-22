import { debounce } from '../../utils.js';
import { styles } from './Input-OML.styles.js';

export class InputOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.setAttribute('value', '');
    this.inputDebounce = debounce(this.sendInputData, 500);
  }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'value') {
      try {
        this.inputDebounce(newVal);
      } catch {
        this.sendInputData(newVal);
      }
    }
  }

  sendInputData(newVal) {
    const newInputValueEvent = new CustomEvent('[input-oml]-new-value', {
      detail: { data: newVal },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(newInputValueEvent);
  }

  handleInput(e) {
    this.setAttribute('value', e.target.value);
  }

  manageInput() {
    this.input = this.shadowRoot.querySelector('input');
    this.input.type = 'text';
    this.input.className = 'input-html';
    this.input.addEventListener('input', (e) => this.handleInput(e));
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
        <input placeholder="Busca tu película"/>
    `;
    this.shadowRoot.innerHTML += styles;
  }

  connectedCallback() {
    this.render();
    this.manageInput();
  }
}

window.customElements.define('input-oml', InputOML);
