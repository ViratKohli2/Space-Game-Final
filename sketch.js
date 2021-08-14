var bg_img,alien,alien_img,i,r,laserImg,laser,laser2Img,laser2;
var spacecraft_img,spacecraft;
var laserGroup,alienGroup, laser2Group;
var score=100;
var points=0;

function preload() {
  bg_img = loadImage("bg.jpg")
  spacecraft_img = loadImage("spacecraft.png")
  alien_img = loadImage("alien.png")
  laserImg = loadImage("02.png")
  laser2Img = loadImage("05.png")


}
function setup() {
  createCanvas(850,500);
  
  spacecraft=createSprite(600,500);
  spacecraft.addImage(spacecraft_img)
  spacecraft.scale=0.2

   //spacecraft.setCollider("circle",0,0,10)
  //spacecraft.debug=true;
  laserGroup = new Group();
  alienGroup=new Group();
  laser2Group=new Group();
}

function draw() {
  background(bg_img);  


textSize(25);
fill("blue")
text("Remaining bullets "+score,150,30);

  textSize(25);
  fill("green")
  text("Points " +points,550,30);

  
    if(keyDown(LEFT_ARROW)){
      spacecraft.x-=10
        }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x+=10
    }
    if(keyDown(UP_ARROW)){
     spacecraft.y-=10
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.y+=10
    }
    

    if(keyWentDown("space")){

      laser2 = createSprite(spacecraft.x,spacecraft.y,10,10)
      laser2.addImage(laser2Img)
      laser2.velocityY = -10
      laser2Group.add(laser2);
      score=score-1;
      
     }

     if(laser2Group.isTouching(alienGroup)){
      alienGroup.destroyEach();
      laser2Group.destroyEach();
      laserGroup.destroyEach()
      points=points+10
    
    }


    
     enemy();

     if(laserGroup.isTouching(spacecraft)){
     textSize(60)
     fill("red")
     text("Game Over",300,200)
      spacecraft.destroy();
      laser2Group.hide()
      alienGroup.hide()
      laserGroup.hide()
      points = 0;
      }
    

    if (score===0){
      spacecraft.destroy();
      gameover.visible=true;
      laser2Group.removeSprites()
      alienGroup.destroyEach();
      laser2Group.removeSprites()
      laserGroup.destroyEach()
    }

    
  
                
  drawSprites();
}

function enemy() {
 if(frameCount%90===0){

  var r = Math.round((random(50,1000)))
  var i = Math.round(random(-8,8));
  var alien = createSprite(r,100,10,10)
  laser = createSprite(r,100,10,10)
  laser.addImage("laser",laserImg)
  laser.velocityY = 7
  


  alien.addImage("alien",alien_img)
  alien.setCollider("circle",0,0,20)
  alien.scale = 0.2
  alien.velocityX = i

  alien.lifetime=200;
  laserGroup.add(laser);
  alienGroup.add(alien);  
 }

}

