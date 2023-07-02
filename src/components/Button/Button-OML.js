import { handleMockResponse } from '../../mocks/movies-mock-response-handler.js';
import { styles } from './Button-OML.styles.js';
// import { apiKey } from './variables.js';

export class ButtonOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.setAttribute('titleToSearch', '');
  }

  static get observedAttributes() {
    return ['titleToSearch'];
  }

  handleClick() {
    const title = this.getAttribute('titleToSearch');
    const data = handleMockResponse(title);
    const titleToSearchEvent = new CustomEvent('[button-oml]-search-value', {
      detail: { data },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(titleToSearchEvent);

    // TODO : remove mock calls and implement real api services
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': apiKey,
    //     'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com',
    //   },
    // };

    // fetch(`https://moviesdb5.p.rapidapi.com/om?t=${title}`, options)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     const titleToSearchEvent = new CustomEvent('[button-oml]-search-value', {
    //       detail: { data: response },
    //       bubbles: true,
    //       composed: true,
    //     });
    //     this.dispatchEvent(titleToSearchEvent);
    //     console.log(response);
    //   })
    //   .catch((err) => console.error(err));
  }

  handleEvent(event) {
    if (event.type === '[search-oml]-search-value') {
      this.setAttribute('titleToSearch', event.detail.data);
    }
  }

  manageButton() {
    this.button = this.shadowRoot.querySelector('button');
    this.button.addEventListener('click', (e) => this.handleClick(e));
  }

  connectedCallback() {
    document.addEventListener('[search-oml]-search-value', this);
    this.render();
    this.manageButton();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
        <button> 
          <svg viewBox="0 0 24 24" fill="white" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></g></svg>
        </button>
    `;
    this.shadowRoot.innerHTML += styles;
  }
}

window.customElements.define('button-oml', ButtonOML);
