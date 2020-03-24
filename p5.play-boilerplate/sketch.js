function setup() {
  createCanvas(600,600);
  createSprite(100,550,90,350);
  createSprite(200,550,90,350);
  createSprite(300,550,90,350);
  createSprite(400,550,90,350);
  createSprite(500,550,90,350);
  createSprite(300,360,490,50);
  createSprite(300,330,450,50);
  createSprite(300,300,410,50);
  createSprite(300,270,370,50);
  createSprite(300,240,330,50);
  createSprite(300,210,290,50);
  createSprite(300,180,250,50);
  createSprite(300,150,210,50);
  createSprite(300,120,170,50);
  createSprite(300,90,130,50);
}

function draw() {
  background(150,200,250);  
  drawSprites();
  strokeWeight=1;
}