var database, food, stock, dog, dogImg, dogHappy, foodS, stock;

function preload()
{
	dogImg=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250, 250, 50, 50);
  dog.addImage(dogImg);
  dog.scale=0.2;
  sett=database.ref('/');
  sett.set({
    Food:20
  });

  foodStock=database.ref('Food');
  foodStock.on('value', readStock);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS-1);
    dog.addImage(dogHappy);
  }
  textSize(20);
  fill("white"); 
  text("Food Stock : "+stock, 250, 50);
  //add styles here
  textSize(14);
  text("Press up arrow to feed the dog....The data resets automatically after reloading", 0, 450); 

}

function readStock(data){
  foodS=data.val();
  stock=foodS;
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  });
}