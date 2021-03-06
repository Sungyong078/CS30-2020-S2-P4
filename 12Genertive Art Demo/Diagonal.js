// Diagonal Line Art

let GRID_SIZE = 50;
let seed;


function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(1000);
}

function diagonal(x, y, s, dir){
  //direction is going to be 0 → Ascending  1 or Anything else→ Descending
  if(dir===0){ //Ascending
    line(x - s/2, y + s/2, x + s/2, y - s/2);
  }
  else if (dir===1){ //Descending
    line(x - s/2, y - s/2, x + s/2, y + s/2);
  }
}


function draw() {
  GRID_SIZE = map(mouseX,0,width,3,60);
  randomSeed(seed);
  background(220);
  border();
  createTiles();
}


function createTiles(){
  for(let x = GRID_SIZE/2; x < width; x += GRID_SIZE){
    for(let y = GRID_SIZE/2; y < height; y += GRID_SIZE){
      diagonal(x,y,GRID_SIZE,int(random(2)));
    }
  }
}

function border(){
  strokeWeight(15);
  rect(0,0,width,height);
  strokeWeight(2);
}
