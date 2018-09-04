Magic Leap
Hololens
Lightform

At a rudimentary level
Use [Madmapper](https://madmapper.com/)
Use a mask (black) to create a design/drawing by removing the negative space.

To draw a point, use a point command
takes two points
A representation of a single pixel. no width, no height.
special keywords that allow you access to certain parts of your sketch.

Hey, give me the width and height of the sketch.
based off that, do an operation.

Don't hard code our values.
e.g. Our nose is at 200x200.
Don't do this because there are occasions where your canvas may change. Example: Your canvas increases. Flexible canvas. If you hard code, then each number needs to be adjusted.

Part of your job (in this program) is to start asking questions.
Multiple questions to ask.
Why all instances are affected?
Can I target one shape?

The inherent nature of p5
the stroke command is global, a switch, if on, and set as acolor, the stroke "switch" turns on an makes the point red and runs the loop through each shape.

next question, how do I make a stroke larger?
There is a nostroke command but it is a hachet major hack. DOn't use it.

Triangle runs in a clockwise position
1st, 2nd, 3rd points.
quad, same order but have to set all points

### Arcs
These are confusing because there is a specific set of parameters
Start and stop can be confusing.
specified by radians.
Circle broken up in degrees.
You can use 0 to twoPI or raidians
Understanding PI
Break up circle into a pie

0 is horizontal
Left to right arc is 2PI

for Pacman
start at quarterPI
TWO_PI - QUARTER_PI THis is an option alternative

What if we wanted to go full screen?

get into the habit of making your darwings dynamic so they can grow or scale with your screensize.

A variable is a represetnation (alhanumeric representation of a myriad of things. It can be numbers, letters, sentences, etc.)
They can represent groups of words, letters, numbers.
True and false statements.
These all can be held in a variable.

A variable in your computer is an allocation of space.
Tell computer to save this much space for this much information.
Variables are very easy to use in javascript beucause there is only one; you only declare a variable using only one term, _var_

When you declare a variable, you want to do it above the set up.

In javascript single or double quotes does not matter.
but in compound statements, you can use single and double if you want ton … compose with single quotes.

Generally single quotes are used for characters.
Physical computer use matters.
Variables are *case sensitive*

Soemtiems you want to see what the variables are doing.
Use Console.log();

it's good to comment your code.

if you define avariable in a block up code (in the set up for example), it is only availabe in the setup.
