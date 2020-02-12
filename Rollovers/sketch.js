// Rollovers
// Sungyong Park
// Feb 12 2020

let x = width;
let y = height;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  squareOne(x,y);
}

function squareOne(){
  fill(0);
  rect(x,y,x,y);
}