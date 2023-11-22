// DecorateTree
class DecorateTree extends State {

    // Acts as the setup() of the state, called when the
    // state is created. Creates a circle object and sets its
    // velocity.
    constructor(imagesArray) {
        super();
        this.room = imagesArray[2];
        //Create a variable which will keep track of the state for which the user is currently is in
        this.state = `title`;
        //Create a tree decorations array
        this.treeDecorations = [];
        //Create an array to store options for tree stars
        this.treeStars = imagesArray[3];
        //Create an array to store options for tree toys
        this.treeToys = imagesArray[4];
        //Create an array to store options for types of gifts
        this.treeGifts = imagesArray[5];
        //Create a clock variable
        this.clock = new Clock();
        //Create a variable to keep track of random values of n
        let starRand = 0;
        let toyRand = 0;
        let giftRand = 0;
        //Keeps track if the Christmas tree was decorated or not 
        this.decoratedTree = {
            star: false,
            toys: false,
            gifts: false
        };
        //Create a variable to keep track of the current minute
        this.time = null;
        //Create a variable which stores a Christmas Tree variable
        this.christmasTree = {
            x: 340,
            y: 350,
            width: 180,
            height: 150,
            img: null
        }
        //Variable that keeps track of the position of the controls to decorate the Cristmas tree
        this.ChristmasTreeChoices = {
            star: {
                x: 320,
                y: 520,
                w: 150,
                h: 40
            },
            toys: {
                x: 720,
                y: 520,
                w: 150,
                h: 40
            },
            gift: {
                x: 520,
                y: 520,
                w: 150,
                h: 40
            }
        }
        //Create Canvas
        createCanvas(1200, 600);
        //Call the setupClock function
        this.clock.setupClock();
        //Create an array of Christmas tree toys
        fillChristmasTreeToys(toyRand);
        //Setup time
        time = millis();

    }
    // draw()
    // The draw function sets the background image , and checks if a certain state has been reached. 
    // If a certain state has been reached, the according function is called.
    draw() {
        // Always call the super() version of the method if there is one
        // just in case it does something important.
        super.draw();
        // Call the state's methods to make the animation work
        background(room);
        if (state == `title`) {
            title();
        } else if (state == `simulation`) {
            simulation();
        }
        else if (state == `gameOver`) {
            gameOver();
        }
        else if (state == `gameWon`) {
            gameWon();
        }
    }

    //createTreeToy()
    //This function allows the user to create a Christmas Tree toy that will decorate the Christams Tree
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
    //This function fills the treeDecorations array with new toys of one type
    fillChristmasTreeToys(toyType) {
        let treeX = width / 2 - 140; // Left-most X coordinate of the tree
        let treeY = height / 3;      // Top Y coordinate of the tree
        treeDecorations = [];
        for (let i = 0; i < 20; i++) {
            let newChristmasToy = createTreeToy(random(treeX + 80, treeX + 190), random(treeY + 60, treeY + 300), treeToys[toyType]);
            treeDecorations.push(newChristmasToy);
        }
    }

    //simulation()
    //This function calls the methods that are responsible for making the simulation run
    simulation() {
        //Display tree 
        displayTree();
        //Display controls
        displayControls();
        //Display Timer
        this.clock.displayTimer();
        //This will check if the user clicked 1
        checkForStar();
        //This will add the star on top of the tree
        addStar();
        //This will check if the user clicked 3
        checkForGifts();
        //This will add gifts under the tree
        addGifts();
        //This will check that the user clicked 2 
        checkForToys();
        //This will add toys on the tree
        addToys();
        //This will check if the game time has elapsed
        checkForTime();
    }
    //displayTree()
    // This function displays the Christmas tree
    displayTree() {
        push();
        image(christmasTree.img, width / 2 - 140, height / 3, height / 2, width / 3);
        pop();
    }
    //displayControls()
    //This function displays the controls to decorate the Christmas tree
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
        textFont(bubblegumFont);
        textAlign(CENTER, CENTER);
        text(`Select the choice of toys you  \n  want to decorate the tree with !  \n  (Select 1 , 2 ,3 on keyboard)`, 200, 110,);
        fill(255, 0, 0);
        text(`You have 1 minute !`, 200, 160,);
        pop();
        //Draw the rectangle options for gardening
        push();
        let rectWidth = ChristmasTreeChoices.star.w; // Set the width for each rectangle
        let rectHeight = ChristmasTreeChoices.star.h; // Set the height for the rectangles
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
        textFont(bubblegumFont);
        text(`1. Star `, width / 4 - 25, rectY + 30);
        text(`2. Tree Toys `, width / 2 - 35, rectY + 30);
        text(`3. Gifts `, width / 4 * 3 - 25, rectY + 30);
        pop();
    }

    //addStar()
    //This function checks if the user has clicked on 1 
    addStar() {
        if (key === '1') {
            decoratedTree.star = true;
        }
    }
    /**
     * checkForStar()
     * 
     * If the user has selected star, display the star
     */
    checkForStar() {
        if (decoratedTree.star) {
            decorateStar(starRand);
        }
    }
    // addToys()
    // Checks if the user has clicked on 2
    addToys() {
        if (key === '2') {
            decoratedTree.toys = true;
        }
    }
    // checkForToys()
    // If the user has selected toys,display the toys
    checkForToys() {
        if (decoratedTree.toys) {
            decorateToys();
        }
    }
    //addGifts()
    //Checks if the user has clicked 3
    addGifts() {
        if (key === '3') {
            decoratedTree.gifts = true;
        }
    }
    //checkForGifts()
    // Checks if the user has selcted gifts, display the gifts
    checkForGifts() {
        if (decoratedTree.gifts) {
            decorateGifts(giftRand);
        }
    }
    // decorateStar()
    // This function decorates the Christmas tree with a star decoration on top
    decorateStar(n) {
        image(treeStars[n], width / 2 - 70, height / 3 - 50, 150, 150);
    }
    //decorateToys()
    // This function decorates the Christmas tree with tree toys
    decorateToys() {
        for (let i = 0; i < treeDecorations.length - 1; i++) {
            image(treeDecorations[i].img, treeDecorations[i].x, treeDecorations[i].y, treeDecorations[i].width, treeDecorations[i].height);
        }
    }
    // decorateGifts()
    // This function decorates the Christmas tree with a present on the chair
    decorateGifts(n) {
        image(treeGifts[n], width / 2 + 260, height - 240, 100, 120);
    }
    // title()
    // This function sets the text for the title state
    title() {
        push();
        textSize(50);
        strokeWeight(4);
        stroke(250);
        fill(200, 100, 100);
        textFont(bubblegumFont);
        textAlign(CENTER, CENTER);
        text("Decorate the Christmas Tree before the timer runs out ! ", width / 2, height / 2);
        pop();
    }
    // title()
    //  This function sets the text for the game over state
    gameOver() {
        push();
        textSize(50);
        strokeWeight(4);
        stroke(250);
        fill(200, 100, 100);
        textFont(bubblegumFont);
        textAlign(CENTER, CENTER);
        text(" Game Over !\n You didn't decorate the Christams tree before the timer ran out ! ", width / 2, height / 2);
        pop();
    }
    // title()
    // This function sets the text for the game won state
    gameWon() {
        push();
        textSize(50);
        strokeWeight(4);
        stroke(250);
        fill(200, 100, 100);
        textFont(bubblegumFont);
        textAlign(CENTER, CENTER);
        text(" You decorated the Christames tree Before the timer ran out !", width / 2, height / 2);
        pop();
    }
    // checkForTime()
    //  This function checks if the player time has expired(after 1 minute), and if the player was able to decorate the christmas tree before 1 minutes
    checkForTime() {
        if (millis() - time >= 60000 && !(decoratedTree.star && decoratedTree.toys && decoratedTree.gifts)) {
            state = "gameOver";
        } else if (millis() - time >= 60000 && (decoratedTree.star && decoratedTree.toys && decoratedTree.gifts)) {
            state = "gameWon";
        }
    }
    // timeOver()
    // This function checks if it has been 1 minute since the player started decorating the tree.
    // Returns a boolean value.
    timeOver() {
        if (minute() !== minuteVar) {
            return true;
        } else {
            return false;
        }
    }
    // mousePressed()
    // This function verifies if the user has pressed the mouse to set the simulation state
    mousePressed() {
        if (state == `title`) {
            state = `simulation`;
        }
    }
    // keyPressed()
    //  This function makes sure that everytime a new key is pressed a new random value is set
    keyPressed() {
        if (key === '1') {
            starRand = floor(random(2));
            decoratedTree.star = false;
        }
        else if (key === '2') {
            toyRand = floor(random(3));
            decoratedTree.toys = false;
        }
        else if (key === '3') {
            giftRand = floor(random(3));
            decoratedTree.gifts = false;

        }
    }

}

