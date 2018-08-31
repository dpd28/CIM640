Create a markdown file and add documentation to the impossible app md file.

A library is a collection of code. It grabs a portion of your code, reads it and unpacks it to do different interactions on your web browser.

p5 library
Add on section
This is where you will be putting your extra libraries

Built into p5js, it comes prepackaged with DOM and SOUND.

p5DOM = interacts with HTML

p5Sound is a large library allows you to create music synthesis, speech recognition, sound synthesis, creating or taking input.

Index and Sketch doc.js
All code goes here.

How to set up your environment.
REcommendations:

1 copy in Notes
1 copy in Homework

Javascript files are preprocessed in the head tag.
Meta tags - information about the pages
Style tags - CSS
Script tags
Understand the general structure, if you have to add a library or change some stuff around, follow this structure.

<!-- this means up one directory ../ based off current location, step back and find the p5js library -->

Index file brings everything together.

Creates the canvas, now draw to the canvas
a function is a block of code, a container that runs on what it is called. it looks for these two functions, set up and then the draw function.

Setup runs once. The prequel to running the draw function. It is meant to set up variables, size, color, all of these type of instructions can be used in the set up function.

once processed. Then go into the "draw loop". Infinite loop that runs you code.

parameters are the building blocks to help a function exist.
When we create a canvas, we want to give it a size (dimension pixels)

0 = black
255 = white

Console in inspector will tell you if you have an error.

Basic Error messages
"Not defined" Incorrect spelling.
Missing parameters

0-255 greyscale
using RGB
Can use "orange"
or hex values
https://www.htmlcsscolor.com/color-names-rgb-values/B

Understand a basic grid in p5js.
Start with the upper left hand corner.
Always reference the upper left hand corner.
0,0 origin point.

ellipse and rectangle
Ellipse is based on the center point
10,10 (is the center)
10x10 circle.
Draws from the center, 10 pixels wide and 10 pixels high
5 pixel diameter

Rectangles
20, 20
based off upper left hand corner
Size: 10x10 pixels

to draw, put code in the draw loop
Ellipse takes 4 parameters

look at the patterns
look at things you can take from another statement
