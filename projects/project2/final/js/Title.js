// Title
// The following code uses a code example provided 
// by Pippin Parr : https://github.com/pippinbarr/cart253/tree/main/examples/structure/oop-states-inheritance
// A state class for the main title page of the program
// Displays the title on the screen and switches to
// Introduction on a key press.
class Title extends State {

    // constructor()
    // Acts as the setup() of the state, called when the
    // state is created. Sets the title of the program.
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        //Set the global images array variable
        this.imagesArray = imagesArray;
        // Set our property determining the title of the simulation
        this.backgroundImage = imagesArray[0];
    }

    // draw()
    // Called every frame in the main script. Handles what the title
    // state needs to do each frame, which is display the title.
    draw() {
        super.draw();
        //Display the main program title
        this.displayTitle();
    }
    // displayTitle()
    //Displays the main program title cover
    displayTitle() {
        push();
        fill(255);
        image(this.backgroundImage, 0, 0)
        pop();
    }
    // keyPressed()
    // Called by the main script when a key is pressed! Switches to the Animation state
    keyPressed() {
        super.keyPressed();
        // Switch to the introduction state
        currentState = new Introduction(imagesArray, fontsArray, soundsArray);
    }
}