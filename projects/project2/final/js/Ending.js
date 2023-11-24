// Ending
// Displays the ending message of the program.
class Ending extends State {
    // constructor()
    // Acts as the setup() of the state, called when the
    // state is created. Sets the ending message of the program.
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        this.coverImg = imagesArray[11]
    }
    // draw()
    // Called every frame in the main script. Handles what the ending
    // state needs to do each frame, which is display the ending message.
    draw() {
        // Always call the super() version of the method if there is one
        // just in case it does something important.
        super.draw();
        background(this.coverImg);

    }
}