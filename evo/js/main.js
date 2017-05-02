var swarm;
var btnStart;
var btnStop;
var btnStep;
var btnNew;
var btnReload;
var wrapper;
var running;
var count;
var BASE_NUM = 16;
var SWARM_SIZE = 10;
var DNA_SIZE = 6;

var blobs = [];

function setup(){
  wrapper = document.getElementById('wrapper');
  btnStart = document.getElementById('btnStart');
  btnStop = document.getElementById('btnStop');
  btnStep = document.getElementById('btnStep');
  btnNew = document.getElementById('btnNew');
  btnReload = document.getElementById('btnReload');
  running = false;
  var canvas = createCanvas(900,800);
  canvas.parent(wrapper);


  btnStart.addEventListener('click',function(){window.running = true});
  btnStop.addEventListener('click',function(){window.running = false});
  btnStep.addEventListener('click',cycle);
  btnNew.addEventListener('click',function(){ swarm.arr.push(new Spec()); });
  btnReload.addEventListener('click',function() { location.reload(); });

  // noLoop();
  count = 0;
  swarm = new Swarm(SWARM_SIZE);
}

function draw(){
  background(90);
  swarm.show();
  if(count==30){
    if(swarm.arr.length>0 && running){
      cycle();
    }
    count = 0;
  }
  count++;
}

function rt(x){
  var wrapper = document.getElementById('wrapper');
  wrapper.innerHTML += x;
  wrapper.innerHTML +="<br/>";
}

function brd(){
  swarm.breed();
}

function kl(){
  swarm.cull();
}

function keep0to1(x){
  if(x>=1){
      x--;
  }
  if(x<0){
      x++;
  }
  return x;
}

function keepValidIndex(x, arr){
  if(x>=arr.length){
      x=0;
  }
  if(x<0){
      x=arr.length-1;
  }
  return x;
}

function cycle(){
  swarm.breed();
  swarm.cull();
}
