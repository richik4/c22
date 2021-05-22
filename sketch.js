const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }
  body = Bodies.rectangle(200,200,50,50,options);
  World.add(world,body);
}

function draw() {
  background("blue");  
  Engine.update(engine);
  rectMode(CENTER);
 rect(200,body.position.y,50,50);
}