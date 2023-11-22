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
        secondsRadius = radius * 0.71;
        minutesRadius = radius * 0.6;
        hoursRadius = radius * 0.5;
        clockDiameter = radius * 1.7;
        cx = 200;
        cy = 300;
    }
    //displayTimer()
    //This function displays the timer that runs during the simulation
    displayTimer() {
        push();
        // Draw the clock background
        noStroke();
        fill(255);
        ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
        fill(113, 53, 113);
        ellipse(cx, cy, clockDiameter, clockDiameter);

        // Angles for sin() and cos() start at 3 o'clock;
        // subtract HALF_PI to make them start at the top
        let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
        let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
        let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

        // Draw the hands of the clock
        stroke(255);
        strokeWeight(1);
        line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
        strokeWeight(2);
        line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
        strokeWeight(4);
        line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
        // Draw the minute ticks
        strokeWeight(2);
        beginShape(POINTS);
        for (let a = 0; a < 360; a += 6) {
            let angle = radians(a);
            let x = cx + cos(angle) * secondsRadius;
            let y = cy + sin(angle) * secondsRadius;
            vertex(x, y);
        }
        endShape();
        pop();
    }


}