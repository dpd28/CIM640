
// create an array of images what if you had 20 images, avoid repetitive, automate it
// good programmers are as lazy as possible

var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;

var interval = 2000; // two thousand seconds
var prevMillis = 0;

// an IF statements checks

function preload (){
  // var frameString = "assests/Thatwasclose0.jpg";
  // frameArray[0] = loadImage(frameString);
// starting point, condition and how it iterates
  for(var frames = 0; frames< frameAmounts; frames++){
    var frameString = "assests/Thatwasclose" + frames +".jpg";
    frameArray[frames] = loadImage(frameString);

  }
}

function setup (){
  createCanvas(500,500);

}

// average 30fps
function draw(){
  //frameRate(1);
  //console.log(millis());

  image(frameArray[currentFrame],0,0);
  if(millis() - prevMillis> interval){
    currentFrame++; // this is the holder for what current frame we are on
    prevMillis = millis();
  }
console.log(currentFrame);
  if(currentFrame > frameAmounts-1){
    currentFrame = 0;
  }

  ellipse(mouseX,mouseY,10,10);
}


// end of code
