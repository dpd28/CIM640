function setup() {
  // put setup code here

  select("body").style("background-color", "pink");
  var container0 = createDiv(); //creates a div tag
  container0.id("container0");
  select("#container0").html("<h1>Hello World</h1>"); // u can do within the flow of your general program e.g. mousePressed
  select("#container0").style("width", "400px");
  select("#container0").style("margin", "0 auto");
  select("#container0").style("background-color", "yellow");
  select("#container0").style("padding", "20px");
  select("#container0").style("font-family", "Helvetica");
  select("#container0").style("text-align", "center");
  var cnv = createCanvas(400,400); //this creates a canvas object
    cnv.id("mycanvas");
    // select("#{}mycanvas").center();
    cnv.parent("container0"); //refers to the variable. looks at the object
}

function draw() {
  // put drawing code here
  background("orange");
}
