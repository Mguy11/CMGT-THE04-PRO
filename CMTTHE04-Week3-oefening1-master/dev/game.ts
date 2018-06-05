/// <reference path="ball.ts"/>
/// <reference path="paddle.ts"/>

class Game {

    //private balls:Ball[] = []
    private ball:Ball
    private paddle:Paddle
    
    constructor() {
    
        this.ball = new Ball()
        this.paddle = new Paddle()
        this.gameLoop()
    
    }
    
    private gameLoop(){

        
        this.ball.update()
        this.paddle.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())