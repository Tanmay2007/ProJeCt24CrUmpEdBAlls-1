
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,side1,side2,side3,paperObject,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	

	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(100,675,30)
	
side1=new Dustbin(630,640,10,100)
side2=new Dustbin(700,680,130,10)
side3=new Dustbin(770,640,10,100)

ground= new Ground(400,690,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  
 
 
  side1.display()
  side2.display()
  side3.display()
  ground.display()
  paperObject.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode==UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:25,y:-65})

}

}



