class Stone{
	constructor(x, y, r){
		var options = {
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
		}
		this.x = x;
		this.y = y;
		this.r = r;
		this.image = loadImage("Plucking mangoes/stone.png");
		this.body = Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}
	display(){
		var stonepos = this.body.position;		
		ellipse(stonepos.x, stonepos.y, this.r);
		image(this.image, 0, 0, this.width, this.height);
		 
	} 
}
