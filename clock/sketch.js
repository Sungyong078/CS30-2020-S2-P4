// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  

  push();
  translate(width/2, height/2);
  ellipseMode(CENTER);
  strokeWeight(4);
  ellipse(0,0,width*0.4,width*0.4);
  for(let i = 0; i < 60; i++){
    if(i%5===0){
      strokeWeight(4);
      line(width*0.15,0,width*0.19,0);
    }
    else{
      strokeWeight(2);
      line(width*0.16,0,width*0.19,0);
    }
    rotate(radians(6));
  }
  rotate(radians(-90));
  push();   //new c.s just for sec
  stroke(255,0,0);
  strokeWeight(3);
  rotate(radians(second()*6));
  line(0,0,width*0.19,0);
  pop();   //pop seconds c.s


  push(); //push min c.s
  stroke(0,255,0);
  strokeWeight(3);
  rotate(radians(minute()*6 + second()/10));
  line(0,0,width*0.18,0);

  pop();
}