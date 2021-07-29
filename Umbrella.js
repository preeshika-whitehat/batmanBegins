class Umbrella {
    constructor(x,y) {
        var options = {
            isStatic: true

        }

        this.image = "walking frame/walking_1.png";
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella);

    }

    display() {
        var pos = this.umbrella.position;
        //imageMode(CENTER);
        //image(this.image, pos.x, pos.y+75,300,300);
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, 50);
    }
}