// Enabling validation by calling enableValidation()
// Pass all the settings on call
//Spread operator is the same as array.from with few very minor differences

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
//Step 1-Validate the 'Edit Profile" Form
//Step 2--Validate the "New Place" Form

function showInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  //console.log(inputElement.id);
  //console.log("#" + inputElement.id + "-error");
  //we're searching for the span that contains the error, don't haev to use formElement
  //template literals allow us to put variables inside of it and string
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  //console.log(errorMessageElement);
  inputElement.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(errorClass);
}

function hideInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  //console.log(inputElement.id);
  //console.log("#" + inputElement.id + "-error");
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  //console.log(errorMessageElement);
  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(errorClass);
}
//Check the validity of the input
//Will run everytime a user puts an input into the form
function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    return showInputError(formElement, inputElement, options);
  }

  hideInputError(formElement, inputElement, options);
}

//look through all the input elements and check the validity of all of them
//if at least 1 is invalid, turn off/disable the button
function toggleButtonState(
  inputElements,
  submitButton,
  { inactiveButtonClass }
) {
  let foundInvalid = false;
  inputElements.forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      foundInvalid = true;
    }
  });

  if (foundInvalid) {
    submitButton.classList.add(inactiveButtonClass);
    return (submitButton.disabled = true);
  }

  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

//e.target is the same as inputElement
//loop through all the inputs and listen to an event
//also input event listener,,also a change one to research
function setEventListeners(formElement, options) {
  const { inputSelector } = options; //these 2 lines are the same just different ways of writing it
  //const inputSelector = options.inputSelector;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(".modal__save-button");
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      //console.dir(inputElement);
      //console.log(inputElement.validity.valid);
      //the error mesage is on the validationMessage, it is a top level property
      //console.log(inputElement.validationMessage);
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButton, options);
    });
  });
}
//spread operator works the same way as array.from,
//loop through all the buttons and add event listeners and prevent reloading the page
function enableValidation(options) {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  //console.log(formElements);
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formElement, options);
    //Pseudo Code:
    // 1-Look for all inputs inside of form
    // 2-Loop through all the inputs to see if all are valid
    // 3-If input is not valid, grab the validation message
    // 4-Add error classs to input (make it red)
    // 5-Display error message
    // 6-Disable button
    // 7-If all inputs are valid
    // 8-Enable button
    // 9-Reset error message
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);

/* -------------------------------------------------------------------------- */
/*                Step 3-Closing the Popup  By Clicking on the Overlay        */
/* -------------------------------------------------------------------------- */

function foundModalOpened(evt, modal) {
  if (evt.target.classList.contains("modal_opened")) {
    console.log(evt.target.classList);
    closeModal(modal);
  }
}

///Step 3- Preview Card Modal Closing Event Listener
previewCardModal.addEventListener("click", function (evt) {
  //console.log(evt.target.classList);
  foundModalOpened(evt, previewCardModal);
});

///Step 3-Profile Edit Modal Closing Event Listener
profileEditModal.addEventListener("click", function (evt) {
  foundModalOpened(evt, profileEditModal);
});

///Step 3-Profile Add Modal Closing Event Listener
addCardModal.addEventListener("click", function (evt) {
  foundModalOpened(evt, addCardModal);
});

/* -------------------------------------------------------------------------- */
/*           Step 4-Closing the popup/modal by Pressing Esc Key button        */
/* -------------------------------------------------------------------------- */

//go in index.js
/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
