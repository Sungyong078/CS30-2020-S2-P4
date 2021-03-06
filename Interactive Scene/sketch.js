// Interactive Scene
// Sungyong Park
// 2020 Feb 6
//


let x, y;


function character() {
  
  if (mouseIsPressed) { //if mouse is pressed makes character bigger
    fill(150,24,124);
    ellipse(x - 350, y + 100, 100, 90); //head
    fill(124,15,15);
    ellipse(x - 375, y + 90, 25, 25); //left eye
    ellipse(x - 325, y + 90, 25, 25); //right eye
    strokeWeight(2);
    line(x - 370, y + 120, x - 330, y + 120); //mouse
    line(x - 350, y + 145, x - 350, y + 250);
    line(x - 350, y + 165, x - 300, y + 155); //right arm
    line(x - 350, y + 165, x - 395, y + 155); //left arm
    line(x - 350, y + 250, x - 380, y + 320); //left leg
    line(x - 350, y + 250, x - 320, y + 320); //right leg
  }
  else{ //else stays normal
    fill(255);
    ellipse(x - 350, y + 200, 60, 50); //head
    fill(0);
    ellipse(x - 365, y + 190, 10, 10); //left eye
    ellipse(x - 335, y + 190, 10, 10); //right eye
    strokeWeight(2);
    line(x - 360, y + 210, x - 340, y + 210); //mouse
    line(x - 350, y + 225, x - 350, y + 280);
    line(x - 350, y + 245, x - 325, y + 230); //right arm
    line(x - 350, y + 245, x - 375, y + 230); //left arm
    line(x - 350, y + 280, x - 360, y + 320); //left leg
    line(x - 350, y + 280, x - 340, y + 320); //right leg
  }

}



function ground(x, y) {
  fill(50, 255, 50);
  rect(x - windowWidth, y + 323, x + windowWidth, 300);
}

function sun(x, y) {
  fill(255, 50, 0);
  ellipse(x - 400, y - 300, 150, 150);
}

function house(x, y) {
  fill(255, 255, 0);
  rect(x + 200, y + 223, 100, 100);
  fill(200, 50, 200);
  triangle(x + 170, y + 223, x + 330, y + 223, x + 250, y + 150);
  fill(0);
  rect(x + 260, y + 268, 30, 55); //door
  fill(70, 150, 123);
  rect(x + 210, y + 250, 25, 25); //window
  line(x + 223, y + 250, x + 223, y + 275);
  line(x + 210, y + 263, x + 235, y + 263);
}


function draw() {
  movecharacter = x;
  background(100, 100, 255);
  character(x,y);
  ground(x, y);
  sun(x, y);
  house(x, y);

  if (keyIsDown(RIGHT_ARROW)) {
    movecharacter += 5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    movecharacter -= 5;
  }
  
  textSize(30);
  fill(0);
  text('Sungyong', x + 630, y + 380)

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
}