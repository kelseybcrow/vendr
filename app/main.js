import SnacksController from "./Controllers/SnacksController.js";

class App {
  snacksController = new SnacksController();


  constructor() {
    console.log("creating app");
  }
}

window["app"] = new App();
