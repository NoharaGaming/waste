
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ballImage = loadImage("sprites/paper.png");
	dustbinImage = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,180,800,20);
	
	ball = new Ball(150,130,20)
	dustbin = new Dustbin(625,60,80,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  ground.display();
  ball.display();
  dustbin.display()
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:57,y:-57})
	}
}


