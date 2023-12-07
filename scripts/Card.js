export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    //".card__like-button" this._handleLikeIcon()
    console.log("Event Listener: Listening!");
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    //console.log(likeButton);
    //".card__trash-button"
    this._cardElement
      .querySelector(".card__trash-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    console.log(this._cardElement.querySelector(".card__like-button"));
  }

  //fyi, cardelement is the current card we are working with
  _handleLikeIcon() {
    this._cardElement
      .querySelector("card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    console.log("Testing3");
  }

  //this is a public method--since you can access it outside its class
  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    console.log("right here");
    console.log(this._cardTitle);
    this._cardTitle.textcontent = this._name;

    //console.log(cardElement);
    this._setEventListeners();
    //1-get the card view
    //2-set event listeners-we are invoking a method, so we are using this
    //there will be 3 event listenrs, like button, delete button, preview image
    //3-return the card
    return this._cardElement;
  }
}

console.log("testing1");
console.log("testing2");
