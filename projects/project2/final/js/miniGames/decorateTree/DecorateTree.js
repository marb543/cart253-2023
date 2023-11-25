// DecorateTree 
// This class represents the state of the game where the player decorates a Christmas tree
class DecorateTree extends State {
    // constructor()
    // Constructor initializes properties and sets up the initial state
    constructor(imagesArray, fontsArray, soundsArray) {
        // Call the constructor of the parent class (State)
        super();
        // Load necessary assets and set initial state
        this.bubblegumFont = fontsArray[0];
        //Sets the room background image variable
        this.room = imagesArray[2];
        // Initialize random variables for the random toys of the Christmas tree
        this.starRand = 0;
        this.toyRand = 0;
        this.giftRand = 0;
        //Initialize each array for random images for treeToys, treeGifts, treeStars
        this.treeToys = imagesArray[5];
        this.treeGifts = imagesArray[6];
        this.treeStars = imagesArray[4];
        // Create a decoratedTree object which keeps track of if the user has decorated the tree
        // with a christmas star, christmas toys, and christmas toys
        this.decoratedTree = {
            star: false,
            toys: false,
            gifts: false
        };
        // Create a Christmas tree object which keeps track of the properties of the Christmas tree
        // object which is it's x position, y position , width, height, and img variable
        this.christmasTree = {
            x: 340,
            y: 350,
            width: 180,
            height: 150,
            img: imagesArray[3]
        };
        //Create a ChristmasTreeChoices object which keeps track of the choices for the user 
        this.ChristmasTreeChoices = {
            star: { x: 320, y: 520, w: 150, h: 40 },
            toys: { x: 720, y: 520, w: 150, h: 40 },
            gift: { x: 520, y: 520, w: 150, h: 40 }
        };
        //Creates a treeDecorations empty array
        this.treeDecorations = [];
        // Create the canvas in the setup method
        this.createCanvas();
        // Initialize clock and set initial time
        this.clock = new Clock();
        //Call the setup function for the clock
        this.clock.setupClock();
        //Setup the time in millis
        this.time = millis();
        // Fill the treeDecorations array with tree toys
        this.fillChristmasTreeToys(this.toyRand);
    }
    //createCanvas()
    // Method to create the canvas for the program
    createCanvas() {
        createCanvas(1200, 600);
    }
    //draw()
    // Draw method is called every frame
    draw() {
        // Call the draw method of the parent class
        super.draw();
        // Set the background image based on the room
        background(this.room);
        //Run the simulation
        this.simulation();
    }
    // createTreeToy()
    // Method that creates a tree toy object, and returns it
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
    //fillChristmasTreeToys()
    // Method to fill the treeDecorations array with new toys of a given type
    fillChristmasTreeToys() {
        //Set the random treeX variable
        let treeX = width / 2 - 140;
        //Set the random treeY variable
        let treeY = height / 3;
        //Set the treeDecorations empty array
        this.treeDecorations = [];
        //Loop through the arrays of toys, assign a random toy
        for (let i = 0; i < 20; i++) {
            let newChristmasToy = this.createTreeToy(
                random(treeX + 80, treeX + 190),
                random(treeY + 60, treeY + 300),
                this.treeToys[this.toyRand]
            );
            //push the random toy to treeDecorations array
            this.treeDecorations.push(newChristmasToy);
        }
    }
    //simulation()
    // This method handles the simulation logic of the game
    simulation() {
        //Displays the Christmas tree
        this.displayTree();
        //Calll the method that display the user controls
        this.displayControls();
        //Call the method that displays the timer
        this.clock.displayTimer();
        //Call the method that verifies if the player has added a star
        this.checkForStar();
        //Add the Christmas star
        this.addStar();
        //Call the method that verifies if the player has added gifts
        this.checkForGifts();
        //Call the method that adds Christmas gifts 
        this.addGifts();
        //Call the method to check if the player has added Christmas toys 
        this.checkForToys();
        //Call the method that adds Christmas toys
        this.addToys();
        //Call the method that verifies the time 
        this.checkForTime();
    }
    //displayTree()
    // Method to display the Christmas tree
    displayTree() {
        push();
        image(this.christmasTree.img, width / 2 - 140, height / 3, height / 2, width / 3);
        pop();
    }
    //displayControls()
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
        // Set the width for each rectangle
        let rectWidth = this.ChristmasTreeChoices.star.w;
        // Set the height for the rectangles
        let rectHeight = this.ChristmasTreeChoices.star.h;
        // Set the Y-coordinate for the rectangles
        let rectY = height - 70;
        fill(204, 0, 0);
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
    //addStar()
    // Method to handle the logic when '1' key is pressed
    addStar() {
        if (key === '1') {
            this.decoratedTree.star = true;
        }
    }
    // checkForStar()
    // Method to check if the star should be displayed
    checkForStar() {
        if (this.decoratedTree.star) {
            this.decorateStar(this.starRand);
        }
    }
    //addToys()
    // Method to handle the logic when '2' key is pressed
    addToys() {
        if (key === '2') {
            this.decoratedTree.toys = true;
        }
    }
    //checkForToys()
    // Method to check if the toys should be displayed
    checkForToys() {
        if (this.decoratedTree.toys) {
            this.decorateToys(this.toyRand);
        }
    }
    //addGifts()
    // Method to handle the logic when '3' key is pressed
    addGifts() {
        if (key === '3') {
            this.decoratedTree.gifts = true;
        }
    }
    // checkForGifts()
    // Method to check if the gifts should be displayed
    checkForGifts() {
        if (this.decoratedTree.gifts) {
            this.decorateGifts(this.giftRand);
        }
    }
    // decorateStar()
    // Method to display the star on the Christmas tree
    decorateStar(n) {
        image(this.treeStars[n], width / 2 - 70, height / 3 - 50, 150, 150);
    }
    //decorateToys()
    // Method to display the tree toys on the Christmas tree
    decorateToys() {
        for (let i = 0; i < this.treeDecorations.length; i++) {
            image(this.treeDecorations[i].img, this.treeDecorations[i].x, this.treeDecorations[i].y, this.treeDecorations[i].width, this.treeDecorations[i].height);
        }
    }
    //decorateGifts()
    // Method to display the gifts under the Christmas tree
    decorateGifts(n) {
        image(this.treeGifts[n], width / 2 + 260, height - 240, 100, 120);
    }
    //checkForTime()
    // Method to check if the player has run out of time, and if he has decorated the Christmas tree
    //before the timer ran out of time or not
    checkForTime() {
        const elapsedTime = millis() - this.time;
        if (elapsedTime >= 5000) {
            if (this.decoratedTree.star && this.decoratedTree.toys && this.decoratedTree.gifts) {
                //If the player has run out of time, and he has decorated the Christmas tree, then set
                //the current state to be StartCollectPresents
                currentState = new StartCollectPresents(imagesArray, fontsArray, soundsArray);
            } else {
                //If the player has ran out of time, and if he has not decoared the Christmas tree
                //Set the current stet to be GameOver
                currentState = new GameOver(imagesArray, fontsArray, soundsArray);
            }
        }
    }
    //timeOver()
    // Method to check if the minute has changed
    timeOver() {
        if (minute() !== minuteVar) {
            return true;
        } else {
            return false;
        }
    }
    //keyPressed()
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
