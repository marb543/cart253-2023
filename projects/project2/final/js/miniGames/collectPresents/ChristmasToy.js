//ChristmasToy
//Creates a ChristmasToy object which the player must avoid catching in Santa's sleigh so that he
//will not lose any points that he has earned from catching presents
//Class used from the following example by Pippin Barr : https://pippinbarr.com/cart253/topics/object-oriented-programming/object-oriented-programming-activity.html
class ChristmasToy {
    //constructor()
    //Sets the basin properties, and value of the object 
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 10;
        this.size = 40;
        this.active = true;
        this.touchedPaddle = false;
        this.points = 0;
        this.img = image;
    }
    //gravity()
    //Sets the gravity of the object
    gravity(force) {
        this.ay = this.ay + force;
    }
    //move()
    //Sets the gravity of the object
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
    //Assigns the bounce effect of the ChristmasToy
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
            this.points--;
        }
    }
    //dsiplay()
    //Displays the Christmas toy 
    display() {
        push();
        fill(255, 50, 50);
        stroke(0);
        image(this.img, this.x, this.y, 100, 100);
        pop();
    }

}