class Umbrella
{
    constructor(x,y)
    {
        var options =
        {
            isStatic : true
        }
       this.image = loadImage("Walking Frame/walking_1.png");
       this.umbrella = Bodies.circle(x,y,125,options);
       this.radius = 125;
       World.add(world,this.umbrella);
    }
    display()
    {
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,350);
    }
}