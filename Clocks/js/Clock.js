function Clock(x,y,time,type,color,delim){
  this.x = x;
  this.y = y;
  this.t = time;
  this.reset = time;
  this.display = new Display(x,y,color);
  this.type = type;
  this.delimiter = delim;
  this.digits = this.t.toString().length;
  this.ticking = true;
  this.fr = frameRate();
}

Clock.prototype.render = function(){
  var str = this.secToTime(this.t,this.type,this.delimiter);
  this.display.render(str);
}

Clock.prototype.timer = function(){

  if (this.ticking){
    if(rate=="seconds"){
      this.t -=(1/30);
    }else if(rate == "milliseconds"){
      this.t -=(1000/30);
    }else if(rate== "one"){
      this.t -= 1;
    }
  }
  if(this.t<=0){this.ticking=false; this.t = 0;}
  if(!this.ticking){
    this.t = this.reset;
    //some action
  }
}

Clock.prototype.tick = function(rate){
  if (this.ticking){
    if(rate=="seconds"){
      this.t -=(1/30);
    }else if(rate == "milliseconds"){
      this.t -=(1000/30);
    }else if(rate== "one"){
      this.t -= 1;
    }
  }
  if(this.t<=0){this.ticking=false; this.t = 0;}
  if(!this.ticking){
    this.t = this.reset;
    //some action
  }
}

Clock.prototype.secToTime = function(secs,type,delim){
  var string = "";
  var timeLen = secs.toString().length;
  var colCount = delim.length;
  var colons = 0;
  switch(type){
   case "hours":
    var hrs = floor(mils/3600000).toString();
    mils -=(hrs*3600000);
    if(hrs<10){hrs=concat("0",hrs)}
    string += hrs + delim;
    colons += colCount;
  case "minutes":
    var min = floor(mils/60000).toString();
    mils -=(min*60000);
    if(min<10){min=concat("0",min)}
    string += min + delim;
    colons += colCount;
  case "seconds":
    var sec = floor(secs);
    secs -= sec;
    if(sec<10){sec=concat("0",sec)}
    string += sec;
    colons += colCount;
    break;
  }
  if(secs<=0){hrs="0";min="0";sec="0";mil="0";}
  var len = string.length;

  var lenDiff = timeLen - len - colons;
  if(len<timeLen){
    for(var i = 0; i<lenDiff;i++){
      sec=concat("0",sec);
    }
  }
  return string;
}

Clock.prototype.milToTime = function(mils,type,delim){
  var string = "";
  switch(type){
   case "hours":
    var hrs = floor(mils/3600000).toString();
    mils -=(hrs*3600000);
    if(hrs<10){hrs=concat("0",hrs)}
    string += hrs + delim;
  case "minutes":
    var min = floor(mils/60000).toString();
    mils -=(min*60000);
    if(min<10){min=concat("0",min)}
    string += min + delim;
  case "seconds":
    var sec = floor(mils/1000).toString();
    mils -=(sec*1000);
    if(sec<10){sec=concat("0",sec)}
    string += sec + delim;
  case "millisconds":
    var mil = floor(mils/10).toString();
    mils -= mil;
    if(mil<10){mil=concat("0",mil)}
    string += mil;
  break;
}
  if(mils<=0){hrs="0";min="0";sec="0";mil="0";}
  return string;
}

function nowString(d){
  var mil = floor(d.getMilliseconds()/10);
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hrs = d.getHours();
}
