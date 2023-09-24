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

let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 255,
        g: 0,
        b: 0
    }
}

let user = {
    x: 250,
    y: 250,
    size: 100,
    fill: 255
}
/**
 * preload()
 * 
 * The preload function loads the images that will be used in the case of this simulation. Which is 
 * an image of a room, an image of a cat ,and the image of a mouse.
*/
function preload() {

}
/**
 * setup()
 * 
 * Setup canvas and set no stroke
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    covid19.y = random(0, height);
    covid19.vx = covid19.speed;
}


/**
 * draw()
 * 
 * 
*/
function draw() {
    background(0);
    //Display static
    for (let i = 0; i < 1000; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(255);
        point(x, y);
    }



    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0, height);
    }
    //User movement
    user.x = mouseX;
    user.y = mouseY;

    //Display user
    fill(user.fill);
    ellipse(user.x, user.y, user.size);

    //Check for covid19
    let d = dist(user.x, user.y, covid19.x, covid19.y);
    if (d < covid19.size / 2 + user.size / 2) {
        noLoop();
    }

    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    ellipse(covid19.x, covid19.y, covid19.size);



}