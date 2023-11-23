// Ending
// Displays the ending message of the program.
class Ending extends State {
    // constructor()
    // Acts as the setup() of the state, called when the
    // state is created. Sets the ending message of the program.
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
    }
    // draw()
    // Called every frame in the main script. Handles what the ending
    // state needs to do each frame, which is display the ending message.
    draw() {
        // Always call the super() version of the method if there is one
        // just in case it does something important.
        super.draw();
        background(0);
        // Overkill perhaps, but we have a separate method to just display
        // the actual ending text. More methods/functions is generally better.
        this.endingString = "Congratulations ! You were able to help Santa save Christmas !\n The magic of Christmas convinced the gnomes to continue working for Santa Claus, \n they have promised Santa to work hard, and to never rebel again !";
        this.displayEnding();
    }

    // displayTitle()
    // Sets style and then display the text in the endingString property on the canvas
    displayEnding() {
        push();
        fill(255, 0, 0);
        text(this.endingString, width / 2, height / 2)
        pop();
    }

    // NO keyPressed() needed down here, it is handled by the State version
}