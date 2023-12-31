/**
 * Exerice 2 : Dodge-em
 * 
 * Maria Barba
 * 
 * In this exercise, I have two objects, a cat and a mouse. In the case of this exercice the user's mouse is the cat which is trying to catch a mouse which
 * is moving randomly in the room.
 */

"use strict";

//Generates a variable which will be the image of the room
let roomImg;
//Generates chasing cat image
let plottingCat;
//Generates relaxed cat image
let relaxedCat
//Generates mouse image
let aliveMouse;
//Generates a tombstone image representative of a dead mouse
let deadMouse;
//This variable keeps track if the mouse has been caught by the cat
let catchCounter = {
    uncaughtMouse: true

}
//Creates a cat object
let cat = {
    x: 300,
    y: 250,
    w: 250,
    h: 150,
    vx: 0,
    vy: 0,
    speed: 5,
    catchPos: {
        x: 0,
        y: 0,
    }
}
//Creates a mouse object
let mouse = {
    x: 0,
    y: 250,
    w: 200,
    h: 100,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    catchPos: {
        x: 0,
        y: 0,
    }
}
/**
 * preload()
 * 
 * The preload function loads the images that will be used in the case of this simulation. Which is 
 * an image of a room, an image of a cat ,and the image of a mouse.All images are from Adobe Stock, and use the Concordia University license.
*/
function preload() {
    roomImg = loadImage('./assets/images/room.jpeg');
    relaxedCat = loadImage('./assets/images/relaxedCat.png');
    plottingCat = loadImage('./assets/images/plottingCat.png');
    aliveMouse = loadImage('./assets/images/mouse.png');
    deadMouse = loadImage('./assets/images/tombstone.png');
}
/**
 * setup()
 * 
 * Setup canvas creates canvad , sets cat and mouse velocity , and adds a drop shadow
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    //Set random y-coordinate of the mouse
    mouse.y = random(0, height);
    //Set mouse velocity
    mouse.vx = mouse.speed;
    //Set cat velocity
    cat.vx = cat.speed;
    cat.vy = cat.speed;
    //Add drop-shadow
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'black';
}


/**
 * draw()
 * 
 * The draw method executes the main work of this exercise, it draws the cat, mouse images, makes tem move , and changes images , as well as draws text that explains the 
 * user instructions. 
*/
function draw() {
    //Display room image
    push();
    image(roomImg, 0, 0, windowWidth, windowHeight);
    pop();
    //Draw text instructions on top of the game
    push();
    fill(252, 127, 3);
    stroke(255);
    strokeWeight(4);
    textFont("Impact");
    textSize(32);
    text('Help the cat catch the mouse ! Use ← ↑ → ↓ keys to control the cat .', windowWidth * 0.20, 20, windowWidth, 100);
    pop();

    if (catchCounter.uncaughtMouse) { //Display mouse image as a living mouse if it hasn't been caught
        push();
        imageMode(CENTER);
        image(aliveMouse, mouse.x, mouse.y, mouse.w, mouse.h);
        pop();
        //Mouse movement
        mouse.x = mouse.x + mouse.vx;
        mouse.y = mouse.y + mouse.vy;
    } else { //Display mouse image as a tombstone if it has been caught
        push();
        imageMode(CENTER);
        image(deadMouse, mouse.catchPos.x, mouse.catchPos.y, mouse.w, mouse.h + 100);
        pop();
    }

    if (mouse.x > width) { // if mouse goes outside the width of the screen , set x-coordinate to 0
        mouse.x = 0;
        mouse.y = random(0, height);
    }

    if (catchCounter.uncaughtMouse) { //Display cat image if it has not caught a mouse
        push();
        imageMode(CENTER);
        image(plottingCat, cat.x, cat.y, cat.w, cat.h);
        pop();
        //Cat movement
        //Constrain cat's movement within window width,height
        if (cat.x > windowWidth || cat.y > windowHeight || cat.x < 0 || cat.y < 0) {
            cat.x = 150;
            cat.y = 100;
        }
        //Add key controls on cat object
        if (keyIsDown(LEFT_ARROW)) {
            cat.x = cat.x - 1 * cat.vx;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            cat.x = cat.x + 1 * cat.vx;
        }
        if (keyIsDown(UP_ARROW)) {
            cat.y = cat.y - 1 * cat.vy;
        }
        if (keyIsDown(DOWN_ARROW)) {
            cat.y = cat.y + 1 * cat.vy;
        }

    } else {  //Display cat image if it has caught a mouse
        push();
        imageMode(CENTER);
        image(relaxedCat, cat.catchPos.x, cat.catchPos.y, cat.w, cat.h);
        pop();
    }

    //Check if cat caught mouse
    let d = dist(cat.x, cat.y, mouse.x, mouse.y);
    if (d <= mouse.w && d <= mouse.h) {
        //Record the position at which the cat caught the mouse
        cat.catchPos.x = cat.x;
        cat.catchPos.y = cat.y;
        //Record the position at which the mouse has been caught
        mouse.catchPos.x = mouse.x;
        mouse.catchPos.y = mouse.y;
        //Change the catchCounter
        catchCounter.uncaughtMouse = false;
        //re-draw canvas with new mouse image and new cat image
        loop();
    }
}
