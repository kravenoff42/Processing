function Laser(pos, heading){
  this.pos = createVector(pos.x,pos.y);
  this.velocity = p5.Vector.fromAngle(heading).mult(5);

  this.render = function(){
    push();
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y)

    pop();
  }
  this.update = function(){

    this.pos.add(this.velocity);

  }
  this.hits = function(asteroid){
    var d = dist(this.pos.x,this.pos.y,asteroid.pos.x,asteroid.pos.y)
    if(d<asteroid.r){
      return true;
    } else {
      return false;
    }
  }

  this.edges = function(laser){
    if(laser.pos.x > width+200 ||
      laser.pos.x < -200 ||
      laser.pos.y > height+200 ||
      laser.pos.y < -200 )
    {
      return true;
    }
    else{
      return false;
    }
  }
}
