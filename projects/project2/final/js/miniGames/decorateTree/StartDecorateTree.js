//StartDecorateTree
class StartDecorateTree extends State {
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        this.bubblegumFont = fontsArray[0];
        createCanvas(1200, 600);
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
    //
    keyPressed() {
        super.keyPressed();
        currentState = new DecorateTree(imagesArray, fontsArray, soundsArray);
    }

}