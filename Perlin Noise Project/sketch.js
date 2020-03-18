// Perlin Noise Project
// Sungyong P
// March 6, 2020


let xOff = 0;
let yOff = 0;
let start = 0;
let inc = 0.03;
const RECTWIDTH = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function draw() {
  
  background(0);
  stroke(255);
  
  generateTerrain();
}


function generateTerrain() {
  fill(255);
  let xOff = start;
  let yOff = start;
  for (let x = 0; x < width; x++) {
    let y = map(noise(xOff),0,1,0,height);
    rect(x,height,x+RECTWIDTH,y);
    yOff += 0.009;
    xOff += 0.009;
    
  }
  start += inc;
}



