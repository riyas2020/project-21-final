var thickness,wall,wall1;
var bullet,bullet1,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 100, 50, 50);
  bullet.shapeColor = "white"
  bullet1 = createSprite(50, 300, 50, 50);
  bullet1.shapeColor = "white"
  wall = createSprite(1200, 100, thickness, 150);
  wall.shapeColor = color(80,80,80);
  wall1 = createSprite(1200, 300, thickness, 150);
  wall1.shapeColor = color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random (22,83);
}

function draw() {
  background("black");  

  bullet.velocityX = speed;
  bullet1.velocityX = speed;

if (hasCollided(bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if (damage<10){
    wall.shapeColor = color(0,255,0);
  }

}

if (hasCollided(bullet1, wall1))
{
  bullet1.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (damage>10){
    wall1.shapeColor = color(255,0,0);
  }
  if (damage<10){
    wall1.shapeColor = color(0,255,0);
  }

}

  drawSprites();
}

function hasCollided(lbullet, lwall ){
bulletRightEdge = lbullet.x +lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}