let durchmesser=100;

function setup() {
  createCanvas(400, 400);
    background(255, 113, 91);
    fill(252, 252, 252, 50);

}

function draw() {
   if (mouseIsPressed){
    noStroke();
    ellipse(mouseX, mouseY, durchmesser, durchmesser, 100)
  }

}
