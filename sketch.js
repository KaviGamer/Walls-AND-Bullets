var bullet,wall;
var speed,weight;
var deformation;
var thickness;
var damage;

function setup() {
createCanvas(1600,400);
speed = random(223,321);
weight = random(30,52);
bullet = createSprite(50,200,30,5);
wall = createSprite(1200,200,thickness,400/2);
wall.shapeColor=color(80,80,80);
}

function draw() {
background(0,100,0);
drawSprites();
textSize(15);
text("Damage: "+damage,1000,20);
damage = [(0.5*bulletweight*bulletspeed*bulletspeed)/wallthickness*wallthickness]

if(damage>10){

wall.shapeColor("red");

}

if(damage<10){

    wall.shapeColor("green");
    
    }


bullet.velocityX = speed;
bullet.collide(wall);
if(wall.width/2+bullet.width/2>bullet.x-wall.x && wall.width/2+bullet.width/2>wall.x-bullet.x && wall.width/2+bullet.width/2>bullet.y-wall.y && wall.width/2+bullet.width/2>bullet.y-wall.y){
deformation = (0.5*weight*speed)/22500
bullet.velocityX = 0;
}

thickness = random(22,83);

if(deformation<100){

bullet.shapeColor = (0,255,0);

}

if(deformation >100&& deformation <180){

bullet.shapeColor = (230,230,0);

}

if(deformation>180){

bullet.shapeColor = (255,0,0);

}
}