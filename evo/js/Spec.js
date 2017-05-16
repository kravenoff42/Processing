function Spec(pos,dna,mut,traits,controllers){
    //if spec is given a Position , then it has a parent, so alter position slightly
    if (pos!=null){
        //make new offset vector
        var newPos = createVector(plusMinus(floor(random(10,30))),plusMinus(floor(random(10,30))));
        //add to older vector
        newPos.add(pos);
        //set new position
        this.pos = newPos;
    } else {
        //if no position is given, set to random coords
        var x = floor(map(random(),0,1,0,width));
        var y = floor(map(random(),0,1,0,height));
        this.pos = createVector(x,y);
    }
    //if dna array is given, then spec has parent, use, parent dna to build new dna array
    if(dna!=null){
        //declare array
        this.dna = [];
        //grab length
        var len = dna.length;
        for(var i = len-1; i>=0; i--){
            //set mutability
            var prob = mut;
            //if a randow number is less the prob then mutate
            if(random()<prob){
                //get new value/10 (to make change subtle)
                var offset = plusMinus(random()/10);
                //then add/subtract to current value
                var temp = offset + dna[i];
                //keep value between 0 and 1
                temp = keep0to1(temp);
                //console.log('temp for ',i,': ',temp);
                this.dna[i] = temp;
            }else{
                //otherwise just copy gene
                this.dna[i]= dna[i];
            }
        }
        var addDrop = random();
        if(addDrop<0.01){
          // console.log('drop');
            this.dna.splice(FtoCust(random(),this.dna.length),1);
        }
        if(addDrop>0.99){
          // console.log('add');
            this.dna.splice(FtoCust(random(),this.dna.length),0,random());
        }

        // console.log(this.dna);
    }else {
        this.dna = []
        for(var i = 0; i<DNA_SIZE; i++){
            this.dna.push(random());
        }
    }

    //if traits array is given, then spec has parent, use, parent traits to build new trait array
    if(traits!=null){
        //declare array
        this.traits = [];
        //grab length
        var len = traits.length;
        for(var i = len-1; i>=0; i--){
            //set mutability
            var prob = mut;
            //if a randow number is less the prob then mutate
            if(random()<prob){
                //get new value/10 (to make change subtle)
                var offset = plusMinus(random()/10);
                //then add/subtract to current value
                var temp = offset + dna[i];
                //keep value between 0 and 1
                temp = keep0to1(temp);
                //console.log('temp for ',i,': ',temp);
                this.traits[i] = temp;
            }else{
                //otherwise just copy gene
                this.traits[i]= traits[i];
            }
        }
        /***********TRAITS****************/
        var addDrop = random();
        if(addDrop<0.01){
            this.traits.splice(FtoCust(random(),this.dna.length),1);
        }
        if(addDrop>0.99){
            this.traits.splice(FtoCust(random(),this.dna.length),0,random());
        }
        //console.log(this.dna);
    }else {
        this.traits = []
        for(var i = 0; i<DNA_SIZE; i++){
            this.traits.push(random());
        }
    }

    this.heading = createVector(0,0);
    this.radius = 5;
    this.mate = [];
    this.fertility = this.dna[1];
    this.mutability = this.dna[2]/10;
    this.health = this.dna[3]
    this.social = 3;
    this.neighbors = [];

    this.render = function(){
        push();
        colorMode(HSB);
        setColor(this.dna);
        // console.log('color');
        // fill(Fto360(this.dna[0]),360,180);
        setStroke(this.dna);
        // console.log('stroke');
        setShape(this.pos,this.dna,0);
        // console.log('shape');
        // ellipse(this.pos.x,this.pos.y,this.radius*2,this.radius*2);
        pop();
    }

    this.reproduce = function(){
        //find a mate
        this.mate = this.findMate();
        // console.log(this.mate);
        var prob = this.fertility;
        var mateDNA = this.mate;
        var selfDNA = this.dna;
        var newDNA = [];
        //if fertility is higher enough reproduce
        if(random()<prob){
            //build new dna from parents
            // console.log('self',selfDNA);
            // console.log('mate',mateDNA);
            newDNA = combineTwo(selfDNA,mateDNA);//probablility.js
            // console.log('new',newDNA);
            swarm.arr.push( new Spec(this.pos, newDNA, this.mutability));
        }
    }

    this.die = function(index){
        swarm.arr.splice(index,1);
    }

    this.findMate = function(){
        var min = this.fertility;
        // console.log(min);
        var len = swarm.arr.length;
        for (var i = len-1; i>=0;i--){
            if (swarm.arr[i].fertility>=min){
                return swarm.arr[i].dna;
            }
        }
    }

    this.getNeighbors = function(){
        this.neighbors = [];
        this.neighbors = swarm.findNeighbors(this.pos);
    }

    this.walk = function(){

    }

}

// function Spec(pos, len, dna, mutability){
//     if (pos!=null){
//         this.pos = pos;
//     } else {
//         var x = floor(map(random(),0,1,0,width));
//         var y = floor(map(random(),0,1,0,height));
//         this.pos = createVector(x,y);
//     }
//     this.dna_len = len;
//     if(mutability!=null){
//         this.mutability = mutability;
//     } else{
//         this.mutability = random()/10;
//     }
//     // if(isNew){
//         if (dna != null){
//             var tempDNA = dna;
//             // console.log(tempDNA);
//             for (var i = tempDNA.length-1; i>=0; i--){
//                 // var prob = this.mutability;
//                 var prob = 0.1;
//                 var action = random();
//                 if(action<0.001){
//                     tempDNA.push(tempDNA[i]);
//                 } else if (action>0.999){
//                     tempDNA.splice(i,1);
//                 } else {
//                     if(random()<prob){
//                         var temp = tempDNA[i]+random()/10;
//                         if (temp>=1){temp--;}
//                         tempDNA[i] = temp;
//                     }
//                 }
//             }
//         this.dna = tempDNA;
//         } else {
//             this.dna = [];
//             for (var i = 0; i<this.dna_len; i++){
//                 this.dna.push(random());
//             }
//         }
//     // }

//     this.mate;
//     this.traits = [];
//     this.health;
//     this.fitness;
//     this.age;

//     this.getTrait = function(newTrait){
//         this.traits.push(new Trait.arr)
//     }

//     this.reproduce = function(){
//         var newPos = createVector(floor(random(-30,30)),floor(random(-30,30)));
//         newPos.add(this.pos);
//         swarm.arr.push(new Spec(newPos,this.dna_len,this.dna,this.mutability));
//     }

//     this.getOlder = function(){

//     }

//     this.eat = function(){

//     }

//     this.render = function(){
//         push();
//         colorMode(HSB);
//         fill(Fto255(this.dna[0]),255,120);
//         ellipse(this.pos.x,this.pos.y,10,10);
//         pop();
//     }

// }
