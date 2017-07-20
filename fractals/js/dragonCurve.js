function Dragon(seed){
  this.steps = [];
  if(seed=="U" || seed=="R" || seed=="D" || seed=="L"){
    this.seed = seed;
    this.steps.push(this.seed);
  }else{
    this.seed = "U";
  }
  this.cycles = 0;
}

Dragon.prototype.iterate = function(){
  var len = this.steps.length;

  for(var i = len; i >= 0; i--){
    switch(this.steps[i]){
      case "U":
        this.steps.push("R");
        break;
      case "R":
        this.steps.push("D");
        break;
      case "D":
        this.steps.push("L");
        break;
      case "L":
        this.steps.push("U");
        break;
      default:
        break;
    }
  }
  this.cycles++;
}

Dragon.prototype.render = function(s){
  push();
  background(255);
  translate(width/4,height/4);
  strokeWeight(s/3);
  stroke(0);
  // beginShape();
  noFill();
  var len = this.steps.length;
  var size = s;
  var x = 0;
  var y = 0;
  // curveVertex(x,y);
  // curveVertex(x,y+(size/2));

// ul lu ur ru dr rd ld dl

  for(var i = 1; i < len; i++){
    console.log(x,y);

    var pair = concat(this.steps[i-1],this.steps[i]);
    switch(pair){
      case "UR":
        arc(x+(size/2),y+(size/2),size,size,PI, PI+HALF_PI);
        x+=size;
        break;
      case "LD":
        arc(x+(size/2),y+(size/2),size,size,PI, PI+HALF_PI);
        y+=size;
        break;
      case "UL":
        arc(x-(size/2),y+(size/2),size,size, PI+HALF_PI, TWO_PI);
        x-=size;
        break;
      case "RD":
        arc(x-(size/2),y+(size/2),size,size, PI+HALF_PI, TWO_PI);
        y+=size;
        break;
      case "DR":
        arc(x+(size/2),y-(size/2),size,size,HALF_PI,PI);
        x+=size;
        break;
      case "LU":
        arc(x+(size/2),y-(size/2),size,size,HALF_PI,PI);
        y-=size;
        break;
      case "DL":
        arc(x-(size/2),y-(size/2),size,size,0, HALF_PI);
        x-=size;
        break;
      case "RU":
        arc(x-(size/2),y-(size/2),size,size,0, HALF_PI);
        y-=size;
        break;

      default:
        break;
    }

    // switch(this.steps[i]){
    //   case "R":
    //     curveVertex(x+(size/2),y);
    //     // line(x,y,x,y-size);
    //     x+=size;
    //     break;
    //   case "U":
    //     curveVertex(x,y-(size/2));
    //     // line(x,y,x,y-size);
    //     y-=size;
    //     break;
    //   case "D":
    //     curveVertex(x,y+(size/2));
    //     // line(x,y,x,y+size);
    //     y+=size;
    //     break;
    //   case "L":
    //     curveVertex(x-(size/2),y);
    //     // line(x,y,x-size,y);
    //     x-=size;
    //     break;
    //   default:
    //     break;
    // }
  }
  // endShape();
  pop();
}
