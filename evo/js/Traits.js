var Traits = {"height":1, "width":1, "weight":1, "topSpeed":1, "shape":{"sides":1,"depths":"sides"}, "hue":1, "sat":1, "bright":1, "walk":1,"eat":1, "steer":3, "learn":1};
function Trait(name, gene, mutability){
    this.name = name; //string
    if(mutability!=null){
        this.mutability = mutability;
    } else{
        this.mutability = random();
    }
    if(gene!=null){
        var prob = this.mutability;
        if(random()<prob){
            var temp = gene+random();
            if (temp>1){temp -=1;}
            gene = temp;
            this.controlGene = gene; //map to length of dna arr
        }
    } else {
        this.controlGene = floor(random());
    }
    this.dominance = random(); //used to break ties between similar traits
    
}

function setColor(dna){
    
}

function setShape(pos,dna, control){
    var startGene = control;
    translate(pos.x,pos.y);
    stroke(255);
    beginShape();
    for(var i = dna.length;i>=0;i--){
      var angle = map(i, 0, 1, 0, TWO_PI);
      var r = dna[i];
      var x = r * cos(angle);
      var y = r * sin(angle);

      vertex(x,y);
    }
    endShape(CLOSE);

}

function setStroke(){
    stroke()
    strokeWeight
}
/*
common traits
**
size
color
    h/s/b
weight
durability
dna
die



specific traits
**
see
    rods/cones ratio
hear
    s/m/wide range
taste
    unigue smells
feel
    bool/array
smell
    unique tastes
eat
    brethe/photo/herb/carn/omni
walk
    
swim
fly
hunt
attack
    
defend
    passive/active
remember
    size/duration
reproduce
    divide/mate
hide


*/