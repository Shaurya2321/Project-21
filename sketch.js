
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var groundRight;
var groundLeft;
function setup() {
	createCanvas(800, 800);
	
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic : false,
		restitution:0.8,
		frictionAir:0.01,
		density:0.2

	}
	var ground_options={
		isStatic:true
	}

	//Create the Bodies Here.
   ground = Bodies.rectangle(400,790,800,20,ground_options);
   World.add(world,ground);
   groundLeft = Bodies.rectangle(500,790,10,200,ground_options);
   World.add(world,groundLeft);
   groundRight = Bodies.rectangle(650,790,10,200,ground_options);
   World.add(world,groundRight);

   ball = Bodies.circle(50,300,20,ball_options);
   World.add(world,ball);
	rectMode(CENTER);
  ellipseMode(RADIUS);

	Engine.run(engine);
  
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:5})
			
	}
}

function draw() {
  background(51);
  Engine.update(engine);
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,800,20);
  rect(groundLeft.position.x,groundLeft.position.y,10,200);
  rect(groundRight.position.x,groundRight.position.y,10,200)
  drawSprites();
 
}



