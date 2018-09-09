/* ------
These are global variables. placement at the top.
First, declare variables. Then, add the value.
*/

// ColorStyles
var pupilColor = 'black';
var feetColor = 'black';
var faceColor = 'white';
// Position it
var facePosY = 313;
var toePosX = 475;
var toePosY = 695;
// Size Styles
var eyeWidth = 164;
var eyeHeight = 125;
var pupilWidth = 34;
var pupilHeight = 34;
var toeWidth = 25;
var midToeHeight = 55;
var outToeHeight = 45;

/* ------
End Variables
*/

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(67,142,172);
}

function draw() {
  // put drawing code here
  strokeWeight(0)

  // body
  fill (217,208,193);
  ellipse (562.5, 450, 426, 516);
  // face
  fill(faceColor);
  arc (475+87, facePosY+5, 339, 347, TWO_PI, PI);
  fill (faceColor);
  ellipse (475, facePosY, eyeWidth, eyeHeight); // left eye
  ellipse (650, facePosY, eyeWidth, eyeHeight); // right eye
  fill (pupilColor);
  ellipse (525, facePosY, pupilWidth, pupilHeight); //left pupil
  ellipse (600, facePosY, pupilWidth, pupilHeight); //right pupil
  fill(0);
  ellipse (563, 360, 12, 120); // beak
  fill (feetColor);
// first set of feet
  ellipse (toePosX, toePosY, toeWidth, outToeHeight); // outToe one
  ellipse (toePosX+25, toePosY, toeWidth, midToeHeight); // Midtoe two
  ellipse (toePosX+50, toePosY, toeWidth, outToeHeight); // outToe three
  // second set of feet
  ellipse (toePosX+125, toePosY, toeWidth, outToeHeight); // outToe one
  ellipse (toePosX+150, toePosY, toeWidth, midToeHeight); // Midtoe two
  ellipse (toePosX+175, toePosY, toeWidth, outToeHeight); // outToe three
} // do not delete!
