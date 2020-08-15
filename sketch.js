
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
//var tree,

var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var trow;
var boy, boy_image;

function preload()
{
	boy_image = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//boy = createSprite(100, 625, 20, 100);
	//boy.addImage(boy_image);
	//boy.scale = 0.08;

	ground = new Ground(width/2, 600, width, 20);
	stone = new Stone(235, 420, 30);
	tree = new Tree(1050, 580);
	mango1 = new Mango(1100, 100, 30);
	mango2 = new Mango(1170, 130, 30);
	mango3 = new Mango(1010, 140, 30);
	mango4 = new Mango(1000, 70, 30);
	mango5 = new Mango(1100, 70, 30);
	mango6 = new Mango(900, 230, 40);
	mango7 = new Mango(1140, 150, 40);
	mango8 = new Mango(1200, 200, 40);
	mango9 = new Mango(1120, 50, 40);
	mango10 = new Mango(900, 160, 40)
	trow = new Throw(stone.body, {x: 235, y:420});
	

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);

  image(boy_image, 200, 340, 200, 300);
  tree.display();
  
  
  //drawSprites();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  ground.display();
  trow.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
  detectcollision(stone, mango10);
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	trow.fly();
}

function detectcollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:50, y:555});
		trow.attach(stone.body);
	}
}



