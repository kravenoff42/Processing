function Graph(Mx,mx,My,my){
  this.max = createVector(Mx,My);
  this.min = createVector(mx,my);
  this.scal;
  this.res = {
    this.max
  };

  this.setScale = function(num){
    this.scal = num;
  }

  this.setRes = function(num){
    this.res = num;
  }

  this.drawAxes = function(){
    push();
    translate(width/2,height/2);
    line(0,0,this.max.X,0);
    for(var i = 0; i< scale.)
    line(0,0,-this.min.X,0);
    line(0,0,0,this.max.Y);
    line(0,0,0,-this.min.Y);

    pop();
  }
}

/*
gentu
CentOS
debian

*/
