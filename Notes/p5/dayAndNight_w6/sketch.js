var curImage, sun, moon;
var selection, textInput, submitButton;
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
});

  curImage = sun;
}

function draw() {
  // put drawing code here
  //make sure both images working
  background(255);
  frameRate(5);
  for(var i = 0; i < numberOfImages; i++ ){
    console.log(i);
    image(curImage, random(width),random(height), curImage.width/random(1,5), curImage.height/random(1,5));

  }
}
// end of code
