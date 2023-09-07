/**
 * Drawing experiments
 * Maria Barba
 * 
 * Experimenting with p5
 */

"use strict";

// preload()
//
// Does nothing.
function preload() {

}


// setup()
//
// Draws a face on the canvas.
function setup() {
    createCanvas (500, 500);
    //Set the background to mint
    background (191, 255, 199);
    //Draw a flesh-colored head
    fill(250,200,200);
    ellipse (250, 250, 200, 200);
    //Draw the eyes 
    fill(0);
    ellipse (200, 250, 30, 30);
    ellipse (300, 250, 30, 30);
    // Draw the mouth
    strokeWeight (10);
    line (200, 300, 300, 300);
}


// draw()
// 
// Does nothing.
function draw() {

}