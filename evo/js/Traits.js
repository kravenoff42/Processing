var Traits= ['height', 'width', 'weight', 'topSpeed', 'shape', 'hue', 'sat', 'bright', 'steering', 'learning'];
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