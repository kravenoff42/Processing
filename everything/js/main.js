var wrapper = document.getElementById('wrapper');
var canvas;
const GRID_W = 80;
const GRID_H = GRID_W;
var cols;
var rows;
var squares = [];
var centers = [];
var grid;

function setup(){
    canvas = createCanvas(601,400);
    canvas.parent("wrapper");

    background(255);
    cols = floor(width/GRID_W);
    rows = floor(height/GRID_H);
    grid = new Array(cols);
    for(var i = 0; i<cols;i++){
      grid[i] = new Array(rows);
    }
    grid();
}

function draw(){
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < cols; j++){
      grid[j][i].checkNeighbors();
    }
  }
}

function grid(){
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < cols; j++){
      grid[j][i] = new Knode(j,i);
    }
  }
}
      // var x = j*GRID_W;
      // var y = i*GRID_H;
      // var cx = x+(GRID_W/2);
      // var cy = y+(GRID_H/2);
      // var lx = x+GRID_W;
      // var ly = y+GRID_H;
      // squares.push(createVector(x,y));
      // centers.push(createVector(cx,cy));
      // rect(x,y,GRID_W,GRID_H);
      // ellipse(cx,cy,GRID_W/4,GRID_H/4);
      // var n = createVector(x+GRID_W*0.25,y+GRID_H*0.25);
      // var nRot = 0;
      // var e = createVector(x+GRID_W*0.75,y+GRID_H*0.25);
      // var eRot = PI/2;
      // var s = createVector(x+GRID_W*0.75,y+GRID_H*0.75);
      // var sRot = PI;
      // var w = createVector(x+GRID_W*0.25,y+GRID_H*0.75);
      // var wRot = -PI/2;
      // angleLine(n.x,n.y,nRot);
      // angleLine(e.x,e.y,eRot);
      // angleLine(s.x,s.y,sRot);
      // angleLine(w.x,w.y,wRot);
      // straightLine(n.x,n.y,nRot);
      // straightLine(e.x,e.y,eRot);
      // straightLine(s.x,s.y,sRot);
      // straightLine(w.x,w.y,wRot);
      // line(cx,y,lx,cy);
      // line(lx,cy,cx,ly);
      // line(cx,ly,x,cy);
      // line(x,cy,cx,y);
  //   }
  // }
// }

// function angleLine(x,y,side){
//   push();
//   translate(x,y);
//   rotate(side);
//   line(0,-1,GRID_W*0.25,-GRID_H*0.25);
//   line(GRID_W*0.25,-GRID_H*0.25,GRID_W*0.5,0);
//   pop();
// }
//
// function straightLine(x,y,side){
//   push();
//   translate(x,y);
//   rotate(side);
//   line(0,0,GRID_W*0.5,0);
//   pop();
// }

// x, y	            x+w*0.25, y	        x+w*0.5, y	       x+w*0.75, y	      x+w, y
// x, y+h*0.25	    x+w*0.25, y+h*0.25	x+w*0.5, y+h*0.25	 x+w*0.75, y+h*0.25	x+w, y+h*0.25
// x, y+h*0.5	      x+w*0.25, y+h*0.5	  x+w*0.5, y+h*0.5	 x+w*0.75, y+h*0.5	x+w, y+h*0.5
// x, y+h*.75	      x+w*0.25, y+h*.75	  x+w*0.5, y+h*.75	 x+w*0.75, y+h*.75	x+w, y+h*.75
// x, y+h	          x+w*0.25, y+h	      x+w*0.5, y+h	     x+w*0.75, y+h	    x+w, y+h

// x+w*0.25, y+h*0.25
// x+w*0.5,  y
// x+w*0.75, y+h*0.25

// or

// x+w*0.25, y+h*0.25
// x+w*0.75, y+h*0.25
