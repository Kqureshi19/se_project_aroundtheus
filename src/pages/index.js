import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import API from "../components/API.js";
import { initialCards, settings } from "../utils/constants.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

//This is a new instance of the API class
const api = new API({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "7d078757-23ed-414e-a9d7-d63a6269c72c",
    "Content-Type": "application/json",
  },
});
//console.log("testing!!!");
//api.getInitialCards().then((res) => console.log(res));
//api.getUserInfo().then((res) => console.log("User Info is: ", res));

api
  .getUserInfo()
  .then((res) => {
    console.log("res:", res);
    console.log("res.name: ", res.name);
    console.log("res.about: ", res.about);

    //update the avatar when you refresh the page
    userInfo.setUserAvatar(res.avatar);
    userInfo.setUserInfo(res.name, res.about);
  })
  .catch((err) => {
    console.error(err);
    alert(`${err}`);
  });

// api.updateUserInfo(res).then((res) => {
//   console.log("User Info is: ", res);
//   UserInfo.setUserInfo(res.name, res.description);
// });

//api.getUserInfo().then(userInfo); //=>{
//   console.log("The User Info is :"+ userInfo);
// }
//Create instances of the classes
//const CardPreview = new PopupWithImage(selectors.previewCardModal);

//console.log(typeof initialCards);

/* -------------------------------------------------------------------------- */
/*                                 Card-Card Class                            */
/* -------------------------------------------------------------------------- */
//Instantiate or make a copy of the Card Class and pass cardData and the template to it
//Then call getView() method from the class-#card-template
//const card = new Card(cardData, "#card-template");
//card.getView();
//We are grabbing the template
//const cardSelector = "#card-tmplate";

/* -------------------------------------------------------------------------- */
/*                           Validation-Form Validator Class                  */
/* -------------------------------------------------------------------------- */

//these exist already
//const profileEditForm = document.forms["profile-edit-form"];
//const addCardFormElement = document.forms["add-card-form"];
/*const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
) 
const addFormValidator = new FormValidator(
  validationSettings,
  addCardFormElement
); */
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
//const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileEditForm = document.forms["profile-edit-form"];
//const addCardFormElement = addCardModal.querySelector(".modal__form");
const addCardFormElement = document.forms["add-card-form"];
const avatarEditForm = document.forms["avatar-edit-form"];
console.log(avatarEditForm);
const cardsWrap = document.querySelector(".cards__list");

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardURLInput = addCardFormElement.querySelector(
  ".modal__input_type_link"
);

/*const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}; */

/* -------------------------------------------------------------------------- */
/*                                  Validation                                */
/* -------------------------------------------------------------------------- */
//For both of the forms, we are creating 3 different validators
//we are creating 3 instances of Form Validators i.e. one for each popup form
//1-const profileEditForm = document.forms["profile-edit-form"]; already grabbed the constant
const editFormValidator = new FormValidator(settings, profileEditForm);
editFormValidator.enableValidation();
//const addCardFormElement = document.forms["add-card-form"];
const addFormValidator = new FormValidator(settings, addCardFormElement);
addFormValidator.enableValidation();
const avatarEditFormValidator = new FormValidator(settings, avatarEditForm);
avatarEditFormValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
/*function handleEsc(e) {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    //console.log(modal);
    // closeModal(modal);
  } 
} */

/*function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEsc);
  return;
} */

/*function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEsc);
  return;
} */

/*function handleOverlay(evt, modal) {
  if (evt.target.classList.contains("modal_opened")) {
    console.log("testing 1225");
    console.log(evt.target.classList);
    closeModal(modal);
  }
} */

///Step 3- Preview Card Modal Closing Event Listener
/*previewCardModal.addEventListener("click", function (evt) {
  //console.log(evt.target.classList);
  handleOverlay(evt, previewCardModal);
}); */

///Step 3-Profile Edit Modal Closing Event Listener
/*profileEditModal.addEventListener("click", function (evt) {
  handleOverlay(evt, profileEditModal);
}); */

///Step 3-Profile Add Modal Closing Event Listener
/*addCardModal.addEventListener("click", function (evt) {
  handleOverlay(evt, addCardModal);
}); */

/*function fillProfileForm() {
  //const info = uinfo.getUserInfo();
  //console.log("info: " + info);
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  return;
} */
//This is where we instantiate the card class
//cardData is {name, link}, i.e. grab the specific data and pass it to getView()
/*function renderCard(cardData, wrapper) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    handleImageClick
  ).getView();
  wrapper.prepend(cardElement);
} */

// function handleCardDeleteClick(data) {
//   //console.log(data);
//   api.deleteCard(data);
// }

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    handleImageClick,
    handleDeleteConfirmation,
    //handleCardDeleteClick
    //handleAvatarEditForm,
    handleCardLike
  );
  return cardElement.getView();
}

function renderCard(cardData, wrapper) {
  const cardElement = createCard(cardData);
  //wrapper.prepend(cardElement);
  cardSection.addItem(cardElement);
}

/*
 const confirmdelete click = new Popupwithform(
  popupselector:
 )
*/

//1-find delete button
//2-add event listener to the delete button
//3-to remove card-call method on html element (cardElement.remove()
//function pressDeleteButton(cardElement) {
// const deleteCardElement = cardElement.querySelector(".card__trash-button");
// deleteCardElement.addEventListener("click", () => {
//   //cardElement.remove("card");
//   console.log("Its been removed!");
//   return;
// });
//}
//function toggleLikeButton(cardElement) {
//const likeButton = cardElement.querySelector(".card__like-button");
//likeButton.addEventListener("click", () => {
//  likeButton.classList.toggle("card__like-button_active");
//  console.log("Press Like Button");
//  return;
//});
//}
/* ---------------------- PopupWithForm Initialization ---------------------- */
const newCardModal = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit
);
newCardModal.setEventListeners();

const editProfileModal = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
editProfileModal.setEventListeners();

/*Opening the Picture Modal Steps:
 1-call your openModal function, passing it the modal as an argument
 2-set the src of popup image element
 3-set the alt of popup image element
 4-set the text of popup caption element*/
//previewCardImage is changed to handleImageClick
const popupWithImage = new PopupWithImage("#preview-card-modal");
popupWithImage.setEventListeners();

function handleImageClick(cardData) {
  popupWithImage.open(cardData);
  // console.log(cardImageElement);
  // //cardImageElement.addEventListener("click", () => {
  // const modalCaption = document.querySelector(".modal__caption");
  // openModal(previewCardModal);
  // modalPreviewImageElement.src = cardImageElement.src;
  // modalPreviewImageElement.alt = cardImageElement.alt;
  // modalCaption.textContent = cardTitleElement.textContent;
  // return;
  // //});
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
//function getCardElement(cardData) {
//const cardElement = cardTemplate.cloneNode(true);
//const cardImageElement = cardElement.querySelector(".card__image");
//const cardTitleElement = cardElement.querySelector(".card__title");
//pressDeleteButton(cardElement);
//previewCardImage(cardImageElement, cardTitleElement);
//toggleLikeButton(cardElement);
//cardImageElement.src = cardData.link;
//cardImageElement.alt = cardData.name;
//cardTitleElement.textContent = cardData.name;
//return cardElement;
//}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

const userInfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__image"
);

function handleProfileEditSubmit(inputValues) {
  editProfileModal.setLoading(true);
  console.log("inputValues:", inputValues);
  api
    .updateUserInfo(inputValues)
    .then((inputValues) => {
      //console.log("res:", res);

      // console.log("res.name: ", res.name);
      // console.log("res.about: ", res.about);

      // console.log("res.description: ", res.description);
      // console.log(888888888);
      //UserInfo.setUserInfo(res.name, res.description);
      userInfo.setUserInfo(inputValues.name, inputValues.about);
      editProfileModal.close();
    })
    .catch((err) => {
      console.error(err);
      alert(`${err}`);
    })
    .finally(() => {
      editProfileModal.setLoading(false);
    });
}

//userInfo.setUserInfo(profileTitleInput.value, profileDescriptionInput.value);
//console.log("profileTitleInput.value: " + profileTitleInput.value);
//profileTitle.textContent = profileTitleInput.value;
//console.log("profileTitle.textContent:" + profileTitle.textContent);
//profileDescription.textContent = profileDescriptionInput.value;
// call the .close()
//editProfileModal.close();
//closeModal(profileEditModal);

function fillProfileForm() {
  const infoObj = userInfo.getUserInfo();
  //console.log("info: " + infoObj);
  console.log("profileTitleInput.value:" + profileTitleInput.value);
  profileTitleInput.value = infoObj.name;
  profileDescriptionInput.value = infoObj.description;
  console.log("profileTitleInput.value: " + profileTitleInput.value);
  // console.log(
  //   "profileDescriptionInput.value: " + profileDescriptionInput.value
  // );
  //profileTitleInput.value = profileTitle.textContent;
  //profileDescriptionInput.value = profileDescription.textContent;
  return;
}

// function handleAddCardFormSubmit(e) {
//   console.log(e);
//   const name = cardTitleInput.value;
//   const link = cardURLInput.value;
//   renderCard({ name, link }, cardsWrap);
//   //closeModal(addCardModal);
//   newCardModal.close();
//   //addFormValidator.resetForm();
// }

/*api pseudocode:
1-create the card
2-add the card to the DOM
3-close the popup */
function handleAddCardFormSubmit(inputValues) {
  console.log(3333333, inputValues);
  //editProfileModal.setLoading(true);
  newCardModal.setLoading(true);
  api
    .addCard(inputValues)
    .then((cardData) => {
      const card = createCard(cardData);
      cardSection.addItem(card);
      //console.log(card);
      newCardModal.close();
    })
    .catch((err) => {
      console.error(err);
      alert(`${err}`);
    })
    .finally(() => {
      newCardModal.setLoading(false);
    });
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

//profileEditButton.addEventListener("click", () => {
// fillProfileForm();
// openModal();
//});

//profileEditModalCloseButton.addEventListener("click", closeModal);
// profileEditModalCloseButton.addEventListener("click", () =>
//  closeModal(profileEditModal)
//);

// Form Listeners
//profileEditForm.addEventListener("submit", handleProfileEditSubmit);
//addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

profileEditButton.addEventListener("click", () => {
  //profileTitleInput.value = profileTitle.textContent;
  //profileDescriptionInput.value = profileDescription.textContent;
  fillProfileForm();
  // Use .open() method
  editProfileModal.open();
  //openModal(profileEditModal);
});

//add new card button
addNewCardButton.addEventListener("click", () => {
  // reset the validation
  addFormValidator.resetForm();
  // open the popup
  newCardModal.open();
});

addCardModalCloseButton.addEventListener("click", () =>
  //closeModal(addCardModal)
  newCardModal.close()
);

previewCardModalCloseButton.addEventListener("click", () =>
  //closeModal(previewCardModal)
  popupWithImage.close()
);

/*for (let i = 0; i < initialCards.length; i++) {
  const card = initialCards[i];
} alternative iterative statement that could've have been used*/

/* --------------------------- Card Initialization -------------------------- */
//comment out line 363 b/c the Section class will now do it
//instantiating it only runs the constructor
//inside renderer-create the card and then call section.add item and pass in new card

// const cardSection = new Section(
//   {
//     items: initialCards,
//     renderer: (cardData) => {
//       cardSection.addItem(createCard(cardData));
//     },
//   },
//   ".cards__list"
// );
// cardSection.renderItems();

//declare the variable cardSection, but its value is undefined
//we define it moments later...
let cardSection;
api
  .getInitialCards()
  .then((cards) => {
    cardSection = new Section(
      {
        items: cards,
        renderer: (cardData) => {
          cardSection.addItem(createCard(cardData));
        },
      },
      ".cards__list"
    );
    cardSection.renderItems();
  })
  .catch((err) => {
    console.error(err);
    alert(`${err}`);
  });

const deleteConfirmationModal = new PopupWithConfirmation(
  "#delete-confirmation-modal"
);
deleteConfirmationModal.setEventListeners();

//1-open the delete confirmation modal
//2-call the modal's  setSubmitAction (its a public method)
//3-call the API to delete the card from the server
//4-if the API is successfull, it will delete from server, make sure to delete locally also
//5-close the modal
function handleDeleteConfirmation(card) {
  deleteConfirmationModal.setLoading(true);
  deleteConfirmationModal.open();
  deleteConfirmationModal.setSubmitAction(() => {
    api
      .deleteCard(card._id)
      .then(() => {
        card.handleDeleteCard();

        deleteConfirmationModal.close();
        //deleteConfirmationModal.setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert(`${err}`);
      })
      .finally(() => {
        deleteConfirmationModal.setLoading(false);
      });
  });
}

//Edit Profile Avatar-Pseudocode:
//1-Grab the editIcon button class & then add an event listener to it
//2-Add event listner with  "click", the edit popup avatar form should open
//3-Instantiate thew editAvatarPopup form using the class PopupWithForm

const editAvatarButton = document.querySelector(".editicon");
editAvatarButton.addEventListener("click", () => {
  console.log("you clicked on editAvatarButton");
  editAvatarPopup.open();
});

const editAvatarPopup = new PopupWithForm(
  "#edit-avatar-modal",
  handleAvatarEditForm
);
editAvatarPopup.setEventListeners();

function handleAvatarEditForm(inputValues) {
  ///
  //console.log("hi");
  editAvatarPopup.setLoading(true);
  //console.log("_getInputValues: ", _getInputValues.url);
  api
    .setUserAvatar(inputValues.url)
    .then((res) => {
      console.log("res:", res);
      console.log("_getInputValues.url:", inputValues.url);
      userInfo.setUserAvatar(inputValues.url);

      editAvatarPopup.close();
    })
    .catch((err) => {
      console.error(err);
      alert(`${err}`);
    })
    .finally(() => {
      editAvatarPopup.setLoading(false);
    });
}
//Edit Profile Avatar-Pseudocode://///////////////

//Handle Card Like Pseudocode---
// if card is white (not liked) then
//  the api.updateLike is called
//else the heart is black/(iked already)
//then add the api to remove the like
//?? do I pass card as parameter? or bypass it and use 'this'
//since they look the same? i.e output is the same
function handleCardLike(card) {
  console.log("testing Like 123!");
  console.log("this:", this);
  console.log("card is liked:", card._isLiked);
  console.log("card is unliked:", !card._isLiked);
  console.log("this._name:", this._name, "this._isLiked:", this._isLiked);
  if (!card._isLiked) {
    api
      .setLiked(card._id)
      .then((res) => {
        console.log("res:", res);
        console.log("res.isLiked:", res.isLiked);
        card.setIsLiked(res.isLiked);
      })
      .catch((err) => {
        console.error(err);
        alert(`${err}`);
      });
  } else {
    api
      .removeLike(card._id)
      .then((res) => {
        console.log("res", res);
        console.log("res.isLiked:", res.isLiked);
        card.setIsLiked(res.isLiked);
      })
      .catch((err) => {
        console.error(err);
        alert(`${err}`);
      });
  }
}

//Iterate through the card data that we initially have and
//run the function getCardElement on each index
//initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

/*const likeButtons = document.querySelectorAll(".card__like-button");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
}); */

console.log("testing98");
