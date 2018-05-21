class Ball {
    
    private div : HTMLElement
    private x : number
    private y : number
    private xspeed : number
    private yspeed: number
    public innerWidth : number 
    public innerHeight : number
    
    constructor() {

        this.div = document.createElement("ball")
        document.body.appendChild(this.div)

        this.innerWidth = innerWidth - 40
        this.innerHeight = innerHeight - 40
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.xspeed = 4
        this.yspeed = 4
    }
    
    public update() : void {

        this.x = this.x + this.xspeed
        this.y = this.y + this.yspeed

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

        if(this.x > innerWidth){this.xspeed *= -1}
        if(this.y > innerHeight){this.yspeed *= -1}
        if(this.y < 0){this.yspeed *= -1}
        if(this.x < 0){this.xspeed *= -1}
        
    }
}