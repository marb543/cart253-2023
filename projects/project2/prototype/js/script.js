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
/**
 * preload()
 * 
 *This function preloads the images , and the font used 
*/
function preload() {
    room = loadImage(`./assets/images/background.jpeg`);
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
    moveDog();
    moveBall();
    checkOffscreen();
    checkOverlap();
    display();
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
