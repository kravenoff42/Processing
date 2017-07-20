function Node(val,gen){
  this.value = val;
  this.gen = gen;
  this.left = null;
  this.right = null;
  this.y = null;
  this.x = null;
}

Node.prototype

Node.prototype.addNode = function(n){
  if (n.value < this.value){
    if (this.left == null) {
      this.left = n;
      this.left.gen = this.gen+1;
      this.left.y = this.left.gen*NODE_SIZE;
      var offset = pow(2,this.gen+1);
      this.left.x = this.x-(width/offset);
      // console.log(width," / ",offset, " = " , width/offset);
    } else {
      this.left.addNode(n);
    }
  } else if(n.value > this.value){
    if (this.right == null) {
      this.right = n;
      this.right.gen = this.gen+1;
      this.right.y = this.right.gen*NODE_SIZE;
      var offset = pow(2,this.gen+1);
      this.right.x = this.x+(width/offset);
      // console.log(width," / ",offset, " = " , width/offset);
    } else {
      this.right.addNode(n);
    }
  }
}

Node.prototype.render = function(parent){
  if (this.left != null){
    this.left.render(this);
  }
  push();
  //,fill(255);
  textAlign(CENTER,CENTER);
  line(parent.x,parent.y,this.x,this.y);
  ellipse(this.x,this.y, NODE_SIZE, NODE_SIZE);
  text(this.value,this.x,this.y);
  pop();
  // console.log(this.value);
  if (this.right != null){
    this.right.render(this);
  }
}

Node.prototype.search = function(v){
  if(this.value == v){
    return this;
  } else if (v < this.value && this.left != null){
    return this.left.search(v);
  } else if (v > this.value && this.right != null){
    return this.right.search(v);
  }
  return null;
}
