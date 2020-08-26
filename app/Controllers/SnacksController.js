import snacksService from "../Services/SnacksService.js";
import STORE from "../store.js";

// PRIVATE
function _drawSnack() {
  // make this a loop so I draw each snack
  let template = ''
  let snacks = STORE.State.snacks
  snacks.forEach(snack => {
    template += snack.Template
  });
  document.getElementById('snack').innerHTML = template
}


// PUBLIC
export default class SnacksController {
  constructor() {
    _drawSnack()
  }

  buy(price) {
    snacksService.buy(price)
    _drawSnack()
  }

}