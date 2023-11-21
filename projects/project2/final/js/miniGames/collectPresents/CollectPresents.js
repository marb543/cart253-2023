// DecorateTree
class CollectPresents extends State {

    // Acts as the setup() of the state, called when the
    // state is created. Creates a circle object and sets its
    // velocity.
    constructor() {
        super();
        //Create a new typewriter object
        this.typewriter = new Typewriter();
    }
    // draw()
    // Called every frame in the main script. Handles what the title
    // state needs to do each frame. It moves and displays the circle
    // and checks if it has reached the right hand side.
    draw() {
        // Always call the super() version of the method if there is one
        // just in case it does something important.
        super.draw();
        background(0);
        // Call the state's methods to make the animation work
    }
    // checkEnding()
    // Checks if the circle has moved past the right hand side
    // of the canvas and changes to the Ending state if it has.
    checkEnding() {
        if (this.circle.x > width) {
            currentState = new Ending();
        }
    }

    // NO keyPressed() needed down here, it is handled by the State version
}