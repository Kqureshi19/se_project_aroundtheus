export default class API {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //This will handle fetch requests
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
  }
  //This will handle fetch errors
  _handleError(err) {
    return Promise.reject(`Error: ${res.status}`).catch((err) => {
      console.error(err); // log the error to the console
    });
  }

  //GET /users/me – Get the current user’s info
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //GET /cards – Get all cards
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`).catch((err) => {
        console.error(err); // log the error to the console
      });
    });
  }

  //PATCH /users/me – Update your profile information
  updateUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._handleResponse);
  }

  //5-POST /cards – Create a card
  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._handleResponse);
  }

  //PATCH /users/me/avatar – Update avatar
  setUserAvatar(avatarData) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatarData),
    }).then(this._handleResponse);
  }

  // other methods for working with the API
  //1-GET /users/me – Get the current user’s info
  //2*-PATCH /users/me – Update your profile information
  //3-PATCH /users/me/avatar – Update avatar
  //4*-GET /cards – Get all cards
  //5-POST /cards – Create a card
  //6-DELETE /cards/:cardId – Delete a card
  //7-PUT /cards/:cardId/likes – Like a card
  //8-DELETE /cards/:cardId/likes – Dislike a card
}
