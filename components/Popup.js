//popupSelector identifies which popup we are working with
//will be responsible for opening/closing all the popups in your application
//these are already defined in index.js-just need to find them
export default class Popup {
  constructor({ popupSelector }) {
    console.log(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    return;
  }

  //listens for esc button
  _handleEscClose(evt) {
    debugger;
    if (evt.key === "Escape") {
      this.close();
    }
  }

  //sets event listeners
  //create an event listener for click on the CLOSE button or popup half-transparent background
  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__close")
      ) {
        this.close();
      }
    });
  }
}
