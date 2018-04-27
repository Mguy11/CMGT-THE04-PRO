//
// geef de vis een random positie en een random kleur
//


let screenWidth = window.innerWidth
let screenHeight = window.innerHeight
let timeoutID
let timeoutID2
let timeoutID3

// Creates a fish element with a random x and y value on your screen. They move up and down on your screen. The fishes themself also have
// a different colour and a dying animation when clicked.

function upFish() {

    let fish = document.createElement('fish')
    document.body.appendChild(fish)

    fish.style.top = Math.random() * screenHeight + "px"
    fish.style.left = Math.random() * screenWidth + "px"

    fish.style.webkitFilter = "hue-rotate(" + Math.random() * 300 + "deg)"
    fish.style.filter = "hue-rotate(" + Math.random() * 300 + "deg)"

    fish.addEventListener("click", function () 
    {
        fish.classList.add("dead")
    });
}

// Creates a fish element with a random x and y value on your screen. They move left to right on your screen. The fishes themself also have
// a different colour and a dying animation when clicked.

function rightFish()
{   
        let fish2 = document.createElement('fish2')
        document.body.appendChild(fish2)
        
        fish2.style.top =  Math.random() * screenHeight + "px"
        fish2.style.left = Math.random() * screenWidth + "px"
        
        fish2.style.webkitFilter = "hue-rotate(" + Math.floor((Math.random() * 360))+ "deg)"
        fish2.style.filter = "hue-rotate(" + Math.floor((Math.random() * 360)) + "deg)"
    
        fish2.addEventListener("click", function()
        {
            fish2.classList.add("dead") 
        });
}


//
// geef de bubble een random positie
//

// The bubbles are spawned with a random position on your screen, they also have an animation to float upwards on your screen.

function bubbleCreate()
{

    let bubble = document.createElement('bubble')
    document.body.appendChild(bubble)
    
    bubble.style.top = Math.random() * screenHeight + "px"
    bubble.style.left = Math.random() * screenWidth + "px"
    
}

//The aquarium function creates 50 fishes of both forms, upwards floating and left to right floating, and also creates 100 randomly positioned

function aquarium()
{

    for(i=0; i<=50; i++)
    {
    timeoutID = window.setTimeout(upFish, 4000 );
    timeoutID2 = window.setTimeout(rightFish, 4000 );
    }
    for(i=0; i<=100; i++)
    {
        timeoutID3 = window.setTimeout(bubbleCreate, 1000);
    }
}



//
// roep een functie aan als alles geladen is
//

aquarium();

window.addEventListener("load", function ()
{
    console.log("start het aquarium")
})
