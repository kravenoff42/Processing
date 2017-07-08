var wrapper = document.getElementById('wrapper');
var canvas;
const GRID_W = 100;
const GRID_H = GRID_W;
var offset = 4;
var cols;
var rows;
var grid;

function setup(){
    canvas = createCanvas(401,400);
    canvas.parent("wrapper");

    background(255);
    cols = floor(width/GRID_W);
    rows = floor(height/GRID_H);
    grid = new Array(cols);
    for(var i = 0; i<cols;i++){
      grid[i] = new Array(rows);
    }
    // valid(0,1);
    // noLoop();
}

function draw(){
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < cols; j++){
      if(valid(j,i)){
        stroke(255);
        fill(0);
        rect(j*GRID_W,i*GRID_H,GRID_W,GRID_H);
      }
    }
  }
  offset++;
}

function valid(x,y){
  var newY = y+offset;
  // console.log("x:",x,"y:",y,"rows:",rows,"cols:",cols);
  var v = floor(newY/cols);
  // console.log(v);
  var modK = newY%cols;
  // console.log(modK);
  var exp = cols*x;
  // console.log(exp);
  var negExp = -exp;
  var wholeExp = negExp-modK;
  // console.log(wholeExp);
  var twoPow = pow(2,wholeExp);
  // console.log(twoPow);
  var num = (v*twoPow)%2;
  // console.log(num);
  if(0.5<=num){
    return true;
  }else{
    return false;
  }
}
