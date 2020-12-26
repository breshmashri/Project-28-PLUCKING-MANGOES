class Mango{
	constructor(x, y, r){
		var options = {
			isStatic:true,
			restitution:0,
            friction:1,
		}
		this.x = x;
		this.y = y;
		this.r = r;
		this.image = loadImage("Plucking mangoes/mango.png");
		this.body = Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);
	}
	display(){
		var mangoPos = this.body.position;
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, mangoPos.x, mangoPos.y, this.r*2, this.r*2)

 }
}
