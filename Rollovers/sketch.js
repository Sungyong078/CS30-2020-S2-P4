// Rollovers
// Sungyong Park
// Feb 12 2020

let onLeft, onRight,downLeft,downRight; //Boolean State variables
let leftFade = 0;
let rightFade = 0;
let downRightFade = 0;
let downLeftFade = 0;
const FADE_SPEED = 5; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
  downLeft = true;
  downRight = false;
}

function updateCurrentSide(){

  if(mouseX < width/2){
    //mouse is on the LEFT
    onLeft = true;
    onRight = false;
  }
  else{
    //mouse is on the right
    onRight = true;
    onLeft = false;
  }

  if(mouseX < width/2){
    downLeft = true;
    downRight = false;
  }
  else{
    downRight = true;
    downLeft = false;
  }

}

function renderRectangles(){
 
  if(onLeft){  //onLeft === true
    fill(0, leftFade);
    leftFade += FADE_SPEED;
  }
  else {
    fill(255);
    leftFade = 0;
  }
  rect(0,0,width/2,height/2);
  if(onRight){
    fill(0, rightFade);
    rightFade += FADE_SPEED;
  }
  else {
    fill(255);
    rightFade = 0;
  }
  rect(width/2,0, width/2, height/2);

  if(downLeft){
    fill(0, downLeftFade);
    downLeftFade += FADE_SPEED;
  }
  else{
    fill(255);
    downLeftFade = 0;
  }
  rect(width/2,height/2,width/2,height/2);

  if()

}

function draw() {
  background(220);
  updateCurrentSide();

  renderRectangles();
  if (mouseX > width*0.25 && mouseX < width*0.75 && mouseY > height*.25 && mouseY < height*.75){
    fill(80,160,240,120);
  }
  else{
    fill(20,200,20,120);
  }
  
}