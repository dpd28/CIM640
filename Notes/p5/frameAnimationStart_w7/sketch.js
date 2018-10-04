
// create an array of images what if you had 20 images, avoid repetitive, automate it
// good programmers are as lazy as possible

var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;

var interval = 2000; // two thousand seconds; has to do with frame rates
var prevMillis = 0;

var interval2 = 500; // framerates
var prevMillis = 0;
var counter = 0;

// Below is a  Pattern Key : values in this case is an array
var controls = {
                  "play" : [75,400,50, "green"],
                  "stop" : [130,400, 50, "red"],
                  "back" : [20, 400,50, "yellow"],
                  "forward" :[185, 400, 50, "orange"]
                };


var state = "stop";

// an IF statements checks

function preload (){
  // var frameString = "assests/Thatwasclose0.jpg";
  // frameArray[0] = loadImage(frameString);
// starting point, condition and how it iterates
  for(var frames = 0; frames< frameAmounts; frames++){
    var frameString = "assests/Thatwasclose" + frames +".jpg";
    frameArray[frames] = loadImage(frameString); // images in the array

  }
}

function setup (){
  createCanvas(500,500);
console.log(controls["play"]);
console.log(controls["play"][3]); //green

  for(var keys in controls){
    console.log (keys + " values: " + controls[keys]);
  }
}


// average 30fps
function draw(){
  //frameRate(1);
  //console.log(millis());

// animation is set to stop on page load. The only way this is going to be true if both are true.
  image(frameArray[currentFrame],0,0);
  if(millis() - prevMillis> interval && state == "play"){
    currentFrame++; // this is the holder for what current frame we are on
    prevMillis = millis();
  }
console.log(currentFrame);
// reset - if current frame is greater than 4 subtract by 1 and set to 0
  if(currentFrame > frameAmounts-1){
    currentFrame = 0;
  }

//   if(millis() - prevMillis2 > interval2){
//     counter++;
//     prevMillis2 = millis();
//   }
//
//   if(counter > width) {
//     counter = 0;
// }
//
//   ellipse (counter, height/2, 20,20);

  ellipse(mouseX,mouseY,10,10);

// this displays the buttons
  for(var keys in controls){
    fill(controls[keys][3]);
    rect(controls[keys][0], controls[keys][1], controls[keys][2],controls[keys][2]);
    text(keys,controls[keys][0], controls[keys][1] -10)

// hover state changes opacity
    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2] && mouseY > controls[keys][1] && mouseY < controls[keys][1] + controls[keys][2]){
    fill (127,127);
    rect(controls[keys][0], controls[keys][1], controls[keys][2],controls[keys][2])
      }
    }
}

function mousePressed (){
  for(var keys in controls){

    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2] && mouseY > controls[keys][1] && mouseY < controls[keys][1] + controls[keys][2]){

      state = keys; // this is referenced in the mouse and when clicked. IS the users mouse over the play or the stop or neither? Keys = key value [0] number inside matches the key value pair above
    if(state == "forward"){
      image(frameArray[currentFrame++],0,0); // current frame is accessing in the image array
      console.log(controls["forward"]);
      if(currentFrame > frameAmounts-1){
        currentFrame = 0;
      }
    }
    if(state == "back"){
      image(frameArray[currentFrame--],0,0);
      console.log(controls["back"]);
      if(currentFrame-1 < 0){
        currentFrame = 0;}
        else {
          currentFrame = currentFrame-1;
        }
        image(frameArray[currentFrame], 0,0);
      }
  }
}
}

// end of code
