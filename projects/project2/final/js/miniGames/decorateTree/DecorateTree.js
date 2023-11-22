// // DecorateTree
// class DecorateTree extends State {

//     // Acts as the setup() of the state, called when the
//     // state is created. Creates a circle object and sets its
//     // velocity.
//     constructor(imagesArray, fontsArray) {
//         super();
//         this.bubblegumFont = fontsArray[0];
//         this.room = imagesArray[2];
//         //Create a variable which will keep track of the state for which the user is currently is in
//         this.state = `title`;
//         //Create a tree decorations array
//         this.treeDecorations = [];
//         //Create an array to store options for tree stars
//         this.treeStars = imagesArray[3];
//         //Create an array to store options for tree toys
//         this.treeToys = imagesArray[4];
//         //Create an array to store options for types of gifts
//         this.treeGifts = imagesArray[5];
//         //Create a clock variable
//         this.clock = new Clock();
//         //Create a variable to keep track of random values of n
//         this.starRand = 0;
//         this.toyRand = 0;
//         this.giftRand = 0;
//         //Keeps track if the Christmas tree was decorated or not 
//         this.decoratedTree = {
//             star: false,
//             toys: false,
//             gifts: false
//         };
//         //Create a variable to keep track of the current minute
//         this.time = null;
//         //Create a variable which stores a Christmas Tree variable
//         this.christmasTree = {
//             x: 340,
//             y: 350,
//             width: 180,
//             height: 150,
//             img: null
//         }
//         //Variable that keeps track of the position of the controls to decorate the Cristmas tree
//         this.ChristmasTreeChoices = {
//             star: {
//                 x: 320,
//                 y: 520,
//                 w: 150,
//                 h: 40
//             },
//             toys: {
//                 x: 720,
//                 y: 520,
//                 w: 150,
//                 h: 40
//             },
//             gift: {
//                 x: 520,
//                 y: 520,
//                 w: 150,
//                 h: 40
//             }
//         }
//         //Create Canvas
//         createCanvas(1200, 600);
//         //Call the setupClock function
//         this.clock.setupClock();
//         //Create an array of Christmas tree toys
//         fillChristmasTreeToys(this.toyRand);
//         //Setup time
//         this.time = millis();

//     }
//     // draw()
//     // The draw function sets the background image , and checks if a certain state has been reached. 
//     // If a certain state has been reached, the according function is called.
//     draw() {
//         // Always call the super() version of the method if there is one
//         // just in case it does something important.
//         super.draw();
//         // Call the state's methods to make the animation work
//         background(this.room);
//         if (this.state == `title`) {
//             title();
//         } else if (this.state == `simulation`) {
//             simulation();
//         }
//         else if (this.state == `gameOver`) {
//             gameOver();
//         }
//         else if (this.state == `gameWon`) {
//             gameWon();
//         }
//     }

//     //createTreeToy()
//     //This function allows the user to create a Christmas Tree toy that will decorate the Christams Tree
//     createTreeToy(x, y, image) {
//         let toy = {
//             x: x,
//             y: y,
//             width: 20,
//             height: 20,
//             img: image,
//         };
//         return toy;
//     }
//     //fillChristmasTreeToys()
//     //This function fills the treeDecorations array with new toys of one type
//     fillChristmasTreeToys(toyType) {
//         let treeX = width / 2 - 140; // Left-most X coordinate of the tree
//         let treeY = height / 3;      // Top Y coordinate of the tree
//         this.treeDecorations = [];
//         for (let i = 0; i < 20; i++) {
//             let newChristmasToy = createTreeToy(random(treeX + 80, treeX + 190), random(treeY + 60, treeY + 300), this.treeToys[toyType]);
//             this.treeDecorations.push(newChristmasToy);
//         }
//     }

//     //simulation()
//     //This function calls the methods that are responsible for making the simulation run
//     simulation() {
//         //Display tree 
//         displayTree();
//         //Display controls
//         displayControls();
//         //Display Timer
//         this.clock.displayTimer();
//         //This will check if the user clicked 1
//         checkForStar();
//         //This will add the star on top of the tree
//         addStar();
//         //This will check if the user clicked 3
//         checkForGifts();
//         //This will add gifts under the tree
//         addGifts();
//         //This will check that the user clicked 2 
//         checkForToys();
//         //This will add toys on the tree
//         addToys();
//         //This will check if the game time has elapsed
//         checkForTime();
//     }
//     //displayTree()
//     // This function displays the Christmas tree
//     displayTree() {
//         push();
//         image(this.christmasTree.img, width / 2 - 140, height / 3, height / 2, width / 3);
//         pop();
//     }
//     //displayControls()
//     //This function displays the controls to decorate the Christmas tree
//     displayControls() {
//         push();
//         textSize(20);
//         strokeWeight(4);
//         noStroke();
//         //Create rectangle behind the text
//         fill(71, 44, 175);
//         // Draw a rectangle 
//         rect(50, 50, width / 4, height - 150, 10);
//         //Set color
//         stroke(0);
//         fill(255, 255, 255);
//         //Set text font using the saved font
//         textFont(this.bubblegumFont);
//         textAlign(CENTER, CENTER);
//         text(`Select the choice of toys you  \n  want to decorate the tree with !  \n  (Select 1 , 2 ,3 on keyboard)`, 200, 110,);
//         fill(255, 0, 0);
//         text(`You have 1 minute !`, 200, 160,);
//         pop();
//         //Draw the rectangle options for gardening
//         push();
//         let rectWidth = this.ChristmasTreeChoices.star.w; // Set the width for each rectangle
//         let rectHeight = this.ChristmasTreeChoices.star.h; // Set the height for the rectangles
//         let rectY = height - 70; // Set the Y-coordinate for the rectangles

//         fill(204, 0, 0); // Red
//         rect(width / 4 - rectWidth / 2, rectY, rectWidth, rectHeight, 30);
//         fill(255);

//         // Draw the second rectangle (toys)
//         fill(51, 204, 204);
//         rect(width / 2 - rectWidth / 2, rectY, rectWidth, rectHeight, 30);
//         fill(255);
//         // Draw the third rectangle (gift)
//         fill(204, 102, 255); // Purple
//         rect(width / 4 * 3 - rectWidth / 2, rectY, rectWidth, rectHeight, 30);
//         fill(255);
//         pop();
//         //Draw the text options for gardening
//         push();
//         textSize(20);
//         strokeWeight(4);
//         stroke(0);
//         fill(255);
//         textFont(this.bubblegumFont);
//         text(`1. Star `, width / 4 - 25, rectY + 30);
//         text(`2. Tree Toys `, width / 2 - 35, rectY + 30);
//         text(`3. Gifts `, width / 4 * 3 - 25, rectY + 30);
//         pop();
//     }

//     //addStar()
//     //This function checks if the user has clicked on 1 
//     addStar() {
//         if (key === '1') {
//             this.decoratedTree.star = true;
//         }
//     }
//     /**
//      * checkForStar()
//      * 
//      * If the user has selected star, display the star
//      */
//     checkForStar() {
//         if (this.decoratedTree.star) {
//             decorateStar(this.starRand);
//         }
//     }
//     // addToys()
//     // Checks if the user has clicked on 2
//     addToys() {
//         if (key === '2') {
//             this.decoratedTree.toys = true;
//         }
//     }
//     // checkForToys()
//     // If the user has selected toys,display the toys
//     checkForToys() {
//         if (this.decoratedTree.toys) {
//             decorateToys();
//         }
//     }
//     //addGifts()
//     //Checks if the user has clicked 3
//     addGifts() {
//         if (key === '3') {
//             this.decoratedTree.gifts = true;
//         }
//     }
//     //checkForGifts()
//     // Checks if the user has selcted gifts, display the gifts
//     checkForGifts() {
//         if (this.decoratedTree.gifts) {
//             decorateGifts(giftRand);
//         }
//     }
//     // decorateStar()
//     // This function decorates the Christmas tree with a star decoration on top
//     decorateStar(n) {
//         image(this.treeStars[n], width / 2 - 70, height / 3 - 50, 150, 150);
//     }
//     //decorateToys()
//     // This function decorates the Christmas tree with tree toys
//     decorateToys() {
//         for (let i = 0; i < this.treeDecorations.length - 1; i++) {
//             image(this.treeDecorations[i].img, this.treeDecorations[i].x, this.treeDecorations[i].y, this.treeDecorations[i].width, this.treeDecorations[i].height);
//         }
//     }
//     // decorateGifts()
//     // This function decorates the Christmas tree with a present on the chair
//     decorateGifts(n) {
//         image(this.treeGifts[n], width / 2 + 260, height - 240, 100, 120);
//     }
//     // title()
//     // This function sets the text for the title state
//     title() {
//         push();
//         textSize(50);
//         strokeWeight(4);
//         stroke(250);
//         fill(200, 100, 100);
//         textFont(this.bubblegumFont);
//         textAlign(CENTER, CENTER);
//         text("Decorate the Christmas Tree before the timer runs out ! ", width / 2, height / 2);
//         pop();
//     }
//     // title()
//     //  This function sets the text for the game over state
//     gameOver() {
//         push();
//         textSize(50);
//         strokeWeight(4);
//         stroke(250);
//         fill(200, 100, 100);
//         textFont(this.bubblegumFont);
//         textAlign(CENTER, CENTER);
//         text(" Game Over !\n You didn't decorate the Christams tree before the timer ran out ! ", width / 2, height / 2);
//         pop();
//     }
//     // title()
//     // This function sets the text for the game won state
//     gameWon() {
//         push();
//         textSize(50);
//         strokeWeight(4);
//         stroke(250);
//         fill(200, 100, 100);
//         textFont(this.bubblegumFont);
//         textAlign(CENTER, CENTER);
//         text(" You decorated the Christames tree Before the timer ran out !", width / 2, height / 2);
//         pop();
//     }
//     // checkForTime()
//     //  This function checks if the player time has expired(after 1 minute), and if the player was able to decorate the christmas tree before 1 minutes
//     checkForTime() {
//         if (millis() - this.time >= 60000 && !(this.decoratedTree.star && this.decoratedTree.toys && this.decoratedTree.gifts)) {
//             this.state = "gameOver";
//         } else if (millis() - this.time >= 60000 && (this.decoratedTree.star && this.decoratedTree.toys && this.decoratedTree.gifts)) {
//             this.state = "gameWon";
//         }
//     }
//     // timeOver()
//     // This function checks if it has been 1 minute since the player started decorating the tree.
//     // Returns a boolean value.
//     timeOver() {
//         if (minute() !== minuteVar) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     // mousePressed()
//     // This function verifies if the user has pressed the mouse to set the simulation state
//     mousePressed() {
//         if (this.state == `title`) {
//             this.state = `simulation`;
//         }
//     }
//     // keyPressed()
//     //  This function makes sure that everytime a new key is pressed a new random value is set
//     keyPressed() {
//         if (key === '1') {
//             this.starRand = floor(random(2));
//             this.decoratedTree.star = false;
//         }
//         else if (key === '2') {
//             this.toyRand = floor(random(3));
//             this.decoratedTree.toys = false;
//         }
//         else if (key === '3') {
//             this.giftRand = floor(random(3));
//             this.decoratedTree.gifts = false;

//         }
//     }

// }

// DecorateTree class represents the state of the game where the player decorates a Christmas tree
class DecorateTree extends State {
    // Constructor initializes properties and sets up the initial state
    constructor(imagesArray, fontsArray) {
        // Call the constructor of the parent class (State)
        super();

        // Load necessary assets and set initial state
        this.bubblegumFont = fontsArray[0];
        this.room = imagesArray[2];
        this.state = 'title';

        // Initialize other properties
        this.starRand = 0;
        this.toyRand = 0;
        this.giftRand = 0;
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
            img: null
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
        this.time = millis();
    }

    // Method to create the canvas
    createCanvas() {
        createCanvas(1200, 600);
    }

    // Setup method is called once when the state is created
    setup() {
        // Additional setup if needed
        this.clock.setupClock();
        // Fill the treeDecorations array with tree toys
        this.fillChristmasTreeToys(this.toyRand);
    }

    // Draw method is called every frame
    draw() {
        // Call the draw method of the parent class
        super.draw();

        // Set the background image based on the room
        background(this.room);

        // Execute different logic based on the current state
        if (this.state == 'title') {
            this.title();
        } else if (this.state == 'simulation') {
            this.simulation();
        } else if (this.state == 'gameOver') {
            this.gameOver();
        } else if (this.state == 'gameWon') {
            this.gameWon();
        }
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
    fillChristmasTreeToys(toyType) {
        let treeX = width / 2 - 140;
        let treeY = height / 3;
        this.treeDecorations = [];
        for (let i = 0; i < 20; i++) {
            let newChristmasToy = this.createTreeToy(
                random(treeX + 80, treeX + 190),
                random(treeY + 60, treeY + 300),
                this.treeToys[toyType]
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
        text(`1. Star `, width / 4 - 25, rectY + 30);
        text(`2. Tree Toys `, width / 2 - 35, rectY + 30);
        text(`3. Gifts `, width / 4 * 3 - 25, rectY + 30);
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
            this.decorateToys();
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
        for (let i = 0; i < this.treeDecorations.length - 1; i++) {
            image(this.treeDecorations[i].img, this.treeDecorations[i].x, this.treeDecorations[i].y, this.treeDecorations[i].width, this.treeDecorations[i].height);
        }
    }

    // Method to display the gifts under the Christmas tree
    decorateGifts(n) {
        image(this.treeGifts[n], width / 2 + 260, height - 240, 100, 120);
    }

    // Method to display the title text
    title() {
        push();
        textSize(50);
        strokeWeight(4);
        stroke(250);
        fill(200, 100, 100);
        textFont(this.bubblegumFont);
        textAlign(CENTER, CENTER);
        text("Decorate the Christmas Tree before the timer runs out!", width / 2, height / 2);
        pop();
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
        if (elapsedTime >= 60000) {
            if (this.decoratedTree.star && this.decoratedTree.toys && this.decoratedTree.gifts) {
                this.state = 'gameWon';
            } else {
                this.state = 'gameOver';
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

    // Method to handle mouse press events
    mousePressed() {
        super.mousePressed();
        console.log("Pressed mouse");
        if (this.state == 'title') {
            this.state = 'simulation';
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
