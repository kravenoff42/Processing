var charArr;
var ctx;
var randCharX;
var randCharY;
// 9 wide, 6 tall grid of 24x24px icons
var indexArr = [];

function preload() {
    charArr = loadImage("chars.png");
}

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  noLoop();
}

function draw(){
  background(0);
  for (var i = 0; i < 100; i++) {

    randCharX = floor(random(9))*24;
    randCharY = floor(random(6))*24;
    randposX = floor(random(width/24))*24;
    randposY = floor(random(height/24))*24;
    drawChar(randposX,randposY,randCharX,randCharY);
  }
}

function drawChar(x, y, charX, charY){
  image(charArr,
      x, y,
      24, 24,
      charX, charY,
      24, 24);
}
