import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  #product = {};
  elem = null;

  constructor(product) {
    this.#product = product;
    this.#render();

    let button = this.elem.querySelector(".card__button");

    button.addEventListener("click", () => {
      this.elem.dispatchEvent(
        new CustomEvent("product-add", {
          detail: this.#product.id,
          bubbles: true,
        })
      );
    });
  }

  #template() {
    return `
        <div class="card">
          <div class="card__top">
          <img src="/assets/images/products/${
            this.#product.image
          }" class="card__image" alt="product">
          <span class="card__price">€${this.#product.price.toFixed(2)}</span>
          </div>
          <div class="card__body">
          <div class="card__title">${this.#product.name}</div>
            <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
        `;
  }

  #render() {
    this.elem = createElement(this.#template());
  }
}
