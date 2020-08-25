import STORE from "../store.js";

class SnacksService {
    constructor() {
        console.log("Creating Snacks Service", STORE)
      }
}

const SERVICE = new SnacksService();
export default SERVICE;
