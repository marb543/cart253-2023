"use strict";

/**
 * Exercice 6 : The Age of Aquariums
 * Maria Barba
 * Images used are from Adobe Stock :
 * 
 * Gold fish : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=fish+png&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=fish+png&get_facets=0&asset_id=548898453
 * Clown Fish : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=fish+png&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=fish+png&get_facets=0&asset_id=617109219
 * Turtle : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=fish+png&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=fish+png&get_facets=0&asset_id=612765217
 * Aquarium : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bis_editorial%5D=0&filters%5Bfree_collection%5D=0&k=aquarium&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=aquarium&get_facets=0&asset_id=76028972
 *
 * Font from DaFont : https://www.dafont.com/fr/gratina.font
 * */
//Create a variable that keeps track of the state
let state;
//Create a variable that keeps track of number of fishes initially created
let initialFishNum = 10;
//Create array
let fishesArray = [];
//Variable to store font
let messageFont = null;
//Images object
let images = {
    goldFish: null,
    clownFish: null,
    turtle: null,
    aquarium: null,
}
//Turtle obejct
let turtle = {
    width: 300,
    height: 200,
}
// preload()
// Preloads all images and fonts
function preload() {
    images.goldFish = loadImage(`./assets/images/goldFish.png`);
    images.clownFish = loadImage(`./assets/images/clownFish.png`);
    images.turtle = loadImage(`./assets/images/turtle.png`);
    images.aquarium = loadImage(`./assets/images/aquarium.jpeg`);
    messageFont = loadFont(`./assets/fonts/Gratina.otf`);
}
// setup()
// Creates canvas , and makes multiple fishes appear
function setup() {
    createCanvas(600, 600);
    // Create four fish, positioned randomly
    createMultipleFish();
}
// createMultipleFish()
// Creates initial 10 goldfishes
function createMultipleFish() {
    for (let i = 0; i < initialFishNum; i++) {
        let newFish = createFish(random(0, width), random(0, height), images.goldFish, "GoldFish");
        fishesArray.push(newFish);
    }
}
// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y, image, name) {
    let fish = {
        x: x,
        y: y,
        width: 200,
        height: 100,
        vx: 0,
        vy: 0,
        speed: 2,
        img: image,
        fishType: name,
    };
    return fish;
}
// draw()
// Moves and displays our fish
function draw() {
    //Set background image
    background(images.aquarium);
    //Loop through array of fishes
    for (let i = 0; i < fishesArray.length; i++) {
        moveFish(fishesArray[i]);
        displayFish(fishesArray[i], images.goldFish);
    }
    //Check if fish count goes over 15
    checkForFishOverpopulation();
    //If spacebar is pressed , delete all goldfish
    catchGoldFish();
    //Verify state of the program
    checkState();

}

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
        fish.vx = random(-fish.speed, fish.speed);
        fish.vy = random(-fish.speed, fish.speed);
    }
    // Move the fish
    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;
    // Constrain the fish to the canvas
    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
    push();
    fill(200, 100, 100);
    noStroke();
    image(fish.img, fish.x, fish.y, fish.width, fish.height);
    pop();
}
// addClownFish()
// Adds a clownfish where the user clicks with mouse
function addClownFish() {
    let fish = createFish(mouseX, mouseY, images.clownFish, "ClownFish"); // Create a fish at the mouse position
    fishesArray.push(fish);
}
// mousePressed()
// Detects that mouse is pressed, adds a clownfish
function mousePressed() {
    this.addClownFish();
}
// checkForFishOverpopulation()
//Checks if fish count is over 15 , and sets state to overpopulation
function checkForFishOverpopulation() {
    if (fishesArray.length > 15) {
        console.log('Overpopulation');
        state = 'fishOverpopulation';
    }
}
// checkState()
// Checks for the state of the program
function checkState() {
    if (state === 'turtle') {
        displayTurtleBob();
    }
    else if (state === 'fishOverpopulation') {
        displayFishOverpopulationMessage();
    }
}
// displayTurtleBob()
//Displays a turtle image that follows the mouse
function displayTurtleBob() {
    image(images.turtle, mouseX - turtle.width / 2, mouseY - turtle.height / 2, turtle.width, turtle.height);
}
// catchGoldFish()
//If user presses spacebar , dletes all goldfish
function catchGoldFish() {
    if (keyIsDown(32)) {
        fishesArray = fishesArray.filter(fish => fish.fishType !== 'GoldFish');
        state = 'turtle'
    }
}
// displayFishOverpopulationMessage()
//If there is a fish overpopulation , display message
function displayFishOverpopulationMessage() {
    clear();
    background(135, 206, 250);
    push();
    textSize(35);
    strokeWeight(2);
    stroke(0);
    fill(255);
    textFont(messageFont);
    text(`Warning ! \n Current aquarium fish \n overpopulation is dangerous  `, 50, height / 2);
    pop();
}
