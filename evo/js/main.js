var swarm; 
var btnBreed;
var btnKill;
var BASE_NUM = 16;
var SWARM_SIZE = 6;
var DNA_SIZE = 4;

var blobs = [];

function setup(){
  // btnBreed = createButton('Breed');
  // btnBreed.position(10, 10);
  // btnBreed.mousePressed(brd);
  // btnBreed = createButton('Kill');
  // btnBreed.position(width-10, 10);
  // btnBreed.mousePressed(kl);
  createCanvas(900,800);
  frameRate(3);
  swarm = new Swarm(SWARM_SIZE);
}

function draw(){
  background(90);
  swarm.show();
  if(swarm.arr.length>0){
  swarm.breed();
  swarm.cull();
  }
  
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