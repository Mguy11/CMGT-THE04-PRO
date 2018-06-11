"use strict";
var Ball = (function () {
    function Ball() {
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.innerWidth = innerWidth - 40;
        this.innerHeight = innerHeight - 40;
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.xspeed = 4;
        this.yspeed = 4;
    }
    Ball.prototype.update = function () {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.x > innerWidth) {
            this.xspeed *= -1;
        }
        if (this.y > innerHeight) {
            this.yspeed *= -1;
        }
        if (this.y < 0) {
            this.yspeed *= -1;
        }
        if (this.x < 0) {
            this.xspeed *= -1;
        }
    };
    return Ball;
}());
var Paddle = (function () {
    function Paddle() {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = 87;
        this.downkey = 83;
        this.x = 0;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
var Game = (function () {
    function Game() {
        this.balls = [];
        this.maxBalls = 10;
        for (var i = 0; i < this.maxBalls; i++) {
            this.balls.push(new Ball());
        }
        this.paddle = new Paddle();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var i = 0; i < this.maxBalls; i++) {
            this.balls[i].update();
        }
        this.paddle.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map