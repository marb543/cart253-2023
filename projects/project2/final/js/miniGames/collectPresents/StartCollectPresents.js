//StartCollectPresents
//This state is called when the player begins the collect presents mini-game.
//It explains to the player how to use the controls of the game, and how to win the 
//mini-games 
class StartCollectPresents extends State {
    //constructor()
    //Sets the basic properties of the object
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        //Set the font of the class
        this.font = fontsArray[0];
        //Create a canvas of the appropriate size
        createCanvas(1200, 600);
    }
    //draw()
    //Draw method is called every frame
    draw() {
        //Set the background image
        this.backgroundImg = imagesArray[7];
        //Set the bacjround of the class
        background(this.backgroundImg);
        //Display the instructions for the collect presents mini-game
        this.displayInstructions();
    }
    //displayInstructions()
    //Display the main menu text 
    displayInstructions() {
        push();
        textSize(30);
        strokeWeight(3);
        stroke(200, 100, 100);
        fill(64, 110, 237);
        rect(200, 200, 800, 200, 10, 10)
        fill(250);
        textFont(this.font);
        textAlign(CENTER, CENTER);
        text("Catch Christmas presents in Santa's sleigh ! \n Collect at least 5 presents, and avoid Christmas decorations. \n (Use LEFT and RIGHT arrows to catch)", width / 2, height / 2);
        pop();
        push();
        noStroke(0);
        fill(64, 110, 237);
        rect(0, height - 50, width, 50)
        fill(255);
        textSize(25);
        textFont('Courier New');
        textAlign(CENTER, CENTER);
        text("Press key to start game...", width / 2, height - 30);
        pop();
    }
    //keyPressed()
    //Handles the user key press 
    keyPressed() {
        super.keyPressed();
        //Calls the CollectPresents state
        currentState = new CollectPresents(imagesArray, fontsArray, soundsArray);
    }

}