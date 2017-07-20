function Segment(begin,end){
  this.begin = createVector(begin.x,begin.y);
  this.end = createVector(end.x,end.y);
}

Segment.prototype.render = function(){
  push();
  line(this.begin.x,this.begin.y,this.end.x,this.end.y);
  pop();
}

Segment.prototype.iterate = function(){
  var newSegs = this.divide();
  
}

Segment.prototype.divide = function(){
  var newBegin1 = this.begin.copy();
  var newEnd1 = this.end.copy();
  newEnd1.div(3);
  var newBegin2 = newEnd1.copy();
  newBegin2.mult(2);
  var newEnd2 = this.end.copy();
  var segs=[];
  segs.push(new Segment(newBegin1,newEnd1));
  segs.push(new Segment(newBegin2,newEnd2));
  return segs;
}

Segment.prototype.

Segment.prototype.

Segment.prototype.
