/* ------
These are global variables. placement at the top.
First, declare variables. Then, add the value.
*/


// var greeting = true;
var greeting = "Hi, I’m Oliver.";
var goodbye = "I’m sleepy. Good night."
var question = "¿Cómo se llama?";

// ColorStyles
var pupilColor = 'black';
var feetColor = 'black';
var faceColor = 'white';
var tieColor = 'rgb(163,0,0)';
var r = 67;
var g = 142;
var b = 172;

// Position it
var facePosY = 313;
var toePosX = 475;
var toePosY = 695;

// Size Styles
var bodyX = 562.5;
var bodyY = 450;
var bodyWidth = 450;
var bodyHeight = 516;
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
} // end setup



function draw() {
  background(r,g,b); // connected to variable

  // put drawing code here
    strokeWeight(0)
  // beginShape (); and make sure endShape

  textSize(32);
  textFont('Georgia');


  // body
    fill (217,208,193);
    ellipse (bodyX, bodyY, bodyWidth, bodyHeight);
    var mouseOverOwl = false;
    var bodyDist = dist(bodyX, bodyY, mouseX, mouseY);
    console.log ("bodyDist: " + bodyDist);

if(bodyDist < 225){
  mouseOverOwl = true;
      r = 0;
      g = 51;
      b = 102;
      pupilColor=(112,128,144);

}  else {
  mouseOverOwl = false;
    r=67;
    g=142;
    b=172;
    pupilColor=('black');
}

  // ears
    triangle (420,155,550,210,390,340);
    triangle (600,210,700,155,720,340);

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

  // bow tie
    fill(tieColor);
    triangle(520,500,563,520,520,540);
    ellipse(563,520,20,20);
    triangle(563,520,605,500,605,540);

    if(mouseX >=520 && mouseX <=605){
      tieColor=('black');
    } else {
      tieColor=('rgb(163,0,0)');
    }


    fill('rgb(255,245,238)');
    rect(0, 695, windowWidth, 60);

    // first set of feet
      fill(0);
      ellipse (toePosX, toePosY, toeWidth, outToeHeight); // outToe one
      ellipse (toePosX+25, toePosY, toeWidth, midToeHeight); // Midtoe two
      ellipse (toePosX+50, toePosY, toeWidth, outToeHeight); // outToe three
    // second set of feet
      ellipse (toePosX+125, toePosY, toeWidth, outToeHeight); // outToe one
      ellipse (toePosX+150, toePosY, toeWidth, midToeHeight); // Midtoe two
      ellipse (toePosX+175, toePosY, toeWidth, outToeHeight); // outToe three

// change greeting to goodnight
    if(mouseOverOwl == false){
      fill(255);
      text(greeting, 850,150);
    } else {
      fill('rgb(255,215,0)')
      text(goodbye, 850, 200);
    }

// jiggle feet
    if(mouseIsPressed){
      toePosX = toePosX + random(-1, 1);
    }

} // do not delete!

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
