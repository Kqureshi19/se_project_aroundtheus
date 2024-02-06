//child class of popup class
//remember-super refers to the parent class
//create instance of PopupWithForm class for each popup that contains a form
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popupForm.querySelector(".modal__save-button");
  }
  //can remove this 13-16
  close() {
    this._popupForm.reset();
    super.close();
  }

  //collects data from all input fields and returns it as an object
  //This will be passed to the submission handler as an argument
  _getInputValues() {
    const formDataObj = {}; //create empty object
    this._inputValues = this._popupForm.querySelectorAll(".modal__input"); //can probably move to constructor?
    this._inputValues.forEach((inputElement) => {
      formDataObj[inputElement.name] = inputElement.value; //add a fieldname:fieldvalue pair as an object
    });
    return formDataObj; //returns data as an object
  }

  //public method that will be used by the popups in index.js
  //to indiate it is 'saving' the information on the modal/popup
  setLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Saving...";
    } else {
      this._submitButton.textContent = "Save";
    }
  }

  //overrides setEventListeners() parent method
  //Should add a submit event listener to the form & call the setEventListeners() of the parent class
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    //super.setEventListeners();
  }
}

/*index.js

const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
newCarfdPopup.open();

newCarfdPopup.close(); */
