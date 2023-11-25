//Paddle
//Creates the Paddle object which is responsible for 
class Paddle {
    //constructor()
    //Sets the basin properties, and values of the object
    constructor(w, h, image) {
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - 150;
        this.img = image;
    }
    //dsiplay()
    //Displays the paddle object which is Santa's sleigh
    display() {
        push();
        fill(255);
        noStroke();
        rectMode(CENTER);
        image(this.img, this.x, this.y, 350, 150);
        pop();
    }
    //shiftLeft()
    //Constrain the left of the paddle
    shiftLeft() {
        this.x = constrain((this.x - 10), this.width / 2, width - this.width / 2);
    }
    //shiftRight()
    //Constrain the right of the paddle
    shiftRight() {
        this.x = constrain((this.x + 10), this.width / 2, width - this.width / 2);
    }

}