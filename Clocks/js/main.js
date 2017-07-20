var canvas;
var display;
var clock;
var d;
var m;
var cred;
var cblue;
var cgreen;
var btnStart;
var btnStop;
var btnStep;
var btnNew;
var btnReload;
var wrapper;

function setup(){
  wrapper = document.getElementById('wrapper');
  btnStart = document.getElementById('btnStart');
  btnStop = document.getElementById('btnStop');
  btnStep = document.getElementById('btnStep');
  btnNew = document.getElementById('btnNew');
  btnReload = document.getElementById('btnReload');
  cred = color(255,0,0);
  cblue = color(0,255,0);
  cgreen = color(0,0,255);

  canvas = createCanvas(800,800);
  canvas.parent(wrapper);

  btnStart.addEventListener('click',function(){clock.ticking = true});
  btnStop.addEventListener('click',function(){clock.ticking = false});
  btnStep.addEventListener('click',function(){clock.tick("one");});
  //btnNew.addEventListener('click',function(){  });
  btnReload.addEventListener('click',function() { location.reload(); });

  display = new Display(20,20);


  clock = new Clock(20,90,10,"seconds",cred,"");

}

function draw(){
  clock.render();
  clock.tick("seconds");
}
