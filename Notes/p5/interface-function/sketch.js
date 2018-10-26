// 10/23/2018 — Create a box, If a cursor is over a box, do something
// creating abstract instructions, making our own tools
// build on what you have in the code
// what are the patterns you have repated over and over again in your character mid-term
// create one function for your hit zone and find out if you are over htat particular area.

// Intro to functions!

var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";


function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
// NEED TO CALL THE function - below, values are declared here!
  // display(random(width), random(height),random(255), random(0,100));
  display(posX, posY, colors, rectSize); // static view

  var box1 = check(mouseX, mouseY, posX, posY, rectSize); // this represents our check function

  //box 1 is going to equal both
  if(box1 == true){
    background("green");
  }

  display(posX+100, posY+100, "red", rectSize);
  var box2 = check(mouseX, mouseY, posX+100, posY+100, rectSize); // this represents our check function

  if(box2 == true){
    background("red");

  }
  // how do we know if it is true or false? Making compartments that are talking to each other.Chexking compartments
}

// creating a function version one below
// function display(){
//   fill(colors);
//   rect(posX, posY, rectSize, rectSize);
// }

// a display function these variables only exist here!
function display(tempX, tempY, tempC, tempS){
  fill(tempC);
  rect(tempX, tempY, tempS, tempS);
}

// check mouse position and location / boundaries of your box
function check(mX, mY, locX, locY, tempRsize){
  if(mX > locX && mX < locX + tempRsize && mY > locY && mY < locY + tempRsize){
    console.log("in box");
    return true; // good for if you have multiple boxes
  }else{
    return false; // true/false or variables or strings or numbers, can return anything
  }
}
