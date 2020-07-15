var car1, wall;
var speed, weight;

var deformation;



function setup() {
  createCanvas(1600,400);
  
  


  speed = random(55,90);
  weight = random(400,1500);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
  car1 = createSprite(50,200,50,50);
  car1.velocityX = speed;

  deformation = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background(255,255,255); 
  
  if (car1.isTouching(wall)) {

    car1.velocityX = 0;

    if(deformation<100){
        car1.shapeColor = "green";
    }

    if(deformation>100 && deformation<180){
        car1.shapeColor = "yellow";
    }

    if(deformation>180){
      car1.shapeColor = "red";
    }
  }




  drawSprites();
}