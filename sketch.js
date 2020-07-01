var boy,computer,kiteR,kiteG,thread;
var Plife=[];
var Clife=[];
function setup() {
  createCanvas(1500,500);
  kiteR=createSprite(400, 200, 50, 30);
  kiteG=createSprite(800, 200, 50, 30);
  boy=createSprite(300,400,30,20);
  computer=createSprite(900,400,30,20);
  for(var i=0;i<5;i++){
    Plife[i]=createSprite(100+20*i,450,10,10);
    Clife[i]=createSprite(1100+20*i,450,10,10);
  }


}

function draw() {
  background(0);  
  drawSprites();
}
