var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(20,8,50,50);
  weight = random(30,52);
  speed = random(223,321)
  wall =createSprite(1200, 200, thickness, height/2);
  thickness = random(22,83)
  
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
  return true
  }
  return false 
}

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = (0.5*weight*speed*speed)/( thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor = (255,0,0)
  }

  if(damage<10){
    wall.shapeColor = (0,255,0)
  }

}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x < ((car.width+wall.width)/2)){
 
    car.velocityX = 0;
    var deformation = (0.5*car.weight*car.speed*car.speed)/22500;

  if(deformation<100){
   car.shapeColor = "green"
  }
  if(deformation>100 && deformation<180){
    car.shapeColor = "yellow"
   }
   if(deformation>180){
    car.shapeColor = "red"
   }
  }
  drawSprites();
}
