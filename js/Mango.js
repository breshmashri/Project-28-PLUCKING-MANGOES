class Mango{
	constructor(x, y, r){
		var options = {
			isStatic:true,
			restitution :0,
            friction :1,
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
		ellipse(mangoPos.x, mangoPos.y, this.r);
		imageMode(CENTER);
		image(this.image, 0, 0, this.width, this.height);
    }
}
