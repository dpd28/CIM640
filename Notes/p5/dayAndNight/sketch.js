// split the canvas in half for day and night

var sun;
var moon;
var bgColor = ('blue');

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
  /* images can take a wide range of parameters.
  you can simply give and image what you want to output */
background(bgColor);
console.log ("mouseX: " + mouseX + " mouseY: " + mouseY);
// This is the interface
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

if(mouseX <= width/2) {
  // console.log ("Day Side");
  image(sun,100,100);
  bgColor=('blue');

}

if(mouseX > width/2) {
  // console.log ("Night Side");
  image(moon,100,100);
  bgColor=('black');
}







} // The End
