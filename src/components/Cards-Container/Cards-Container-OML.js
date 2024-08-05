import { generarID, hideLoader, showLoader } from "../../utils.js";
import { styles } from "./Cards-Container-OML.styles.js";

export class CardsContainerOML extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.setAttribute("data", []);
  }

  static get observedAttributes() {
    return ["data"];
  }

  handleEvent(event) {
    if (event.type === "[search-oml]-response-value") {
      this.setAttribute("data", event.detail.data);
      this.render();
    }
  }

  async handleImgs(imgUrl) {
    const imageFetched = await fetch(imgUrl);
    const blobImg = await imageFetched.blob();
    const urlBlob = URL.createObjectURL(blobImg);
    return urlBlob;
  }

  renderCards() {
    let data;
    try {
      data = JSON.parse(this.getAttribute("data")) || [];
    } catch {
      data = [];
    }
    if (data.length > 1) {
      data.map(async (item) => {
        const imgPoster = await this.handleImgs(item["img_poster"]);
        let cardElement = document.createElement("card-oml");
        cardElement.setAttribute("img", imgPoster);
        cardElement.setAttribute("id", generarID());
        cardElement.setAttribute("title", item["title"]);
        this.shadowRoot
          .querySelector(".cards-container")
          .appendChild(cardElement);
      });
    } else {
      let nothingData = document.createElement("p");
      nothingData.textContent = "Something went wrong";
      this.shadowRoot
        .querySelector(".cards-container")
        .appendChild(nothingData);
    }
  }

  render() {
    this.shadowRoot.innerHTML =
      /*html*/
      `<ul class="cards-container"></ul>`;
    this.renderCards();
    this.shadowRoot.innerHTML += styles;
    setTimeout(() => {
      this.dispatchEvent(hideLoader());
    }, 1000);
  }

  connectedCallback() {
    document.addEventListener("[search-oml]-response-value", this);
    this.render();
  }
}

window.customElements.define("cards-container-oml", CardsContainerOML);
