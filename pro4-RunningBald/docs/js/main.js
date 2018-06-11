var Bubble = (function () {
    function Bubble() {
        console.log("ik ben een bubble");
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        console.log("ik ben een fish");
    }
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("dit is een game");
    }
    Game.prototype.createElements = function () {
        var f = new Fish();
        var b = new Bubble();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map