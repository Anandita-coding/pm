
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1365, 600);

  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  tree = new Tree(800,80,500,500)
  mango1 = new Mango(900,200,50)
  mango2 = new Mango(950,280,66)
  mango3 = new Mango(1030,200,55)
  mango4 = new Mango(1170,160,60)
  mango5 = new Mango(990,140,60)
  mango6 = new Mango(1200,280,40)
  mango7 = new Mango(1100,110,45)
  mango8 = new Mango(1100,230,60)
  boy = new Ground(200,200,20,20)
  stone = new Stone(800,300,40)
  slingShot = new SlingShot(stone.body,{x:180,y:200});
	Engine.run(engine);
  
}


function draw(11) {
  rectMode(CENTER);
  background("skyBlue");
  tree.display();
  boy.display();
  mango2.display();
  mango1.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  slingShot.display();
  stone.display();
  detectCollision1(stone,mango1);
  detectCollision1(stone,mango2);
  detectCollision1(stone,mango3);
  detectCollision1(stone,mango4);
  detectCollision1(stone,mango5);
  detectCollision1(stone,mango6);
  detectCollision1(stone,mango7);
  detectCollision1(stone,mango8);		
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
function detectCollision1(stone,mango){
  mango1Bodyposition = mango.body.position
  stonebodyposition = stone.body.position

  var distance = dist(stonebodyposition.x,stonebodyposition.y,mango1Bodyposition.x,mango1Bodyposition.y)
  
  if(distance<=mango.r+stone.r){
    Matter.Body .setStatic(mango.body,false)
  }

}
