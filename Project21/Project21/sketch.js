var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("f.png","f2.png","f3.png","f4.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  
  
}

function setup(){
  
  createCanvas(1500,400);
// Moving background
path=createSprite(750,200,1500,200);
path.addImage(pathImg);

path.velocityX = -4;


//creating boy running
boy = createSprite(70,180,20,20);
boy.addAnimation("SahilRunning",boyImg);

boy.scale=1.5
  
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.y = World.mouseY;
  drawSprites();
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.x <0 ){
    path.x = height/2;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG[0].destroy();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG[0].destroy();
      treasureCollection=treasureCollection+100;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG[0].destroy();

      // treasureCollection=+ 150;
      // treasureCollection= 150;
      // treasureCollection= treasureCollection - 150;
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
       
        // cashG.destroyEach;
        // diamondsG.destroyEach;
       //  jewelryG.destroyEach;
        //swordGroup.destroyEach;

         //cashG.destroy();
         //diamondsG.destroy();
        //jewelryG.destroy();
        //swordGroup.destroy();
        
        cashG.destroyEach();
         diamondsG.destroyEach();
         jewelryG.destroyEach();
        swordGroup.destroyEach();
        
        // cashGdestroyEach();
        // diamondsGdestroyEach();
        //jewelryGdestroyEach();
        // swordGroupdestroyEach();
        
        cashG.setVelocityXEach(0);
        diamondsG.setVelocityXEach(0);
        jewelryG.setVelocityXEach(0);
        swordGroup.setVelocityXEach(0);
        background(0)
        textSize(50);
  fill(255);
  text("GAME OVER",750,200);
     
    }
  }
  
 
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(1500,Math.round(random(50, 380), 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityX = -5;
  cash.lifetime = 1500;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(1800,Math.round(random(50, 380), 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityX = -5;
  diamonds.lifetime = 1500;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(1500,Math.round(random(50, 380), 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityX= -5;
  jewelry.lifetime = 1500;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(1500,Math.round(random(50, 380), 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityX = -5;
  sword.lifetime = 1500;
  swordGroup.add(sword);
  }
}
