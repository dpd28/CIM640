// split the canvas in half for day and night

var sun;
var moon;
var bgColor = ('blue');

var r = 255;
var g = 255;
var b = 255;

// 1st, create the shape for hit zone and distance
var cX = 50;
var cY = 50;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;


// preload is a preset up and useful for loading images, video takes longer
/*
First step is to load all of your images;
make sure they are working
*/

function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage ('assets/moon.png');
}

function setup() {
  // put setup code here
  createCanvas(400,400)
}


function draw() {
  // put drawing code here

  frameRate (30);

  /* images can take a wide range of parameters.
  you can simply give and image what you want to output */
  // background(bgColor);
background(r,g,b); // tied to the variable
console.log ("mouseX: " + mouseX + " mouseY: " + mouseY);
// This is the interface for 1/2 day and 1/2 night
// textSize('Font Size 16');
  text("Move over each area to reveal a surprise!", 20,20);
  line(width/2,0, width/2, height);
  text("Day", 120,360);
  text("Night", 300,360);

//Interaction
/*
If statement is true execute this code
if(true)
You want to be able to debug
using console log.
*/

/*if(mouseX <= width/2) {
  // console.log ("Day Side");
  image(sun,100,100);
  bgColor=('blue');

}

if(mouseX > width/2) {
  // console.log ("Night Side");
  image(moon,100,100);
  bgColor=('black');
}
*/

// && specifies both conditions have to be true the 1st and 2nd have to be true

if(mouseX > 0 && mouseX < width/2) {
  // console.log ("Day Side");
  image(sun,100,100);
  bgColor=('blue');

}

if(mouseX >= width/2 && mouseX < width) {
  // console.log ("Night Side");
  image(moon,100,100);
  bgColor=('black');
}

ellipse (cX,cY,cEdge,cEdge);
var cDist = dist(cX,cY,mouseX,mouseY);
console.log ("cDist: " + cDist);

if(cDist < 10){
  r = 255;
  g = 0;
  b = 0;
} else {
  r = 255;
  g = 255;
  b = 255;

} // else statement is your default

/* This is one way to write this */
// if(mouseX > rectX && mouseX < rectX + rectSize){
//  if (mouseY > rectY && mouseY < rectY + rectSize){
// console.log ("I'm here");
//   } //nested if statements work from outside to inside
// }

// This is another way to write the above

if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
  console.log ("I'm here");
  r = random(256); // not 255; random fuctions go from 0-255
  g = random(0,256);
  b = random(0,256);
}

fill(r,g,b); // needs to be fixed
rect (rectX,rectY,rectSize,rectSize);

} // The End
