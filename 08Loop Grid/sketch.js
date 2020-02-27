//Loop Grid
let gridSpacing = 30;





function circleGrid(){
  for(let y = gridSpacing/2; y < height; y += gridSpacing){
    for(let x = gridSpacing/2; x < width; x += gridSpacing){
      let size = random(gridSpacing * 0.8, gridSpacing * 1.3);
      ellipse(x, y, size, size);
    }
  }
}


function mouseClicked(){
  circleGrid();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  circleGrid();
}

function draw() {

  
}
