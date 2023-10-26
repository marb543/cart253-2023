/**
 * Activity : Object Oriented Programming
 * Maria Barba
 */
"use strict";

let gravityForce = 0.0025;

let paddle;

let balls = [];
let boxes = [];
let numBalls = 10;
let numBoxes = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);

    paddle = new Paddle(300, 20);

    for (let i = 0; i < numBalls; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let ball = new Ball(x, y);
        balls.push(ball);
    }
}

function draw() {
    background(0);

    //paddle.keyPressed();
    paddle.display();
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if (ball.active) {
            ball.gravity(gravityForce);
            ball.move();
            ball.bounce(paddle);
            ball.display();
        }
    }

    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (box.active) {
            box.gravity(gravityForce);
            box.move();
            box.bounce(paddle);
            box.display();
        }
    }

}

function keyPressed() {
    console.log("Pressed key");
    paddle.keyPressed();
}