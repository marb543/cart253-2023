// GameOver
// This class keeps track if the user has lost the game
// If the user has lost the game, gnomes will take over
class GameOver extends State {
    // Acts as the setup() of the state, called when the
    // state is created. Creates a circle object and sets its
    // velocity.
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        this.GameOverString = "Oh no ! You weren't able to get evrything ready for Christmas on time. \n The gnomes took over Santa's workshop !"
    }
    // draw()
    // Called every frame in the main script. Handles what the title
    // state needs to do each frame. It moves and displays the circle
    // and checks if it has reached the right hand side.
    draw() {

    }
}