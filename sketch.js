var fixedRect, movingRect;
var game1,game2,game3,game4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 800, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  game1 = createSprite(100,100,50,50);
  game2 = createSprite(200,100,50,50);
  game3 = createSprite(300,100,50,50);
  game4 = createSprite(600,0,50,50);

  game1.shapeColor= "green";
  game2.shapeColor= "green";
  game3.shapeColor= "green";
  game4.shapeColor= "green";
  game4.velocityY= 5;
  fixedRect.velocityY= -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounceOff(fixedRect,game4);
 isTouching(game4,movingRect); 
  drawSprites();
}

