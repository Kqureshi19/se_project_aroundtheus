class API {
  constructor({ baseUrl, authToken }) {
    this._baseUrl = baseUrl;
    this._authToken = authToken;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
  }
  _handleError(err) {
    return Promise.reject(`Error: ${res.status}`).catch((err) => {
      console.error(err); // log the error to the console
    });
  }

  //GET /cards – Get all cards
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: this._authToken,
      },
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

  //GET /users/me – Get the current user’s info
  /*getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        method: "GET",
        headers: {
          authorization: this._authToken,
        }.then(this._handleResponse)
        } */

  // other methods for working with the API
  //PATCH /users/me – Update your profile information
  //PATCH /users/me/avatar – Update avatar
  //POST /cards – Create a card
  //DELETE /cards/:cardId – Delete a card
  //PUT /cards/:cardId/likes – Like a card
  //DELETE /cards/:cardId/likes – Dislike a card
}
//This is a new instance of the API class
const api = new API({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "8cc40c96-6d80-4c6a-90ea-7b1349997b2d",
    "Content-Type": "application/json",
  },
});

export default api;
