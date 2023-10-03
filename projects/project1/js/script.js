/**
 * Project 1
 * 
 * Maria Barba
 * 
 * All images are from Adobe Stock : 
 * 
 * Garden Background : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+garden&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+garden&get_facets=0&asset_id=423188914
 * Garden Vegtables : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+garden&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+garden&get_facets=0&asset_id=437675086
 * Growing Plant : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+garden&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+garden&get_facets=0&asset_id=437681195
 * Cartoon Dog : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+dog&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+dog&get_facets=0&asset_id=238060500
 * Fertilizer Icon : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+garden+fertilizer&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+garden+fertilizer&get_facets=0&asset_id=297270529
 * Red Tulip : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+tulip+png&order=relevance&safe_search=1&limit=100&search_page=2&search_type=pagination&acp=&aco=cartoon+tulip+png&get_facets=0&asset_id=536612704
 * 
 * Sounds that are from mixKit :
 * 
 * Dog sniffing sound : https://mixkit.co/free-sound-effects/dog/
 * 
 * Sounds that are from freesound :
 * 
 * Watering plants sound : https://freesound.org/people/Angellu16/sounds/533838/
 * Gardening shovel : https://freesound.org/people/Roulaine/sounds/267974/
 * Digging in a bag of soil : https://freesound.org/people/dhallcomposer/sounds/696531/
 * Singing birds : https://freesound.org/people/MATRIXXX_/sounds/519120/
 * 
 * Fonts from daFont: 
 * 
 * https://www.dafont.com/b-basic-gardening.font
 * 
 */

"use strict";

//Create a variable which will keep track of the state for which the user is currently is in
let state = `title`;
//Create a variable which will store the main background image
let mainBackgroundImg;
//Create a fonts object to keep track of used fonts
let fonts = {
    mainMenuFont: null
}

/**
 * preload()
 * 
 *This function preloads the images , and the font used 
*/
function preload() {
    mainBackgroundImg = loadImage(`./assets/images/mainGarden.jpeg`);
    fonts.mainMenuFont = loadFont(`./assets/fonts/bBasicGardening.ttf`);
}
/**
 * setup()
 * 
 * Setup canvas and tcalls the setupObjects function
*/
function setup() {
    createCanvas(1100, 600);
}

/**
 * draw()
 * 
*/
function draw() {
    background(mainBackgroundImg);
    if (state == `title`) {
        displayMainMenu();
    }
}
/**
 * displayMainMenu()
 * 
 * displayMainMenu function displays the main menu text
 * 
*/
function displayMainMenu() {
    //Create the text 
    push();
    //Sets text size, strokeWeight, stroke
    textSize(120);
    strokeWeight(4);
    stroke(250);
    //Create a color gradient
    fill(0, 102, 255);
    //Set shadow behind the text
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'black';
    //Set text font using the saved font
    textFont(fonts.mainMenuFont);
    textAlign(CENTER, CENTER);
    text(`    Gardening \n               Simulator`, width / 2 - 80, 150);
    pop();
    //Create the menu boxes
    push();
    noStroke();
    fill(0, 102, 255);
    rect(330, 350, width / 2 - 80, 50);
    pop();
}