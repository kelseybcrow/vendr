import STORE from "../store.js";

class SnacksService {
  constructor() {
    console.log("Creating Snacks Service", STORE)
  }
  buy(snackPrice) {
    let change = STORE.State.change
    if (change >= snackPrice) {
      STORE.State.change -= snackPrice
      console.log(STORE.State.change)
    }
  }
}

const SERVICE = new SnacksService();
export default SERVICE;
