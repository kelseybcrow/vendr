export default class Snack {

    constructor(img, name, price, description) {
        this.img = img
        this.name = name
        this.price = price
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
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.name}</h4>
              <p class="card-text">${this.price}</p>
              <p class="card-text">${this.description}</p>
              <button onclick="app.SnacksController.buy()" >Buy Now</button>
          </div>
        </div>

        `
      }
    }