export default class API {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //This will handle fetch requests
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
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
    }).then(this._handleResponse);
  }

  //PATCH /users/me – Update your profile information
  updateUserInfo({ name, about }) {
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

  //in progress****
  //6-DELETE /cards/:cardId – Delete a card
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //PATCH /users/me/avatar – Update avatar
  //avatarData-property should contain a link to the new profile picture
  setUserAvatar(url) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: url }),
    }).then(this._handleResponse);
  }

  //7-PUT /cards/:cardId/likes – Like a card
  setLiked(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //8-DELETE /cards/:cardId/likes – Dislike a card
  removeLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // other methods for working with the API
  //1*-GET /users/me – Get the current user’s info
  //2*-PATCH /users/me – Update your profile information
  //3*-PATCH /users/me/avatar – Update avatar
  //4*-GET /cards – Get all cards
  //5*-POST /cards – Create a card
  //6*-DELETE /cards/:cardId – Delete a card
  //7*-PUT /cards/:cardId/likes – Like a card
  //8*-DELETE /cards/:cardId/likes – Dislike a card

  // when we call a js file, this should be cameCase
  // BUT
  // when you name a React component is shouldbe PascalCase
}
