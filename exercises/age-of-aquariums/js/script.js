"use strict";

/**
 * Images used are from Adobe Stock :
 * 
 * Gold fish : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=fish+png&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=fish+png&get_facets=0&asset_id=548898453
 * Clown Fish : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=fish+png&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=fish+png&get_facets=0&asset_id=617109219
 * Turtle : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=fish+png&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=fish+png&get_facets=0&asset_id=612765217
 * Aquarium : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bis_editorial%5D=0&filters%5Bfree_collection%5D=0&k=aquarium&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=aquarium&get_facets=0&asset_id=76028972
 */

// Our fish
let fish1;
let fish2;
let fish3;
let fish4;

let images = {
    goldFish: null,
    clownFish: null,
    turtle: null,
    aquarium: null,
}

function preload() {
    images.goldFish = loadImage(`./assets/images/goldFish.png`);
    images.clownFish = loadImage(`./assets/images/clownFish.png`);
    images.turtle = loadImage(`./assets/images/turtle.png`);
    images.aquarium = loadImage(`./assets/images/aquarium.jpeg`);
}

function setup() {
    createCanvas(600, 600);
    // Create four fish, positioned randomly
    fish1 = createFish(random(0, width), random(0, height));
    fish2 = createFish(random(0, width), random(0, height));
    fish3 = createFish(random(0, width), random(0, height));
    fish4 = createFish(random(0, width), random(0, height));
}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
    let fish = {
        x: x,
        y: y,
        width: 200,
        height: 100,
        vx: 0,
        vy: 0,
        speed: 2
    };
    return fish;
}

// draw()
// Moves and displays our fish
function draw() {

    background(images.aquarium);
    moveFish(fish1);
    moveFish(fish2);
    moveFish(fish3);
    moveFish(fish4);

    displayFish(fish1);
    displayFish(fish2);
    displayFish(fish3);
    displayFish(fish4);
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
    image(images.goldFish, fish.x, fish.y, fish.width, fish.height);
    pop();
}