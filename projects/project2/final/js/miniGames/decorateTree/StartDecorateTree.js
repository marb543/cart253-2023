//StartDecorateTree
class StartDecorateTree extends State {
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
    }
    draw() {
        this.backgroundImg = imagesArray[2];
        background(this.backgroundImg);
        this.displayInstructions();
    }
    // Method to display the title text
    displayInstructions() {
        push();
        textSize(50);
        strokeWeight(4);
        stroke(250);
        fill(200, 100, 100);
        textFont(this.bubblegumFont);
        textAlign(CENTER, CENTER);
        text("Decorate the Christmas Tree before the timer runs out!", width / 2, height / 2);
        pop();
    }
    //keyPressed()
    //
    keyPressed() {
        super.keyPressed();
        currentState = new DecorateTree(imagesArray, fontsArray, soundsArray);
    }

}