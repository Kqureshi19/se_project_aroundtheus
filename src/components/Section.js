//Section class is a utility class that serves a specific purpoose
//purpose: add elements to the DOM
export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer; // function that creates/adds single item to a page
    this._container = document.querySelector(containerSelector); //CSS class selector, where you add the card elements
  }

  //renders all the elements on the page
  //called once per page load
  //is items paramter optionsal?
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
    console.log("this._items is:", items);
  }

  //takes DOM element & adds it to the container
  //**should be called when adding an individual card to the DOM */
  addItem(element) {
    this._container.prepend(element);
    //console.log("element is:" + element);
  }
}
