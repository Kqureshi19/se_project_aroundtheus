import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    console.log("PopupSelector is: ", popupSelector);
    this._cardImageElement = this._popupElement.querySelector(
      ".modal__preview-image"
    );
    //this._cardTitleElement = this._popupElement.querySelector(".card__title");
    this._modalCaption = this._popupElement.querySelector(".modal__caption");
  }

  open(data) {
    console.log("modal Caption");
    //console.log(this._cardImageElement);
    //console.log(this._modalCaption.textContent);
    //console.log(this._modalCaption.textContent);
    this._cardImageElement.src = data.link;
    this._cardImageElement.alt = data.name; //`Image ${data.link}`;
    this._modalCaption.textContent = data.name;
    console.log(this._modalCaption.textContent);
    console.log("the alt text is:", this._cardImageElement.alt);

    super.open();
  }
}

/*
const popupWithImage = new PopupWithImage('#preview-card-modal')
popupWithImgage.setEventListners()

const popupWithForm1= new PopupWithForm('#add-card-modal')

const popupWithForm1= new PopupWithForm('#profile-edit-modal')
*/
