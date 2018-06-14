

class Game {

    private screen:any
    private gameOver:any

    constructor()
    {

        this.screen = new StartScreen(this);
        this.screen = new GameOverScreen();
        this.gameLoop()
    }
    
    private gameLoop():void{
        
        this.screen.update()
        requestAnimationFrame(() => this.gameLoop())
    }

    public showPlayScreen()
    {
        document.body.innerHTML = ""
        this.screen = new PlayScreen(this)
    }

    public endGame()
    {
        document.body.innerHTML = ""
        this.screen = new GameOverScreen()
    }
  
} 

window.addEventListener("load", () => new Game())