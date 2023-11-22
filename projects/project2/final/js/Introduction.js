// Introduction
// Handles the information given to the player at the start of the game  
// It explains the players a backstory of the game, and how to win the game
class Introduction extends State {

    // Acts as the setup() of the state, called when the
    // state is created. Creates a circle object and sets its
    // velocity.
    constructor(imagesArray) {
        super();
        this.northPoleBtn = {
            x: 700,
            y: 475,
            w: 200,
            h: 100,
            image: imagesArray[1]
        }
        //Create a new typewriter object
        this.typewriter = new Typewriter();
        this.writeIntroduction();
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
        this.typewriter.display();
        this.displayGnomes();
        this.verifyClick();
    }
    //writeIntroduction()
    //Display the introduction text the user sees at the beginning of the game which explains
    //the setting of the game in a typewriter effect
    writeIntroduction() {
        this.typewriter.typewrite(`        For thousands of years, gnomes have been diligent workers at \n
        Santa's workshop every day from sunrise to sunset they dutifully \n
        executed their work, built kid's toys, cleaned the workshop,  \n
        decorated Christmas trees, organized presents  for delivery looked \n
        after Santa's reindeer's... \n
        Until one day, the gnomes had enough of working under Santa's tyranny! \n 
        Suddenly every gnome in Santa's workshop decided to stop working, and \n
        instead wreak havoc on the North Pole! Can you help Santa get everything \n
        ready for Christmas on time?\n
        Be wary of gnomes roaming around Santa's workshop ...`, 10, 30);
    }
    //displayGnomes()
    //Display image of North pole sign on the screen. 
    //When a user clicks on the image
    //the next state of the game should be displayed 
    displayGnomes() {
        push();
        image(this.northPoleBtn.image, this.northPoleBtn.x, this.northPoleBtn.y, this.northPoleBtn.w, this.northPoleBtn.h);
        pop();

    }
    // verifyClicked()
    // Checks if the user has clicked the north pole button image
    //If the user has clicked this image, set the next state of the game
    verifyClick() {
        if (mouseX > this.northPoleBtn.x &&
            mouseX < this.northPoleBtn.x + this.northPoleBtn.w &&
            mouseY > this.northPoleBtn.y &&
            mouseY < this.northPoleBtn.y + this.northPoleBtn.h) {
            currentState = new DecorateTree(imagesArray);
        }
    }
    // NO keyPressed() needed down here, it is handled by the State version
}