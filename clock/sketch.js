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
  ellipse(0,0,width*0.3,width*0.3);
  pop();
}