class Tree{
    constructor(x, y){
        var options = {
			isStatic:true,
		}
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, options);
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
    }
    display(){
		var treePos = this.body.position;		
        ellipse(treePos.x, treePos.y);
        imageMode(CENTER);
		image(this.image, 0, 0, this.width, this.height);
	} 
}