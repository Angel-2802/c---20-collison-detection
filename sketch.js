var Movingrect,Fixedrect;

function setup() {
  Movingrect = createSprite ()
  createCanvas(1200,800);
  Fixedrect = createSprite(200, 200, 50, 80);
  Fixedrect.shapeColor = "green" ;
  Movingrect = createSprite(400,200,80,30);
  Movingrect.shapeColor = "green";

}

function draw() {
  background(0);  
  Movingrect.x = mouseX;
  Movingrect.y = mouseY;
  if(Movingrect.x-Fixedrect.x<Fixedrect.width/2 + Movingrect.width/2
    && Fixedrect.x - Movingrect.x < Fixedrect.width/2 + Movingrect.width/2
    && Movingrect.y- Fixedrect.y< Fixedrect.height/2 + Movingrect.height/2
    && Fixedrect.y - Movingrect.y < Fixedrect.height/2 + Movingrect.height/2 ){
    Fixedrect.shapeColor = "red";
    Movingrect.shapeColor = "red";
  }
  else{
    Fixedrect.shapeColor = "green";
    Movingrect.shapeColor = "green";

  }
  drawSprites();
}