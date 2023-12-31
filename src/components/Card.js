//Class Card will have 3 parameters, 1. data 2. cardSelector 3. handleImageClick
//getview() is the entry point, it is the only public method in this class
export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector; //this is the template of the card, i.e cardSelector = #card-template
    this._handleImageClick = handleImageClick;
  }

  //Set the Event Listeners for the following (3):
  //1. Like Button
  //2. Delete Button
  //3. Preview Image
  _setEventListeners() {
    //".card__like-button" this._handleLikeIcon()
    //1-Handle the Like Button
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    //2-Handle the Delete Button
    this._cardElement
      .querySelector(".card__trash-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    // this._cardImageElement = this._cardElement.querySelector(".card__image");
    // this._cardTitleElement = this._cardElement.querySelector(".card__title");
    //3-Handle the Click Image Button i.e. Preview Card Click
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  //fyi, cardelement is the current card we are working with
  _handleLikeIcon() {
    //console.log("Pressing Like Button from  card class");
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
    //this._cardElement.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  //Public Method-since you can access it outside its class
  //this is the entrance point to your card, which will be used/called in index.js
  //1.Grab the template first and clone it (i.e cardSelector = #card-template)
  //2. Add data to the template clone & call setEventListersn() method and return new card
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
    console.log("cardSelector: ", this._cardSelector);
    this._cardTitle.textContent = this._name;

    //console.log(cardElement);
    //This will add all the event listeners when the card is created
    this._setEventListeners();
    //1-get the card view
    //2-set event listeners-we are invoking a method, so we are using this
    //there will be 3 event listenrs, like button, delete button, preview image
    //3-return the card
    return this._cardElement;
  }
}
