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
let chasingCat;
//Generates relaxed cat image
let relaxedCat
//Generates mouse image
let aliveMouse;
//Generates a tombstone image representative of a dead mouse
let deadMouse;

let cat = {
    x: 0,
    y: 250,
    w: 250,
    h: 150,
    vx: 0,
    vy: 0,
    speed: 5,
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

}

/**
 * preload()
 * 
 * The preload function loads the images that will be used in the case of this simulation. Which is 
 * an image of a room, an image of a cat ,and the image of a mouse.
*/
function preload() {

    roomImg = loadImage('./assets/images/room.jpeg');
    chasingCat = loadImage('./assets/images/runningCat.jpeg');
    relaxedCat = loadImage('./assets/images/relaxedCat.png');
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

    //Display cat image
    push();
    imageMode(CENTER);
    image(relaxedCat, cat.x, cat.y, cat.w, cat.h);
    pop();

    mouse.x = mouse.x + mouse.vx;
    mouse.y = mouse.y + mouse.vy;

    //Display mouse image
    push();
    imageMode(CENTER);
    image(aliveMouse, mouse.x, mouse.y, cat.w, cat.h);
    pop();

    if (mouse.x > width) {
        mouse.x = 0;
        mouse.y = random(0, height);
    }
    //Cat movement
    // user.x = mouseX;
    // user.y = mouseY;

    // //Display user
    // fill(user.fill);
    // ellipse(user.x, user.y, user.size);

    // //Check for covid19
    // let d = dist(user.x, user.y, covid19.x, covid19.y);
    // if (d < covid19.size / 2 + user.size / 2) {
    //     noLoop();
    // }

    // fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    // ellipse(covid19.x, covid19.y, covid19.size);



}