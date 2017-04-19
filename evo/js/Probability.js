function coinFlip(){
    if (random()<0.5){
        return true;
    }else{
        return false;
    }
}

function percentge(x){
    if(random()<x){
        return true;
    }else{
        return false;
    }
}

function plusMinus(x){
    if (random()<0.5){
        return x;
    }else{
        return -x;
    }
}