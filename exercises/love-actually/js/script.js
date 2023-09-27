/**
 * Activity 5 : Looking for love
 * Maria Barba
 * 
 * 
 * All images are from Adobe Stock :
 * Ball image : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=ball+png&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=ball+png&get_facets=0&asset_id=623949235
 * Dog image : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=dog+png&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=dog+png&get_facets=0&asset_id=622226646
 * Park image : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=park+background&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=park+background&get_facets=0&asset_id=158627533
 * 
 * The font used for this exercise is from Google fonts :
 * https://fonts.google.com/specimen/Bubblegum+Sans?query=bubb
 */

"use strict";

let bubblegumFont;
let parkImage;

let dog = {
    x: undefined,
    y: 250,
    width: 130,
    height: 200,
    vx: 0,
    vy: 0,
    speed: 3,
    imageLink: "./assets/images/dog.png",
    image: null
}
let ball = {
    x: undefined,
    y: 250,
    width: 100,
    height: 200,
    vx: 0,
    vy: 0,
    speed: 3,
    imageLink: "./assets/images/ball.png",
    image: null,
    tx: 0,
    ty: 10,
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
    parkImage = loadImage(`./assets/images/park.jpeg`);
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
 * s
 * 
*/
function draw() {
    background(parkImage);
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

function moveDog() {
    dog.x = dog.x + dog.vx;
    dog.y = dog.y + dog.vy;
}
function moveBall() {
    ball.tx = ball.tx + 0.025;
    ball.ty = ball.ty + 0.025;
    let noiseX = noise(ball.tx);
    let noiseY = noise(ball.ty);
    circle.vx = map(noiseX, 0, 1, -ball.speed, ball.speed);
    circle.vy = map(noiseY, 0, 1, -ball.speed, ball.speed);
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
    ball.x = random(0, width);
    ball.y = random(0, height);
    //Circles velocity
    dog.vx = random(-dog.speed, dog.speed);
    dog.vy = random(-dog.speed, dog.speed);
    ball.vx = random(-dog.speed / 2, ball.speed / 2);
    ball.vy = random(-dog.speed / 2, ball.speed / 2);
}

function display() {
    //Display circles
    image(dog.image, dog.x, dog.y, dog.width, dog.height);
    image(ball.image, ball.x, ball.y, ball.width, ball.width);
}
function simulation() {
    moveDog();
    moveBall();
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