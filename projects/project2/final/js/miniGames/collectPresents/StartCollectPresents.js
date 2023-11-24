//StartCollectPresents
class StartCollectPresents extends State {
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        this.font = fontsArray[0];
        createCanvas(1200, 600);
    }
    draw() {
        this.backgroundImg = imagesArray[7];
        background(this.backgroundImg);
        this.displayInstructions();
    }
    /**
   * displayMainMenu()
   * This function displays the main menu text.
   */
    displayInstructions() {
        push();
        textSize(45);
        strokeWeight(3);
        stroke(200, 100, 100);
        fill(64, 110, 237);
        rect(200, 200, 800, 200, 10, 10)
        fill(250);
        textFont(this.font);
        textAlign(CENTER, CENTER);
        text("Catch Christmas presents in Santa's sleigh ! \n Collect at least 5 presents.", width / 2, height / 2);
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
        text("Use LEFT and RIGHT arrows to catch shapes", width / 2 - 80, 650);
        pop();
    }
    //keyPressed()
    //
    keyPressed() {
        super.keyPressed();
        currentState = new CollectPresents(imagesArray, fontsArray, soundsArray);
    }

}