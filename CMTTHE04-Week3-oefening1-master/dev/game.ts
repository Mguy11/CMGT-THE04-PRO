/// <reference path="ball.ts"/>

class Game {

    balls:Ball[] = []
    private ball:Ball
    
    constructor() {
        this.balls.push(new Ball())
        this.ball = new Ball()
        this.gameLoop()
    }
    
    private gameLoop(){
        this.balls
        this.ball.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())