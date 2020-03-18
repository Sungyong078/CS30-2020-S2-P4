let targetW = 200;
let targetH = 200;

//Black and White Target
function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(240);
  target();
}

function target(){ //create a target
  ellipse(targetW, targetH, 400, 400);
  ellipse(targetW, targetH, 360, 360);
  ellipse(targetW, targetH, 320, 320);
  ellipse(targetW, targetH, 280, 280);
  ellipse(targetW, targetH, 240, 240);
  ellipse(targetW, targetH, 200, 200);
  ellipse(targetW, targetH, 160, 160);
  ellipse(targetW, targetH, 120, 120);
  ellipse(targetW, targetH, 80, 80);
  ellipse(targetW, targetH, 40, 40);
}