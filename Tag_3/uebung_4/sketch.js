function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  noFill();
  beginShape();
  vertex(200, 200);
  quadraticVertex(200, 150, 250, 150);
  quadraticVertex(300, 150, 300, 100);
  endShape(CLOSE)

  beginShape();
  vertex(200, 100);
  quadraticVertex(200, 150, 250, 150);
  quadraticVertex(300, 150, 300, 200);

  endShape(CLOSE)
}
