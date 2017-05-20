var bits = document.getElementById('bits');
const W = 12;
const H = 16;
var cols;
var rows;
var grid;

function setup(){
  var canvas = createCanvas(2000,600);
  canvas.parent(bits)
  frameRate(10);

  cols = floor(width/W);
  rows = floor(height/H);
  grid = new Array(cols);
  for(var i = 0; i<cols;i++){
    grid[i] = new Array(rows);
  }
  seedGrid();

}

function seedGrid(){
  for(var i = 0; i<cols; i++){
    for(var j = 0; j<rows; j++){
      grid[i][j] = new BitCell(i,j,true);
    }
  }
}

function draw(){
  background(64);
  if(random(1)<0.5){
    jumpStart();
  }
  for(var k = 0; k<cols;k++){
    for(var l = 0; l<rows; l++){
      grid[k][l].findNeighbors();
    }
  }
  for(var k = 0; k<cols;k++){
    for(var l = 0; l<rows; l++){
      grid[k][l].update();
    }
  }
  for(var k = 0; k<cols;k++){
    for(var l = 0; l<rows; l++){
      grid[k][l].show();
    }
  }
}

function jumpStart(){
  var startX = floor(random(cols-11));
  var endX = startX+10;
  var startY = floor(random(rows));
  for(var i = startX;i<=endX;i++){
    grid[i][startY].alive = "1";
  }
}
