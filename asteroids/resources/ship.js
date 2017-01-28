function Ship(){
  this.pos = createVector(width/2,height/2);
  this.r  = 10;
  this.heading = 0;
  this.rotation = 0;
  this.velocity = createVector(0,0);
  this.isBoosting = false;
  this.lasers = [];

  this.update = function (){
    this.render();
    this.pos.add(this.velocity);
    this.turn();
    this.edges();
    if(this.isBoosting)
    {this.boost();}
  }

  this.boosting = function(bool){
  this.isBoosting = bool;
  }

  this.boost = function(){
    var force = p5.Vector.fromAngle(this.heading);
    this.velocity.add(force.mult(0.25));
    //this.velocity.y += force.y;
    //this.velocity.x += force.x;

  }

  this.render = function() {
    push();
    translate(this.pos.x , this.pos.y);
    rotate(this.heading);
    fill(0);
    stroke(255);
    quad(0,         0,
        -this.r,    this.r,
         this.r*2,  0,
        -this.r,   -this.r);
    pop();
  }

  this.setRotation = function(angle){
    this.rotation = angle;
  }

  this.turn = function () {
    this.heading += this.rotation;
  }

  this.edges = function() {
    if (this.pos.x >= width){
      this.pos.x = 0;
    }
    if (this.pos.x < 0){
      this.pos.x = width;
    }
    if (this.pos.y >= height){
      this.pos.y = 0;
    }
    if (this.pos.y < 0){
      this.pos.y = height;
    }
  }
  this.fire = function(){
    this.lasers.push(new Laser(this.pos, this.heading));
  }
}
