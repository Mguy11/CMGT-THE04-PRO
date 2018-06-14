"use strict";
var Game = (function () {
    function Game() {
        this.screen = new StartScreen(this);
        this.screen = new GameOverScreen();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.screen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.showPlayScreen = function () {
        document.body.innerHTML = "";
        this.screen = new PlayScreen(this);
    };
    Game.prototype.endGame = function () {
        document.body.innerHTML = "";
        this.screen = new GameOverScreen();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameOverScreen = (function () {
    function GameOverScreen() {
    }
    GameOverScreen.prototype.update = function () {
    };
    return GameOverScreen;
}());
var Platforms = (function () {
    function Platforms() {
        this.div = document.createElement("platform1");
        document.body.appendChild(this.div);
        this.innerWidth = innerWidth - 300;
        this.innerHeight = innerHeight - 160;
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
    }
    Platforms.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Platforms.prototype.hitPaddle = function () {
    };
    Platforms.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Platforms;
}());
var Player = (function () {
    function Player(xp, up, down) {
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.x = xp;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Player.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Player.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Player.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.upSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Player;
}());
var PlayScreen = (function () {
    function PlayScreen(g) {
        this.platforms = [];
        this.lives = 3;
        this.game = g;
        this.player = new Player(20, 87, 83);
    }
    PlayScreen.prototype.loseLife = function () {
        this.lives--;
    };
    PlayScreen.prototype.update = function () {
        this.player.update();
    };
    PlayScreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return PlayScreen;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "START THE GIMMA";
    }
    StartScreen.prototype.update = function () {
    };
    StartScreen.prototype.splashClicked = function () {
        this.game.showPlayScreen();
    };
    return StartScreen;
}());
//# sourceMappingURL=main.js.map