/**
 * Project 2 : Gnomes on the Loose
 * Maria Barba
 * 
 * This is a Christmas-themed game for my second project. The player has the task of helping Santa prepare everything for Christmas
 * since Santa's gnomes rebelled against him. There are three mini-games included within my game. The first game are the players having 
 * to decorate a Christmas tree before the timer runs out, the second mini-game is the player having to catch Christmas presents in the 
 * sleigh ,and avoid catching Christmas decorations. For the second mini-game the player must have a positive number of points in order to 
 * win the game. For the third mini-game the player has to prepare Santa's reindeers for Christmas. If the player loses one of the mini-games, he
 * has lost the game. If the player was able to successfully complete all three mini-games , he wins the game. 
 * 
 * Images from Adobe Stock :
 * ------------------------
 * Background Image : https://stock.adobe.com/ca_fr/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=Christmas+decorated+room+cartoon&search_page=1&search_type=usertyped&acp=&aco=Christmas+decorated+room+cartoon&get_facets=0&asset_id=473679837
 * Christmas Tree no Toys : https://stock.adobe.com/ca_fr/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=Christmas+tree+cartoon&limit=100&search_page=1&search_type=usertyped&acp=&aco=Christmas+tree+cartoon&get_facets=0&asset_id=641717512
 * Christmas Tree Toys/Presents : https://stock.adobe.com/ca_fr/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=Christmas+tree+decorations+cartoon&limit=100&search_page=1&search_type=usertyped&acp=&aco=Christmas+tree+decorations+cartoon&get_facets=0&asset_id=379224188
 * Santa's Workshop : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+christmas+santa%27s+workshop&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+christmas+santa%27s+workshop&get_facets=0&asset_id=466656192
 * North Pole sign : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+christmas+tree+decorations&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+christmas+tree+decorations&get_facets=0&asset_id=460149268
 * Gnome : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=santa%27s+gnomes&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=santa%27s+gnomes&get_facets=0&asset_id=471663338
 * Winter Background :
 * Christmas Presents (collectPresents) : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+christmas+present&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=cartoon+christmas+present&get_facets=0&asset_id=386507410
 * Christmas Toys (collectPresents) :
 * I modified the code example from this page where I created a clock in JavaScript: https://p5js.org/examples/input-clock.html
 * 
 * The font used for this exercise is from Google fonts : https://fonts.google.com/specimen/Bubblegum+Sans?query=bubb
 */

"use strict";

// A variable to store the currently active state object (starts empty)
let currentState;
//Create an images array
let imagesArray = [];
//Create a fonts array
let fontsArray = [];
//Create an array of sounds
let soundsArray = [];
//Create an array which will store the array of objects, and will be filled with images at the preload function
let treeDecorations = [];
//Create an array to store options for tree stars
let treeStars = [];
//Create an array to store options for tree toys
let treeToys = [];
//Create an array to store options for types of gifts
let treeGifts = [];

//preload()
//This function preloads the images, sounds , and fonts of the game
function preload() {
    fontsArray.push(loadFont(`./assets/fonts/BubblegumSans-Regular.ttf`))
    imagesArray.push(loadImage(`./assets/images/title.png`));
    imagesArray.push(loadImage(`./assets/images/northPole.png`));
    imagesArray.push(loadImage(`./assets/images/background.jpeg`));
    imagesArray.push(loadImage(`./assets/images/ChristmasTree.png`));
    //Preload images for tree stars
    treeStars[0] = loadImage(`./assets/images/treeStarBlue.png`);
    treeStars[1] = loadImage(`./assets/images/treeStarRed.png`);
    imagesArray.push(treeStars);
    //Preload images for gift types
    treeGifts[0] = loadImage(`./assets/images/giftSet1.png`);
    treeGifts[1] = loadImage(`./assets/images/giftSet2.png`);
    treeGifts[2] = loadImage(`./assets/images/giftSet3.png`);
    imagesArray.push(treeToys);
    //Preload images for tree types
    treeToys[0] = loadImage(`./assets/images/christmasToyFlower.png`);
    treeToys[1] = loadImage(`./assets/images/christmasToyRed.png`);
    treeToys[2] = loadImage(`./assets/images/christmasToyYellow.png`);
    //Add all images array to main image array
    imagesArray.push(treeGifts);
    imagesArray.push(loadImage(`./assets/images/santasWorkshop.jpeg`)); //8
    imagesArray.push(loadImage(`./assets/images/present.png`)); //9
    imagesArray.push(loadImage(`./assets/images/christmasToy.png`)); //10
    imagesArray.push(loadImage(`./assets/images/sleigh.png`));//
    //Add image for when the player wins the game
    imagesArray.push(loadImage(`./assets/images/GameWon.png`));
    //Add image for when the player loses the game
    imagesArray.push(loadImage(`./assets/images/GameLost.png`));
}
// setup()
// Create the canvas, start our program in the title state, set default text style
function setup() {
    createCanvas(900, 600);
    //Set the current state to the title state
    currentState = new Title(imagesArray, fontsArray, soundsArray);
    // Set the text size to be 32
    textSize(32);
    //Set the text alignment
    textAlign(CENTER, CENTER);
}
// draw()
// Simply call the draw method of the current state
function draw() {
    currentState.draw();
}
// keyPressed()
// Apply the effect of the keyPressed function for the keyPressed game
function keyPressed() {
    currentState.keyPressed();
}