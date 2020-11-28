const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
createCanvas(600,600);

engine = Engine.create();
world = engine.world;

var ground_options = {
  isStatic: true
}

ground = Bodies.rectangle(300,500,600,20, ground_options);
World.add(world,ground);

var ball_options = {
  'restitution': 1
}
ball = Bodies.circle(300,200,40, ball_options);
World.add(world,ball);



}

function draw(){
  
  background("pink");
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600, 20);
  console.log(ground);

  // creating ball 
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40, 40);

}