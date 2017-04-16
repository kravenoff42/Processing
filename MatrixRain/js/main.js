var chars;
var ctx;
var kanjiArr=[];
var freq = 10;

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
  if (kanjiArr.length<10){
  kanjiArr.push(new Kanji());
  //console.log('new');
  }
  //var len = kanjiArr.length;
  if (kanjiArr.length>0){
    for (var i =  kanjiArr.length-1; i >= 0; i--) {
      //if(kanjiArr[i]!=null){
        kanjiArr[i].render();
        kanjiArr[i].tick();
        console.log(kanjiArr.length);
      //}
        if (!kanjiArr[i].valid){2
          // if (kanjiArr.length<10){
          kanjiArr.push(new Kanji(kanjiArr[i].pos));
          console.log('new');
          //}
          kanjiArr.splice(i, 1);
        }
        if (kanjiArr[i].pos.y>height){
          kanjiArr.splice(i, 1);
          kanjiArr.push(new Kanji());
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


