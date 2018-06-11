class Player{
    private div: HTMLElement
    private x: number = 0
    private y: number = 0

    private leftkey: number
    private rightkey: number
    private upkey: number

    private leftSpeed: number = 0
    private rightSpeed: number = 0
    private upSpeed: number = 0

    constructor(){
        this.div = document.createElement("player")
        document.body.appendChild(this.div)

        
        this.leftkey = 31
        this.rightkey = 33
        this.upkey = 18

        
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

    }

    private onKeyLeft(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.leftSpeed = 5
                break
        }
    }

    private onKeyRight(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.rightSpeed = 5
                break
            
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0
                break
           
        }
    }

    public update(){

        let newY = this.y - this.upSpeed
        let newX = this.x - this.leftSpeed

        // check of de paddle binnen beeld blijft
        if (newY > 0 && newY + 100 < window.innerHeight)
        {
            this.y = newY
            this.x = newX

            this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        }
         

    }
}