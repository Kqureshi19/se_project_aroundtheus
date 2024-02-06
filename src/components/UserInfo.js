//UserInfo class is responsible for rendering information about the user on the page

export default class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector, avatarSelector) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    );
    this._avatar = document.querySelector(avatarSelector);
  }

  /**
   * return object containing the text content of the profile elements
   * method is handy when its necessary to display the user data in the open form
   */
  getUserInfo() {
    return {
      name: this._profileNameElement.textContent,
      description: this._profileDescriptionElement.textContent,
    };
  }

  //takes new user data & adds it to the page
  //method is used after successful submission of the profile form
  setUserInfo(name, description) {
    this._profileNameElement.textContent = name;
    this._profileDescriptionElement.textContent = description;
  }

  //set the new avatar as the profile image
  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }
}

//
//const userinfo  = new userinfo('.prfoie__title, '.profile--descirpt)
