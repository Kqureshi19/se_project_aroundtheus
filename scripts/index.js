const initialCards = [
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

//console.log(initialCards);

/*-----------------------------------------------------------------------------------------------*/
/*  Elements                   */
/*------------------------------------------------------------------------------------------------*/

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditModalCloseButton = document.querySelector(
  "#profile-edit-modal-close-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListElement = document.querySelector(".cards__list");
console.log("1" + cardListElement);

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/*---------------------------------------------------------------------------------------------*/
/*  Functions                   */
/*----------------------------------------------------------------------------------------------*/

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

/*
Line 1: Clone the template element with all its content and store it in a cardElement variable
Line 2 & 3: Access the card title and image and store them in variables
Line 4: Set the path to the image to the link field of the object
Line 5: Set the image alt text to the name field of the object
set the card title to the name field of the object, too
return the ready HTML element with the filled-in data
note: cloneNode() method copies the element, but doesn't add it to the DOM
i.e. you have to append it
*/

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  cardImageElement.src = cardData.link;
  //cardElement.querySelector(".img src").src = cardImageElement;
  cardImageElement.alt = cardData.name;
  //set the card title to the name field of the object, too
  cardTitleElement.textContent = cardData.name;

  return cardElement;
}

/*--------------------------------------------------------------------------------------------*/
/*  Event Handlers             */
/*---------------------------------------------------------------------------------------------*/

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

/*---------------------------------------------------------------------------------------------*/
/*  Event Listeners            */
/*--------------------------------------------------------------------------------------------*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditModalCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

/*for (let i = 0; i < initialCards.length; i++) {
  const card = initialCards[i];
} */

console.log("Hi HI HI");
console.log(initialCards[4]);
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);

  //return cardElement;

  cardListElement.prepend(cardElement);
});
