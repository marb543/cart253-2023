class Box {

    constructor(x, y) {
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
    }

    gravity(force) {
        this.ay = this.ay + force;
    }

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

            console.log("bounce");

            //Touched paddle
            this.touchedPaddle = true;
        }
    }

    display() {
        push();
        fill(0, 153, 255);
        stroke(0);
        square(this.x, this.y, this.size);
        pop();
    }

}