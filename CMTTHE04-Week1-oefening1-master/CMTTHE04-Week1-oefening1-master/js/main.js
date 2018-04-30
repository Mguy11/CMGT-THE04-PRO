//
// geef de vis een random positie en een random kleur
//


let screenWidth = window.innerWidth - 130
let screenHeight = window.innerHeight - 110

let timeoutID
let timeoutID2
let timeoutID3
let timeoutID4

let deadfish = 0




// Creates a fish element with a random x and y value on your screen. They move up and down on your screen. The fishes themself also have
// a different colour and a dying animation when clicked.

function upFish() {

    let fish = document.createElement('fish')
    document.body.appendChild(fish)
    
    let randomNumber = Math.random() * screenWidth
    let randomNumber2 = Math.random() * screenHeight
    
    if((randomNumber2 < screenHeight)&&(randomNumber < screenWidth)){
         fish.style.top = randomNumber2 + "px"
         fish.style.left = randomNumber + "px"
    }
    else{

    }  

    fish.style.webkitFilter = "hue-rotate(" + Math.floor((Math.random() * 360)) + "deg)"
    fish.style.filter = "hue-rotate(" + Math.floor((Math.random() * 360)) + "deg)" 

    fish.addEventListener("click", function () 
{
    fish.classList.add("dead")
    deadfish++
});
}

// Creates a fish element with a random x and y value on your screen. They move left to right on your screen. The fishes themself also have
// a different colour and a dying animation when clicked.

function rightFish()
{   
    
        let fish2 = document.createElement('fish2')
        document.body.appendChild(fish2)

        let randomNumber = Math.random() * screenWidth
        let randomNumber2 = Math.random() * screenHeight
        
        if((randomNumber2 < screenHeight) && (randomNumber < screenWidth)){
             fish2.style.top = randomNumber2 + "px"
             fish2.style.left = randomNumber + "px"
        }
        else{
    
        }
        
        fish2.style.webkitFilter = "hue-rotate(" + Math.floor((Math.random() * 360)) + "deg)"
        fish2.style.filter = "hue-rotate(" + Math.floor((Math.random() * 360)) + "deg)"

        fish2.addEventListener("click", function()
        {
            fish2.classList.add("dead") 
            deadfish++
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
   
    let count1 = 0
    let count2 = 0

    //Create 50 bubbles with an interval of 3 seconds.
    for(i=0; i < 50; i++){
        timeoutID3 = window.setTimeout(bubbleCreate, 5000);
        timeoutID4 = window.setTimeout(bubbleCreate, 2000);
        }
    //Create 50 fish swimming up
     for(i=0; i < 50; i++){
         timeoutID = window.setTimeout(upFish, 1000 );
         count1++
     }
     //Create 50 fish swimming right
     for(i=0; i < 50; i++){
         timeoutID2 = window.setTimeout(rightFish, 1000 );
         count2++
     }

    console.log(count1)
    console.log(count2)

    
}


//
// roep een functie aan als alles geladen is
//


aquarium()






window.addEventListener("load", function ()
{
    console.log("start het aquarium")
    
})
