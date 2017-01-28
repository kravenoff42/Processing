/*
n = points.length
angle = n * 137.5
r = c * sqrt(n)
x = r * cos(angle)
y = r* sin(angle)
*/
var n = 0;
var c = 6;
function setup() {

  createCanvas(1000,1000);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);

}

function draw() {
var angle = n * 137.5;
var r = c * sqrt(n);
var x = r * cos(angle) + width/2;
var y = r* sin(angle) + height/2;
fill(127,(angle-r)% 255,r % 256);
noStroke();
ellipse(x,y,10,10);
if (n<2000){n++;}
}
