// GameOver
// This class keeps track if the user has lost the game
// If the user has lost the game, display the appropriate image
class GameOver extends State {
    // Acts as the setup() of the state, called when the
    // state is created. 
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        //Set the cover image of the GameOver class
        this.coverImg = imagesArray[12];
    }
    // draw()
    // Called every frame in the main script.
    draw() {
        //Set the bacckground of the GameOver game state to be the cover image
        background(this.coverImg);
    }
}