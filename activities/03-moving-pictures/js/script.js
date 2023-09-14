/**
 * Activity 3 : Moving pictures
 * Maria Barba
 * 
 */

"use strict";

//Set up background
 let bg = {
    red: 0 ,
    green : 0 ,
    blue : 0
}
//Set up circle 1
let circle1 = {
    x : 0,
    y: 500/2,
    size : 100,
    fill : 255 ,
    alpha : 200
}
//Set up circle 2
let circle2 = {
    x : 500,
    y: 500/2,
    size : 60,
    fill : 255 ,
    alpha : 200

}


/**
 * preload()
 * 
 * Description of preload
*/
function preload() {

}


/**
 * setup()
 * 
 * Setup canvas and set no stroke
*/
function setup() {
    createCanvas(500,500);
    noStroke();

}


/**
 * draw()
 * 
 * Draws shapes , and chnages their colors
*/
function draw() {
    //Background
    background(bg.red,bg.green, bg.blue);
    //Make the background redder
    bg.red=map(circle1.size,100,width,100,255);
    //Circle 1
    circle1.x+=1;
    circle1.x=constrain(circle1.x , 0 , width/2);
    circle1.size= circle1.size + 0.25;
    circle1.size=constrain(circle1.size,0,width);
    fill(circle1.fill, [circle1.alpha]);
    ellipse(circle1.x, circle1.y , circle1.size , circle1.size);
    //Circle 2
    circle2.x-=1;
    circle2.x=constrain(circle2.x,width/2 ,width)
    circle2.size=circle1.size*0.9;
    fill(circle2.fill, [circle2.alpha]);
    ellipse(circle2.x, circle2.y , circle2.size , circle2.size);


}