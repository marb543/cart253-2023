class Paddle {

    constructor(w, h) {
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - this.height / 2;
    }

    // move() {
    //     this.x = mouseX;
    // }

    display() {
        push();
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }

    keyPressed() {
        console.log("Pressed key 2");
        if (keyCode === LEFT_ARROW) {
            this.x = this.x - 1;
            console.log("Pressed key left");
        } else if (keyCode === RIGHT_ARROW) {
            this.x = this.x + 1;
            console.log("Pressed key right");
        }
    }

}