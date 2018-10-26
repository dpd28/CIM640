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

var button1; // empty button, variable
var button2;

var buttonArray = [];

function setup() {
  // put setup code here
  createCanvas(400, 400);
  button1 = new interfaces(100,200,50,"red", "Red Button"); // button 1 is now an interface object
  button2 = new interfaces (200, 200, 50, "green", "Green Button");
}

for(var i =0; i < 10; i++){
  var c = color (random(255), random(255));
  buttonArray[i] = new interfaces(random(width), random(height), 50, c,i);
}

function draw() {
  // put drawing code here
  // display(random(width), random(height),random(255), random(0,100));
  background(255);
  button1.display(); // display is a function of the object   if(button1.check(mouseX,mouseY) == true) < iff statements are true

  if(button1.check(mouseX,mouseY)){
    console.log(button1.name); // this is inefficient with just button1
  }
  button2.display();
  button2.check(mouseX,mouseY);
  for(var = 0; i < buttonArray.length; i++){
    buttonArray[i].display();
    if(buttonArray[i].check(mouseX, mouseY)){
      console.log(buttonArray[i].name);
      background(buttonArray[i].color);
    }
  }
}

// creating a function version one below
// function display(){
//   fill(colors);
//   rect(posX, posY, rectSize, rectSize);
// }

// // a display function these variables only exist here!
// function display(tempX, tempY, tempC, tempS){
//   fill(tempC);
//   rect(tempX, tempY, tempS, tempS);
// }
//
// // check mouse position and location / boundaries of your box
// function check(mX, mY, locX, locY, tempRsize){
//   if(mX > locX && mX < locX + tempRsize && mY > locY && mY < locY + tempRsize){
//     console.log("in box");
//     return true; // good for if you have multiple boxes
//   }else{
//     return false; // true/false or variables or strings or numbers, can return anything
//   }
// }

// class is not related to draw

class interfaces {
// create a constructor, a building block for your object
  constructor(tempX, tempY, tempS, tempC, tempName){
    // set a min amount of characteristics
    // unlike a function, a parameter of a constructor are pass-throughs; pass to the actual object.
    this.x = tempX; // this refers to the current interface object (reference objects)
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay = false; // deosn't have to be a parameter
    // I need to understand this number. Creating a protocall. Here is a number and corresponds to an x value. Absorb and transfer … Once we have the constructor, the interaface, then you can go into creating your function.


}// end constructor

display(){
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    text(this.name, this.x, this.y-10);
  }

  if(this.overlay == true){
    fill(127,127);
    rect(this.x, this.y, this.size, this.size); // now need to set the overlay
  }

// actions
check(mX, mY){
  if(mX > this.x && mX < this.x + this.size && mY > this.y && mY < this.y + this.size){
    this.overlay = true;
    return true;
  }else {
    this.overlay = false;
    return false;
  }
}

}
