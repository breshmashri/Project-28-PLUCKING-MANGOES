class Tree{
    constructor(x, y){
        var options = {
			isStatic: true,
		}
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, 10, 10, options);
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
    }
    display(){
        var treePos = this.body.position;	
        imageMode(CENTER);
		image(this.image, treePos.x, treePos.y, 550, 550);
	} 
}
