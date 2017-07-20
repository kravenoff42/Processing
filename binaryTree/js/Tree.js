function Tree() {
  this.root = null;
}

Tree.prototype.addVal = function(val){
  var n = new Node(val,null);
  if (this.root == null){
    this.root = n;
    this.root.gen = 1;
    this.root.x = width/2;
    this.root.y = 20;
  } else {
    this.root.addNode(n);
  }
}

Tree.prototype.traverse = function(){
  this.root.render(this.root);
}

Tree.prototype.search = function(val){
  return this.root.search(val);

}
