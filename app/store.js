import Snack from "./Models/Snack.js";

let _state = {
  /** @type {Snack} */
  // make snacks an array
  snacks: [
    new Snack ("//placehold.it/100x100", 'Lara Bar', 2, 'Natural energy bar'),
    new Snack ("//placehold.it/100x100", 'Twizzlers', 2, 'Tangy licorice candy'),
    new Snack ("//placehold.it/100x100", 'Smartfood', 2, 'White cheddar popcorn')
  ],
  change: 5
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }


}

const STORE = new Store();
export default STORE;
