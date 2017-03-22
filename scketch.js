function setup(){
   createCanvas(600,400);
   background(255,0,0);
}
    
function draw(){
    strokeWeight(10);
    stroke(255);
    
    var x=0;
    fill(201, 0, 219)
    while(x<width){
      rect(x,   289,25, 25);
      x =x+ 50;  
    }
    
    fill(226, 103, 2)
    for(var x=0; x< width; x=x+ 50){
       rect(x,   99, 25, 25); 
    }
    
    fill(0, 0, 0)
    for(var x=0; x< width; x=x+ 50){
        ellipse(x,   199,25,25)
    }
}

