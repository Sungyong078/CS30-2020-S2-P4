let a, b, xSpeed, ySpeed;

//setup values for a,b,c,d and create window
function setup() {
  createCanvas(windowWidth, windowHeight);
  a = 200;
  b = 300;
  xSpeed = random(3,8);
  ySpeed = random(3,8);
}

//draw background, rectangle and set speed of rectangle
function draw() { 
  flyingSquare();
  background(80, 80, 80);
  rect(a, b, 250, 75);
}

//change speed of x,y depends on a and b
function flyingSquare() {
  a += xSpeed;
  b += ySpeed;
  if (b >= height - 75 || b <= 0) {
    ySpeed = ySpeed * -1;
  }
  else if (a >= width - 250 || a <= 0) {
    xSpeed = xSpeed * -1;
  }


}