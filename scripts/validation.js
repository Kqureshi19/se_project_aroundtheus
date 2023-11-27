// enabling validation by calling enableValidation()
// pass all the settings on call
//spread operator is the same as array.from with few very minor differences

function showInputError(formElement, inputElement, {inputErrorClass,errorClass}) {
  //console.log(inputElement.id);
  //console.log("#" + inputElement.id + "-error");
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  //console.log(errorMessageElement);
  inputElement.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(errorClass);


function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

//e.target is the same as inputElement
function setEventListeners(formElement, options) {
  const { inputSelector } = options; //these 2 lines are the same just different ways of writing it
  //const inputSelector = options.inputSelector;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      //console.dir(inputElement);
      //console.log(inputElement.validity.valid);
      //the error mesage is on the validationMessage, it is a top level property
      //console.log(inputElement.validationMessage);
      checkInputValidity(formElement, inputElement, options);
    });
  });
}
function enableValidation(options) {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  //console.log(formElements);
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formElement, options);
    // look for all inputs inside of form
    //loop through all the inputs to see if all are valid
    // if  input is not valid,
    //grab the validation message
    //add error classs to input (make it red)
    //display error message
    //disable button
    //if all inputs are valid
    //enable button
    // reest error message
  });
}

const config = {
  formSelector: ".modal__form", // .popup__form
  inputSelector: ".modal__input", //.popup__input
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
