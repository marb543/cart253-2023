//StartCollectPresents
class StartCollectPresents extends State {
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
    }
    draw() {
        this.backgroundImg = imagesArray[10];
        background(this.backgroundImg);
        this.displayInstructions();
    }
    /**
   * displayMainMenu()
   * This function displays the main menu text.
   */
    displayInstructions() {
        push();
        // Sets text size, strokeWeight, stroke
        textSize(100);
        strokeWeight(4);
        stroke(34, 78, 5);
        // Set color
        fill(130, 210, 76);
        textFont(this.font);
        textAlign(CENTER, CENTER);
        text(`    Juggle  \n    Simulator`, width / 2 - 80, 250);
        textSize(30);
        fill(255);
        push();
        // Sets text size, strokeWeight, stroke
        textSize(40);
        strokeWeight(4);
        stroke(34, 78, 5);
        // Set color
        fill(130, 210, 76);
        textFont(this.font);
        textAlign(CENTER, CENTER);
        text(`Press 1 To Play`, width / 2 - 80, 550);
        text(`Use LEFT and RIGHT arrows to catch shapes`, width / 2 - 80, 650);
        textSize(30);
        fill(255);
        pop();
    }
    //keyPressed()
    //
    keyPressed() {
        super.keyPressed();
        currentState = new CollectPresents(imagesArray, fontsArray, soundsArray);
    }

}