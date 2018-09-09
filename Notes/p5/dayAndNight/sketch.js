
var sun;

// preload is useful for loading images, video takes longer
function preload(){
  sun = loadImage('assets/sun.png');
}

function setup() {
  // put setup code here
  createCanvas(400,400)
}


function draw() {
  // put drawing code here
  /* images can take a wide range of parameters.
  you can simply give and image what you want to output */
  image(sun,100,100);
}
