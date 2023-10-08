/**
 * Project 1 : Gardening simulator
 * 
 * Maria Barba
 * 
 * In this project I create a gardening simulator. When the user first starts the gardening simulator, a menu is displayed with the options to "Play" or to "Exit" the game. When the
 * user selects the "Play" option , he then has a choice to either listen to the radio , grow a plant , or to play with the dog sleeping in the garden. 
 * 
 * All images are from Adobe Stock : 
 * --------------------------------
 * Garden Background : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+garden&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+garden&get_facets=0&asset_id=423188914
 * Growing Plant : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+garden&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+garden&get_facets=0&asset_id=437681195
 * Cartoon Dog : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+dog&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+dog&get_facets=0&asset_id=238060500
 * Watering can : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=gardening+cartoon+png&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=gardening+cartoon+png&get_facets=0&asset_id=619860562
 * Flower pot : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&limit=100&search_page=1&search_type=see-more&acp=&aco=+cartoon+garden&serie_id=509395505&get_facets=0&asset_id=564351833
 * Main page radio : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+png+radio+drawing&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+png+radio+drawing&get_facets=0&asset_id=569479088
 * Soil : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bis_editorial%5D=0&order=relevance&safe_search=1&serie_id=521975769&search_page=1&search_type=see-more&get_facets=0&asset_id=430197019
 * Shovel : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+shovel&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+shovel&get_facets=0&asset_id=409206325
 * Seed bag : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+seed+bag&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+seed+bag&get_facets=0&asset_id=491955135
 * Water Can : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+water+can&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+water+can&get_facets=0&asset_id=131185020
 * Pile of soil :https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=cartoon+soil&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=cartoon+soil&get_facets=0&asset_id=566163287
 * Baby plant : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Bis_editorial%5D=0&k=gardening+cartoon+png+soil+seed&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=gardening+cartoon+png+soil+seed&get_facets=0&asset_id=613303451
 * Red tomato : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Bis_editorial%5D=0&k=gardening+cartoon+png+soil+seed&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=gardening+cartoon+png+soil+seed&get_facets=0&asset_id=614582304
 * Dog treat : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=png+cartoon+dog+treat&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=png+cartoon+dog+treat&get_facets=0&asset_id=562544008
 * Ball : https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=png+cartoon+dog+ball&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=png+cartoon+dog+ball&get_facets=0&asset_id=647880119
 * 
 * Sounds that are from mixKit :
 * ----------------------------
 * Dog sniffing sound : https://mixkit.co/free-sound-effects/dog/
 * 
 * Sounds that are from freesound :
 * --------------------------------
 * Watering plants sound : https://freesound.org/people/Angellu16/sounds/533838/
 * Gardening shovel : https://freesound.org/people/Roulaine/sounds/267974/
 * Digging in a bag of soil : https://freesound.org/people/dhallcomposer/sounds/696531/
 * Singing birds : https://freesound.org/people/MATRIXXX_/sounds/519120/
 * 
 * Music from the Radio Page :
 * --------------------------
 * Pop Music : https://pixabay.com/music/beats-whip-110235/
 * Classical Music : https://pixabay.com/music/modern-classical-simple-piano-melody-9834/
 * Country Music : https://pixabay.com/music/modern-country-upbeat-country-blues-113997/
 * Random Music : https://pixabay.com/music/upbeat-energetic-indie-rock-jump-112179/
 * 
 * Fonts from daFont: 
 * -----------------
 * https://www.dafont.com/b-basic-gardening.font
 * https://www.dafont.com/kg-red-hands.font
 * 
 * Dog sounds :
 * https://pixabay.com/sound-effects/munchin-95618/
 * https://pixabay.com/sound-effects/dog-toy-5987/
 */

"use strict";

//Create a variable which will keep track of the state of the game
let state = `title`;
//Create a variable to keep track of plant state (used in the plant page)
let plantState = 0;
//Create a fonts object to keep track of used fonts
let fonts = {
    mainMenuFont: null,
    instructionsFont: null,
}
//Create an images object to keep track of the images used in the simulation 
let images = {
    mainBackgroundImg: null,
    wateringCan: null,
    mainPageDog: null,
    mainPage: null,
    mainPageRadio: null,
    pottedPlant: null,
    mainPageRadio: null,
    gardenSoil: null,
    dirt: null,
    shovel: null,
    waterCan: null,
    seed: null,
    babyPlant: null,
    grownPlant: null,
    redTomato: null,
    sittingDog: null,
    dogTreat: null,
    squeakToy: null,
}
//Create a sounds object to keep track of the sounds used in the simulation
let sounds = {
    birdsChirping: null,
    dogBark: null,
    dogSniffing: null,
    gardenShovel: null,
    plantsWatering: null,
    popMusic: null,
    classicMusic: null,
    countryMusic: null,
    randomMusic: null,
    dogCrunch: null
}
//Create an object to keep track of the dog displayed in the "play" state of the game
let dog = {
    x: 500,
    y: 450,
    width: 220,
    height: 150,
}
//Create an object to keep track of the dog when it's in the sitting position 
let sittingDog = {
    x: 500,
    y: 350,
    width: 220,
    height: 250,
    vx: 0,
    vy: 0,
}
//Create a flowerPot object to keep track of the pot object displayed in the "play" state of the game
let flowerPot = {
    x: 340,
    y: 350,
    width: 180,
    height: 150
}
//Create a radio object to keep track of the pot object displayed in the "play" state of the game
let radio = {
    x: 100,
    y: 260,
    width: 150,
    height: 100
}
//Create a mainMenuChoices object to keep track of the choice selected by the user from the main menu
let mainMenuChoices = {
    play: {
        x: 330,
        y: 350,
        w: 470,
        h: 50
    },
    tutorial: {
        x: 330,
        y: 420,
        w: 470,
        h: 50
    },
    exit: {
        x: 330,
        y: 490,
        w: 470,
        h: 50
    }
}
//Create a radioPageChoices object to keep track of the choice selected by the user from the radio menu
let radioPageChoices = {
    popMusic: {
        x: 80,
        y: 530,
        w: 150,
        h: 30
    },
    classicMusic: {
        x: 280,
        y: 530,
        w: 150,
        h: 30
    },
    countryMusic: {
        x: 480,
        y: 530,
        w: 150,
        h: 30
    },
    randomMusic: {
        x: 680,
        y: 530,
        w: 150,
        h: 30
    },
    goBack: {
        x: 880,
        y: 530,
        w: 150,
        h: 30
    }
}
//Create a gardeningChoices object that keeps track of the choices of the user in the gardening page
let gardeningChoices = {
    shovel: {
        x: 50,
        y: 270,
        w: 150,
        h: 40
    },
    seed: {
        x: 50,
        y: 320,
        w: 150,
        h: 40
    },
    water: {
        x: 50,
        y: 370,
        w: 150,
        h: 40
    }
}
//Create a playDogChoice object that keeps track of the choices of the user on the play with dog page
let playWithDogChoices = {
    treat: {
        x: 320,
        y: 520,
        w: 150,
        h: 40
    },
    catch: {
        x: 720,
        y: 520,
        w: 150,
        h: 40
    }
}
/**
 * preload()
 * 
 *This function preloads the images ,fonts , and sounds used by the user
*/
function preload() {
    //Load images used for the simulation
    images.mainBackgroundImg = loadImage(`./assets/images/mainGarden.jpeg`);
    images.wateringCan = loadImage(`./assets/images/wateringCan.png`);
    images.mainPageDog = loadImage(`./assets/images/sleepingDog.png`);
    images.pottedPlant = loadImage(`./assets/images/pottedSoil.png`);
    images.mainPageRadio = loadImage(`./assets/images/radio.png`);
    images.gardenSoil = loadImage(`./assets/images/gardenSoil.jpeg`);
    images.shovel = loadImage(`./assets/images/shovel.png`);
    images.seed = loadImage(`./assets/images/seeds.png`);
    images.waterCan = loadImage(`./assets/images/greenWateringCan.png`);
    images.dirt = loadImage(`./assets/images/soil.png`);
    images.babyPlant = loadImage(`./assets/images/babyPlant.png`);
    images.redTomato = loadImage(`./assets/images/redTomato.png`);
    images.sittingDog = loadImage(`./assets/images/sittingDog.png`);
    images.dogTreat = loadImage(`./assets/images/treat.png`);
    images.dogBall = loadImage(`./assets/images/ball.png`);
    //Load fonts used for the simulation
    fonts.mainMenuFont = loadFont(`./assets/fonts/bBasicGardening.ttf`);
    fonts.instructionsFont = loadFont(`./assets/fonts/KGRedHands.ttf`);
    //Load sounds used for the simulation
    sounds.birdsChirping = loadSound(`./assets/sounds/birds.wav`);
    sounds.dogBark = loadSound(`./assets/sounds/bark.wav`);
    sounds.dogSniffing = loadSound(`./assets/sounds/dog-sniffing-the-ground.wav`);
    sounds.gardenShovel = loadSound(`./assets/sounds/garden-shovel.wav`);
    sounds.wateringCan = loadSound(`./assets/sounds/watering-plants.wav`);
    sounds.popMusic = loadSound(`./assets/sounds/pop.mp3`);
    sounds.classicMusic = loadSound(`./assets/sounds/classic.mp3`);
    sounds.countryMusic = loadSound(`./assets/sounds/country.mp3`);
    sounds.randomMusic = loadSound(`./assets/sounds/random.mp3`);
    sounds.dogCrunch = loadSound(`./assets/sounds/munchin.mp3`);
    sounds.squeakToy = loadSound(`./assets/sounds/dogToy.mp3`);
}
/**
 * setup()
 * 
 * The setup function sets up the canvas 
*/
function setup() {
    createCanvas(1100, 600);
}
/**
 * draw()
 * 
 * The draw function keeps track of the current state of the simulation,and calls the appropriate functions
*/
function draw() {
    background(images.mainBackgroundImg);
    if (state == `title`) {
        displayMainMenu();
        if (mouseIsPressed) {
            verifyMenuChoice();
        }
    }
    else if (state == `play`) {
        displayMainGame();
        playBirdsChirping();
        displayMainGameText();
        if (mouseIsPressed) {
            sounds.birdsChirping.stop();
            verifyIfDogSelected();
            verifyIfFlowerPotSelected();
            verifyIfRadioSelected();
        }
    }
    else if (state == `playWithDog`) {
        displayPlayDog();
    }
    else if (state == `plantFlowers`) {
        displayPlantFlowers();
    }
    else if (state == `listenRadio`) {
        listenRadio();
    }
    else if (state == `tutorial`) {
    }
    else if (state == `exit`) {
        displayExitText();
    }
}
/**
 * displayMainMenu()
 * 
 * displayMainMenu function displays the main menu text, and main menu box choices
 * 
*/
function displayMainMenu() {
    displayMenuText();
    displayMenuBoxes();
}
/**
 * displayMenuText()
 * 
 * This function displays the text on the main menu
 */
function displayMenuText() {
    //Blur background image
    filter(BLUR, 2);
    push();
    //Set shadow behind the text
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'black';
    //Display watring can image
    image(images.wateringCan, 230, 170, 220, 150);
    //Sets text size, strokeWeight, stroke
    textSize(120);
    strokeWeight(4);
    stroke(34, 78, 5);
    //Set color
    fill(130, 210, 76);
    //Set text font using the saved font
    textFont(fonts.mainMenuFont);
    textAlign(CENTER, CENTER);
    text(`    Gardening \n               Simulator`, width / 2 - 80, 150);
    pop();
}
/**
 * displayMenuBoxes()
 * 
 * This function displays the boxes that the user can select on main menu
 */
function displayMenuBoxes() {
    //Create the menu boxes
    push();
    stroke(34, 78, 5);
    fill(194, 242, 163);
    rect(mainMenuChoices.play.x, mainMenuChoices.play.y, mainMenuChoices.play.w, mainMenuChoices.play.h);
    rect(mainMenuChoices.tutorial.x, mainMenuChoices.tutorial.y, mainMenuChoices.tutorial.w, mainMenuChoices.tutorial.h);
    rect(mainMenuChoices.exit.x, mainMenuChoices.exit.y, mainMenuChoices.exit.w, mainMenuChoices.exit.h);
    pop();
    push();
    textSize(30);
    strokeWeight(4);
    stroke(0);
    fill(255);
    //Set text font using the saved font
    textFont(fonts.mainMenuFont);
    textAlign(CENTER, CENTER);
    text(`Play`, width / 2, 370);
    text(`Tutorial`, width / 2, 440);
    text(`Exit`, width / 2, 510);
    pop();
}
/**
 * checkPlayChoice()
 * 
 * This function checks if the user has selected the "Play" main menu option
 */
function checkPlayChoice() {
    if (mouseX >= mainMenuChoices.play.x && mouseX <= mainMenuChoices.play.x + mainMenuChoices.play.w && mouseY >= mainMenuChoices.play.y && mouseY <= mainMenuChoices.play.y + mainMenuChoices.play.h) {
        state = `play`;
    }
}
/**
 * checkTutorialChoice()
 * 
 * This function checks if the user has selected the "Tutorial main menu option
 */
function checkTutorialChoice() {
    if (mouseX >= mainMenuChoices.tutorial.x && mouseX <= mainMenuChoices.tutorial.x + mainMenuChoices.tutorial.w && mouseY >= mainMenuChoices.tutorial.y && mouseY <= mainMenuChoices.tutorial.y + mainMenuChoices.tutorial.h) {
        state = `tutorial`;
    }
}
/**
 * checkExitChoice()
 * 
 * This function checks if the user has selected the "Exit" main menu option
 */
function checkExitChoice() {
    if (mouseX >= mainMenuChoices.exit.x && mouseX <= mainMenuChoices.exit.x + mainMenuChoices.exit.w && mouseY >= mainMenuChoices.exit.y && mouseY <= mainMenuChoices.exit.y + mainMenuChoices.exit.h) {
        state = `exit`;
    }
}
/**
 * mouseClicked()
 * 
 * This function checks what choices were chosen by the user from the main menu
 */
function verifyMenuChoice() {
    //Check which choice was selected by the user from the main menu and set that choice in the state
    checkPlayChoice();
    checkTutorialChoice();
    checkExitChoice();
}
/**
 * displayExitText()
 * 
 * This function displays the text that the user will see when the "Exit" option is chosen in the main menu
 */
function displayExitText() {
    //Blur background image
    filter(BLUR, 2);
    push();
    //Set shadow behind the text
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'black';
    textSize(80);
    strokeWeight(4);
    stroke(34, 78, 5);
    //Set color
    fill(130, 210, 76);
    //Set text font using the saved font
    textFont(fonts.mainMenuFont);
    textAlign(CENTER, CENTER);
    text(`Thank you for playing .  \n   Come back again !`, width / 2, height / 2);
    pop();
}

/**
 * displayMainGame()
 * 
 * This function displays elments which begins the gardening simulator
 */
function displayMainGame() {
    //Display dog image with shadow effect
    push();
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'red';
    image(images.mainPageDog, dog.x, dog.y, dog.width, dog.height);
    pop();
    //Display potted plant image with shadow effect
    push();
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'green';
    image(images.pottedPlant, flowerPot.x, flowerPot.y, flowerPot.width, flowerPot.height);
    pop();
    //Display Radio image with shadow effect
    push();
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'blue';
    image(images.mainPageRadio, radio.x, radio.y, radio.width, radio.height);
    pop();

}
/**
 * displayMainGameText()
 * 
 * This function displays the text in the main game which explains to the user where to click in order to play the game.
 * 
 */
function displayMainGameText() {
    push();
    textSize(17);
    strokeWeight(4);
    //Create rectangle behind the text
    fill(0, 153, 255);
    // Draw a rectangle 
    rect(50, 50, width - 80, 200, 30);
    //Set color
    stroke(34, 78, 5);
    fill(255, 255, 255);
    //Set text font using the saved font
    textFont(fonts.instructionsFont);
    textAlign(CENTER, CENTER);
    text(`Choose your activity ! You can play with the dog, plant flowers or listen to the radio ! `, width / 2, 100,);
    textAlign(RIGHT);
    text(` 1. To play with the dog, click on the sleeping dog in the garden. `, 795, 130);
    text(`2. To plant flowers, click on the blue flower pot near the gardening bed. `, 890, 160);
    text(`3. To play radio, click on the radio in the garden. `, 665, 190);
    pop();
}

/**
 * verifyIfDogSelected()
 * 
 * This function checks if the user has clicked on the dog in order to change to playWithDog scenario
 */
function verifyIfDogSelected() {
    if (mouseX >= dog.x && mouseX <= dog.x + dog.width && mouseY >= dog.y && mouseY <= dog.y + dog.height) {
        state = `playWithDog`;
    }
}
/**
 * verifyIfFlowerPotSelected()
 * 
 * This function checks if the user has clicked on the flower pot in order to change to the plantFlowers scenario
 */
function verifyIfFlowerPotSelected() {
    if (mouseX >= flowerPot.x && mouseX <= flowerPot.x + flowerPot.width && mouseY >= flowerPot.y && mouseY <= flowerPot.y + flowerPot.height) {
        state = `plantFlowers`;
    }
}
/**
 * verifyIfRadioSelected()
 * 
 * This function checks if the user has clicked on the the radio in order to chnage to the radio scenario
 */
function verifyIfRadioSelected() {
    if (mouseX >= radio.x && mouseX <= radio.x + radio.width && mouseY >= radio.y && mouseY <= radio.y + radio.height) {
        state = `listenRadio`;
    }
}
/**
 * displayPlayDog()
 * 
 * This function displays all the interactions with the dog
 */
function displayPlayDog() {
    displayDogPage();
    keepTrackOfDogChoices();
    isHappyDog();
    isPlayfulDog();

}
/**
 * keepTrackOfDogChoices()
 * 
 * This function keeps track of the choices make by the user in the play with dog scenario , and calls the 
 * appropriare function according to user choice
 */
function keepTrackOfDogChoices() {
    if (keyIsPressed) {
        stopAllSounds();
        switch (key) {
            case '1':
                showTreatImage();
                break;
            case '2':
                showBallImage();
                break;
        }
    }
}
/**
 * showTreatImage()
 * 
 * This function displays the dog treat image when the user chooses the "Give treat" option in the play with dog scenario
 */
function showTreatImage() {
    image(images.dogTreat, mouseX - 100 / 2, mouseY - 50 / 2, 100, 50);

}
/**
 * showBallImage()
 * 
 * This function displays the ball image when the user chooses the "Throw ball" option in the play with dog scenario
 */
function showBallImage() {
    image(images.dogBall, mouseX - 100 / 2, mouseY - 100 / 2, 100, 100);
}
/**
 * isHappyDog()
 * 
 * This function checks if the dog is happy because it has eaten it's treat or not .
 * If the mouse cursor aligns with Charlie then, the dog recieved the treat. 
 */
function isHappyDog() {
    //Calculate the distance between Charlie and the mouse cursor
    if (keyIsPressed && key == '1' && (mouseX >= sittingDog.x && mouseX <= sittingDog.x + sittingDog.width && mouseY >= sittingDog.y && mouseY <= sittingDog.y + sittingDog.height)) {
        playDogMunchin();
    }
}
/**
 * isPlayfulDog()
 * 
 * This function checks if the dog is playful because it has recieved the ball.
 * If the mouse cursor aligns with Charlie then the dog recieved the ball.
 */
function isPlayfulDog() {
    //Calculate distance between Charlie and the mouse cursor
    if (keyIsPressed && key == '2' && (mouseX >= sittingDog.x && mouseX <= sittingDog.x + sittingDog.width && mouseY >= sittingDog.y && mouseY <= sittingDog.y + sittingDog.height)) {
        playDogToy();
    }
}
/**
 * 
 * 
 */
function displayDogPage() {
    //Display sitting dog image
    image(images.sittingDog, sittingDog.x, sittingDog.y, sittingDog.width, sittingDog.height);
    //Display dog page and options
    push();
    textSize(17);
    strokeWeight(4);
    noStroke();
    //Create rectangle behind the text
    fill(0, 153, 255);
    // Draw a rectangle 
    rect(50, 50, width - 80, 110, 30);
    //Set color
    stroke(34, 78, 5);
    fill(255, 255, 255);
    //Set text font using the saved font
    textFont(fonts.instructionsFont);
    textAlign(CENTER, CENTER);
    text(`Play with Charlie ! You can give Charlie a bone , or throw a ball !  \n  (Hold down key 1 or 2 on your keyboard , and align your cursor with Charlie)`, width / 2, 100,);
    pop();
    //Draw the rectangle options for gardening
    push();
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'black';
    fill(204, 102, 255);
    rect(playWithDogChoices.treat.x, playWithDogChoices.treat.y, playWithDogChoices.treat.w, playWithDogChoices.treat.h, 30);
    fill(204, 0, 0);
    rect(playWithDogChoices.catch.x, playWithDogChoices.catch.y, playWithDogChoices.catch.w, playWithDogChoices.catch.h, 30);
    pop();
    //Draw the text options for gardening
    push();
    textSize(15);
    strokeWeight(4);
    stroke(0);
    fill(255);
    textFont(fonts.instructionsFont);
    text(`1. Give treat `, width / 2 - 200, 550);
    text(`2. Throw ball `, width / 2 + 200, 550);
    pop();
}
/**
 * displayPlantFlowers()
 * 
 * This function displays all the interactions to plant flowers in the garden
 */
function displayPlantFlowers() {
    //display background,text ,and menu for the plant flowers scenario
    displayPlantFlowersPage();
    //Verify what choice was made by the user in the garden scenario
    verifyGardenChoice();
    //Display the appropriate plant image according to chosen element of the menu by the user
    loadPlant();
}
/**
 * loadShovel()
 * 
 * This function loads the shovel image which follows the mouse in the plantFlowers state
 */
function loadShovel() {
    image(images.shovel, mouseX - 100 / 2, mouseY - 200 / 2, 130, 200);
    playGardenShovel();
    plantState = 1;
}
/**
 * loadSeeds()
 * 
 * This function loads the seeds bag image which follows the mouse in the plantFlowers state
 */
function loadSeeds() {
    image(images.seed, mouseX - 100 / 2, mouseY - 200 / 2, 130, 200);
    plantState = 2;
}
/**
 * loadWaterCan()
 * 
 * This function loads the water can which foolows the mouse in the plantFlowers state
 */
function loadWaterCan() {
    playGardenWatering();
    image(images.waterCan, mouseX - 100 / 2, mouseY - 200 / 2, 140, 200);
    plantState = 3;
}
/**
 * loadPlant()
 * 
 * This function loads the plant according to the current plant state
 */
function loadPlant() {
    //If user selects the "shovel" option from the gardening menu
    if (plantState == 1) {
        image(images.dirt, width / 2 - 100, 850 / 2, 200, 140);
        //If the user selects the "seed" option from the gardening menu
    } else if (plantState == 2) {
        image(images.babyPlant, width / 2 - 60, 370, 140, 200);
        //If the user selects the "waterCan" oprion from the gardening menu
    } else if (plantState == 3) {
        image(images.redTomato, 480, 360, 140, 200);
    }
}
/**
 * displayPlantFlowersPage()
 * 
 * This function displays the background, text , and menu to the user who wishes to plant flowers
 */
function displayPlantFlowersPage() {
    image(images.gardenSoil, 0, 0, width, height);
    push();
    textSize(17);
    strokeWeight(4);
    noStroke();
    //Create rectangle behind the text
    fill(0, 153, 255);
    // Draw a rectangle 
    rect(50, 50, width - 80, 200, 30);
    //Set color
    stroke(34, 78, 5);
    fill(255, 255, 255);
    //Set text font using the saved font
    textFont(fonts.instructionsFont);
    textAlign(CENTER, CENTER);
    text(`Plant a flower and watch it grow !  /n  (Hold down key 1 , 2 or 3 on your keyboard )`, width / 2, 100,);
    textAlign(RIGHT);
    text(` 1. Use a shovel to make a hole in the soil. `, 795, 130);
    text(`2. Put the seed in the soil. `, 795 - 140, 160);
    text(`3. Water the seed. `, 730 - 140, 190);
    pop();
    //Draw the rectangle options for gardening
    push();
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'black';
    fill(51, 204, 51);
    rect(gardeningChoices.shovel.x, gardeningChoices.shovel.y, gardeningChoices.shovel.w, gardeningChoices.shovel.h, 30);
    fill(255, 153, 51);
    rect(gardeningChoices.seed.x, gardeningChoices.seed.y, gardeningChoices.seed.w, gardeningChoices.seed.h, 30);
    fill(153, 51, 255);
    rect(gardeningChoices.water.x, gardeningChoices.water.y, gardeningChoices.water.w, gardeningChoices.water.h, 30);
    pop();
    //Draw the text options for gardening
    push();
    textSize(17);
    strokeWeight(4);
    stroke(0);
    fill(255);
    textFont(fonts.instructionsFont);
    text(`1. Use shovel. `, 60, 290);
    text(`2. Plant seed. `, 60, 340);
    text(`3. Water seed. `, 60, 390,);
    pop();
}
/**
 * listenRadio()
 * 
 * This function displays all the interactions to listen to the radio
 */
function listenRadio() {

    //Draw background of the radio page
    drawRadioPageBackground();
    //Check which music option the player selected
    verifyRadioMusicChoice();
}
/**
 * verifyRadioMusicChoice()
 * 
 * This function verifies which choice the user selected when he is in the radio page
 */
function verifyRadioMusicChoice() {
    if (keyIsPressed) {
        stopAllSounds();
        switch (key) {
            case '1':
                playPopMusic();
                break;
            case '2':
                playClassicMusic();
                break;
            case '3':
                playCountryMusic();
                break;
            case '4':
                playRandomMusic();
                break;
            case '5':
                state = `play`;
                break;
        }
    }
}
/**
 * verifyGardenChoice()
 * 
 * This function checks for the choice that the user has made from the gardening page,and loads the appropriate image
 */
function verifyGardenChoice() {
    if (keyIsPressed) {
        stopAllSounds();
        switch (key) {
            case '1':
                loadShovel();
                break;
            case '2':
                loadSeeds();
                break;
            case '3':
                loadWaterCan();
                break;
        }
    }
}
/**
 * drawRadioPageBackground()
 * 
 * This function draws the background and elements of the radio page
 */
function drawRadioPageBackground() {
    push();
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'black';
    //Draw gradient background
    let greenBlueGradient = drawingContext.createLinearGradient(50, 50, 350, 400);
    greenBlueGradient.addColorStop(0, 'turquoise');
    greenBlueGradient.addColorStop(.7, 'purple');
    drawingContext.fillStyle = greenBlueGradient;
    drawingContext.rect(0, 0, width, height);
    drawingContext.fill();
    //Create radio buttons to change radio station
    //Pop station
    noStroke();
    fill(255, 204, 0);
    rect(radioPageChoices.popMusic.x, radioPageChoices.popMusic.y, radioPageChoices.popMusic.w, radioPageChoices.popMusic.h, 10);
    //Classic music station 
    fill(153, 204, 0);
    rect(radioPageChoices.classicMusic.x, radioPageChoices.classicMusic.y, radioPageChoices.classicMusic.w, radioPageChoices.classicMusic.h, 10);
    //Country music station
    fill(255, 51, 0);
    rect(radioPageChoices.countryMusic.x, radioPageChoices.countryMusic.y, radioPageChoices.countryMusic.w, radioPageChoices.countryMusic.h, 10);
    //Random music
    fill(51, 204, 255);
    rect(radioPageChoices.randomMusic.x, radioPageChoices.randomMusic.y, radioPageChoices.randomMusic.w, radioPageChoices.randomMusic.h, 10);
    //Go back
    fill(255, 153, 204);
    rect(radioPageChoices.goBack.x, radioPageChoices.goBack.y, radioPageChoices.goBack.w, radioPageChoices.goBack.h, 30);
    pop();
    //Display Radio image
    image(images.mainPageRadio, 270, 160, 550, 340);
    //Display top page text 
    push();
    //Set shadow behind the text
    drawingContext.shadowOffsetX = 2;
    drawingContext.shadowOffsetY = -2;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'black';
    //Sets text size, strokeWeight, stroke
    textSize(20);
    strokeWeight(4);
    stroke(0);
    //Set color
    fill(255);
    //Set text font using the saved font
    textFont(fonts.instructionsFont);
    textAlign(CENTER, CENTER);
    text(`Choose a radio station to listen to some music using keyboard keys !  /n  (Hold down key 1 , 2 , 3 , 4 or 5 on your keyboard )`, width / 2, 30);
    pop();
    //Add text on top of text boxes
    push();
    fill(255);
    //Set text font using the saved font
    textFont(fonts.instructionsFont);
    stroke(0);
    strokeWeight(3);
    textSize(10);
    text(`Pop Music Station - 1`, radioPageChoices.popMusic.x + 5, radioPageChoices.popMusic.y + 15);
    text(`Classical Music Station - 2`, radioPageChoices.classicMusic.x + 5, radioPageChoices.classicMusic.y + 15);
    text(`Country Music Station - 3`, radioPageChoices.countryMusic.x + 5, radioPageChoices.countryMusic.y + 15);
    text(`Random Music Station - 4`, radioPageChoices.randomMusic.x + 5, radioPageChoices.randomMusic.y + 15);
    text(`Go Back - 5`, radioPageChoices.goBack.x + 5, radioPageChoices.goBack.y + 15);
    pop();

}
/**
 * playBirdsChirping()
 * 
 * This function plays the birds sound in a loop in play mode
 */
function playBirdsChirping() {
    if (!sounds.birdsChirping.isPlaying()) {
        sounds.birdsChirping.loop();
    }
}
/**
 * playDogBark()
 * 
 * This function plays the dog barking in loop mode
 */
function playDogBarking() {
    if (!sounds.dogBark.isPlaying()) {
        sounds.dogBark.play();
    }
}
/**
 * playDogMunchin()
 * 
 * This function plays the dog munchin sound when the dog is given a treat
 */
function playDogMunchin() {
    if (!sounds.dogCrunch.isPlaying()) {
        sounds.dogCrunch.loop();
    }
}
/**
 * playDogToy()
 * 
 * This function plays the dog toy squeak sound when the dog is given a ball
 */
function playDogToy() {
    if (!sounds.squeakToy.isPlaying()) {
        sounds.squeakToy.loop();
    }
}

/**
 * playGardenShovel()
 * 
 * This function plays the garden shoveling in loop mode
 */
function playGardenShovel() {
    if (!sounds.gardenShovel.isPlaying()) {
        sounds.gardenShovel.loop();
    }
}
/**
 * playGardenWatering()
 * 
 * This function plays the sound of the garden being watered
 */
function playGardenWatering() {
    if (!sounds.wateringCan.isPlaying()) {
        sounds.wateringCan.loop();
    }
}
/**
 * playPopMusic()
 * 
 * This function plays pop music when this option is selcted in teh radio page
 */
function playPopMusic() {
    if (!sounds.popMusic.isPlaying()) {
        sounds.popMusic.loop();
    }

}
/**
 * playClassicMusic()
 * 
 * This function plays classical music when this option is selected from the radio page
 */
function playClassicMusic() {
    if (!sounds.classicMusic.isPlaying()) {
        sounds.classicMusic.loop();
    }

}
/**
 * playCountryMusic()
 * 
 * This function plays country music when this option is selected from the country music page
 */
function playCountryMusic() {
    if (!sounds.countryMusic.isPlaying()) {
        sounds.countryMusic.loop();
    }

}
/**
 * playRandomMusic()
 * 
 * This function plays random music when this option is seelcted from the radio page
 */
function playRandomMusic() {
    if (!sounds.randomMusic.isPlaying()) {
        sounds.randomMusic.loop();
    }

}
/**
 * stopAllSounds()
 * 
 * This function stops all the currently playing music in the radio page
 */
function stopAllSounds() {
    sounds.popMusic.stop();
    sounds.classicMusic.stop();
    sounds.countryMusic.stop();
    sounds.randomMusic.stop();
    sounds.gardenShovel.stop();
    sounds.wateringCan.stop();
    sounds.dogCrunch.stop();
    sounds.squeakToy.stop();
}