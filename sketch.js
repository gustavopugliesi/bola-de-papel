
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
isStatic:false,
restitutuin:0.3,
friction:0,
density:1.2
}


	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  groundObj.display();
  
  drawSprites();
 
}


function ground_Obj() {
	ground.Obj=new ground(width/2,670,width,20);
  	leftSide=new ground(1100,600,20,120);
}



