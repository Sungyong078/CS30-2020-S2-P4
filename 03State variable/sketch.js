// State Variable Demo


let onLeft, onRight; //boolean state variables
let leftFade = 0;
let rightFade = 0;
const FADE_SPEED = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
}

function updateCurrentSide(){
  if (mouseX < width/2){
    //mouse is on the left
    onLeft = true;
    onRight = false;
  }
  else{
    //mouse is on the right
    onLeft = true;
    onRight = false;
  
  }

}

function renderRectangles(){
  if (onLeft){  //onLeft === true
    fill(0, leftFade);    
    leftFade += FADE_SPEED;
  }
  else{
    fill(255);
    leftFade = 0;
  } 
  rect(0,0,width/2,height);

  if (onRight){
    fill(0, rightFade);
    rightFade += FADE_SPEED;
  }
  else{
    fill(255);
    rightFade = 0;

  }
  rect(width/2,0,width/2,height);
}


function draw() {
  background(220);
  updateCurrentSide();
  //("Left: " + onLeft + "Right: " + onRight);
  renderRectangles();
  if(mouseX > width*.25 && mouseY < width*.25 && mouseY > height*.25 && mouseY < height*.25){
    fill(80,160,240,120);
  }
  else{
    fill(20,200,20,120);
  }
  rect(width*.25,height*.25,width/2,height/2);
}


