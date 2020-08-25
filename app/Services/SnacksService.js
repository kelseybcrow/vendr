import STORE from "../store.js";

class SnacksService {
  constructor() {
    console.log("Creating Snacks Service", STORE)
  }
  buy() {
    // let rnd = Math.random()
    let snack = STORE.State.snack
    let userMoney = 0
      if (userMoney >= snack.price) {
        snack.buy++
        alert('Thanks for purchasing!')
      } else {
        alert('Sorry, you are lacking the funds.')
      }
  }
}

const SERVICE = new SnacksService();
export default SERVICE;
