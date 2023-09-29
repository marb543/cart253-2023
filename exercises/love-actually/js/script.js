/**
 * Activity 5 : Looking for love
 * Maria Barba
 * 
 * In this activity, I create a dog , and ball objects. The goal of this exercise is to play as the dog named "Jack" to
 * try and catch the ball. To control the dog, the user must use W, A , S , D keys of his keyboard. There multiple scenarios
 * with wich the user is presented with.
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
//Create a variable to store the font
let bubblegumFont;
//Create a variable to store the background image
let parkImage;
//Create a variable to keep track of the mouse coordinates
let mouseCoord;
//Create a dog object
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
//Create a ball object
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
//Create a variable which will keep track of the state for which the user is currently is in

let state = `title`;
/**
 * preload()
 * 
 *This function preloads the images , and the font used 
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
 * Setup canvas and tcalls the setupObjects function
*/
function setup() {
    createCanvas(500, 500);
    setupObjects();
}

/**
 * draw()
 * 
 * The draw function sets the background image , and checks if a certain state has been reached. If a 
 * certain state has been reached, the according function is called.
*/
function draw() {
    background(parkImage);
    if (state == `title`) {
        title();
    } else if (state == `simulation`) {
        simulation();
    }
    else if (state == `happiness`) {
        happyDog();
    }
    else if (state == `sadness`) {
        sadDog();
    } else if (state == `superHappy`) {
        extremelyHappyDog();
    }
}
/**
 * moveDog()
 * 
 * This function moves the dog object using keyboard key controls A, W , S , D
 */
function moveDog() {
    if (keyIsPressed) {
        switch (key) {
            case 'a' || 'A':
                dog.x = dog.x - 1 * dog.vx;
                break;
            case 'd' || 'D':
                dog.x = dog.x + 1 * dog.vx;
                break;
            case 'w' || 'W':
                dog.y = dog.y - 1 * dog.vy;
                break;
            case 's' || 'S':
                dog.y = dog.y + 1 * dog.vy;
                break;
        }
    }
}
/**
 * moveBall()
 * 
 * The moveBall function makes the ball move according to noise movement.
 */
function moveBall() {
    //Set tx,ty
    ball.tx = ball.tx + 0.025;
    ball.ty = ball.ty + 0.025;
    //Create and set noiseX, noiseY variables
    let noiseX = noise(ball.tx);
    let noiseY = noise(ball.ty);
    //Set the velocity x , velocity y
    ball.vx = map(noiseX, 0, 1, -ball.speed, ball.speed);
    ball.vy = map(noiseY, 0, 1, -ball.speed, ball.speed);
    //Set x,y coordinates
    ball.x = ball.x + ball.vx;
    ball.y = ball.y + ball.vy;
}
/**
 * checkOffscreen()
 * 
 * This function checks if either the dog or the ball are offscreen , and if they are then set the state accordingly
 */
function checkOffscreen() {
    if (isOffscreen(dog) || isOffscreen(ball)) {
        state = `sadness`;
    }
}
/**
 * isOffscreen()
 * 
 * This function stores the logic behind checking when an object is outside the bounds of the screen
 */
function isOffscreen(obj) {
    if (obj.x < 0 || obj.x > width || obj.y < 0 || obj.y > height) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * checkOverlap()
 * 
 * This function verifies if the dog and the ball object are on top of eachother, and if they are it sets the state accordingly
 */
function checkOverlap() {
    //Check if the circles overlap 
    let d = dist(dog.x, dog.y, ball.x, ball.y);
    if (d < dog.size / 2 + ball.size / 2) {
        state = `happiness`;
    }
}
/**
 * setupObjects()
 * 
 * This function assigns random x,y positions to dog,ball , as well as velocity for both objects
 */
function setupObjects() {
    //Position of dog and ball are generated randomly
    dog.x = random(0, width - 100);
    dog.y = random(0, height - 100);
    ball.x = random(0, width - 100);
    ball.y = random(0, height - 100);
    //Dog and ball velocity
    dog.vx = dog.speed;
    dog.vy = dog.speed;
    ball.vx = random(-dog.speed / 2, ball.speed / 2);
    ball.vy = random(-dog.speed / 2, ball.speed / 2);
}
/** 
 * display()
 * 
 * This function displays to the screen the image of the dog , and ball
*/
function display() {
    //Display dog and ball
    image(dog.image, dog.x, dog.y, dog.width, dog.height);
    image(ball.image, ball.x, ball.y, ball.width, ball.width);
}
/**
 * simulation()
 * 
 * This function calls the methods that are responsible for making the simulation run
 */
function simulation() {
    moveDog();
    moveBall();
    checkOffscreen();
    checkOverlap();
    display();
}
/**
 * happyDog()
 * 
 * This function sets the text for the happiness state
 */
function happyDog() {
    push();
    textSize(50);
    strokeWeight(4);
    stroke(250);
    fill(255, 150, 150);
    textFont(bubblegumFont);
    textAlign(CENTER, CENTER);
    text(`Jack is a happy dog now !`, width / 2, height / 2);
    pop();
}
/**
 * sadDog()
 * 
 * This function sets the text for the sadness state
 */
function sadDog() {
    push();
    textSize(50);
    strokeWeight(4);
    stroke(250);
    fill(150, 150, 255);
    textFont(bubblegumFont);
    textAlign(CENTER, CENTER);
    text(`No ! Jack !`, width / 2, height / 2);
    pop();
}
/**
 * extremelyHappyDog()
 * 
 * This function sets the text for the superHappy state
 */
function extremelyHappyDog() {
    push();
    textSize(45);
    strokeWeight(4);
    stroke(250);
    fill(252, 202, 3);
    textFont(bubblegumFont);
    textAlign(CENTER, CENTER);
    text(`You caught the ball for Jack !`, width / 2, height / 2);
    pop();
}
/**
 * title()
 * 
 * This function sets the text for the title state
 */
function title() {
    push();
    textSize(50);
    strokeWeight(4);
    stroke(250);
    fill(200, 100, 100);
    textFont(bubblegumFont);
    textAlign(CENTER, CENTER);
    text("Will Jack catch the ball ? ", width / 2, height / 2);
    pop();
}
/**
 * mousePressed()
 * 
 * This function verifies if the user has pressed the mouse to set the simulation state
 */
function mousePressed() {
    if (state == `title`) {
        state = `simulation`;
    }
}
/**
 * mouseClicked()
 * 
 * This function checks if the user had clicked on the ball to set the superHappy state
 */
function mouseClicked() {
    let d = dist(mouseX, mouseY, ball.x, ball.y);
    if (d < 60) {
        state = `superHappy`;
    }
}