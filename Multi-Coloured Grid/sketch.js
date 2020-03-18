// Multi-Coloured Grid
// Sungyong P
// 2/27/2020
//draw random squares with random colors


let gridSpacing = 30; //size of square



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectGrid();
}



function rectGrid() { //set color and size of the square
  for (let y = 0; y < height; y += gridSpacing) {
    for (let x = 0; x < width; x += gridSpacing) {
      let ranRed = random(255);
      let ranBlue = random(255);
      let ranGreen = random(255);
      fill(ranRed, ranBlue, ranGreen);
      rect(x, y, gridSpacing, gridSpacing);
    }
  }
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) { //if left arrow is pressed change the color of square
    background(100);
    rectGrid();
  }
  else if (keyCode === RIGHT_ARROW){ // if right arrow is pressed make the size smaller by 5
    gridSpacing -= 5;
    background(100);
    rectGrid();
  }
}


function mousePressed() { //if left button is cliked make the size bigger by 5
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      gridSpacing += 5;
      background(100);
      rectGrid();
    }
  }

}


function draw() {

}
