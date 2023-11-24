// DecorateTree class represents the state of the game where the player decorates a Christmas tree
class DecorateTree extends State {
    // Constructor initializes properties and sets up the initial state
    constructor(imagesArray, fontsArray, soundsArray) {
        // Call the constructor of the parent class (State)
        super();
        // Load necessary assets and set initial state
        this.bubblegumFont = fontsArray[0];
        this.room = imagesArray[2];
        //this.state = 'title';
        // Initialize other properties
        this.starRand = 0;
        this.toyRand = 0;
        this.giftRand = 0;
        //Initialize array with all the images
        this.treeToys = imagesArray[5];
        this.treeGifts = imagesArray[6];
        this.treeStars = imagesArray[4];
        this.decoratedTree = {
            star: false,
            toys: false,
            gifts: false
        };
        this.christmasTree = {
            x: 340,
            y: 350,
            width: 180,
            height: 150,
            img: imagesArray[3]
        };
        this.ChristmasTreeChoices = {
            star: { x: 320, y: 520, w: 150, h: 40 },
            toys: { x: 720, y: 520, w: 150, h: 40 },
            gift: { x: 520, y: 520, w: 150, h: 40 }
        };
        this.treeDecorations = [];

        // Create the canvas in the setup method
        this.createCanvas();

        // Initialize clock and set initial time
        this.clock = new Clock();
        this.clock.setupClock();
        this.time = millis();
        // Fill the treeDecorations array with tree toys
        this.fillChristmasTreeToys(this.toyRand);
    }

    // Method to create the canvas
    createCanvas() {
        createCanvas(1200, 600);
    }
    // Draw method is called every frame
    draw() {
        // Call the draw method of the parent class
        super.draw();
        // Set the background image based on the room
        background(this.room);
        //Run the simulation
        this.simulation();
    }

    // Method to create a tree toy object
    createTreeToy(x, y, image) {
        let toy = {
            x: x,
            y: y,
            width: 20,
            height: 20,
            img: image,
        };
        return toy;
    }

    // Method to fill the treeDecorations array with new toys of a given type
    fillChristmasTreeToys() {
        let treeX = width / 2 - 140;
        let treeY = height / 3;
        this.treeDecorations = [];
        for (let i = 0; i < 20; i++) {
            let newChristmasToy = this.createTreeToy(
                random(treeX + 80, treeX + 190),
                random(treeY + 60, treeY + 300),
                this.treeToys[this.toyRand]
            );
            this.treeDecorations.push(newChristmasToy);
        }
    }

    // Method to handle the simulation logic
    simulation() {
        this.displayTree();
        this.displayControls();
        this.clock.displayTimer();
        this.checkForStar();
        this.addStar();
        this.checkForGifts();
        this.addGifts();
        this.checkForToys();
        this.addToys();
        this.checkForTime();
    }

    // Method to display the Christmas tree
    displayTree() {
        push();
        image(this.christmasTree.img, width / 2 - 140, height / 3, height / 2, width / 3);
        pop();
    }

    // Method to display the controls for decorating the tree
    displayControls() {
        push();
        textSize(20);
        strokeWeight(4);
        noStroke();
        //Create rectangle behind the text
        fill(71, 44, 175);
        // Draw a rectangle 
        rect(50, 50, width / 4, height - 150, 10);
        //Set color
        stroke(0);
        fill(255, 255, 255);
        //Set text font using the saved font
        textFont(this.bubblegumFont);
        textAlign(CENTER, CENTER);
        text(`Select the choice of toys you  \n  want to decorate the tree with !  \n  (Select 1 , 2 ,3 on keyboard)`, 200, 110,);
        fill(255, 0, 0);
        text(`You have 1 minute !`, 200, 160,);
        pop();
        //Draw the rectangle options for gardening
        push();
        let rectWidth = this.ChristmasTreeChoices.star.w; // Set the width for each rectangle
        let rectHeight = this.ChristmasTreeChoices.star.h; // Set the height for the rectangles
        let rectY = height - 70; // Set the Y-coordinate for the rectangles

        fill(204, 0, 0); // Red
        rect(width / 4 - rectWidth / 2, rectY, rectWidth, rectHeight, 30);
        fill(255);

        // Draw the second rectangle (toys)
        fill(51, 204, 204);
        rect(width / 2 - rectWidth / 2, rectY, rectWidth, rectHeight, 30);
        fill(255);
        // Draw the third rectangle (gift)
        fill(204, 102, 255); // Purple
        rect(width / 4 * 3 - rectWidth / 2, rectY, rectWidth, rectHeight, 30);
        fill(255);
        pop();
        //Draw the text options for gardening
        push();
        textSize(20);
        strokeWeight(4);
        stroke(0);
        fill(255);
        textFont(this.bubblegumFont);
        text(`1. Star `, width / 4, rectY + 15);
        text(`2. Tree Toys `, width / 2, rectY + 15);
        text(`3. Gifts `, width / 4 * 3, rectY + 15);
        pop();
    }

    // Method to handle the logic when '1' key is pressed
    addStar() {
        if (key === '1') {
            this.decoratedTree.star = true;
        }
    }

    // Method to check if the star should be displayed
    checkForStar() {
        if (this.decoratedTree.star) {
            this.decorateStar(this.starRand);
        }
    }

    // Method to handle the logic when '2' key is pressed
    addToys() {
        if (key === '2') {
            this.decoratedTree.toys = true;
        }
    }


    // Method to check if the toys should be displayed
    checkForToys() {
        if (this.decoratedTree.toys) {
            this.decorateToys(this.toyRand);
        }
    }

    // Method to handle the logic when '3' key is pressed
    addGifts() {
        if (key === '3') {
            this.decoratedTree.gifts = true;
        }
    }

    // Method to check if the gifts should be displayed
    checkForGifts() {
        if (this.decoratedTree.gifts) {
            this.decorateGifts(this.giftRand);
        }
    }

    // Method to display the star on the Christmas tree
    decorateStar(n) {
        image(this.treeStars[n], width / 2 - 70, height / 3 - 50, 150, 150);
    }

    // Method to display the tree toys on the Christmas tree
    decorateToys() {
        for (let i = 0; i < this.treeDecorations.length; i++) {
            image(this.treeDecorations[i].img, this.treeDecorations[i].x, this.treeDecorations[i].y, this.treeDecorations[i].width, this.treeDecorations[i].height);
        }
    }

    // Method to display the gifts under the Christmas tree
    decorateGifts(n) {
        image(this.treeGifts[n], width / 2 + 260, height - 240, 100, 120);
    }

    // Method to display the game over text
    gameOver() {
        push();
        textSize(50);
        strokeWeight(4);
        stroke(250);
        fill(200, 100, 100);
        textFont(this.bubblegumFont);
        textAlign(CENTER, CENTER);
        text("Game Over!\nYou didn't decorate the Christams tree before the timer ran out!", width / 2, height / 2);
        pop();
    }

    // Method to display the game won text
    gameWon() {
        push();
        textSize(50);
        strokeWeight(4);
        stroke(250);
        fill(200, 100, 100);
        textFont(this.bubblegumFont);
        textAlign(CENTER, CENTER);
        text("You decorated the Christames tree Before the timer ran out!", width / 2, height / 2);
        pop();
    }

    // Method to check if the player has run out of time
    checkForTime() {
        const elapsedTime = millis() - this.time;
        if (elapsedTime >= 5000) {
            if (this.decoratedTree.star && this.decoratedTree.toys && this.decoratedTree.gifts) {
                //this.state = 'gameWon';
                currentState = new StartCollectPresents(imagesArray, fontsArray, soundsArray);
            } else {
                currentState = new GameOver(imagesArray, fontsArray, soundsArray);
            }
        }
    }
    // Method to check if the minute has changed
    timeOver() {
        if (minute() !== minuteVar) {
            return true;
        } else {
            return false;
        }
    }
    // Method to handle key press events
    keyPressed() {
        super.keyPressed();
        if (key === '1') {
            this.starRand = floor(random(2));
            this.decoratedTree.star = false;
        } else if (key === '2') {
            this.toyRand = floor(random(3));
            this.decoratedTree.toys = false;
        } else if (key === '3') {
            this.giftRand = floor(random(3));
            this.decoratedTree.gifts = false;
        }
    }
}
