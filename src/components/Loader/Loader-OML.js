import { styles } from './Loader-OML.styles.js';

export class LoaderOML extends HTMLElement {
      constructor() {
            super();
            this.attachShadow({ mode: 'open' });
      }
      render() {
            this.shadowRoot.innerHTML = /* html */`
                  <div>Cargando ...</div>
            `;
            this.shadowRoot.innerHTML += styles;
      }
      connectedCallback() {
            this.render();
      }
}

window.customElements.define('loader-oml', LoaderOML)