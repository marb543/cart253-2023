/**
 * Project 2 : Prototype
 * Maria Barba
 * 
 * This is a prototype of a part of my Christmas-themed game for my second project. In this prototype
 * the player can decorate a Christmas tree point-click style. The goal of this mini-game is to decorate 
 * the Christams tree as quickly as possible.
 * 
 * Images from Adobe Stock :
 * ------------------------
 * Background Image : https://stock.adobe.com/ca_fr/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=Christmas+decorated+room+cartoon&search_page=1&search_type=usertyped&acp=&aco=Christmas+decorated+room+cartoon&get_facets=0&asset_id=473679837
 * Christmas Tree no Toys : https://stock.adobe.com/ca_fr/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=Christmas+tree+cartoon&limit=100&search_page=1&search_type=usertyped&acp=&aco=Christmas+tree+cartoon&get_facets=0&asset_id=641717512
 * Christmas Tree Toys/Presents : https://stock.adobe.com/ca_fr/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=Christmas+tree+decorations+cartoon&limit=100&search_page=1&search_type=usertyped&acp=&aco=Christmas+tree+decorations+cartoon&get_facets=0&asset_id=379224188
 * 
 */

"use strict";
//Create a variable to store the font
let bubblegumFont;
//Create a variable to store the background image
let room;
//Create a variable to keep track of the mouse coordinates
let mouseCoord;
//Create a variable which will keep track of the state for which the user is currently is in
let state = `title`;
//Create an array which will store the array of objects, and will be filled with images at the preload function
let treeDecorations = [];
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
    christmasTree.image = loadImage(`./assets/images/ChristmasTree.png`);

    bubblegumFont = loadFont(`./assets/fonts/BubblegumSans-Regular.ttf`);
}
/**
 * setup()
 * 
 * Setup canvas and tcalls the setupObjects function
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
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
 * isOffscreen()
 * 
 * This function stores the logic behind checking when an object is outside the bounds of the screen
 */
function isOffscreen(obj) {
    if (obj.x < 0 || obj.x > width || obj.y < 0 || obj.y > height) {
        return true;
    }
    else {
        return false;
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
}
/**
 *  displayTree()
 * 
 * This function displays the Christmas tree
 */
function displayTree() {
    //image(christmasTree.img, christmasTree.x, christmasTree.y, 100, 200);
}
/**
 *  displayControls()
 * 
 * This function displays the controls to decorate the Christmas tree
 */
function displayControls() {
    push();

    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'black';
    textSize(25);
    strokeWeight(4);
    noStroke();
    //Create rectangle behind the text
    fill(0, 153, 255);
    // Draw a rectangle 
    rect(50, 50, width - 80, 100, 10);
    //Set color
    stroke(0);
    fill(255, 255, 255);
    //Set text font using the saved font
    textFont(bubblegumFont);
    textAlign(CENTER, CENTER);
    text(`Select the choice of toys you want to decorate the tree with !  \n  (Hold down key 1 , 2 or 3 on your keyboard )`, width / 2, 100,);
    pop();
    //Draw the rectangle options for gardening
    push();
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'black';
    fill(204, 102, 255);
    rect(ChristmasTreeChoices.star.x, ChristmasTreeChoices.star.y, ChristmasTreeChoices.star.w, ChristmasTreeChoices.star.h, 30);
    fill(204, 0, 0);
    rect(ChristmasTreeChoices.toys.x, ChristmasTreeChoices.toys.y, ChristmasTreeChoices.toys.w, ChristmasTreeChoices.toys.h, 30);
    fill(51, 204, 204);
    rect(ChristmasTreeChoices.gift.x, ChristmasTreeChoices.gift.y, ChristmasTreeChoices.gift.w, ChristmasTreeChoices.gift.h, 30);
    pop();
    //Draw the text options for gardening
    push();
    textSize(20);
    strokeWeight(4);
    stroke(0);
    fill(255);
    textFont(bubblegumFont);
    text(`1. Star `, width / 2 - 250, 550);
    text(`2. Tree Toys `, width / 2 - 60, 550);
    text(`3. Gifts `, width / 2 + 150, 550);
    pop();
}
/**
 *  displayTimer()
 * 
 * This function displays the timer that runs during the simulation
 */
function displayTimer() {

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
 * mousePressed()
 * 
 * This function verifies if the user has pressed the mouse to set the simulation state
 */
function mousePressed() {
    if (state == `title`) {
        state = `simulation`;
    }
}
