class Paddle {

    constructor(w, h, image) {
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - 150;
        this.img = image;
    }

    display() {
        push();
        fill(255);
        noStroke();
        rectMode(CENTER);
        image(this.img, this.x, this.y, 350, 150);
        //rect(this.x, this.y, this.width, this.height);
        pop();
    }

    shiftLeft() {
        this.x = constrain((this.x - 10), this.width / 2, width - this.width / 2);
    }

    shiftRight() {
        this.x = constrain((this.x + 10), this.width / 2, width - this.width / 2);
    }

}