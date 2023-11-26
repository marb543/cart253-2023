//Present
//Creates a Present object which the player has to catch in Santa's sleigh in order 
// to score points
//Class used from the following example by Pippin Barr : https://pippinbarr.com/cart253/topics/object-oriented-programming/object-oriented-programming-activity.html
//Modified for class exercise by Maria Barba : https://github.com/marb543/cart253-2023/tree/main/exercises/juggle-garden
class Present {
    //constructor()
    //Creates,and sets the basic properies of the object 
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 30;
        this.size = 80;
        this.active = true;
        this.touchedPaddle = false;
        this.points = 0;
        this.img = image;
    }
    //gravity()
    //Assigns the gravity of the object 
    gravity(force) {
        this.ay = this.ay + force;
    }
    //move()
    //Decides the movement pattern of the Present object
    move() {
        this.vx = this.vx + this.ax;
        this.vy = this.vy + this.ay;
        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        if (this.y - this.size / 2 > height) {
            this.active = false;
        }
    }
    //bounce()
    //Creates the bounce effect for the present object 
    bounce(paddle) {
        if (this.x > paddle.x - paddle.width / 2 &&
            this.x < paddle.x + paddle.width / 2 &&
            this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
            this.y - this.size / 2 < paddle.y + paddle.height / 2) {
            // Bounce
            let dx = this.x - paddle.x;
            this.vx = this.vx + map(dx, -paddle.width / 2, paddle.width / 2, -2, 2);
            this.vy = -this.vy;
            this.ay = 0;
            //Touched paddle
            this.touchedPaddle = true;
            this.points++;
        }
    }
    //display()
    //Displays each present object
    display() {
        push();
        fill(0, 153, 255);
        stroke(0);
        image(this.img, this.x, this.y, 100, 200)
        pop();
    }

}