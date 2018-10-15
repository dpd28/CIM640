/* ------
These are global variables. placement at the top.
First, declare variables. Then, add the value.
*/

// Text
// var greeting = true;
var greeting = "Hi, I’m Oliver, an owl.\nWould you like to meet my friends?";

// var goodbye = "I’m sleepy. Good night."
var instructions = "Press the arrow keys to learn more about owls";

// This is an array of owl facts. 0 = the first one
var owlFacts = ["There are around 200 different owl species, Owls are active at night (nocturnal).", "A group of owls is called a parliament.", "Most owls hunt insects, small mammals and other birds.", "Some owl species hunt fish., Owls can turn their heads as much as 270 degrees.", "Owls are very quiet in flight compared to other birds of prey.", "Owls have powerful talons (claws) which help them catch and kill prey.", "Owls are farsighted, meaning they can’t see things close to their eyes clearly."];

// ColorStyles
var pupilColor = 'black';
var feetColor = 'black';
var faceColor = 'white';
var tieColor = 'rgb(163,0,0)';
var r = 67;
var g = 142;
var b = 172;

// Type Styles
var myFont;
var textColor;

// Position it
var facePosY = 313;
var toePosX = 475;
var toePosY = 695;

// Size Styles
var bodyX = 562.5; // numerical value
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

var tiePos = 0;

// Images
var moth;
var firefly;
var tree;
var tree2;
var bugs = []; // [] is an array of Jitter objects

// Buttons
var yesButton;
var noButton;
var resetButton;

// Interactions

var yesPressed = false;
var noPressed = false; // false because btn hasn't been pressed
var resetPressed = false;

var easing = 0.1; // Qinyu helped me with easing!!!!
var targetX;
var targetY;
var x;
var y;

var value = 0; // keypressed test example

// Create hit zone shape and figure out distance
var bellyColor = 'white';
var bellyBX = 563;
var bellyBY = 600;
var bellyBEdge = 20;

/* ------
End Variables
*/

function preload (){
  moth = loadImage ('assets/moth.png');
  firefly = loadImage ('assets/firefly.png');
  tree = loadImage ('assets/tree-dblue@2x.png');
  tree2 = loadImage ('assets/tree-dblue-wide@2x.png');
  myFont = loadFont ('assets/Firme/Firme-Bold.otf');
  // owlFacts = loadTable('assets/owl-facts.csv');
}

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);

  // Owl facts from CSV file
  // for (var i = 0; i < owlFacts.getRowCount(); i++){
  //   var owlInfo = owlFacts.get(i, 0);
  //   print(owlInfo);
  // }

//Testing
  for (var i = 0; i<10; i++){
    owlFacts[i] = random;
  }

  // Fireflies
    for (var i=0; i<50; i++) {
      bugs.push(new Jitter());
    }

    x = mouseX;
    y = mouseY;

    textColor = color(255, 255, 255)

// create the buttons
    yesButton = createButton("Yes"); // this is the text inside the button
    noButton = createButton("No");
    resetButton = createButton("Reset");
// Position the buttons
    yesButton.position(855,250);
    noButton.position(920,250);
    resetButton.position(985, 250);
// Button input
    yesButton.mousePressed(function(){
      yesPressed = true;
      noPressed = false;
      resetPressed = false;
    }
  );
    noButton.mousePressed(function (){
      yesPressed = false;
      noPressed = true;
      resetPressed = false;
      r = 67; // values in the setup??
      g = 142;
      b = 172;
    }
  );
    resetButton.mousePressed(function (){
      yesPressed = false;
      noPressed = false;
      resetPressed = true;
    }
  );
} // end setup



function draw() {
  background(r,g,b);
  image(tree,75,40); // connected to variable
  image(tree2, 920,100);

// put drawing code here
  strokeWeight(0);
  fill(textColor);
  textSize(30);
  textFont(myFont);

// Button Outputs
if(noPressed == true){
  text("OK, maybe next time.", 850,150);
   }

if(noPressed == false && yesPressed == false){
     text(greeting, 850,150);
// how to change background color to default?
    r = 67;
    g = 142;
    b = 172;
   }

if(yesPressed == true){
     text("Yay! Meet the fireflies.\nThey make me smile.", 850,150);
     targetX = mouseX;
     targetY = mouseY; // current posiiton of Y
     x=x+(targetX-x)*easing; // Qinyu helped me with this.
     y=y+(targetY-y)*easing;
     image(firefly, x, y, 50, 50);
     image(firefly, x+70, y-70, 25, 25);
     image(firefly, x+50, y+50);
     image(firefly, x-70, y-20, 40, 40);
// change background color
     r = 0;
     g = 51;
     b = 102;
   }

// can't figure out why this doesn't work
   if(resetPressed == true){
     r = 67;
     g = 142;
     b = 172;
   }

// add moth and firefly
// image (moth, 100, 300);
// image (firefly, 200, 300);

// ADD FOR JITTER
for (var i=0; i<bugs.length; i++) {
  bugs[i].move();
  bugs[i].display();
}
// keypressed example
  fill(value);
  rect(25, 25, 50, 50);

  fill('white');
  textSize(12);
  text(instructions, 25, 600);

  // Owl Facts
    fill('white');
    rect(850,620,500,50);


// Oliver's Body
    fill (217,208,193);
    ellipse (bodyX, bodyY, bodyWidth, bodyHeight);

// OLD HOVER OVER OLIVER
    // var mouseOverOwl = false;
    // var bodyDist = dist(bodyX, bodyY, mouseX, mouseY);
    // console.log ("bodyDist: " + bodyDist);
// if(bodyDist < 225){
//   mouseOverOwl = true;
//       r = 0;
//       g = 51;
//       b = 102;
//       pupilColor=(112,128,144);
//       // Moth follows mouse
//       image(moth, mouseX, mouseY);
// }  else {
//   mouseOverOwl = false;
//     r=67;
//     g=142;
//     b=172;
//     pupilColor=('#cccccc');
// }

// ears
    triangle (420,155,550,210,390,340);
    triangle (600,210,700,155,720,340);

// bellybutton
  fill(bellyColor);
  text("Move over my belly button to see what happens.", 800,600);
  fill ('rgb(139,131,120)');
  ellipse (bellyBX, bellyBY, bellyBEdge, bellyBEdge); // beak, x and y in translate
  var cDist = dist(bellyBX,bellyBY,mouseX,mouseY);
  console.log ("cDist: " + cDist);

// change to jiggle and rotate
  if(cDist < 10){
    toePosX = toePosX + random(-1, 1);
    tiePos++;
  }else{
    tiePos = 0;
} // else statement is your default


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

    ellipse (563, 360, 12, 120); // beak, x and y in translate
    fill (feetColor);


// bow tie

  push();
  translate(563,500); // which x, y?
  rotate(radians(tiePos));
    fill(tieColor);

    // Original values to position bow tie
    // triangle(520,500,563,520,520,540);
    // ellipse(563,520,20,20);
    // triangle(563,520,605,500,605,540);


    triangle(-43,-20,0,0,-43,20);
    ellipse(0,0,20,20);
    triangle(0,0,42,-20,42,20);


    // (0,20,42,0,42,40) move everything up y position by 20 pixels
    //rotate(radians(tiePos));

    pop();


// mouse changes bow tie color on hover
    if(mouseX >=520 && mouseX <=605){
      tieColor=('#ff1493');
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
    // if(mouseOverOwl == false){
    //   fill(255);
    //   text(greeting, 850,150);
    // } else {
    //   fill('rgb(255,215,0)')
    //   text(goodbye, 850, 200);
    // }

// Changed this from mousepressed to hit zone.
/*
 if(mouseIsPressed){
      toePosX = toePosX + random(-1, 1);
      //tiePos = 10;
      tiePos++;
    }else{
      tiePos = 0; // zeven helped with this with the beak
}
*/


} // do not delete!


// Facts?
function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

// From p5js Reference

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(15,40);
  this.speed = 0.5;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    if (yesPressed == true){
          image(firefly, this.x, this.y, this.diameter, this.diameter); // duplicate
    }
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
