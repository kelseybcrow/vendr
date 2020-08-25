import STORE from "../store.js";

class SnacksService {
  constructor() {
    console.log("Creating Snacks Service", STORE)
  }
  buy() {
    let change = STORE.State.change
    let snackPrice = STORE.State.snacks.price
    if (change >= snackPrice) {

    }
  }
}

const SERVICE = new SnacksService();
export default SERVICE;
