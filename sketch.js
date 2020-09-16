const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10,
block11, block12, block13, block14, block15, block16;
var polygon;
var slingShot;

var engine,world;
function setup() {
  createCanvas(1600,400);

  engine = Engine.create();
  world = engine.world;
  var polygon_options = {
    isStatic:true
  }
  polygon = Bodies.circle(200,100,20,polygon_options);
  World.add(world,polygon);
  
  slingShot = new SlingShot(polygon,{x:150,y:200});

  ground = new Ground(350,300,1600,10);
  
  block1 = new Box(300,275,20,40);
  block2 = new Box1(330,275,20,40);
  block3 = new Box(360,275,20,40);
  block4 = new Box1(390,275,20,40);
  block5 = new Box(420,275,20,40);
  block6 = new Box1(450,275,20,40);
  block7 = new Box(480,275,20,40);

  block8 = new Box1(330,235,20,40);
  block9 = new Box(360,235,20,40);
  block10 = new Box1(390,235,20,40);
  block11= new Box(420,235,20,40);
  block12= new Box1(450,235,20,40);

  block13 = new Box(360,195,20,40);
  block14= new Box1(390,195,20,40);
  block15 = new Box(420,195,20,40);

  block16 = new Box1(390,155,20,40);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingShot.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}