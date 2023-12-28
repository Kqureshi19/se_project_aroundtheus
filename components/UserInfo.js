export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    );
  }

  //return object containing the text content of the profile elements
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._descriptionElement.textContent,
    };
  }

  //takes new user data & adds it to the page
  //Used after successful submission of the profile form
  setUserInfo({ name, description }) {
    this._profileNameElement.textContent = name;
    this._profileDescriptionElement.textContent = description;
  }
}
