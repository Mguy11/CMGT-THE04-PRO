
let screenWidth = window.innerWidth - 130
let screenHeight = window.innerHeight - 110

let deadfish

let timeoutID1
let timeoutID2
let timeoutID3

//Added a counter to keep track of how many fishes are created per species

let count1 = 0
let count2 = 0

// Creates a fish element with a random x and y value on your screen. They move up and down on your screen. The fishes themself also have
// a different colour and a dying animation when clicked.

function upFish() {

    let fish = document.createElement('fish')
    document.body.appendChild(fish)

    let randomNumber = Math.random() * screenWidth
    let randomNumber2 = Math.random() * screenHeight

    if ((randomNumber2 < screenHeight) && (randomNumber < screenWidth)) {
        fish.style.top = randomNumber2 + "px"
        fish.style.left = randomNumber + "px"
    }


    fish.style.webkitFilter = "hue-rotate(" + Math.floor((Math.random() * 360)) + "deg)"
    fish.style.filter = "hue-rotate(" + Math.floor((Math.random() * 360)) + "deg)"

    fish.addEventListener("click", function () {
        fish.classList.add("dead")
        count1--
    });
    timeoutID1 = setTimeout(function () { upFish() }, 2000);

    if (count1 === 50) {
        clearTimeout(timeoutID1)
    }


    count1++
    console.log(count1)
}

// Creates a fish element with a random x and y value on your screen. They move left to right on your screen. The fishes themself also have
// a different colour and a dying animation when clicked.

function rightFish() {

    let fish2 = document.createElement('fish2')
    document.body.appendChild(fish2)

    let randomNumber = Math.random() * screenWidth
    let randomNumber2 = Math.random() * screenHeight

    if ((randomNumber2 < screenHeight) && (randomNumber < screenWidth)) {
        fish2.style.top = randomNumber2 + "px"
        fish2.style.left = randomNumber + "px"
    }


    fish2.style.webkitFilter = "hue-rotate(" + Math.floor((Math.random() * 360)) + "deg)"
    fish2.style.filter = "hue-rotate(" + Math.floor((Math.random() * 360)) + "deg)"

    fish2.addEventListener("click", function () {
        fish2.classList.add("dead")
        count2--
    });
    timeoutID2 = setTimeout(function () {
        rightFish()
    }, 2000);

    if (count2 === 50) {
        clearTimeout(timeoutID2)
    }

    count2++

    console.log(count2)
}

// The bubbles are spawned with a random position on your screen, they also have an animation to float upwards on your screen.

function bubbleCreate() {

    let bubble = document.createElement('bubble')
    document.body.appendChild(bubble)

    bubble.style.top = Math.random() * screenHeight + "px"
    bubble.style.left = Math.random() * screenWidth + "px"

    timeoutID3 = setTimeout(function () {
        bubbleCreate()
    }, 1000);

}

//Added a function to run all the funtions at once to create the "Aquarium"
function aquarium() {

    upFish();
    rightFish();
    bubbleCreate();

}

window.addEventListener("load", function ()
{
    console.log("start het aquarium")
    
})
