// Introduction
// Handles the information given to the player at the start of the game  
// It explains the players a backstory of the game, and how to win the game
class Introduction extends State {
    // Acts as the setup() of the state, called when the
    // state is created. Creates a circle object and sets its
    // velocity.
    constructor(imagesArray, fontsArray, soundsArray) {
        super();
        //Create a northPoleBtn object
        this.northPoleBtn = {
            x: 700,
            y: 475,
            w: 200,
            h: 100,
            image: imagesArray[1]
        }
        //Create a new typewriter object
        this.typewriter = new Typewriter();
        //Call the introduction object 
        this.writeIntroduction();
    }
    // draw()
    // Called every frame in the main script. 
    draw() {
        super.draw();
        //Sets the background color to black
        background(0);
        //Display the north pole button
        this.displayNorthPoleBtn();
        // Call the state's methods to make the animation work
        this.typewriter.display();
        //Verifies if the user has selected the "North Pole" button
        this.verifyUserSelect();
    }
    //writeIntroduction()
    //Display the introduction text the user sees at the beginning of the game which explains
    //the setting of the game in a typewriter effect
    writeIntroduction() {
        this.typewriter.typewrite(`        For thousands of years, gnomes have been diligent workers at \n
        Santa's workshop every day from sunrise to sunset they dutifully \n
        executed their work... \n
        Until one day, the gnomes had enough of working under Santa's tyranny! \n 
        Suddenly every gnome in Santa's workshop decided to stop working, and \n
        instead wreak havoc on the North Pole! Can you help Santa get everything \n
        ready for Christmas on time?\n
        Be wary of gnomes roaming around Santa's workshop ...`, 10, 30);
    }
    //displayNorthPoleBtn()
    //Display image of North pole sign on the screen. 
    displayNorthPoleBtn() {
        push();
        image(this.northPoleBtn.image, this.northPoleBtn.x, this.northPoleBtn.y, this.northPoleBtn.w, this.northPoleBtn.h);
        pop();
        push();
        fill(255);
        textFont(`Courier`);
        textSize(18);
        textAlign(LEFT, TOP);
        text(`Select to continue`, this.northPoleBtn.x - 10, this.northPoleBtn.y - 25);
        pop();
    }
    // verifyUserSelect()
    // Checks if the user has clicked the north pole button image
    //If the user has clicked this image, set the next state of the game
    //the next state of the game should be displayed 
    verifyUserSelect() {
        if (mouseX > this.northPoleBtn.x &&
            mouseX < this.northPoleBtn.x + this.northPoleBtn.w &&
            mouseY > this.northPoleBtn.y &&
            mouseY < this.northPoleBtn.y + this.northPoleBtn.h) {
            currentState = new StartDecorateTree(imagesArray, fontsArray, soundsArray);
        }
    }
}