// Interactive Scene
// Sungyong Park
// 2020 Feb 6
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = windowHeight/2;
}

function draw() {
  background(100,100,255);
  character(x,y);
  ground(x,y);
  sun(x,y);
  house(x,y);
}


function character(x,y){
  fill(255);
  ellipse(x-350,y+200,60,50); //head
  fill(0);
  ellipse(x-365,y+190,10,10); //left eye
  ellipse(x-335,y+190,10,10); //right eye
  strokeWeight(2);
  line(x-360,y+210,x-340,y+210); //mouse
  line(x-350,y+225,x-350,y+280);
  line(x-350,y+245,x-325,y+230); //right arm
  line(x-350,y+245,x-375,y+230); //left arm
  line(x-350,y+280,x-360,y+320); //left leg
  line(x-350,y+280,x-340,y+320); //right leg
  
}


function ground(x,y){
  fill(50,255,50);
  rect(x-500,y+323,1000,300);
}

function sun(x,y){
  fill(255,50,0);
  ellipse(x-400,y-350,100,100);
}

function house(x,y){
  fill(255,255,0);
  rect(x+200,y+223,100,100);
  fill(200,50,200);
  triangle(x+170,y+223,x+330,y+223,x+250,y+150);
  rect()
}