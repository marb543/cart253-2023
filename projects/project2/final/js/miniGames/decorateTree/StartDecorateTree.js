// StartDecorateTree
// This class is called when the user begins the first mini-game of having to decorate a 
// Christmas tree.
class StartDecorateTree extends State {
    // constructor()
    // Acts as the setup() of the state, called when the
    // state is created. Sets the ending message of the program.
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        //Set the font to be the bubblegum font
        this.bubblegumFont = fontsArray[0];
        //Create the canvas with the appropriate size
        createCanvas(1200, 600);
    }
    // draw()
    // Called every frame in the main script. Handles what the ending
    // state needs to do each frame, which is display the ending message.
    draw() {
        //Set the background image variable
        this.backgroundImg = imagesArray[2];
        //Set the background image of the program
        background(this.backgroundImg);
        //Call the function which displays the instructions of the game
        this.displayInstructions();
    }
    // displayInstructions()
    // Method to display the title text which explains to the user how to decorate a Christmas tree
    displayInstructions() {
        push();
        textSize(50);
        strokeWeight(3);
        stroke(200, 100, 100);
        fill(64, 110, 237);
        rect(300, 200, 600, 200, 10, 10)
        fill(255);
        textFont(this.bubblegumFont);
        textAlign(CENTER, CENTER);
        text("Decorate the Christmas Tree \n before the timer runs out!", width / 2, height / 2);
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
    //When the user presses a key, a new state of the program is called which is DecorateTree
    keyPressed() {
        super.keyPressed();
        //Set the new state of the program to be DecorateTree
        currentState = new DecorateTree(imagesArray, fontsArray, soundsArray);
    }

}