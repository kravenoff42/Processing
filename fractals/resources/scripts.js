var instructions = [];qAWSQ
function setup(){
  createCanvas(600, 600);
}
function draw(){
  background(0);
  //drawCircle(width/2, height/2, 300);
}

function factorial(n)
{
  if(n-1 == 1){
  return n;
  }
  else{
    factorial(n*(n-1));
  }
}

function drawCircle( x, y, d){
  stroke(255);
  noFill();
  ellipse(x,y,d,d);
  if(d>0){
    drawCircle(x,y,d/2);
  }
}

function keyPressed(){
  if(key = ' '){
    generate();
  }
}

function MapLine(begin,end){
  this.begin = begin;
  this.end = end;
}
console.log();
