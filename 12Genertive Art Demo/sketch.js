// Diagonal Line Art
const RECT_WIDTH = 10;
const RECT_HEIGHT = 50;
let colors = ["#CFF09E", "#A8DBA8", "#79BD9A", "#3B8686", "#0B486B"]; //fill with HEX codes as strings




function setup() {
  createCanvas(windowWidth, windowHeight);

}



function draw() {
  background(220);
  randomSeed(0);
  //border();
  drawRowRGB(height*0.2);
  drawRowHSB(height*0.5);
  drawRowCustom(height*0.8);
}


function drawRowRGB(yPos){
  colorMode(RGB, 255);
  for(let x = 0; x < width; x += RECT_WIDTH){
    fill(random(255), random(255), random(255));
    rect(x,yPos, RECT_WIDTH, RECT_HEIGHT);
  }
}


function drawRowHSB(yPos){
  colorMode(HSB, 360);
  for(let x = 0; x < width; x += RECT_WIDTH){
    fill(x/3 % 360, map(mouseY,0,height,0,300), 300);
    rect(x,yPos, RECT_WIDTH, RECT_HEIGHT);
  }
}


function drawRowCustom(yPos){
  colorMode(RGB,255);
  for(let x = 0; x < width; x += RECT_WIDTH){
    let index = int(random(colors.length));
    fill(colors[index]);
    rect(x,yPos, RECT_WIDTH, RECT_HEIGHT);
  }
}


function border(){
  strokeWeight(15);
  rect(0,0,width,height);
  strokeWeight(2);
}