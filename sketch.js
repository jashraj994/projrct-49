var boy,boy_running;
var boy1,boy2;

function preload(){
 
  boy_running = loadAnimation("avengers.jpg")
  boy1Image = loadImage("avengers1.jpg")
  boy2Image = loadImage("avengers2.jpg")
  boy3Image = loadImage("avengers3.jpg")
  boy4Image = loadImage("avengers4.jpg")
  boy5Image = loadImage("avengers5.jpg")
  boy6Image = loadImage("avengers6.jpg")
  
   
}

function setup(){
  createCanvas(1200,600)

 
 
  boy = createSprite(300,100,20,10)
  boy.addAnimation("running", boy_running)
   
  boy1 = createSprite(500,200,20,10)
  boy1.addImage(boy1Image)

  boy2 = createSprite(400,400,20,10)
  boy2.addImage(boy2Image)
  
  boy3 = createSprite(400,400,20,10)
  boy3.addImage(boy3Image)

  boy4 = createSprite(600,400,20,10)
  boy4.addImage(boy4Image)

  boy5 = createSprite(300,400,20,10)
  boy5.addImage(boy5Image)

  boy6 = createSprite(100,400,20,10)
  boy6.addImage(boy6Image)
  boy6.scale = 1;
  boy6.visible = false;
 
}
function draw(){
  background(255)
  
  
 if(keyDown(RIGHT_ARROW)){
   boy.velocityX = 3;
 }
 if(keyDown(LEFT_ARROW)){
  boy.velocityX = -3;
}
if(keyDown("space")){
  boy.velocityX = 0;
  boy1.velocityX = -1;
}


if(keyDown(UP_ARROW)){
 boy1.velocityY = -1;
}

if(keyDown("enter")){
 boy1.velocityX = 0;
 boy1.velocityY = 0;
}
if(keyDown("delete")){
  boy1.velocityX = 1;
  
}
   
   if(keyDown("n")){
    boy2.velocityX = 1;
   
   }
   if(keyDown("ctrl")){
     boy2.velocityX = -1;
     
 }
 
 if(keyDown(DOWN_ARROW)){
  boy2.velocityY = 1;
 }
 if(keyDown("alt")){
  boy2.velocityY = -1;
 }
 if(keyDown("m")){
  boy2.velocityX = 0;
  boy2.velocityY = 0;
 }
 if(keyDown("d")){
  boy3.velocityY = 1;
 }
 if(keyDown("s")){
  boy3.velocityY = -1;
 }
 if(keyDown("a")){
  boy3.velocityX = 0;
  boy3.velocityY = 0;
 }
 if(keyDown("f")){
  boy3.velocityX = 1;
  
 }
 if(keyDown("g")){
  boy3.velocityX = -1;
  
 }
 if(keyDown("q")){
  boy4.velocityX = 0;
  boy4.velocityY = 0;
 
 }
 if(keyDown("w")){
  boy4.velocityX = 1;
  
 }
 if(keyDown("e")){
  boy4.velocityX = -1;
  
 }
 if(keyDown("r")){
  boy4.velocityY = 1;
  
 }
 if(keyDown("t")){
  boy4.velocityY = -1;
  
 }
 if(keyDown("z")){
  boy5.velocityX = 0;
  boy5.velocityY = 0;
 
 }
 if(keyDown("x")){
  boy5.velocityX = 1;
  
 }
 if(keyDown("c")){
  boy5.velocityX = -1;
  
 }
 if(keyDown("b")){
  boy5.velocityY = 1;
  
 }
 if(keyDown("v")){
  boy5.velocityY = -1;
  
 }
 


  drawSprites();
 
}



