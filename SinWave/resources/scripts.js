
var a = 0;
var d = 400;
var x = -d/2;
var y = -d/2;
var p = 20;
var am = 15;

function setup(){
  createCanvas(700,700);
}
function draw(){
  background(0);
   y = mouseY-(height);
   x = mouseX-(width);
  translate(width/2,height/2);
  waveArray(10,30,0,x,y,a,d,p,am);
}

function waveArray(howMany, spacer,arrAngle, beginX, beginY, angle, dist, frequency, amp){

    var pos = beginY;
    rotate(arrAngle);
    for(var i = 0; i< howMany;i++){
      pos += spacer;

      drawWave(beginX, pos, a, dist, frequency, amp);
  }

}
function drawWave(beginX, beginY, angle, dist, frequency, amp){
  //console.log(d);
  var step;
  //var amp = amplitude /2;
  if(frequency>=3){
    step = dist/frequency;
  } else {
    step = dist/3;
  }
  var offset = step;
  noFill();
  stroke(255);
  strokeWeight(4);
  angleMode(DEGREES);
  push();
  rotate(angle);
  beginShape();
    curveVertex(beginX-frequency,     beginY);
    curveVertex(beginX,     beginY);
    while(offset<dist-step){
      curveVertex(beginX+offset,  beginY+amp);
      offset+=step;
      curveVertex(beginX+offset,  beginY);
      offset+=step;
    }
    curveVertex(beginX+offset,  beginY);
    //curveVertex(endX+1,  endY);
  endShape();
  pop();
}
