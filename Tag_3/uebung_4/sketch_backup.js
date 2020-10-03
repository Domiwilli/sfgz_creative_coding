function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(0);


  noFill();
  stroke(215, 190, 168);

  beginShape();
  vertex(0, 0);
  quadraticVertex(0, 50, 50, 50);
  quadraticVertex(100, 50, 100, 100);
  endShape(CLOSE)

  beginShape();
  vertex(0, 100);
  quadraticVertex(50, 100, 50, 50);
  quadraticVertex(50, 0, 100, 0);
  endShape(CLOSE)

  beginShape();
  vertex(100, 100);
  quadraticVertex(100, 50, 150, 50);
  quadraticVertex(200, 50, 200, 0);
  endShape(CLOSE)

  beginShape();
  vertex(100, 0);
  quadraticVertex(100, 50, 150, 50);
  quadraticVertex(200, 50, 200, 100);
  endShape(CLOSE)

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
