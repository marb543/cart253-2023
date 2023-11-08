/**
 * Project 2 : Prototype
 * Maria Barba
 * 
 * This is a prototype of a part of my Christmas-themed game for my second project. In this prototype
 * the player can decorate a Christmas tree point-click style. The goal of this mini-game is to decorate 
 * the Christams tree as quickly as possible before the left-hand timer runs out. If the timer runs out
 * before the player decorates the game, the player wins, otherwise the player loses.
 * 
 * Images from Adobe Stock :
 * ------------------------
 * Background Image : https://stock.adobe.com/ca_fr/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=Christmas+decorated+room+cartoon&search_page=1&search_type=usertyped&acp=&aco=Christmas+decorated+room+cartoon&get_facets=0&asset_id=473679837
 * Christmas Tree no Toys : https://stock.adobe.com/ca_fr/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=Christmas+tree+cartoon&limit=100&search_page=1&search_type=usertyped&acp=&aco=Christmas+tree+cartoon&get_facets=0&asset_id=641717512
 * Christmas Tree Toys/Presents : https://stock.adobe.com/ca_fr/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=Christmas+tree+decorations+cartoon&limit=100&search_page=1&search_type=usertyped&acp=&aco=Christmas+tree+decorations+cartoon&get_facets=0&asset_id=379224188
 * 
 * I modified the code example from this page where I created a clock in JavaScript: https://p5js.org/examples/input-clock.html
 */

"use strict";
//Create a variable to store the font
let bubblegumFont;
//Create a variable to store the background image
let room;
//Create a variable which will keep track of the state for which the user is currently is in
let state = `title`;
//Create an array which will store the array of objects, and will be filled with images at the preload function
let treeDecorations = [];
//Create an array to store options for tree stars
let treeStars = [];
//Create an array to store options for tree toys
let treeToys = [];
//Create an array to store options for types of gifts
let treeGifts = [];
//Create variables to store the values of the clock
let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let n;
//Keeps track if the Christmas tree was decorated or not 
let decoratedTree = {
    star: false,
    toys: false,
    gifts: false
};
//Create a variable to keep track of the current minute
let time;
//Create a variable which stores a Christmas Tree variable
let christmasTree = {
    x: 340,
    y: 350,
    width: 180,
    height: 150,
    img: null
}
//Variable that keeps track of the position of the controls to decorate the Cristmas tree
let ChristmasTreeChoices = {
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
/**
 * preload()
 * 
 *This function preloads the images , and the font used 
*/
function preload() {
    room = loadImage(`./assets/images/background.jpeg`);
    christmasTree.img = loadImage(`./assets/images/ChristmasTree.png`);
    bubblegumFont = loadFont(`./assets/fonts/BubblegumSans-Regular.ttf`);
    //Preload images for tree stars
    treeStars[0] = loadImage(`./assets/images/treeStarBlue.png`);
    treeStars[1] = loadImage(`./assets/images/treeStarRed.png`);
    //Preload images for gift types
    treeGifts[0] = loadImage(`./assets/images/giftSet1.png`);
    treeGifts[1] = loadImage(`./assets/images/giftSet2.png`);
    treeGifts[2] = loadImage(`./assets/images/giftSet3.png`);
    //Preload images for tree types
    treeToys[0] = loadImage(`./assets/images/christmasToyFlower.png`);
    treeToys[1] = loadImage(`./assets/images/christmasToyRed.png`);
    treeToys[2] = loadImage(`./assets/images/christmasToyYellow.png`);
}
/**
 * setup()
 * 
 * Setup canvas and tcalls the setupObjects function
*/
function setup() {
    //Create Canvas
    createCanvas(1200, 600);
    //Call the setupClock function
    setupClock();
    //Create an array of Christmas tree toys
    fillChristmasTreeToys(2);
    //Setup time
    time = millis();
}
/**
 * createTreeToy()
 * 
 * This function allows the user to create a Christmas Tree toy that will decorate the Christams Tree
 */
function createTreeToy(x, y, image) {
    let toy = {
        x: x,
        y: y,
        width: 20,
        height: 20,
        img: image,
    };
    return toy;
}
/**
 * fillChristmasTreeToys()
 * This function fills the treeDecorations array with new toys of one type
 */
function fillChristmasTreeToys(toyType) {
    let treeX = width / 2 - 140; // Left-most X coordinate of the tree
    let treeY = height / 3;      // Top Y coordinate of the tree
    treeDecorations = [];
    for (let i = 0; i < 20; i++) {
        let newChristmasToy = createTreeToy(random(treeX + 80, treeX + 190), random(treeY + 60, treeY + 300), treeToys[toyType]);
        treeDecorations.push(newChristmasToy);
    }
}
/**
 * draw()
 * 
 * The draw function sets the background image , and checks if a certain state has been reached. If a 
 * certain state has been reached, the according function is called.
*/
function draw() {
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

/**
 * simulation()
 * 
 * This function calls the methods that are responsible for making the simulation run
 */
function simulation() {
    //Display tree 
    displayTree();
    //Display controls
    displayControls();
    //Display Timer
    displayTimer();
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
/**
 *  displayTree()
 * 
 * This function displays the Christmas tree
 */
function displayTree() {
    push();
    image(christmasTree.img, width / 2 - 140, height / 3, height / 2, width / 3);
    pop();
}
/**
 *  displayControls()
 * 
 * This function displays the controls to decorate the Christmas tree
 */
function displayControls() {
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
/**
 *  displayTimer()
 * 
 * This function displays the timer that runs during the simulation
 */
function displayTimer() {
    push();
    // Draw the clock background
    noStroke();
    fill(255);
    ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
    fill(113, 53, 113);
    ellipse(cx, cy, clockDiameter, clockDiameter);

    // Angles for sin() and cos() start at 3 o'clock;
    // subtract HALF_PI to make them start at the top
    let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

    // Draw the hands of the clock
    stroke(255);
    strokeWeight(1);
    line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    strokeWeight(2);
    line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
    strokeWeight(4);
    line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
    // Draw the minute ticks
    strokeWeight(2);
    beginShape(POINTS);
    for (let a = 0; a < 360; a += 6) {
        let angle = radians(a);
        let x = cx + cos(angle) * secondsRadius;
        let y = cy + sin(angle) * secondsRadius;
        vertex(x, y);
    }
    endShape();
    pop();
}
/**
 * setupClock()
 * 
 * This method sets up all the variables necessary to making a clock work
 */
function setupClock() {
    let radius = 110;
    secondsRadius = radius * 0.71;
    minutesRadius = radius * 0.6;
    hoursRadius = radius * 0.5;
    clockDiameter = radius * 1.7;
    cx = 200;
    cy = 300;
}
/**
 * addStar()
 * 
 * This function checks if the user has clicked on 1 
 */
function addStar() {
    if (key === '1') {
        decoratedTree.star = true;
    }
}
/**
 * checkForStar()
 * 
 * If the user has selected star, display the star
 */
function checkForStar() {
    if (decoratedTree.star) {
        if (n === undefined) {
            n = floor(random(2));
        }
        decorateStar(0);
    }
}
/**
 * addToys()
 * 
 * Checks if the user has clicked on 2
 */
function addToys() {
    if (key === '2') {
        decoratedTree.toys = true;
    }
}
/**
 * checkForToys()
 * 
 * If the user has selected toys,display the toys
 */
function checkForToys() {
    if (decoratedTree.toys) {
        if (n === undefined) {
            n = floor(random(3));
        }
        decorateToys();
    }
}
/**
 * addGifts()
 * 
 * Checks if the user has clicked 3
 */
function addGifts() {
    if (key === '3') {
        decoratedTree.gifts = true;
    }
}
/**
 * checkForGifts()
 * 
 * Checks if the user has selcted gifts,display the gifts
 */
function checkForGifts() {
    if (decoratedTree.gifts) {
        if (n === undefined) {
            n = floor(0);
        }
        decorateGifts(0);
    }
}
/**
 * decorateStar()
 * 
 * This function decorates the Christmas tree with a star decoration on top
 */
function decorateStar(n) {
    image(treeStars[n], width / 2 - 70, height / 3 - 50, 150, 150);
}
/**
 * decorateToys()
 * 
 * This function decorates the Christmas tree with tree toys
 */
function decorateToys() {
    for (let i = 0; i < treeDecorations.length - 1; i++) {
        image(treeDecorations[i].img, treeDecorations[i].x, treeDecorations[i].y, treeDecorations[i].width, treeDecorations[i].height);
    }
}
/**
 * decorateGifts()
 * 
 * This function decorates the Christmas tree with a present on the chair
 */
function decorateGifts(n) {
    image(treeGifts[n], width / 2 + 260, height - 240, 100, 120);
}
/**
 * title()
 * 
 * This function sets the text for the title state
 */
function title() {
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
/**
 * title()
 * 
 * This function sets the text for the game over state
 */
function gameOver() {
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
/**
 * title()
 * 
 * This function sets the text for the game won state
 */
function gameWon() {
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
/**
 * checkForTime()
 * 
 * This function checks if the player time has expired (after 1 minute), and if the player was able to decorate the christmas tree before 1 minute
 */
function checkForTime() {
    if (millis() - time >= 60000 && !(decoratedTree.star && decoratedTree.toys && decoratedTree.gifts)) {
        state = "gameOver";
    } else if (millis() - time >= 60000 && (decoratedTree.star && decoratedTree.toys && decoratedTree.gifts)) {
        state = "gameWon";
    }
}
/**
 * timeOver()
 * 
 * This function checks if it has been 1 minute since the player started decorating the tree.
 * Returns a boolean value.
 */
function timeOver() {
    if (minute() !== minuteVar) {
        return true;
    } else {
        return false;
    }
}
/**
 * mousePressed()
 * 
 * This function verifies if the user has pressed the mouse to set the simulation state
 */
function mousePressed() {
    if (state == `title`) {
        state = `simulation`;
    }
}
