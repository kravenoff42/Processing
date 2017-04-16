function Kanji(pos){
    var randposX = floor(random(width/24))*24;
    var randposY = floor(random(height/24))*24;
    var randkanX = floor(random(9))*24;
    var randkanY = floor(random(6))*24;
    var kan = createVector(randkanX,randkanY);
    var rpos = createVector(randposX,randposY);
    if(pos!=null){
        this.pos = createVector(pos.x,pos.y+24);
    } else {
        this.pos = rpos;
    }
// 9 wide, 6 tall grid of 24x24px icons
    this.kan = kan;
    this.glow = 255;
    this.fade = 255;
    this.valid = true;
    this.glowing = true;
    
    this.render = function(){
    push();
        tint(255, 255, 255, this.fade);
        image(chars,
            this.pos.x, this.pos.y,
            24, 24,
            this.kan.x, this.kan.y,
            24, 24);
    pop();
    push();
        tint(255, 255, 255, this.glow);
        image(charsWhite,
            this.pos.x, this.pos.y,
            24, 24,
            this.kan.x, this.kan.y,
            24, 24);  
    pop();
    }
    
    this.tick = function(){
        if (this.glow > 0){
            this.glow = this.glow-32;
            // console.log('this.glow',this.glow);
        } else if (this.glow<0){
            this.glowing = false;
        }
        if (this.glow <= 0 && this.fade > 0){
            this.fade = this.fade-32;
            // console.log('this.fade',this.fade);
        } else if (this.glow < 0 && this.fade < 0){
            this.valid = false;
            // console.log('reset');
        }
        
    }
}