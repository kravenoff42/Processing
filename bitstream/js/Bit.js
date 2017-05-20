function BitCell(x,y,n){
  this.pos = createVector(x*W,y*H);
  this.index = createVector(x,y);
  if(n){
    this.alive = floor(random(2)).toString();
  }else{  this.alive = "1";}

  this.neighbors=0;

  this.findNeighbors = function(){
    var total = 0;

    for(var xoff = -1; xoff<=1; xoff++){
      for(var yoff = -1; yoff<=1; yoff++){
        var x = this.index.x+xoff;
        var y = this.index.y+yoff;
        if(x>-1 && x<cols && y >-1 && y < rows){
          if(xoff==0 && yoff==0){
            total += 0;
          }else{
            var neighbor = grid[x][y].alive;
            if (neighbor == "1" ){
              total++;
            }
          }
        }
      }
    }
    this.neighbors = total;
  }

  this.show = function(){
    push();
    if(this.alive == "1"){
      fill(255);
    }else{
      fill(144);
    }
    textSize(16);
    textFont('monospace');
    textAlign(RIGHT,TOP);
    text(this.alive,this.pos.x,this.pos.y);
    pop();
  }

  this.update = function(){
    switch(this.neighbors){
      case 2:
        if(this.alive == "1"){
          this.alive = "1";
        }
        break;
      case 3:
        this.alive = "1";
        break;
      default:
        this.alive = "0";
        break;

    }
  }
}
/*
Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/
