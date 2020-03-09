// Perlin Noise Project
// Sungyong P
// March 6, 2020


let rectHeight;
let rectTime = 5;
let rectSpeed = 0.04;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CORNERS);
}

function draw() { 
  generateTerrain();

}


function generateTerrain(){
  let rectHeight = noise(height);
  for(let i = 0; i < width; i++){
    fill(0);
    rect(i,height,15,rectHeight);
    
  }
}