// STYLES
var myFont;
var bgcolor;

// button
var poemButton;
var rg; // testing with Dan Schiffman riGrammar
var rgr; // replace with these words
var rg7;
var recheck = false;

// Give me confetti
var balls = [];

var imgA;
var imgB;
var imgC;
var imgD;
var imgE;



function preload() {
    myFont = loadFont('assets/fonts/DallianceOT-Roman.otf')
    // BELOW DOES NOT WORK
    // yaml = loadStrings('data/haiku-grammar.yaml');
    imgA = loadImage("assets/imgs/sea-life-01@1x.png");  // Load the image
    imgB = loadImage("assets/imgs/sea-life-02@1x.png");  // Load the image
    imgC = loadImage("assets/imgs/sea-life-03@1x.png");  // Load the image
    imgD = loadImage("assets/imgs/sea-life-04@1x.png");  // Load the image
    imgE = loadImage("assets/imgs/sea-life-05@1x.png");  // Load the image

}


function setup() {
// put setup code here

// TESTING with Dan Schiffman
// rg = new RiGrammar();
// rg.addRule('<start>','The <N> meows',1);
// rg.addRule('<N>', 'cat | dog');
// var result =rg.expand();
// console.log(result);

//TESTING TESTING ARGH FROM ONLINE EXAMPLE
rg = new RiGrammar();
// // rg.loadFrom("/data/haiku-grammar.yaml"); ERRORS!
rg.addRule('<start>', '<5-line> % <7-line> % <5-line>');
rg.addRule('<5-line>', '<1> <4> |<1> <3> <1> |<1> <1> <3> | <1> <2> <2> | <1> <2> <1> <1> | <1> <1> <2> <1> | <1> <1> <1> <2> | <1> <1> <1> <1> <1> | <2> <3> | <2> <2> <1> | <2> <1> <2> | <2> <1> <1> <1> | <3> <2> | <3> <1> <1> | <4> <1> | <5>');
rg.addRule('<7-line>', '<1> <1> <5-line> | <2> <5-line> | <5-line> <1> <1> | <5-line> <2>');
rg.addRule('<1>', 'nosh | and | sip | fruit | sinks | fate | you | brings | cloud | bursts | strikes | dark | wide | hair | ferns | thrive | dance | girls | fresh | snail | my | eyes | stars | love | stripes | grass | cat | leaves | smile | she | wave | sea | through | sound | mind | smoke | warm | globes');
rg.addRule('<2>', 'people | yellow | citrus | content | evening | faces | beguiles | maples | beneath | unfurls | exit | sprinkle | rooftop | kisses | trumpets | whispers | berries | morning | tickle | tendrils | lemon | snowflakes');
rg.addRule('<3>','piano | tequila | nocturnal | abundant | fiddleheads | caresses | idyllic | peony | evenings | ladybug | surfaces');
rg.addRule('<4>','eternity | alien | alligator | thunderstorm brews |  gold caresses | woo you away');
rg.addRule('<5>', 'applause fills the air | bubbles laugh out loud | spring hopes melt away | broken wings quiver | breezes surf blood leaves | courage rests in peace');
//var result = rg.expand();

//console.log(result);
lines = ["click to", "generate", "a haiku"];


//////////////
// Replace with these rules
//////////////
rgr = new RiGrammar();
rgr.addRule('<start>', '<5-line>');
rgr.addRule('<5-line>', '<1> <4> | <1> <3> <1> | <2> <3>');
rgr.addRule('<1>','joy | owls | dog | light | limbs | fate | snow | stars');
rgr.addRule('<2>', 'music | water | healing | feather | drowning | goosebumps');
rgr.addRule('<3>','discover | enlighten | peony | gardenia | rough waters | light kisses');
rgr.addRule('<4>','tears in your eyes | celebration | vegetable | beautiful tone | avocado');
rgr.addRule('<5>', 'moonlight sonata | soprano shivers | frazzled daisy spins');

rg7 = new RiGrammar();
rg7.addRule('<start>', '<7-line>');
rg7.addRule('<5-line>', '<1> <4> | <1> <3> <1> | <2> <3>');
rg7.addRule('<7-line>', '<1> <1> <5-line> | <2> <5-line> | <5-line> <1> <1> | <5-line> <2>');
rg7.addRule('<1>','joy | owls | dog | light | limbs | fate | snow | stars');
rg7.addRule('<2>', 'music | water | healing | feather | drowning | goosebumps');
rg7.addRule('<3>','discover | enlighten | peony | gardenia | rough waters | light kisses');
rg7.addRule('<4>','tears in your eyes | celebration | vegetable | beautiful tone | avocado');
rg7.addRule('<5>', 'moonlight sonata | soprano shivers | frazzled daisy spins');


  textFont(myFont);
  textSize(36);
  textAlign(CENTER);

  select("body").style("background-color", "#FFF");
  var container = createDiv(); //creates a div tag
  container.id("wrapper");
  // select("#container0").html("<h1>Hello World</h1>"); // u can do within the flow of your general program e.g. mousePressed
  select("#wrapper").style("width", "windowWidth");
  select("#wrapper").style("height", "windowHeight");
  select("#wrapper").style("margin", "0 auto");
  select("#wrapper").style("padding", "0px");
  select("#wrapper").style("text-align", "center");


  var cnv = createCanvas(windowWidth, windowHeight); //this creates a canvas object
    cnv.id("mycanvas");
    // select("#{}mycanvas").center();
    cnv.parent("wrapper"); //refers to the variable. looks at the object
    bgcolor = color(250);

    // var container2 = createDiv();
    // container2.id("poem");
    // select("#poem").style("width", "800");
    // select("#poem").style("height", "800");
    // select("poem").style("background", "red");


    ////////////////////////
    // TESTING TESTING
    ////////////////////////
    // // Create buttons
    //       poemButton = createButton("Change Background");
    // // Position the button
    //       poemButton.position(100,500);

} // END SETUP

function draw() {
  // put drawing code here
  // background(230, 240, 255);
  noStroke();
  background(bgcolor);
// Click to activate background
  // fill(255, 0, 0);
  // rect(200, 200, 200, 200);
  // fill(255);

  textSize(60);
  // text('Click on background of canvas.', 100, 550);
  // text(rg, 100,100);
  fill(0);
  text(lines[0], width / 2, 200);
  text(lines[1], width / 2, 275);
  text(lines[2], width / 2, 350);


//////////////////////////
// PATTERN TEST
/////////////////////////////
// noFill();
// noStroke();
// for(var x = 50; x <= width-50; x += 50){
//   for(var y = 50; y <= width-50; y += 50){
//     // line(x-10, y-10, x+10, y+10);
//     // line(x+10, y-10, x-10, y+10);
//     ellipse(x, y, 10, 10);
        // line(x,y, width/2, height/2);
//     }
//   }



// this for loop runs 50 times since balls.length is 50 (as defined in mousePressed() function)
  for (var i = 0; i < balls.length; i++) {
    balls[i].update();  //uses the code in balls.js to update the diameter and position of the ball
    balls[i].render();  //uses the code in ball.js file to update the color of balls. Now it is set to random colors
    if (balls[i].ballisFinished()) {
       //Diameter of the ellipses are made to decrease with time.
       //So when diameter becomes 0, that particular ball gets destroyed from memory by the below code
      balls.splice(i, 1);
    }
  }

  // Add images
    image(imgA, 150, 550);
    image(imgB, 325, 525);
    image(imgC, 550, 450);
    image(imgD, 725, 400);
    image(imgE, 1250, 525);

} // END DRAW — DO NOT REMOVE

function mousePressed () {
  bgcolor = color(random(253, 225), random(253, 225), random(253, 225));
  var result = rg.expand();
  // pass into function
   var checkHaiku = new RiString(result);
   var haiku = result.split("%");
   //var test = haiku[0].split(" ");
   //console.log(test);

   haikuCheck(haiku);

  // var replacedHaiku = checkHaiku;
  checkHaiku = checkHaiku.words();
  ///////////////////
  // THE ON-GOING REPLACE A REPEATING WORD SAGA CONTINUES BY ZEVEN …
  //////////////////
  // console.log(checkHaiku);
   //   for (var i = 0; i < haiku.length; i++){
   //     for(var words in checkHaiku){
   //       if(haiku[i].search(checkHaiku[words]) > -1){
   //         //find a new line
   //         //haiku[i] needs to change
   //         //haiku[i] = rgr.expand();
   //         //if haiku i == 0 or 2 5 line rule
   //         //if haiku i == 1 7 rule
   //         //recheck
   //
   //         if(i == 0 || i == 2){
   //           haiku[i] = rgr.expand();
   //           recheck = true;
   //           console.log("changed");
   //         }else if(i == 1){
   //           haiku[i] = rg7.expand();
   //           recheck = true;
   //           console.log("changed");
   //
   //         }
   //         break;
   //       }
   //
   //   }
   // }
  //   var currentWord = checkHaiku[words];
  //   // currentword = fruit
  //   for(var loopAgain in checkHaiku){
  //     // fruit == fruit
  //     if(words != loopAgain){
  //       if(currentWord == checkHaiku[loopAgain]){
  //         // replace word
  //
  //       }
  //     }
  //
  //   }
  // }
  for (var i = 0; i < lines.length; i++){
    lines[i] = haiku[i];
  }
// Thanks Manouj for your help. Dance party.
  if (mouseY < height) {
    for (var i = 0; i < 50; i++) {
      // adding new ball 50 times for each click
      balls.push(new Ball((mouseX + random(-30, 30)), mouseY + random(-30, 30)));
    }
  }
} // End mousePressed


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function haikuCheck(currentHaiku){
  var wordsArray = [];

  // wordsArray.push(currentHaiku[1].split(" "));
  // wordsArray.push(currentHaiku[2].split(" "));
  for(var lines in currentHaiku){
    if(lines < 3){
      var currentLine = currentHaiku[lines].split(" ");
      //console.log(currentLine);
       for(var words in currentLine){
        if(currentLine[words] != ""){
          wordsArray.push(currentLine[words]);
        }
      }
    }

  }

  console.log(wordsArray);
}
