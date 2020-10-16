var gui;

var distanz = 50;
var rotation = 360;

function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);

  sliderRange(100, 200);
  var gui = createGui('p5.gui');
  gui.addGlobals('distanz', 'rotation');
  noLoop();
}

function draw() {
  background(0, 255);

  noFill();
  stroke(215, 190, 168);
  angleMode(DEGREES);

  for (let x = 0; x < width; x += distanz) {
    for (let y = 0; y < height; y += distanz) {

      push();

      beginShape();
      translate(50 + x, 50 + y);
      rotate(rotation);
      translate(-50 + x, -50 + y);
      vertex(0 + x, 0 + y);
      quadraticVertex(0 + x, 50 + y, 50 + x, 50 + y);
      quadraticVertex(100 + x, 50 + y, 100 + x, 100 + y);
      endShape(CLOSE)
      pop();

      push();
      beginShape();
      translate(50 + x, 50 + y);
      rotate(rotation);
      translate(-50 + x, -50 + y);
      vertex(0 + x, 100 + y);
      quadraticVertex(50 + x, 100 + y, 50 + x, 50 + y);
      quadraticVertex(50 + x, 0 + y, 100 + x, 0 + y);
      endShape(CLOSE)

      pop();


      push();

      beginShape();
      translate(75 + x, 75 + y);
      rotate(-rotation);
      translate(-75 + x, -75 + y);
      vertex(0 + x, 0 + y);
      quadraticVertex(0 + x, 50 + y, 50 + x, 50 + y);
      quadraticVertex(100 + x, 50 + y, 100 + x, 100 + y);
      endShape(CLOSE)
      pop();

      push();
      beginShape();
      translate(75 + x, 75 + y);
      rotate(-rotation);
      translate(-75 + x, -75 + y);
      vertex(0 + x, 100 + y);
      quadraticVertex(50 + x, 100 + y, 50 + x, 50 + y);
      quadraticVertex(50 + x, 0 + y, 100 + x, 0 + y);
      endShape(CLOSE)

      pop();



  }

}

}
