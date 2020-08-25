import Snack from "./Models/Snack.js";

let _state = {
  /** @type {Snack} */
  snack: new Snack('Lara Bar', "//placehold.it/100x100", 2, 'Natural energy bar')
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
