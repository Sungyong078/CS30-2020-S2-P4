// Perlin Noise Project
// Sungyong P
// March 6, 2020


let rectHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CORNERS);
  generateTerrain();
}

function draw() {
  
  
}


function generateTerrain(){
  let rectHeight = random(windowHeight);
  for(let i = 0; i < windowWidth; i = i+20){
    rect(i,height,i,rectHeight);
    fill(0);
  }
}