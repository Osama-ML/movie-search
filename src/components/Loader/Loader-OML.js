import { styles } from './Loader-OML.styles.js';

export class LoaderOML extends HTMLElement {
      constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.setAttribute('hiddingLoader', true);
      }
      handleEvent(event){
            if(event.type === '[search-oml]-show-loader') {
                  this.setAttribute('hiddingLoader', !event.detail);
                  this.render();
            }
      }
      render() {
            this.shadowRoot.innerHTML = /* html */`
                  <div ${this.getAttribute('hiddingLoader') === 'true' ? 'hidden' : ''}
                  class=${this.getAttribute('hiddingLoader') === 'true' ? 'hidden' : ''}
                  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" stroke="#fff">
                              <g fill="none" fill-rule="evenodd">
                                    <g transform="translate(1 1)" stroke-width="2">
                                          <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                                          <path d="M36 18c0-9.94-8.06-18-18-18">
                                          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                                          </path>
                                    </g>
                              </g>
                        </svg>
                  </div>
            `;
            this.shadowRoot.innerHTML += styles;
      }
      connectedCallback() {
            document.addEventListener('[search-oml]-show-loader', this);
            this.render();
      }
}

window.customElements.define('loader-oml', LoaderOML)