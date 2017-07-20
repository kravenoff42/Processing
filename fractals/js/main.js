// var graph = new Graph(300,300,300,300);
var canvas;
var canvas2;
var segments=[];
var myCurve;
var btnStart;
var btnStop;
var btnStep;
var btnNew;
var btnReload;
var wrapper;
var dragon;

function setup(){
  wrapper = document.getElementById('wrapper');
  btnStart = document.getElementById('btnStart');
  btnStop = document.getElementById('btnStop');
  btnStep = document.getElementById('btnStep');
  btnNew = document.getElementById('btnNew');
  btnReload = document.getElementById('btnReload');

  canvas = createCanvas(800,800);
  canvas.parent(wrapper);

  btnStart.addEventListener('click',function(){translate(-50,0)});
  // btnStop.addEventListener('click',function(){window.running = false});
  btnStep.addEventListener('click',function(){
    if(dragon!=null){dragon.iterate();dragon.render(6)}
  });
  // btnNew.addEventListener('click',function(){ swarm.arr.push(new Spec()); });
  btnReload.addEventListener('click',function() { location.reload(); });
  // canvas2 = createCanvas(800,800);
  // canvas2.parent('wrapper');
  //graph.drawAxes();
  myCurve = new MapLine();
  var num = factorial(18);
  text(num,width/2,height/2);
  dragon = new Dragon("L");

}

function draw(){

}

var instructions = [];

function factorial(n){
  var x = 1;
  for (var i = n; i > 0; i--) {
    x *= i;
  }
  return x;
}

function drawCircle( x, y, d){
  stroke(255);
  noFill();
  ellipse(x,y,d,d);
  if(d>0){
    drawCircle(x,y,d/2);
  }
}
