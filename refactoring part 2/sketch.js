let rectWidth = 75;
let rectHeight = 75;


//Chess Board
function setup() {
  createCanvas(600, 600);
}
function draw() {
  chessBoardOne();
  chessBoardTwo();
  chessBoardThree();
}


function chessBoardOne(){ //first three row
  fill(255);
  rect(0, 0, rectWidth, rectHeight);
  fill(0);
  rect(0, 75, rectWidth, rectHeight);
  fill(255);
  rect(0, 150, rectWidth, rectHeight);
  fill(0);
  rect(0, 225, rectWidth, rectHeight);
  fill(255);
  rect(0, 300, rectWidth, rectHeight);
  fill(0);
  rect(0, 375, rectWidth, rectHeight);
  fill(255);
  rect(0, 450, rectWidth, rectHeight);
  fill(0);
  rect(0, 525, rectWidth, rectHeight);
  fill(0);
  rect(75, 0, rectWidth, rectHeight);
  fill(255);
  rect(75, 75, rectWidth, rectHeight);
  fill(0);
  rect(75, 150, rectWidth, rectHeight);
  fill(255);
  rect(75, 225, rectWidth, rectHeight);
  fill(0);
  rect(75, 300, rectWidth, rectHeight);
  fill(255);
  rect(75, 375, rectWidth, rectHeight);
  fill(0);
  rect(75, 450, rectWidth, rectHeight);
  fill(255);
  rect(75, 525, rectWidth, rectHeight);
  fill(255);
  rect(150, 0, rectWidth, rectHeight);
  fill(0);
  rect(150, 75, rectWidth, rectHeight);
  fill(255);
  rect(150, 150, rectWidth, rectHeight);
  fill(0);
  rect(150, 225, rectWidth, rectHeight);
  fill(255);
  rect(150, 300, rectWidth, rectHeight);
  fill(0);
  rect(150, 375, rectWidth, rectHeight);
  fill(255);
  rect(150, 450, rectWidth, rectHeight);
  fill(0);
  rect(150, 525, rectWidth, rectHeight);
  fill(0);
}

function chessBoardTwo(){ //next three row
  rect(225, 0, rectWidth, rectHeight);
  fill(255);
  rect(225, 75, rectWidth, rectHeight);
  fill(0);
  rect(225, 150, rectWidth, rectHeight);
  fill(255);
  rect(225, 225, rectWidth, rectHeight);
  fill(0);
  rect(225, 300, rectWidth, rectHeight);
  fill(255);
  rect(225, 375, rectWidth, rectHeight);
  fill(0);
  rect(225, 450, rectWidth, rectHeight);
  fill(255);
  rect(225, 525, rectWidth, rectHeight);
  fill(255);
  rect(300, 0, rectWidth, rectHeight);
  fill(0);
  rect(300, 75, rectWidth, rectHeight);
  fill(255);
  rect(300, 150, rectWidth, rectHeight);
  fill(0);
  rect(300, 225, rectWidth, rectHeight);
  fill(255);
  rect(300, 300, rectWidth, rectHeight);
  fill(0);
  rect(300, 375, rectWidth, rectHeight);
  fill(255);
  rect(300, 450, rectWidth, rectHeight);
  fill(0);
  rect(300, 525, rectWidth, rectHeight);
  fill(0);
  rect(375, 0, rectWidth, rectHeight);
  fill(255);
  rect(375, 75, rectWidth, rectHeight);
  fill(0);
  rect(375, 150, rectWidth, rectHeight);
  fill(255);
  rect(375, 225, rectWidth, rectHeight);
  fill(0);
  rect(375, 300, rectWidth, rectHeight);
  fill(255);
  rect(375, 375, rectWidth, rectHeight);
  fill(0);
  rect(375, 450, rectWidth, rectHeight);
  fill(255);
  rect(375, 525, rectWidth, rectHeight);
}

function chessBoardThree(){ //last two row
  fill(255);
  rect(450, 0, rectWidth, rectHeight);
  fill(0);
  rect(450, 75, rectWidth, rectHeight);
  fill(255);
  rect(450, 150, rectWidth, rectHeight);
  fill(0);
  rect(450, 225, rectWidth, rectHeight);
  fill(255);
  rect(450, 300, rectWidth, rectHeight);
  fill(0);
  rect(450, 375, rectWidth, rectHeight);
  fill(255);
  rect(450, 450, rectWidth, rectHeight);
  fill(0);
  rect(450, 525, rectWidth, rectHeight);
  fill(0);
  rect(525, 0, rectWidth, rectHeight);
  fill(255);
  rect(525, 75, rectWidth, rectHeight);
  fill(0);
  rect(525, 150, rectWidth, rectHeight);
  fill(255);
  rect(525, 225, rectWidth, rectHeight);
  fill(0);
  rect(525, 300, rectWidth, rectHeight);
  fill(255);
  rect(525, 375, rectWidth, rectHeight);
  fill(0);
  rect(525, 450, rectWidth, rectHeight);
  fill(255);
  rect(525, 525, rectWidth, rectHeight);
}