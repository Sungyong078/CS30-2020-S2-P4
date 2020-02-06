// Interactive Scene
// Sungyong Park
// 2020 Feb 6
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = windowHeight/2;
}

function draw() {
  background(200);
  character(x,y);
}


function character(x,y){
  fill(255);
  ellipse(x,y,60,50); //head
  fill(0);
  ellipse(x-15,y-10,10,10); //left eye
  ellipse(x+15,y-10,10,10); //right eye
  strokeWeight(2);
  line(x-10,y+10,x+10,y+10);
  line();
  
  function name(x,y){
    textSize(30);
    text("Sungyong",x+100,y+100);
    
  }
}