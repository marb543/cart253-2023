// Ending
// Displays the ending message of the program. The Ending state is only called if the
// player was successfully able to complete the game 
class Ending extends State {
    // constructor()
    // Acts as the setup() of the state, called when the
    // state is created. Sets the ending message of the program.
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        //Set the cover image to be the game over message text 
        this.coverImg = imagesArray[11]
    }
    // draw()
    // Called every frame in the main script. Handles what the ending
    // state needs to do each frame, which is display the ending message.
    draw() {
        // Always call the super() version of the method 
        super.draw();
        // Set the background image to be the cover image for when the user has lost the game
        background(this.coverImg);

    }
}