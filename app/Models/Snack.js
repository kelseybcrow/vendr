export default class Snack {

    constructor(name, img, description) {
        this.name = name
        this.img = img
        this.price = 0
        this.description = description

        console.log("Made a new snack", name)
      }

    //   moodString() {
    //     if (this.mood > this.tollerance) {
    //       return "happy"
    //     }
    //     if (this.mood > 0) {
    //       return "meh"
    //     }
    //     return "Bitey"
    //   }

      get Template() {
        // debugger
        return `
        <div class="card">
          <img class="card-img-top" src="${this.name}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.img}</h4>
              <p class="card-text">${this.price}</p>
              <p class="card-text">${this.description}</p>
              <button onclick="app.SnacksController.buy()" >Buy Now</button>
          </div>
        </div>

        `
      }
    }