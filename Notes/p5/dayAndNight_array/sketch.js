var curImage, sun, moon;
var selection, textInput, submitButton;


// two arrays for x position and y position
// rule of thumb, make sure they are the same size or length
// var posX = [0,100,200,200];
// var posY = [0,100,200,300];

var posX = [];
var posY = [];

var numberOfImages = 0; // container for pattern


function preload(){
  sun = loadImage("assets/sun.png");
  moon = loadImage("assets/moon.png");

}


function setup() {
  // put setup code here
  createCanvas (400,400);
  selection = createSelect(); // createSelect creates a basic dropdown
  selection.position(10,10);
  selection.option ("sun");
  selection.option ("moon"); // every option needs a separate line
  selection.changed(function(){
    //  console.log(selection.value());


}); // changed = mousepressed same action. when there is a change in selection
textInput = createInput("# of images");
textInput.position(10,30);

submitButton = createButton("Create Pattern");
submitButton.position(10,50);
submitButton.mousePressed(function(){
  numberOfImages = textInput.value();
  console.log(numberOfImages);
  if (selection.value() == "sun") {
      curImage = sun;

  }else if (selection.value() == "moon"){
    curImage = moon;
    }
    
// redeclare posX and posY; make sure they are empty
posX = [];
posY = [];

// once a for loop is done, then destroyed
for(var a = 0; a < numberOfImages; a++){
  posX[a] = random(width); // the width of our canvas
  posY[a] = random(height);
  console.log("x: " + posX[a] + " y: " + posY[a]);
}



});

  curImage = sun;
  console.log (posX[0]);
}

function draw() {
  // put drawing code here
  //make sure both images working
//  frameRate(5);
background(255);
  // for(var i = 0; i < numberOfImages; i++ ){
  //   console.log(i);
  //   image(curImage, random(width),random(height), curImage.width/random(1,5), curImage.height/random(1,5));
  // }

// position 4 is empty. length is 4 but 0, 1, 2, 3 is only three that's why less then the length of the array.
  for(var i = 0; i<numberOfImages; i++){
    image(curImage,posX[i],posY[i],curImage.width/4, curImage.height/4);
  }
}
// end of code
