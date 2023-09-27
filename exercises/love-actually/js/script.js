/**
 * Activity 5 : Looking for love
 * Maria Barba
 * 
 * 
 * All images are from Adobe Stock :
 * Ball image : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=ball+png&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=ball+png&get_facets=0&asset_id=623949235
 * Dog image : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=dog+png&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=dog+png&get_facets=0&asset_id=622226646
 *
 * The font used for this exercise is from Google fonts :
 * https://fonts.google.com/specimen/Bubblegum+Sans?query=bubb
 */

"use strict";

let bubblegumFont;

let dog = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
    imageLink: "./assets/images/dog.png",
    image: null
}
let ball = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
    imageLink: "./assets/images/ball.png",
    image: null
}

let state = `title`; // Can be title,love,simulation , love , sadness
/**
 * preload()
 * 
 * This function preloads the images
*/
function preload() {
    dog.image = loadImage(dog.imageLink);
    ball.image = loadImage(ball.imageLink);
    bubblegumFont = loadFont(`./assets/fonts/BubblegumSans-Regular.ttf`);
}
/**
 * setup()
 * 
 * Setup canvas and set no stroke
*/
function setup() {
    createCanvas(500, 500);
    setupCircles();
}

/**
 * draw()
 * 
 * 
*/
function draw() {
    background(0);
    if (state == `title`) {
        title();
    } else if (state == `simulation`) {
        simulation();
    }
    else if (state == `love`) {
        love();
    }
    else if (state == `sadness`) {
        sadness();
    } else if (state == `unrequirtedLove`) {

    }

}
function move() {
    //Move circles
    dog.x = dog.x + dog.vx;
    dog.y = dog.y + dog.vy;
    ball.x = ball.x + ball.vx;
    ball.y = ball.y + ball.vy;
}
function checkOffscreen() {
    if (isOffscreen(dog) || isOffscreen(ball)) {
        state = `sadness`;
    }
}
function isOffscreen(circle) {
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
        return true;
    }
    else {
        return false;
    }
}
function checkOverlap() {
    //Check if the circles overlap 
    let d = dist(dog.x, dog.y, ball.x, ball.y);
    if (d < dog.size / 2 + ball.size / 2) {
        state = `love`;
    }
}
function setupCircles() {
    //Position circles separated from one another
    dog.x = width / 3;
    ball.x = 2 * width / 3;
    //Circles velocity
    dog.vx = random(-dog.speed, dog.speed);
    dog.vy = random(-dog.speed, dog.speed);
    ball.vx = random(-dog.speed, ball.speed);
    ball.vy = random(-dog.speed, ball.speed);
}

function display() {
    //Display circles
    ellipse(dog.x, dog.y, dog.size);
    ellipse(ball.x, ball.y, ball.size);
}
function simulation() {
    move();
    checkOffscreen();
    checkOverlap();
    display();
}
function love() {
    push();
    textSize(64);
    fill(255, 150, 150);
    textFont(bubblegumFont);
    textAlign(CENTER, CENTER);
    text(`LOVE!`, width / 2, height / 2);
    pop();
}
function sadness() {
    push();
    textSize(64);
    fill(150, 150, 255);
    textFont(bubblegumFont);
    textAlign(CENTER, CENTER);
    text(`D:`, width / 2, height / 2);
    pop();
}
function title() {
    push();
    textSize(64);
    fill(200, 100, 100);
    textFont(bubblegumFont);
    textAlign(CENTER, CENTER);
    text("LOVE ? ", width / 2, height / 2);
    pop();
}
function mousePressed() {
    if (state == `title`) {
        state = `simulation`;
    }
}