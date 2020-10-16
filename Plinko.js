class Plinko{
    constructor(x,y){
    var options = {
        isStatic : true,
        restitution:1,
        friction:0,
        density:0.8
    }
    this.x=x;
	this.y=y;
    this.radius = 10;
    
    this.body = Bodies.circle(x,y,10,options);
    
    
    World.add(world,this.body);

}
display(){
    var pos = this.body.position;
    fill("white");
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.radius,this.radius);
}
    
}