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

//console.log(typeof initialCards);

/* -------------------------------------------------------------------------- */
/*                                Card Template                               */
/* -------------------------------------------------------------------------- */
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const previewCardModal = document.querySelector("#preview-card-modal");
const modalPreviewImageElement = document.querySelector(
  ".modal__preview-image"
);
//console.log(previewCardModal);
console.log(modalPreviewImageElement);

const profileEditModalCloseButton = profileEditModal.querySelector(
  "#profile-edit-modal-close-button"
);

const addCardModalCloseButton = addCardModal.querySelector(
  "#add-card-modal-close-button"
);
const previewCardModalCloseButton = previewCardModal.querySelector(
  "#preview-card-modal-close-button"
);

const addNewCardButton = document.querySelector(".profile__add-button");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const cardsWrap = document.querySelector(".cards__list");

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardURLInput = addCardFormElement.querySelector(
  ".modal__input_type_link"
);

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function openModal(modal) {
  modal.classList.add("modal_opened");
  return;
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  return;
}

function fillProfileForm() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  return;
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
  return;
}

//1-find delete button
//2-add event listener to the delete button
//3-to remove card-call method on html element (cardElement.remove()
function pressDeleteButton(cardElement) {
  const deleteCardElement = cardElement.querySelector(".card__trash-button");
  deleteCardElement.addEventListener("click", () => {
    cardElement.remove("card");
    console.log("I removed the card YAY :)");
    return;
  });
}
function toggleLikeButton(cardElement) {
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
    return;
  });
}

/*Opening the Picture Modal Steps:
 1-call your openModal function, passing it the modal as an argument
 2-set the src of popup image element
 3-set the alt of popup image element
 4-set the text of popup caption element*/

function previewCardImage(cardImageElement, cardTitleElement) {
  cardImageElement.addEventListener("click", () => {
    const modalCaption = document.querySelector(".modal__caption");
    openModal(previewCardModal);
    modalPreviewImageElement.src = cardImageElement.src;
    modalPreviewImageElement.alt = cardImageElement.alt;
    modalCaption.textContent = cardTitleElement.textContent;
    return;
  });
}

/*
Line 1: Clone the template element with all its content and store it in a cardElement variable
Line 2 & 3: Access the card title and image and store them in variables
Line 4: Set the path to the image to the link field of the object
Line 5: Set the image alt text to the name field of the object
Line 6: Set the card title to the name field of the object, too
Return the ready HTML element with the filled-in data
note: cloneNode() method copies the element, but doesn't add it to the DOM
i.e. you have to append it
*/

// finding the like button for the card we are currently generating
//when we return cardelement, its already setup for a like/delete/previewcard button that is listening for a click
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");

  pressDeleteButton(cardElement);
  previewCardImage(cardImageElement, cardTitleElement);
  toggleLikeButton(cardElement);

  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTitleElement.textContent = cardData.name;

  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
  return;
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardURLInput.value;
  renderCard({ name, link }, cardsWrap);
  closeModal(addCardModal);
  return;
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

//profileEditButton.addEventListener("click", () => {
// fillProfileForm();
// openModal();
//});

//profileEditModalCloseButton.addEventListener("click", closeModal);
profileEditModalCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);

// Form Listeners
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

profileEditButton.addEventListener("click", () => {
  //profileTitleInput.value = profileTitle.textContent;
  //profileDescriptionInput.value = profileDescription.textContent;
  fillProfileForm();
  openModal(profileEditModal);
});
//add new card button
addNewCardButton.addEventListener("click", () => openModal(addCardModal));
addCardModalCloseButton.addEventListener("click", () =>
  closeModal(addCardModal)
);

previewCardModalCloseButton.addEventListener("click", () =>
  closeModal(previewCardModal)
);

/*for (let i = 0; i < initialCards.length; i++) {
  const card = initialCards[i];
} alternative iterative statement that could've have been used*/

//Iterate through the card data that we initially have and
//run the function getCardElement on each index
initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

/*const likeButtons = document.querySelectorAll(".card__like-button");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
}); */
