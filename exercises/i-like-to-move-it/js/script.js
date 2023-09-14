/**
 * Exercise: I like to move it!
 * Maria Barba
 * 
 * Creates two rectangles , and one circlee shape.
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
    x : 250,
    y: 50,
    rectWidth : 80 ,
    rectHeight :200,
    red : 114,
    green: 213,
    blue : 224,
    speed : 2 ,
}
//Create rectange2 object
let rectangle2 = {
    x : 250,
    y: 10,
    rectWidth : 50 ,
    rectHeight :50,
    red : 255,
    green: 0,
    blue : 255,
    speed : 1 ,

}
//Create circle1 object
let circle1 = {
    size : 100,
    red : 114,
    green: 213,
    blue : 224,
    growthRatio : 0.5
}

// setup()
//
// Sets up the canvas and the default color
function setup() {
    createCanvas(500,500);
    noStroke();
}


// draw()
//
// Creates three shapes, and animates them
function draw() {
    //Set background color
    background(bg.red,bg.green,bg.blue);
    //Map red,geen,and blue of background to shapes
    bg.red=map(rectangle1.x,0,width,0,162);
    bg.green=map(rectangle2.y,0,height,0,50);
    bg.blue=map(circle1.size,0,width,0,168);
    //Rectangle1
    //Make first rectangle move downwards
    rectangle1.y+=rectangle1.speed;
    rectangle1.y=constrain(rectangle1.y , 10 , 350);
    rectMode(CENTER);
    //Change color of first rectangle
    fill(rectangle1.red, rectangle1.blue,rectangle1.green);
    //Draw rectangle
    rect(rectangle1.x, rectangle1.y , rectangle1.rectWidth , rectangle1.rectHeight);
    //Rectangle2
    //Move second rectangle downwards
    rectangle2.y+=rectangle2.speed;
    rectangle2.y=constrain(rectangle2.y , 50 , 180);
    //Color second rectangle
    fill(rectangle2.red, rectangle2.blue,rectangle2.green);
    //Draw second rectangle
    rect(rectangle2.x, rectangle2.y , rectangle2.rectWidth , rectangle2.rectHeight);
    //Circle1
    //Color circle
     fill(circle1.red, circle1.blue,circle1.green);
     //Make circle move within bounds of (0-500,0-500)
     circle1.y=constrain(circle1.y , 0 , 500);
     circle1.x=constrain(circle1.x , 0 , 500);
     //Make circle grow
     circle1.size= circle1.size + circle1.growthRatio;
     circle1.size=constrain(circle1.size,0,200);
     //Draw circle
     ellipse(mouseX, mouseY , circle1.size , circle1.size);
}