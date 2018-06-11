/// <reference path="ball.ts"/>
/// <reference path="paddle.ts"/>

class Game {

    
    private balls:Ball[] = []
    private maxBalls: number = 10
    private paddle:Paddle
    
    constructor() {
        
        for(let i = 0; i < this.maxBalls; i++)
        {
            this.balls.push(new Ball())
        }
        this.paddle = new Paddle()
        this.gameLoop()
    }
    
    private gameLoop(){
        for(let i = 0; i < this.maxBalls; i++)
        {
            this.balls[i].update()
        }
        this.paddle.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())