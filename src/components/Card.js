//Class Card will have 3 parameters, 1. data 2. cardSelector 3. handleImageClick
//getview() is the entry point, it is the only public method in this class
export default class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    handleImageClick,
    handleCardDeleteClick,
    handleCardLike
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._isLiked = isLiked;
    this._cardSelector = cardSelector; //this is the template of the card, i.e cardSelector = #card-template
    this._handleImageClick = handleImageClick;
    this._handleCardDeleteClick = handleCardDeleteClick;
    this._handleCardLike = handleCardLike;
    this._cardElement = this._getElement();
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this.setLikeIcon();
  }

  // setLikeButtonState() {
  //   if ((isLiked = true)) {
  //     this.setLikeIcon();
  //   }
  // }

  //Set the Event Listeners for the following (3):
  //1. Like Button
  //2. Delete Button
  //3. Preview Image
  _setEventListeners() {
    //".card__like-button" this._setLikeIcon()
    //1-Handle the Like Button
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        console.log(this._handleCardLike);
        this._handleCardLike(this);
        this.setLikeIcon();
      });

    //2-Handle the Delete Button
    this._cardElement
      .querySelector(".card__trash-button")
      .addEventListener("click", () => {
        // this is done locally, subsequent line is deleted on server--this._handleDeleteCard();
        //debugger;
        this._handleCardDeleteClick(this);
      });
    // this._cardImageElement = this._cardElement.querySelector(".card__image");
    // this._cardTitleElement = this._cardElement.querySelector(".card__title");
    //3-Handle the Click Image Button i.e. Preview Card Click
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  setLikeIcon() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  //fyi, cardelement is the current card we are working with
  handleLikeIcon() {
    // //console.log("Pressing Like Button from  card class");
    // this._cardElement
    //   .querySelector(".card__like-button")
    //   .classList.toggle("card__like-button_active");
    // //this._cardElement.classList.toggle("card__like-button_active");
    this._isLiked = !this._isLiked;
    this.setLikeIcon();
  }

  handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getElement() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  //Public Method-since you can access it outside its class
  //this is the entrance point to your card, which will be used/called in index.js
  //1.Grab the template first and clone it (i.e cardSelector = #card-template)
  //2. Add data to the template clone & call setEventListersn() method and return new card
  getView() {
    // this._cardElement = this._getElement();
    // this._cardImage = this._cardElement.querySelector(".card__image");
    // this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    //console.log("right here");
    //console.log("cardSelector: ", this._cardSelector);
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
