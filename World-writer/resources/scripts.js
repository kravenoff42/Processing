var refresh = 0;
var results = 0;

function setup(){
  createCanvas(700,700);


}
function draw(){
  background(0);
  if (refresh>=100){
    results+=1;
    var output = select('#output');
    output.html(results);
    refresh=0;

  }
  //refresh++;
  var output1 = select('#output1');
  output1.html(refresh);
}
