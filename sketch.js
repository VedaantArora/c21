var movingRect,fixedRect;
var object1,object2;
var go1,go2,go3,go4;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(600, 100, 80, 50);
  movingRect.shapeColor="blue"
  //movingRect.velocityY=+3
  fixedRect=createSprite(200,100,80,50);
  fixedRect.shapeColor="blue"
  fixedRect.velocityY=3
go1=createSprite(100,300,50,50);
go1.shapeColor="blue"
go2=createSprite(200,300,50,50);
go2.velocityY=-3
go2.shapeColor="blue"
go3=createSprite(300,300,50,50);
go3.shapeColor="blue"
go4=createSprite(400,300,50,50);
go4.shapeColor="blue"

}

function draw() {
  background(0);  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  if(isTouching(movingRect,go3)){
    movingRect.shapeColor="red";
    go3.shapeColor="red"
  }
  else{
    movingRect.shapeColor="blue";
    go3.shapeColor="blue"
  }
  bounceOff(fixedRect,go2)
 
  drawSprites();
}
