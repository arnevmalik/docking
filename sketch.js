var iss,space,sc1,sc2,sc3,sc4,iss1,bg42;
var hasDocked=false;

function preload() {
  bg42=loadImage("bg42.jpeg")
  iss1=loadImage("iss.png")
  sc1=loadImage("spacecraft1.png")
  sc2=loadImage("spacecraft2.png")
  sc3=loadImage("spacecraft3.png")
  sc4=loadImage("spacecraft4.png")
}


function setup() {
  createCanvas(800,400);
 iss= createSprite(330, 130);
 iss.addImage(iss1)
 iss.scale=0.65
 space= createSprite(285, 240);
 space.addImage(sc1)
 space.scale=0.20
}

function draw() {
  background(bg42);
  
  if(space.x===285 && space.y===218)
  {
    hasDocked=true;
  }if(hasDocked){
    text("succesfuly docked!",400,200)
  }
  

  if(keyDown("UP_ARROW")){
   space.y=space.y-2
   space.addImage(sc2)
  }
  if(keyDown("DOWN_ARROW")){
    space.y=space.y+2
    space.addImage(sc1)
   }
   if(keyDown("RIGHT_ARROW")){
    space.x=space.x+2
    space.addImage(sc4)
   }
   if(keyDown("LEFT_ARROW")){
    space.x=space.x-2
    space.addImage(sc3)
   }

  
   
   console.log(space.x,space.y)
  drawSprites();
}