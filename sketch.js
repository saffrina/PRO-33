function preload(){
  snow = loadImage("snow2.jpg")
  boyImage = loadImage("boy.png")
}
function setup() {
  createCanvas(800,400);
  boy = createSprite(50, 370, 50, 50);
  boy.addImage(boyImage)
  boy.scale = 0.1;
  invisibleGround = createSprite(10, 400, 400, 10);
  invisibleGround.visible = true;
}

function draw() {
  background(snow);  
  if( keyDown("space")  && boy.collide(invisibleGround)) {
    boy.velocityY = -15;
  }
  boy.velocityY = boy.velocityY + 0.5
  drawSprites();
}