var titleAni = document.getElementById("titleAni");
var cursor = document.getElementById("cursor");
var text = document.getElementById("text");
var entered = document.getElementById("entered");
var lines = ['designer', 'developer', 'coder', 'jon craven'];
var letter = 0;
var word = 0;
var line;

var stop = false;

window.onload = function(){
  setInterval(type, 200);
  setInterval(blink, 250);
}

function toggleHide(elem){
  // console.log("toggleHide()");
  if(elem.classList.contains('hide')){

    elem.classList.remove('hide');
  } else {
    elem.classList.add('hide');
  }
}

function blink(){
  toggleHide(cursor);
}

function type(){
  if(word<lines.length){
    line=lines[word];
    if(letter<line.length){
      var string = line.slice(0, letter);
      text.innerHTML = string;
      letter++;
    }else if(letter==line.length){
      var string = line.slice();
      text.innerHTML = string;
      letter++;
    }else{
      if(word==lines.length-1){
      }else{
        var string = line.slice();
        text.innerHTML = "";
        entered.innerHTML += ">"+string+"<br/>";
        letter = 0;
        word++;
      }
    }
  }
}
