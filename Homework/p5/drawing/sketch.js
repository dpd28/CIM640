/* ------
These are global variables. placement at the top.
First, declare variables. Then, add the value.
*/

// Text
// var greeting = true;
var greeting = "Hi, I’m Oliver, an owl.\nWould you like to meet my friends?";

// var goodbye = "I’m sleepy. Good night."
var instructions = "Press any key to learn more about owls below";

// This is an array of owl facts. 0 = the first one
var owlFacts = ["There are around 200 different owl species, Owls are active at night (nocturnal).", "A group of owls is called a parliament.", "Most owls hunt insects, small mammals and other birds.", "Some owl species hunt fish.", "Owls can turn their heads as much as 270 degrees.", "Owls are very quiet in flight compared to other birds of prey.", "Owls have powerful talons (claws) which help them catch and kill prey.", "Owls are farsighted, meaning they can’t see things close to their eyes clearly."];

// ColorStyles
var pupilColor = 'black';
var feetColor = 'black';
var faceColor = 'white';
var tieColor = 'rgb(163,0,0)';
var r = 67;
var g = 142;
var b = 172;
var factsColor = 'rgb(163,0,0)';

var keyPressedCount=0;
var yesKeyPressed=false;

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

// Create hit zone shape and figure out distance
var bellyColor = 'white';
var bellyBX = 563;
var bellyBY = 600;
var bellyBEdge = 20;

var states = 0;

/* ------------------- End Variables -------------- */

function preload (){
  moth = loadImage ('assets/moth.png');
  firefly = loadImage ('assets/firefly.png');
  tree = loadImage ('assets/tree-dblue@2x.png');
  tree2 = loadImage ('assets/tree-dblue-wide@2x.png');
  myFont = loadFont ('assets/Firme/Firme-Bold.otf');
}

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);

  // Fireflies, code from p5js reference section
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
    yesButton.position(855,225);
    noButton.position(920,225);
    resetButton.position(983,225);
// Button input
    yesButton.mousePressed(function(){
      yesPressed = true;
      noPressed = false;
      resetPressed = false;
      states = 1;
    }
  );
    noButton.mousePressed(function (){
      yesPressed = false;
      noPressed = true;
      resetPressed = false;
      r = 67;
      g = 142;
      b = 172;
      states = 2;
    }
  );
    resetButton.mousePressed(function (){
      yesPressed = false;
      noPressed = false;
      resetPressed = true;
      states = 0;
    }
  );
} // end setup


function draw() {
  background(r,g,b);
  image(tree,75,40);
  image(tree2, 920,100);

  strokeWeight(0);
  fill(textColor);
  textSize(30);
  textFont(myFont);

// Button Outputs
// This is No Button Pressed
if(states == 2){
    text("OK, maybe next time.", 850,150);
   }

// This is Reset Button Pressed
if(states == 0){
    text(greeting, 850,150);
    r = 67;
    g = 142;
    b = 172;
   }

// This is Yes Button Pressed
if(states == 1){
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


// ADD FOR JITTER
for (var i=0; i<bugs.length; i++) {
  bugs[i].move();
  bugs[i].display();
}


// Instructions to tell user to key press
  fill('white');
  textSize(15);
  text(instructions, 850, 670);

// Oliver's Body
    fill (217,208,193);
    ellipse (bodyX, bodyY, bodyWidth, bodyHeight);

// ears
    triangle (420,155,550,210,390,340);
    triangle (600,210,700,155,720,340);

// bellybutton
    fill(bellyColor);
    text("Move over my belly button to see what happens.", 20,600);
    fill ('rgb(139,131,120)');
    ellipse (bellyBX, bellyBY, bellyBEdge, bellyBEdge); // beak, x and y in translate
    var cDist = dist(bellyBX,bellyBY,mouseX,mouseY);
//  console.log ("cDist: " + cDist);

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

// Branch
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

      if(yesKeyPressed == true){
        fill(factsColor);
        textSize(18);
        text(owlFacts[keyPressedCount], 850, 730);
      }
} // do not delete!

function keyPressed(){
  yesKeyPressed = true;
  keyPressedCount++;
  if(keyPressedCount >= owlFacts.length){
    keyPressedCount = 0;
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

/* --------
These worked but changed my mind
------- */

// add moth and firefly
// image (moth, 100, 300);
// image (firefly, 200, 300);


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

/* --------
Everything I tried that did not work
-------- */

// Owl facts from CSV file
// for (var i = 0; i < owlFacts.getRowCount(); i++){
//   var owlInfo = owlFacts.get(i, 0);
//   print(owlInfo);
// }
