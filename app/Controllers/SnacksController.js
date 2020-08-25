import snacksService from "../Services/SnacksService.js";
import STORE from "../store.js";

// PRIVATE
function _drawSnack() {
  let snack = STORE.State.snack
  document.getElementById('snack').innerHTML = snack.Template
}


// PUBLIC
export default class SnacksController {
  constructor() {
    _drawSnack()
  }

  buy() {
    snacksService.buy()
    _drawSnack()
  }

}