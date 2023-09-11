/**
 * Title of Project
 * Maria Barba
 * 
 * Draw an alien acitivity.
 * 
 */

"use strict";

// setup()
//
// Does nothing.
function preload() {

}


// setup()
//
// Draws a face on the canvas.
function setup() {
    // Set the canvas size
    createCanvas(640,480);
    //Set canvas color to pink
    background(255,182,193);
    //Set of code to start drawing the alien body
    //Remove the storke color
    noStroke();
    //Set the color of the background to grey
    fill(211,211,211);
    //Draw an ellipse at the half-off bottom of the canvas
    ellipse(320,480,400,200);

    //Draw a head of an alien
    //Set the color of the head
    fill(192,192,192);
    //Draw the head
    ellipse(320,300,200,300);

    //Draw the eyes of the alien
    //Set the eye color to black
    fill(0,0,0);
    //Draw the first left eye
    ellipse(280,270,30,10);
    //Draw the second right eye
    ellipse(365,270,30,10);

    //Draw the nostrils
    //Draw the left nostril
    circle(310,305,5);
    //Draw the right nostril
    circle(340,305,5);
}

// draw()
//
// Does nothing.
function draw() {

}