// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup() {
  createCanvas(windowWidth, windowHeight);
}




function draw() {
  //setup background
  background(255);
  
  //draw lines that divide 4 sections 
  stroke(0); 
  line(width/2, 0, width/2, height); 
  line(0, height/2, width, height/2);
  noStroke(); 
  fill(0);
  fourQuadrant();
}

function fourQuadrant(){
  if (mouseX < width/2 && mouseY < height/2) { //quad 1
    rect(0, 0, width/2, height/2);
  }
  
  else if (mouseX > width/2 && mouseY < height/2) { //quad 2
    rect(width/2, 0, width/2, height/2);
  }
  
  else if (mouseX < width/2 && mouseY > height/2) { //quad 3
    rect(0, height/2, width/2, height/2);
  }
  
  else if (mouseX > width/2 && mouseY > height/2) { //quad 4
    rect(width/2, height/2, width/2, height/2);
  }
}