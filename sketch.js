var wall,thickness;


var bullet,speed, weight; 


function setup() {
  createCanvas(1600, 400);

thickness = random(22,83);
	speed=random(223,321)
	weight=random(30,52)


	bullet=createSprite(50, 200, 50,5);   

	

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(keyDown("space")){
	bullet.velocityX = speed;
  }

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
    var damage = 0.5 * weight * speed* speed/(thickness,thickness,thickness);
    
	if(damage>10)
	{
    wall.shapeColor=color(255,0,0);
   
	}

	

	if(damage<10)
	{
    wall.shapeColor=color(0,255,0);
    
	}
  }  
textSize(15)
fill("gold");
  text("Speed:"+speed,30,50)
  text("Damage:"+damage,300,50)
  text("Wall Thickness:"+thickness,530,50)
  drawSprites();
 
}