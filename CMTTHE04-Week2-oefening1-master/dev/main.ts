class Game {

    constructor() {
        console.log("dit is een game")
    }

    createElements() {
        let f = new Fish()
        let b = new Bubble()
    }
}


// load
window.addEventListener("load", function () {
    new Game()
});