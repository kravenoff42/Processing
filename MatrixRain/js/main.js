var chars;
var ctx;
var kanjiArr=[];
var freq = 100;

function preload() {
    chars = loadImage("chars.png");
    charsWhite = loadImage("charsWhite.png");
}

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  // for (var i = 0; i < freq; i++) {
  //   var randposX = floor(random(width/24))*24;
  //   var randposY = floor(random(height/24))*24;
  //   var pos = createVector(randposX,randposY);
  //   var randkanX = floor(random(9))*24;
  //   var randkanY = floor(random(6))*24;
  //   var kan = createVector(randkanX,randkanY);
  
  //   kanjiArr.push(new Kanji(pos,kan));
  // }
  
  //noLoop();
}

function draw(){
  background(0);
  kanjiArr.push(new Kanji());
  var len = kanjiArr.length;
  if (len>0){
    for (var i = len-1; i >= 0; i--) {
      //if(kanjiArr[i]!=null){
        kanjiArr[i].render();
        kanjiArr[i].tick();
      //}
      if (!kanjiArr[i].valid){
            kanjiArr.splice(i, 1);
          }
    }
  
  }
}

function update(){
  // var len = kanjiArr.length;
  //   for (var i = 0; i < len; i++) {
  //   kanjiArr[i].update();
  // }
}


