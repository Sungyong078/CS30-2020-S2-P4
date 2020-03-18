// Rollovers
// Sungyong Park
// Feb 12 2020
//draw 4 different square and color it if the mouse is on that quadrant


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
  if(mouseX < width/2 && mouseY < height/2){ //fade at downleft square
    fill(0,downLeftFade);
    downLeftFade += FADE_SPEED;
  }
  else{
    fill(255);
    downLeftFade = 0;
  }
  if(mouseX > width/2 && mouseY < height/2){ //fade at downright square
    fill(0,downRightFade);
    downRightFade += FADE_SPEED;
  }
  else{
    fill(255);
    downRightFade = 0;
  }
  if(mouseX < width/2 && mouseY > height/2){ //fade at right square
    fill(0,rightFade);
    rightFade += FADE_SPEED;
  }
  else{
    fill(255);
    rightFade = 0;
  }
  if(mouseX > width/2 && mouseY > height/2){ //fade at left square
    fill(0,leftFade);
    leftFade += FADE_SPEED;
  }
  else{
    fill(255);
    leftFade = 0;
  }

}

function draw() {
  background(225);
  updateCurrentSide();
  line(width/2,0,width/2,height);
  renderRectangles();
  if (mouseX > width*0.25 && mouseX < width*0.75 && mouseY > height*0.25 && mouseY < height*0.75){
    fill(80,160,240,120);
  }
  else{
    fill(20,200,20,120);
  }
  
}


