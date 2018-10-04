// bouncing the ball exercisefunction

var xPos = 0;
var yPos = 100;
var ballSize = 20;


var trigger = false; // if false, we want to move down.
var trigger2 = false;
var speed = 5;

 function setup() {
  // put setup code here
  createCanvas(500, 500);
  xPos = width/2;
}

function draw() {
  // put drawing code here
background(255);
fill("blue");
  ellipse(xPos, yPos, ballSize, ballSize);
  if(trigger == false){ // this is the gas. engine
    yPos+=speed;
  } else {
    yPos-=speed; // yPos = yPos - speed; need to set a trigger, when you reach a point, change direction; sensors
  }


    if(trigger2 == false){
      xPos+=speed;

    }else {
          xPos-=speed;
    }

  if(yPos > height){
    trigger = true;

    // yPos = 0; // if y pos is greater than height …
    // yPos--; // need to set a trigger, when you reach a point, change direction
  }
  if(yPos < 0){
    trigger = false;
  }

  if(xPos > width){
    trigger2 = true;
  }

  if (xPos < 0){
    trigger2 = false;
  }


 // this is moving the ball in the x direction only
  // if(trigger == false){ // this is the gas. engine
  //   xPos+=speed;
  // } else {
  //   xPos-=speed;
  // }
  // if(xPos > width){
  //   trigger = true;
  // }
  // if(xPos < 0){
  //   trigger = false;
  // }

}// End of Code
