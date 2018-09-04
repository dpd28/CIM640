/*
These are global variables. placement at the top.
*/

var a = 1;
var num1 = 2;
var b = 'b';
var word1 = 'word';
var trueFalse = true;
var sentences = "I'm a sentence";

// setup block of code than only runs once
function setup() {
  // put setup code here
  createCanvas(400,400);
  background(163,227,237);

  console.log(a + num1);
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
  // put drawing code here
// eyes
  stroke('black');
  strokeWeight(num1);
  //does not work, setupVariable's scope is only in the setup
  //strokeWeight(setupVariable);

  fill('white');
  ellipse (120,120,50,50);
  ellipse (180,120,50,50);
// pupils
  fill('black');
  ellipse (120,120,20,20);
  ellipse (180,120,20,20);
// mole
  fill('red');
//mouth
  rect(110,220,80,20);
  stroke('white');
  strokeWeight(5);
  point(width/2, height/2);
  line(110,230,190,230);
// pacperson
  arc(300,300,100,100,QUARTER_PI + PI, + HALF_PI + QUARTER_PI);
}
