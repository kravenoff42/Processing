function Display(x,y,color){
  this.pos = createVector(x,y);
  this.color = color;
}

Display.prototype.render = function(s){
  push();
    noStroke();
    fill(40);
    translate(this.pos.x,this.pos.y);
    rect(0,0,6+s.length*28,50);
    fill(0);
    this.drawDigits(s);
  pop();
}

Display.prototype.drawDigits = function(str){
  var chars = str.split("");
  var charCells = [];

  for (var i = 0;i<chars.length;i++){
    switch(chars[i]){
      case "0":
        charCells.push(new Array(true,true,true,false,true,true,true,false,false));
        break;
      case "1":
        charCells.push(new Array(false,false,true,false,false,true,false,false,false));
        break;
      case "2":
        charCells.push(new Array(true,false,true,true,true,false,true,false,false));
        break;
      case "3":
        charCells.push(new Array(true,false,true,true,false,true,true,false,false));
        break;
      case "4":
        charCells.push(new Array(false,true,true,true,false,true,false,false,false));
        break;
      case "5":
        charCells.push(new Array(true,true,false,true,false,true,true,false,false));
        break;
      case "6":
        charCells.push(new Array(true,true,false,true,true,true,true,false,false));
        break;
      case "7":
        charCells.push(new Array(true,true,true,false,false,true,false,false,false));
        break;
      case "8":
        charCells.push(new Array(true,true,true,true,true,true,true,false,false));
        break;
      case "9":
        charCells.push(new Array(true,true,true,true,false,true,true,false,false));
        break;
      case ":":
        charCells.push(new Array(false,false,false,false,false,false,false,true,true));
        break;
      default:
        charCells.push(new Array(false,false,false,false,false,false,false,false,false));
        break;
    }
  }

  for (var i = 0;i<chars.length;i++){

    var xoff = 10 +(i*28);
    if(charCells[i][0]){
      fill(this.color);
    }
    drawCell(xoff + 7 ,10,"h"); // 0
    fill(0);
    if(charCells[i][1]){
      fill(this.color);
    }
    drawCell(xoff     ,17,"v");// 1
    fill(0);
    if(charCells[i][2]){
      fill(this.color);
    }
    drawCell(xoff + 14,17,"v");// 2
    fill(0);
    if(charCells[i][3]){
      fill(this.color);
    }
    drawCell(xoff + 7 ,24,"h"); // 3
    fill(0);
    if(charCells[i][4]){
      fill(this.color);
    }
    drawCell(xoff     ,31,"v");// 4
    fill(0);
    if(charCells[i][5]){
      fill(this.color);
    }
    drawCell(xoff + 14,31,"v");// 5
    fill(0);
    if(charCells[i][6]){
    fill(this.color);
    }
    drawCell(xoff + 7 ,38,"h"); // 6
    fill(0);
    if(charCells[i][7]){
      fill(this.color);
    }
    ellipse(xoff + 7 ,17,5,5);  // 7
    fill(0);
    if(charCells[i][8]){
      fill(this.color);
    }
    ellipse(xoff + 7 ,31,5,5);  // 8
    fill(0);
  }//end switch
  pop();
}//end function

function drawCell(x,y,vh){
  push();

  beginShape();
  if(vh=="h"){
    vertex(x-6,y);
    vertex(x-3,y-2.5);
    vertex(x+3,y-2.5);
    vertex(x+6,y);
    vertex(x+3,y+2.5);
    vertex(x-3,y+2.5);
  }
  if(vh=="v"){
    vertex(x,y-6);
    vertex(x-2.5,y-3);
    vertex(x-2.5,y+3);
    vertex(x,y+6);
    vertex(x+2.5,y+3);
    vertex(x+2.5,y-3);
  }
  endShape(CLOSE);
  pop();

}
