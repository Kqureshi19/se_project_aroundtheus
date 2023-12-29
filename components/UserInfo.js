//UserInfo class is responsible for rendering information about the user on the page

export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    );
  }

  //return object containing the text content of the profile elements
  //method is handy when its necessary to display the user data in the open form
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._descriptionElement.textContent,
    };
  }

  //takes new user data & adds it to the page
  //method is used after successful submission of the profile form
  setUserInfo({ name, description }) {
    this._profileNameElement.textContent = name;
    this._profileDescriptionElement.textContent = description;
  }
}

//
//const userinfo  = new userinfo('.prfoie__title, '.profile--descirpt)
