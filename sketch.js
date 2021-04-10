 var player;
 var ground;
 function setup(){
   createCanvas(1200,400)
   player=createSprite(600,360,50,50);
   ground=createSprite(width/2,380,width,20)
 }
 function draw(){
   background(0)
  drawSprites();
  if(keyDown(LEFT_ARROW)){
    player.velocityX=-5;
    player.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    player.velocityX=5;
    player.velocityY=0;
  }
  if(keyDown("space")){
    player.velocityY=-5;
  }
  player.velocityY=player.velocityY+0.8
  player.collide(ground);
 }