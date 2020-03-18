// Rollovers
// Sungyong Park
// Feb 12 2020


let leftFade = 0;
let rightFade = 0;
let downRightFade = 0;
let downLeftFade = 0;
const FADE_SPEED = 5; 

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function updateCurrentSide(){
  if (mouseX < width/2 && mouseY < height/2) { //bottom left
    rect(0, 0, width/2, height/2);
  }
  
  else if (mouseX > width/2 && mouseY < height/2) { //bottom right
    rect(width/2, 0, width/2, height/2);
  }
  
  else if (mouseX < width/2 && mouseY > height/2) { //top right
    rect(0, height/2, width/2, height/2);
  }
  
  else if (mouseX > width/2 && mouseY > height/2) { //top left
    rect(width/2, height/2, width/2, height/2);
  }
}
  



function renderRectangles(){
  if(mouseX < width/2 && mouseY < height/2){
    
  }
  

}

function draw() {
  background(220);
  updateCurrentSide();

  renderRectangles();
  if (mouseX > width*0.25 && mouseX < width*0.75 && mouseY > height*0.25 && mouseY < height*0.75){
    fill(80,160,240,120);
  }
  else{
    fill(20,200,20,120);
  }
  
}


//function draw() {
  //setup background
  //background(255);
  
  //draw lines that divide 4 sections 
  //stroke(0); 
  //line(width/2, 0, width/2, height); 
  //line(0, height/2, width, height/2);
  //noStroke(); 
  //fill(0);
  
  //if (mouseX < width/2 && mouseY < height/2) { //quad 1
    //rect(0, 0, width/2, height/2);
  //}
  
  //else if (mouseX > width/2 && mouseY < height/2) { //quad 2
    //rect(width/2, 0, width/2, height/2);
  //}
  
  //else if (mouseX < width/2 && mouseY > height/2) { //quad 3
    //rect(0, height/2, width/2, height/2);
  //}
  
  //else if (mouseX > width/2 && mouseY > height/2) { //quad 4
    //rect(width/2, height/2, width/2, height/2);
  //}
//}