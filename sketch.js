const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var boy;
var stoneObject, treeObject, groundObject, launcherObject;
var mango1, mango2, mango3, mango4,mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;

function preload(){
	boy = loadImage("Plucking mangoes/boy.png");
}

function setup(){
	createCanvas(1300, 600);

  engine = Engine.create();
  world = engine.world;
  
  stoneObject = new Stone(235, 420, 30);

  mango1 = new Mango(1100, 100, 30);
  mango2 = new Mango(1170, 130, 30);
	mango3 = new Mango(1010, 140, 30);
	mango4 = new Mango(1000, 70, 30);
	mango5 = new Mango(1100, 70, 30);
	mango6 = new Mango(1000, 230, 30);
	mango7 = new Mango(900, 230, 40);
	mango8 = new Mango(1140, 150, 40);
	mango9 = new Mango(1100, 230, 40);
	mango10 = new Mango(1200, 200, 40);
	mango11 = new Mango(1120, 50, 40);
  mango12 = new Mango(900, 160, 40); 
  
  treeObject = new Tree(1050, 580);
	groundObject = new Ground(width/2, 600, width, 20);
	launcherObject = new Launcher(stoneObject.body,{x:235, y:420});


	Engine.run(engine);
  
}

function draw(){
  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!", 50, 50);
  
  stoneObject.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  treeObject.display();
  groundObject.display();
  launcherObject.display();

  detectollision(stoneObject, mango1);
  detectollision(stoneObject, mango2);
  detectollision(stoneObject, mango3);
  detectollision(stoneObject, mango4);
  detectollision(stoneObject, mango5);
  detectollision(stoneObject, mango6);
  detectollision(stoneObject, mango7);
  detectollision(stoneObject, mango8);
  detectollision(stoneObject, mango9);
  detectollision(stoneObject, mango10);
  detectollision(stoneObject, mango11);
  detectollision(stoneObject, mango12);
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObject.body, {x:mouseX, y:mouseY});  
}

function mouseReleased(){
	launcherObject.fly();
}

function keyPressed(){
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObject.body, {x:235, y:420}); 
	  launcherObject.attach(stoneObject.body);
	}
}

function detectollision(lstone, lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  	if(distance<=lmango.r+lstone.r){
  	  Matter.Body.setStatic(lmango.body, false);
    }
  }
