// split the canvas in half for day and night

var sun;
var moon;
var bgColor = ('blue');

var r = 255;
var g = 255;
var b = 255;

// 1st, create the shape for hit zone and distance
var cX = 100;
var cY = 250;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

var sunShow = false;

var sunButton;


// preload is a preset up and useful for loading images, video takes longer
/*
First step is to load all of your images;
make sure they are working
*/

function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage ('assets/moon.png');
}
// runs only once
function setup() {
  // put setup code here
  createCanvas(400,400);
  sunButton = createButton("Press to show/hide sun");
  sunButton.position(500,100);
  sunButton.mousePressed(function(){
    if(sunShow == false){
      sunShow = true;

    }else{
      sunShow = false;
    }
  });
}

/* loop loop loop
Think of person doing an action
*/
function draw() {
  // put drawing code here
  background(255);
    fill(r,g,b);
    rect(rectX,rectY,rectSize,rectSize);
    imageMode(CENTER);
    image(sun,cX,cY,sun.width/4,sun.height/4);

// fist don't show the sun
if(sunShow == true){
  image(sun, 300,200);
  }
}

function mousePressed(){
if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize) {
  r = random(0,256);
  g = random(0,256);
  b = random(0,256);
}

// Problem starts here?
var sunDist = dist(mouseX,mouseY,cX,cY);
  console.log ("sun Dist: " + sunDist); // check the size of the sun and boundaries
  if(sunDist < 40){
    //show/hide sun image
    if(sunShow == false){
      sunShow = true;

    }else{
      sunShow = false;
    } // end else
console.log (sunShow);
  }

} // The End
