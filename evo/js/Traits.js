var Traits = {"height":1, "width":1, "weight":1, "topSpeed":1, "shape":{"sides":1,"depths":"sides"}, "hue":1, "sat":1, "bright":1, "walk":1,"eat", "steer", "learn"};
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
        this.controlGene = random();
    }
    this.dominance = random(); //used to break ties between similar traits
    
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