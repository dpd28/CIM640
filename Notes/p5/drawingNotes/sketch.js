/*
These are global variables. placement at the top.

*/

var a = 1;
var num1 = 2;
var b = 'b';
var word1 = 'word';
var trueFalse = true;
var sentences = "I'm a sentence";

var charColor = "orange";
var eyeSize = 50; // change the eyesize only

var facePosX = 150;
var facePosY = 120;

// setup block of code than only runs once
function setup() {
  // put setup code here
  createCanvas(400,400);
  background(163,227,237); // use this to reset the canvas

  console.log(a + num1); //
  console.log(a-num1);
  console.log(a + b);
  console.log(a * b);
  // single line comment
  /*
  Block of comments
  */

  /* this is only in setup scope.
  Scope is the reach that your variable has.
  only available in setup.
  */
  var setupVariable = 5;
}

// if you create a variable in the draw, not available in the setup
function draw() {
  background(163,227,237);
  facePosX = mouseX;
  facePosY = mouseY;

  // put drawing code here
// eyes
  stroke('black');
  strokeWeight(num1);
  //does not work, setupVariable's scope is only in the setup
  //strokeWeight(setupVariable);

  fill('charColor');
  ellipse (facePosX,facePosY,eyeSize,eyeSize);
  ellipse (facePosX+60,facePosY,eyeSize,eyeSize);
// pupils
  fill('black');
  ellipse (facePosX,facePosY,20,20);
  ellipse (facePosX+60,facePosY,20,20);
// mole
  fill('red');
//mouth
  rect(facePosX,facePosY+100,80,20);
  stroke('white');
  strokeWeight(5);
  point(width/2, height/2);
  line(facePosX+20,facePosY+100,190,230);
// pacperson
  arc(facePosX + 100,facePosY + 100,100,100,QUARTER_PI + PI, + HALF_PI + QUARTER_PI);
}



// mousePressed is a function to understand has been pressed?
function mousePressed(){
  charColor = "blue";
}
