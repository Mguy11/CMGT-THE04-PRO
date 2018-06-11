/// <reference path="player.ts"/>

class Game{

    private player:Player

    constructor(){
        this.player = new Player()
        this.gameloop()
    }

    private gameloop(){
        this.player.update()
        requestAnimationFrame(()=>this.gameloop())
    }
}

window.addEventListener("load", () => new Game())