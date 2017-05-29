function Knode(col, row){
  this.col = col;
  this.row = row;
  this.pos = createVector(col*GRID_W,row*GRID_H);
  this.center = createVector(this.pos.x+GRID_W*0.5,this.pos.y+GRID_H*0.5);

  this.north = false;
  this.nPos = createVector(this.pos.x+GRID_W*0.25,this.pos.y+GRID_H*0.25);
  this.nRot = 0;

  this.east = false;
  this.ePos = createVector(this.pos.x+GRID_W*0.75,this.pos.y+GRID_H*0.25);
  this.eRot = PI/2;

  this.south = false;
  this.sPos = createVector(this.pos.x+GRID_W*0.75,this.pos.y+GRID_H*0.75);
  this.sRot = PI;

  this.west = false;
  this.wPos = createVector(this.pos.x+GRID_W*0.25,this.pos.y+GRID_H*0.75);
  this.wRot = -PI/2;

  this.box = function(){
    rect(this.pos.x,this.pos.y,GRID_W,GRID_H);
  }

  this.dot = function(){
    ellipse(this.center.x,this.center.y,GRID_W/8,GRID_H/8);
  }

  this.checkNeighbors = function(){
    if(this.col == 0){
      this.north = false;
    }
    if(this.row == 0){
      this.west = false;
    }
    if(this.col == grid[this.row].length-1){
      this.east = false;
    }
    if(this.row == grid.length-1){
      this.south = false;
    }
  }

  this.drawLines = function(){
    if(this.north){
      angleLine(this.nPos.x,this.nPos.y,nRot);
    }else{
      straightLine(this.nPos.x,this.nPos.y,nRot);
    }
    if(this.east){
      angleLine(this.ePos.x,this.ePos.y,eRot);
    }else{
      straightLine(this.ePos.x,this.ePos.y,eRot);
    }
    if(this.south){
      angleLine(this.sPos.x,this.sPos.y,sRot);
    }else{
      straightLine(this.sPos.x,this.sPos.y,sRot);
    }
    if(this.west){
      angleLine(this.nPos.x,this.nPos.y,nRot);
    }else{
      straightLine(this.nPos.x,this.nPos.y,nRot);
    }

  }

  this.angleLine = function(x,y,side){
    push();
    translate(x,y);
    rotate(side);
    line(0,-1,GRID_W*0.25,-GRID_H*0.25);
    line(GRID_W*0.25,-GRID_H*0.25,GRID_W*0.5,0);
    pop();
  }

  this.straightLine = function(x,y,side){
    push();
    translate(x,y);
    rotate(side);
    line(0,0,GRID_W*0.5,0);
    pop();
  }

}
