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

/*console.log(initialCards); */

/*-----------------------------*/
/*  Elements                   */
/*------------------------------*/

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

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/*-----------------------------*/
/*  Functions                   */
/*------------------------------*/

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

/*-----------------------------*/
/*  Event Handlers             */
/*------------------------------*/

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

/*-----------------------------*/
/*  Event Listeners            */
/*------------------------------*/
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

initialCards.forEach((cardData) => {
  //1-clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);

  //access the card title and image and store them in variables
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  //set the path to the image to the link field of the object
  cardImageElement.textContent = cardData.link;
  //console.log(cardImageElement);
  //set the image alt text to the name field of the object
  cardElement.querySelector(".img src").src = cardImageElement;
  //set the card title to the name field of the object, too
  cardTitleElement.textContent = cardData.name;
  //return the ready HTML element with the filled-in data

  //return cardElement;
  cardListElement.append(cardElement);
  cardElement.append(cardElement);
});
