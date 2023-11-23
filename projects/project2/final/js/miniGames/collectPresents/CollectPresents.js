class CollectPresents extends State {
    // Acts as the setup() of the state, called when the
    // state is created. Creates a circle object and sets its
    // velocity.
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        this.santasWorkshop = imagesArray[7];
        this.font = fontsArray[0];
        this.gravityForce = 0.0025;
        this.paddle;
        this.balls = [];
        this.boxes = [];
        this.pointCount;
        this.numBalls = 10;
        this.numBoxes = 5;
        createCanvas(1200, 600);
        //Create a paddle object
        this.paddle = new Paddle(300, 20, imagesArray[10]);
        //Loop through balls, boxes
        for (let i = 0; i < this.numBalls; i++) {
            let x = random(0, width);
            let y = random(-400, -100);
            let ball = new ChristmasToy(x, y, imagesArray[9]);
            this.balls.push(ball);
        }
        for (let i = 0; i < this.numBoxes; i++) {
            let x = random(0, width);
            let y = random(-400, -100);
            let box = new Present(x, y, imagesArray[8]);
            this.boxes.push(box);
        }

    }
    draw() {
        super.draw();
        background(this.santasWorkshop);
        this.runGame();
        this.increasePoints();
        this.displayPointsCount();
        this.checkIfGameOver();
        this.checkIfGameWon();
    }
    /**
     * movePaddle()
     * This function checks if the player pressed the right or left arrow.
     */
    movePaddle() {
        if (keyIsDown(LEFT_ARROW)) {
            this.paddle.shiftLeft();
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.paddle.shiftRight();
        }
    }
    /**
     * displayPointsCount()
     * This function displays the text with the points count.
     */
    displayPointsCount() {
        push();
        // Sets text size, strokeWeight, stroke
        textSize(100);
        strokeWeight(4);
        stroke(34, 78, 5);
        // Set color
        fill(130, 210, 76);
        textFont(this.font);
        textAlign(CENTER, CENTER);
        text(`Points: ${this.pointCount}`, width / 2, 150);
        fill(130, 0, 76);
        rect(40, 120, 120, 40);
        textSize(30);
        fill(255);
        pop();
    }
    // /**
    //  * displayEndMsg()
    //  * This function displays the text for the end message.
    //  */
    // displayEndMsg() {
    //     push();
    //     // Sets text size, strokeWeight, stroke
    //     textSize(100);
    //     strokeWeight(4);
    //     stroke(34, 78, 5);
    //     // Set color
    //     fill(130, 210, 76);
    //     textFont(this.font);
    //     textAlign(CENTER, CENTER);
    //     text(`GAME OVER`, width / 2, 250);
    //     text(`You scored ${this.pointCount} points`, width / 2, 450);
    //     textSize(30);
    //     fill(255);
    //     pop();
    // }
    /**
     * runGame()
     * This function makes the main game move by moving the this.paddle , moving the balls , and moving the box.
     */
    runGame() {
        this.movePaddle();
        this.paddle.display();

        for (let i = 0; i < this.balls.length; i++) {
            let ball = this.balls[i];
            if (ball.active) {
                ball.gravity(this.gravityForce);
                ball.move();
                ball.bounce(this.paddle);
                ball.display();
            }
        }
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

    /**
     * increasePoints()
     * This function increases the points, and updates the pointCount
     */
    increasePoints() {
        let totalPoints = 0;

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
        this.pointCount = totalPoints;
    }
    /**
     * checkIfGameOver()
     * This function checks if the game is over.
     */
    checkIfGameOver() {
        if (this.balls.every(ball => !ball.active) && this.boxes.every(box => !box.active)) {
            if (this.pointCount <= 0) {
                currentState = new GameOver(imagesArray, fontsArray, soundsArray);
            }
        }
    }
    //checkIfGameWon()
    // This function checks if the user has won the game or not
    checkIfGameWon() {
        if (this.balls.every(ball => !ball.active) && this.boxes.every(box => !box.active)) {
            if (this.pointCount > 0) {
                currentState = new Ending(imagesArray, fontsArray, soundsArray);
            }
        }
    }

}