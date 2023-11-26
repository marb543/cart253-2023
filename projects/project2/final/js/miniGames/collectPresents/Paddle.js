//Paddle
//Creates the Paddle object which is responsible for catching the Christmas toys , and Christmas decorations
//Class used from the following example by Pippin Barr : https://pippinbarr.com/cart253/topics/object-oriented-programming/object-oriented-programming-activity.html
class Paddle {
    //constructor()
    //Sets the basic properties and values of the object
    constructor(w, h, image) {
        this.width = w;
        this.height = h;
        this.x = width / 2; // Start at the center of the canvas
        this.y = height - 150;
        this.img = image;
    }
    //display()
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
    //Constrains the left movement of the paddle
    shiftLeft() {
        this.x = constrain(this.x - 10, 0, width - this.height);
    }
    //shiftRight()
    //Constrains the right movement of the paddle
    shiftRight() {
        this.x = constrain(this.x + 10, this.width / 2, width - this.width);
    }
}
