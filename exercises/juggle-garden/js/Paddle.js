class Paddle {

    constructor(w, h) {
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - this.height / 2;
    }

    display() {
        push();
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }

    shiftLeft() {
        this.x = constrain((this.x - 10), this.width / 2, width - this.width / 2);
    }

    shiftRight() {
        this.x = constrain((this.x + 10), this.width / 2, width - this.width / 2);
    }

}