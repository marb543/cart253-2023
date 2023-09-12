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
    x : 250,
    y: 50,
    rectWidth : 80 ,
    rectHeight :200,
    fill : 0 ,
    alpha : 200,
    speed : 2 ,
    growthRatio : 1
}
//Create rectange2 object
let rectangle2 = {
    x : 250,
    y: 10,
    rectWidth : 50 ,
    rectHeight :50,
    fill : 0 ,
    alpha : 200,
    speed : 1 ,
    growthRatio : 1

}
//Create triangle1 object
let circle1 = {
    x : 0,
    y: 500/2,
    size : 100,
    fill : 255 ,
    alpha : 200,
    speed : 0.75 ,
    growthRatio : 1
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
    background(bg.red,bg.green,bg.blue);

    //Make the background multicolor
    //bg.red=map(rectangle1.size,100,width,100,255);

    //Rectangle1
    rectangle1.y+=rectangle1.speed;
    rectangle1.y=constrain(rectangle1.y , 10 , 350);
    rectMode(CENTER);
    fill(rectangle1.fill, [rectangle1.alpha]);
    rect(rectangle1.x, rectangle1.y , rectangle1.rectWidth , rectangle1.rectHeight);

    //Rectangle2
    rectangle2.y+=rectangle2.speed;
    rectangle2.y=constrain(rectangle2.y , 50 , 180);
    rectMode(CENTER);
    fill(rectangle2.fill, [rectangle2.alpha]);
    rect(rectangle2.x, rectangle2.y , rectangle2.rectWidth , rectangle2.rectHeight);

    //Circle1
    circle1.x+=circle1.speed;
    circle1.y+=circle1.speed;
    circle1.y=constrain(circle1.x , 0 , 180);
    circle1.x=constrain(circle1.y , 50 , 180);
    fill(circle1.fill, [circle1.alpha]);
    ellipse(circle1.x, circle1.y , circle1.size , circle1.size);

}