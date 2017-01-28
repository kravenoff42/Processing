var r = 10;
var n = 2
var k = 5;
var grid = [];
var w = r / Math.sqrt(n);
var active = [];

function setup(){
  createCanvas(700,700);

  var cols = floor(width/w);
  var rows = floor(height/w);
  for (var i=0;i<cols*rows;i++){
    grid[i]=-1;
  }
  var x = random(width);
  var y = random(height);
  var i = floor(x/w);
  var j = floor(y/w);
  var pos = createVector(x,y);
  grid[i+j * cols] = pos;
  active.push(pos);
}
function draw(){
  background(127);

  if(active.length > 0){
    var index = floor(random(active.length));
    var currPos = active[index];
    var r = index;
    for(var i =n; i<k;i++){
      var angle = random(TWO_PI);
      var offsetX = cos(angle);
      var offsetY = sin(angle);
      var newPos = createVector(offsetX, offsetY);
      var m = random(r,2*r);
      newPos.setMag(m);
      newPos.add(currPos);
    }
  }
  for (var i=0;i<grid.length;i++){
    if(grid[i] != -1){
      stroke(255);
      strokeWeight(4);
      point(grid[i].x,grid[i].y);
    }
  }
  for (var i=0;i<active.length;i++){

      stroke(255,0,0);
      strokeWeight(4);
      point(active[i].x ,active[i].y);

  }
}
