var Player = (function () {
    function Player() {
        var _this = this;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.leftkey = 31;
        this.rightkey = 33;
        this.upkey = 18;
        window.addEventListener("keyleft", function (e) { return _this.onKeyLeft(e); });
        window.addEventListener("keyright", function (e) { return _this.onKeyRight(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.onKeyLeft = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.leftSpeed = 5;
                break;
        }
    };
    Player.prototype.onKeyRight = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.rightSpeed = 5;
                break;
        }
    };
    Player.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
        }
    };
    Player.prototype.update = function () {
        var newY = this.y - this.upSpeed;
        var newX = this.x - this.leftSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight) {
            this.y = newY;
            this.x = newX;
            this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        }
    };
    return Player;
}());
var Game = (function () {
    function Game() {
        this.player = new Player();
        this.gameloop();
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        this.player.update();
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map