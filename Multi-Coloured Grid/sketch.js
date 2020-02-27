// Multi-Coloured Grid
// Sungyong P
// 2/27/2020



let gridSpacing = 30;




function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  rectGrid();
}


function mouseClicked(){
  rectGrid();
}


function rectGrid() {
  for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
    for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
      let ranRed = random(255);
      let ranBlue = random(255);
      let ranGreen = random(255);
      fill(ranRed, ranBlue, ranGreen);
      rect(x, y, gridSpacing, gridSpacing);
    }
  }
}

function draw() {

}
