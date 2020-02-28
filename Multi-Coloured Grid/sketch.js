// Multi-Coloured Grid
// Sungyong P
// 2/27/2020



let gridSpacing = 30;



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectGrid();
}



function rectGrid() {
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
  if (keyCode === LEFT_ARROW) {
    background(100);
    rectGrid();
  }
}


function mousePressed() {
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
