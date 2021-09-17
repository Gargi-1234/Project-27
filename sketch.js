
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var rope001,rope002,rope003,rope004,rope005,rope006,rope007,rope008,rope009,rope010,rope011
var bob001,bob002,bob003,bob006,bob007,bob008,bob009,bob010,bob011
var hammer;


function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(10,10,50,50)

	roofObject=new roof(400,50,230,20);
	bob1 = new bob(320,275,40)
	bob2 = new bob(360,275,40)
	bob3 = new bob(400,275,40)
	bob4 = new bob(440,275,40)
	bob5 = new bob(480,275,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80)
	rope2=new rope(bob2.body,roofObject.body,-40)
	rope3=new rope(bob3.body,roofObject.body,0)
	rope4=new rope(bob4.body,roofObject.body,40)
	rope5=new rope(bob5.body,roofObject.body,80)
	
	roofObject2 =new roof(400,380,400,20);
	bob001 = new bob(210,455,30)
	bob002 = new bob(235,470,30)
	bob003 = new bob(260,485,30)
	bob004 = new bob(285,500,30)
	bob005 = new bob(310,515,30)
	bob006 = new bob(335,530,30)
	bob007 = new bob(360,545,30)
	bob008 = new bob(385,560,30)
	bob009 = new bob(410,575,30)
	bob010 = new bob(435,590,30)
	bob011 = new bob(460,605,30)
	bob012 = new bob(485,620,30)
	bob013 = new bob(510,635,30)
	bob014 = new bob(535,650,30)
	bob015 = new bob(560,665,30)
	bob016 = new bob(585,680,30)
	
	
	rope001=new rope(bob001.body,roofObject2.body,-190)
	rope002=new rope(bob002.body,roofObject2.body,-165)
	rope003=new rope(bob003.body,roofObject2.body,-140)
	rope004=new rope(bob004.body,roofObject2.body,-115)
	rope005=new rope(bob005.body,roofObject2.body,-90)
	rope006=new rope(bob006.body,roofObject2.body,-65)
	rope007=new rope(bob007.body,roofObject2.body,-40)
	rope008=new rope(bob008.body,roofObject2.body,-15)
	rope009=new rope(bob009.body,roofObject2.body,10)
	rope010=new rope(bob010.body,roofObject2.body,35)
	rope011=new rope(bob011.body,roofObject2.body,60)
	rope012=new rope(bob012.body,roofObject2.body,85)
	rope013=new rope(bob013.body,roofObject2.body,110)
	rope014=new rope(bob014.body,roofObject2.body,135)
	rope015=new rope(bob015.body,roofObject2.body,160)
	rope016=new rope(bob016.body,roofObject2.body,185)
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope001.display();
  rope002.display();
  rope003.display();
  rope004.display();
  rope005.display();
  rope006.display();
  rope007.display();
  rope008.display();
  rope009.display();
  rope010.display();
  rope011.display();
  rope012.display();
  rope013.display();
  rope014.display();
  rope015.display();
  rope016.display();

  roofObject2.display();
  bob001.display();
  bob002.display();
  bob003.display();
  bob004.display();
  bob005.display();
  bob006.display();
  bob007.display();
  bob008.display();
  bob009.display();
  bob010.display();
  bob011.display();
  bob012.display();
  bob013.display();
  bob014.display();
  bob015.display();
  bob016.display();

  hammer.display()
  
}


//CHOOSE THE CORRECT OPTION TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED

 function keyPressed() {
 	if (keyCode === DOWN_ARROW) {
 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:5,y:1});
 	}
 }


// function keyPressed() {
//	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
// 	}
// }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1.body,{x:-50,y:-45});
// 	}
// }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
// 	}
// }
