// Clock
// This class creates a clock object
class Clock {
    // constructor()
    // Sets the basic properties
    constructor() {
        //Create variables to store the values of the clock
        this.cx;
        this.cy;
        this.secondsRadius;
        this.minutesRadius;
        this.hoursRadius;
        this.clockDiameter;
    }

    // setupClock()
    //This method sets up all the variables necessary to making a clock work
    setupClock() {
        let radius = 110;
        this.secondsRadius = radius * 0.71;
        this.minutesRadius = radius * 0.6;
        this.hoursRadius = radius * 0.5;
        this.clockDiameter = radius * 1.7;
        this.cx = 200;
        this.cy = 300;
    }
    //displayTimer()
    //This function displays the timer that runs during the simulation
    displayTimer() {
        push();
        // Draw the clock background
        noStroke();
        fill(255);
        ellipse(this.cx, this.cy, this.clockDiameter + 25, this.clockDiameter + 25);
        fill(113, 53, 113);
        ellipse(this.cx, this.cy, this.clockDiameter, this.clockDiameter);

        // Angles for sin() and cos() start at 3 o'clock;
        // subtract HALF_PI to make them start at the top
        let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
        let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
        let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

        // Draw the hands of the clock
        stroke(255);
        strokeWeight(1);
        line(this.cx, this.cy, this.cx + cos(s) * this.secondsRadius, this.cy + sin(s) * this.secondsRadius);
        strokeWeight(2);
        line(this.cx, this.cy, this.cx + cos(m) * this.minutesRadius, this.cy + sin(m) * this.minutesRadius);
        strokeWeight(4);
        line(this.cx, this.cy, this.cx + cos(h) * this.hoursRadius, this.cy + sin(h) * this.hoursRadius);
        // Draw the minute ticks
        strokeWeight(2);
        beginShape(POINTS);
        for (let a = 0; a < 360; a += 6) {
            let angle = radians(a);
            let x = this.cx + cos(angle) * this.secondsRadius;
            let y = this.cy + sin(angle) * this.secondsRadius;
            vertex(x, y);
        }
        endShape();
        pop();
    }


}