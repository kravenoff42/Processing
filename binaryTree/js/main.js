var tree;
const NODE_SIZE = 20;
var wrapper = document.getElementById("wrapper");
var canvas;

function setup(){
  canvas = createCanvas(600,400);
  canvas.parent(wrapper);
  background(224);

  tree = new Tree();
  for (var i = 0; i < 15; i++) {
     tree.addVal(floor(random(1,100)));
 }
  //console.log(tree);

  tree.traverse();
  var found = tree.search(45);
  if (found != null){
    //console.log("Found ",found.value, " on Gen: ",found.gen);
  } else {
    // console.log("Not Found");
  }

}
