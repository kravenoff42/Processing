function Swarm(size){
    this.arr = [];
    
    for (var i = 0; i<size; i++){
        this.arr.push(new Spec());
    }
    
    this.breed = function(){
        var len = this.arr.length;
        for (var i = len-1; i>=0; i--){
            // console.log(this.arr[i].dna);
            // console.log(this.arr[i].reproduce().dna);
            this.arr[i].reproduce();
        }
    }
    
    this.cull = function(){
        var len = this.arr.length;
        for (var i = len-1; i>=0; i--){
            var thisSpec = this.arr[i];
            //console.log(thisSpec);
            thisSpec.getNeighbors();
            if(this.crowded(thisSpec) || this.outOfBounds(thisSpec) || this.weakGenes(thisSpec)){
                thisSpec.die(i);
            }
        }
    }
    
    this.show = function(){
      var len = this.arr.length;
      for(var i=len-1;i>=0;i--){
        this.arr[i].render();
      }
    }
    
    this.outOfBounds = function(spec){
        if(spec.pos.y<0 || spec.pos.x<0 || spec.pos.y>height || spec.pos.y>width){
            return true;
        }else{
            return false;
        }
    }
    
    this.weakGenes = function(spec){
        if(random()>spec.health){
            return true;
        }else{
            return false;
        }
    }
    this.crowded = function(spec){
        // console.log(spec.neighbors.length);
        if(spec.neighbors.length>spec.social){
            // console.log('killed ',spec.pos.x,', ',spec.pos.y);
            return true;
        }else{
            return false;
        }
    }
    
    this.findNeighbors = function(specPos){
        var len = this.arr.length;
        var neighbors = [];
        for(var i = len-1;i>=0;i--){
            var currSpec = this.arr[i];
            var searchArea = 30;
            var d = currSpec.pos.dist(specPos);
            if(d <= searchArea){
                neighbors.push(i);
            }
        }
        //console.log(neighbors);
        return neighbors;
    }
}