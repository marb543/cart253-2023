/**
 * Exercise: I like to move it!
 * Maria Barba
 * 
 */

"use strict";

// setup()
//
// Does nothing.
function preload() {

}

//Create background object
let bg = {
    red:0,
    green:255,
    blue:255
}
//Create rectange1 object
let rectangle1 = {
    x : 0,
    y: 500/2,
    size : 100,
    fill : 255 ,
    alpha : 200,
    speed : 1 ,
    growthRatio : 1

}
//Create rectangle2 object
let rectangle2 = {
    x : 0,
    y: 500/2,
    size : 100,
    fill : 255 ,
    alpha : 200 ,
    speed : -1 ,
    growthRatio : 1

}
//Create triangle1 object
let triangle1 = {
    x : 0,
    y: 500/2,
    size : 100,
    fill : 255 ,
    alpha : 200,
    speed:1 ,
    growthRatio : 1

}

// setup()
//
// Sets up the canvas and the default color
function setup() {
    createCanvas(500,500);
    
}


// draw()
//
// Creates three shapes, and animates them
function draw() {
    background(bg.red,bg.green,bg.blue);

}