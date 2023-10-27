/**
 * Activity : Object Oriented Programming
 * Maria Barba
 * 
 * Font from 
 */
"use strict";
let state = "menu";
let font;
let gravityForce = 0.0025;
let paddle;
let balls = [];
let boxes = [];
let pointCount = 0;
let pointsIncreasedThisFrame = false;
let numBalls = 10;
let numBoxes = 5;

function preload() {
    font = loadFont(`./assets/fonts/Gameplay.ttf`);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    paddle = new Paddle(300, 20);

    for (let i = 0; i < numBalls; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let ball = new Ball(x, y);
        balls.push(ball);
    }
    for (let i = 0; i < numBoxes; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let box = new Box(x, y);
        balls.push(box);
    }

}

function draw() {
    background(0);
    switch (state) {
        case ("menu"):
            displayMainMenu();
            waitForMenuSelection();
            break;
        case ("game"):
            runGame();
            if (!pointsIncreasedThisFrame) {
                increasePoints();
                pointsIncreasedThisFrame = true;
            }
            displayPointsCount();
            checkIfGameOver();
            break;
        case ("game-over"):
            displayEndMsg();
            break;
    }
}

function movePaddle() {
    if (keyIsDown(LEFT_ARROW)) {
        paddle.shiftLeft();
    }
    if (keyIsDown(RIGHT_ARROW)) {
        paddle.shiftRight();
    }
}

function displayMainMenu() {
    push();
    // Sets text size, strokeWeight, stroke
    textSize(100);
    strokeWeight(4);
    stroke(34, 78, 5);
    // Set color
    fill(130, 210, 76);
    // Use a web font from Google Fonts
    textFont(font);
    textAlign(CENTER, CENTER);
    text(`    Juggle  \n    Simulator`, width / 2 - 80, 250);
    textSize(30);
    fill(255);
    push();
    // Sets text size, strokeWeight, stroke
    textSize(40);
    strokeWeight(4);
    stroke(34, 78, 5);
    // Set color
    fill(130, 210, 76);
    // Use a web font from Google Fonts
    textFont(font);
    textAlign(CENTER, CENTER);
    text(`Press 1 To Play`, width / 2 - 80, 550);
    text(`Use LEFT and RIGHT arrows to catch shapes`, width / 2 - 80, 650);
    textSize(30);
    fill(255);
    pop();
}

function displayPointsCount() {
    push();
    // Sets text size, strokeWeight, stroke
    textSize(100);
    strokeWeight(4);
    stroke(34, 78, 5);
    // Set color
    fill(130, 210, 76);
    textFont(font);
    textAlign(CENTER, CENTER);
    text(`Points: ${pointCount}`, width / 2, 150);
    textSize(30);
    fill(255);
    push();
}

function displayEndMsg() {
    push();
    // Sets text size, strokeWeight, stroke
    textSize(100);
    strokeWeight(4);
    stroke(34, 78, 5);
    // Set color
    fill(130, 210, 76);
    textFont(font);
    textAlign(CENTER, CENTER);
    text(`GAME OVER`, width / 2, 250);
    text(`You scored ${pointCount} points`, width / 2, 450);
    textSize(30);
    fill(255);
    push();
}

function runGame() {
    movePaddle();
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

function waitForMenuSelection() {
    if (keyIsDown(49)) {
        state = "game";
    }
}

function increasePoints() {
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if (ball.touchedPaddle) {
            console.log("bounce 1");
            pointCount++;
        }
    }
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (box.active) {
            console.log("bounce 2");
            pointCount++;
        }
    }

}

function checkIfGameOver() {
    if (balls.every(ball => !ball.active) && boxes.every(box => !box.active)) {
        state = "game-over";
    }
}

