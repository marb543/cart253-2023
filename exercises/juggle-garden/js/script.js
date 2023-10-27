/**
 * Activity : Object Oriented Programming
 * Maria Barba
 * 
 * Font from DaFont : https://www.dafont.com/gameplay.font
 */
"use strict";
let state = "menu";
let font;
let gravityForce = 0.0025;
let paddle;
let balls = [];
let boxes = [];
let pointCount;
let pointsIncreasedThisFrame = false;
let numBalls = 10;
let numBoxes = 5;
/**
 * preload()
 * 
 * This function loads the font
 */
function preload() {
    font = loadFont(`./assets/fonts/Gameplay.ttf`);
}
/**
 * setup()
 * This function sets up the canvas. It creates a paddle
 * object. It also sets up the boxes array.
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    //Create a paddle object
    paddle = new Paddle(300, 20);
    //Loop through balls, boxes
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
        boxes.push(box);
    }

}
/**
 * draw()
 * This function sets the state of the game.
 */
function draw() {
    background(0);
    switch (state) {
        case ("menu"):
            displayMainMenu();
            waitForMenuSelection();
            break;
        case ("game"):
            runGame();
            increasePoints();
            displayPointsCount();
            checkIfGameOver();
            break;
        case ("game-over"):
            displayEndMsg();
            break;
    }
}
/**
 * movePaddle()
 * This function checks if the player pressed the right or left arrow.
 */
function movePaddle() {
    if (keyIsDown(LEFT_ARROW)) {
        paddle.shiftLeft();
    }
    if (keyIsDown(RIGHT_ARROW)) {
        paddle.shiftRight();
    }
}
/**
 * displayMainMenu()
 * This function displays the main menu text.
 */
function displayMainMenu() {
    push();
    // Sets text size, strokeWeight, stroke
    textSize(100);
    strokeWeight(4);
    stroke(34, 78, 5);
    // Set color
    fill(130, 210, 76);
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
    textFont(font);
    textAlign(CENTER, CENTER);
    text(`Press 1 To Play`, width / 2 - 80, 550);
    text(`Use LEFT and RIGHT arrows to catch shapes`, width / 2 - 80, 650);
    textSize(30);
    fill(255);
    pop();
}
/**
 * displayPointsCount()
 * This function displays the text with the points count.
 */
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
    pop();
}
/**
 * displayEndMsg()
 * This function displays the text for the end message.
 */
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
    pop();
}
/**
 * runGame()
 * This function makes the main game move by moving the paddle , moving the balls , and moving the box.
 */
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
/**
 * waitForMenuSelection()
 * This function checks if the user selected 1 on the keyboard to start the game
 */
function waitForMenuSelection() {
    if (keyIsDown(49)) {
        state = "game";
    }
}
/**
 * increasePoints()
 * This function increases the points, and updates the pointCount
 */
function increasePoints() {
    let totalPoints = 0;

    for (let i = 0; i < balls.length; i++) {
        if (balls[i].touchedPaddle) {
            totalPoints += balls[i].points;
        }
    }

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].touchedPaddle) {
            totalPoints += boxes[i].points;
        }
    }

    pointCount = totalPoints;

}
/**
 * checkIfGameOver()
 * This function checks if the game is over.
 */
function checkIfGameOver() {
    if (balls.every(ball => !ball.active) && boxes.every(box => !box.active)) {
        state = "game-over";
    }
}

