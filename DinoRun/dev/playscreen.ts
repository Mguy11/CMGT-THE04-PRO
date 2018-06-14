class PlayScreen {

    game:Game
    
    private player: Player
    private platforms: Platforms[] = []
    public lives: number = 3

    constructor(g:Game) {
        this.game = g
        this.player = new Player(20, 87, 83)
        

    }
    
    public loseLife()
    {
        this.lives--;
    }

    public update(): void {

       

        this.player.update()
        
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }


}