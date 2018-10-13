/* ------
These are global variables. placement at the top.
First, declare variables. Then, add the value.
*/

var moth;
var firefly;
var bugs = []; // array of Jitter objects
var img;


/* ------
End Variables
*/

function preload (){
  moth = loadImage ('assets/moth.png');
  firefly = loadImage ('assets/firefly.png');
}


function setup() {
  createCanvas(710, 400);
  // Create objects
  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(50, 89, 100);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }

  image(moth, mouseX, mouseY);
  }


// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 0.5;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    image(moth, this.x, this.y, this.diameter, this.diameter); // duplicate
  };
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 25);
  this.speed = 0.5;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    image(firefly, this.x, this.y, this.diameter, this.diameter); // duplicate
  };
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
