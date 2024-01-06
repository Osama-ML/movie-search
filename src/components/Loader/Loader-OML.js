import { styles } from './Loader-OML.styles.js';

export class LoaderOML extends HTMLElement {
      constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.setAttribute('hiddingLoader', true);
      }
      handleEvent(event){
            if(event.type === '[search-oml]-show-loader') {
                  console.log(event.detail)
                  this.setAttribute('hiddingLoader', !event.detail);
                  this.render();
            }
      }
      render() {
            this.shadowRoot.innerHTML = /* html */`
                  <div ${this.getAttribute('hiddingLoader') === 'true' ? 'hidden' : ''}>Cargando ...</div>
            `;
            this.shadowRoot.innerHTML += styles;
      }
      connectedCallback() {
            document.addEventListener('[search-oml]-show-loader', this);
            this.render();
      }
}

window.customElements.define('loader-oml', LoaderOML)