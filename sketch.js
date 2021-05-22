var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyani;
var sound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairy.png");
	fairyani = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	sound = loadSound("sound/joyMusic.mp3");

	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    fairy = createSprite(90,550,50,50);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

 if(star.y > 470 && starBody.position.y > 470){
	 Matter.Body.setStatic (starBody,true);
 }
 
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20 ;
	}
	//writw code to move fairy left and right
	
}
