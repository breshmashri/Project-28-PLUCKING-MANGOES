class Tree{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.image = loadImage("Plucking mangoes/tree.png");
    }
    display(){
		var treepos = this.body.position;		
		ellipse(treepos.x, treepos.y, this.r);
		image(this.image, 0, 0, this.width, this.height);
	} 
}