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

let catchCounter = {
    uncaughtMouse: true

}

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
 * an image of a room, an image of a cat ,and the image of a mouse.
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
 * Setup canvas and set no stroke
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    mouse.y = random(0, height);
    mouse.vx = mouse.speed;
}


/**
 * draw()
 * 
 * 
*/
function draw() {
    //Display room image
    push();
    image(roomImg, 0, 0, windowWidth, windowHeight);
    pop();


    if (catchCounter.uncaughtMouse) { //Display mouse image as a living mouse if it hasn't been caught
        push();
        imageMode(CENTER);
        image(aliveMouse, mouse.x, mouse.y, cat.w, cat.h);
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
    if (mouse.x > width) {
        mouse.x = 0;
        mouse.y = random(0, height);

    }
    //Display cat image if it has not caught a mouse
    if (catchCounter.uncaughtMouse) {
        push();
        imageMode(CENTER);
        image(plottingCat, cat.x, cat.y, cat.w, cat.h);
        pop();
        //Cat movement
        cat.x = mouseX;
        cat.y = mouseY;
    } else {
        push();
        imageMode(CENTER);
        image(relaxedCat, cat.catchPos.x, cat.catchPos.y, cat.w, cat.h);
        pop();
    }

    //Check if cat caught mouse
    let d = dist(cat.x, cat.y, mouse.x, mouse.y);
    if (d < cat.x / 2 + mouse.x / 2) {
        //noLoop();
        //Record the position at which the cat caught the mouse
        cat.catchPos.x = cat.x;
        cat.catchPos.y = cat.y;
        //Record the position at which the mouse has been caught
        mouse.catchPos.x = mouse.x;
        mouse.catchPos.y = mouse.y;
        //Change the catchCounter
        catchCounter.uncaughtMouse = false;
        //re-draw canvas with deadMouse image and happyCat image
        loop();
    }


}
