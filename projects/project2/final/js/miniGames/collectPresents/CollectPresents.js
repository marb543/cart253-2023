//CollectPresnts
//Creates the CollectPresents state object
//This is the stae of the collectPresnts mini-game. Throughout this mini-game 
//the player must collect presents, and avoid christmas toys
//Modified for class exercise by Maria Barba : https://github.com/marb543/cart253-2023/tree/main/exercises/juggle-garden
class CollectPresents extends State {
    // constructor()
    // Acts as the setup() of the state, called when the
    // state is created.
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        this.santasWorkshop = imagesArray[7];
        this.font = fontsArray[0];
        this.gravityForce = 0.0025;
        this.paddle;
        this.balls = [];
        this.boxes = [];
        this.pointCount;
        this.numBalls = 5;
        this.numBoxes = 10;
        //Create the canvas
        createCanvas(1200, 600);
        //Create a paddle object
        this.paddle = new Paddle(300, 20, imagesArray[10]);
        //Loop through christmas presents
        for (let i = 0; i < this.numBalls; i++) {
            let x = random(0, width);
            let y = random(-400, -100);
            let ball = new ChristmasToy(x, y, imagesArray[9]);
            this.balls.push(ball);
        }
        //Loop through Christmas presents 
        for (let i = 0; i < this.numBoxes; i++) {
            let x = random(0, width);
            let y = random(-400, -100);
            let box = new Present(x, y, imagesArray[8]);
            this.boxes.push(box);
        }
    }
    //draw()
    // Called every frame in the main script.
    draw() {
        super.draw();
        //Set the backround image
        background(this.santasWorkshop);
        //Run the game 
        this.runGame();
        //Increase the points
        this.increasePoints();
        //Display the points count
        this.displayPointsCount();
        //Check if the player has finished the game (there are no more christmas toys or presents to catch)
        this.checkIfGameOver();
        //Check if the player has won the game (The points count is positive)
        this.checkIfGameWon();
    }
    // movePaddle()
    // This function checks if the player pressed the right or left arrow.
    // And moves the paddle object accordingly
    movePaddle() {
        if (keyIsDown(LEFT_ARROW)) {
            this.paddle.shiftLeft();
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.paddle.shiftRight();
        }
    }

    // displayPointsCount()
    // This function displays the text with the points count.
    displayPointsCount() {
        push();
        // Sets text size, strokeWeight, stroke
        textSize(50);
        strokeWeight(4);
        stroke(34, 78, 5);
        // Set color
        fill(130, 0, 76);
        rect(500, 20, 200, 70, 10, 10);
        fill(130, 210, 76);
        textFont(this.font);
        textAlign(CENTER, CENTER);
        text(`Points: ${this.pointCount}`, width / 2, 50);
        fill(255);
        pop();
    }
    //runGame()
    // This function makes the main game move by moving the this.paddle , moving the balls , and moving the box
    runGame() {
        //Move the paddle object
        this.movePaddle();
        //Display the paddle object
        this.paddle.display();
        //Loop through christmas toys, and move them, add gravity, and bounce
        for (let i = 0; i < this.balls.length; i++) {
            let ball = this.balls[i];
            if (ball.active) {
                ball.gravity(this.gravityForce);
                ball.move();
                ball.bounce(this.paddle);
                ball.display();
            }
        }
        //Loop through the christmas presents, and move them, add gravity, and bounce
        for (let i = 0; i < this.boxes.length; i++) {
            let box = this.boxes[i];
            if (box.active) {
                box.gravity(this.gravityForce);
                box.move();
                box.bounce(this.paddle);
                box.display();
            }
        }
    }
    // increasePoints()
    // This function increases the points, and updates the pointCount
    increasePoints() {
        let totalPoints = 0;
        //Loop through christmas toys, presents, and increase points
        for (let i = 0; i < this.balls.length; i++) {
            if (this.balls[i].touchedPaddle) {
                totalPoints += this.balls[i].points;
            }
        }
        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i].touchedPaddle) {
                totalPoints += this.boxes[i].points;
            }
        }
        //Icrease the point count
        this.pointCount = totalPoints;
    }
    // checkIfGameOver()
    // This function checks if the game is over.
    checkIfGameOver() {
        if (this.balls.every(ball => !ball.active) && this.boxes.every(box => !box.active)) {
            if (this.pointCount < 5) {
                currentState = new GameOver(imagesArray, fontsArray, soundsArray);
            }
        }
    }
    //checkIfGameWon()
    // This function checks if the user has won the game or not
    checkIfGameWon() {
        if (this.balls.every(ball => !ball.active) && this.boxes.every(box => !box.active)) {
            if (this.pointCount >= 5) {
                currentState = new Ending(imagesArray, fontsArray, soundsArray);
            }
        }
    }

}