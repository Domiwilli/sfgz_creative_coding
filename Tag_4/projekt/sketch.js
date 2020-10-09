var gui;

var distanz = 50;
var rotation = 360;
var groesse = 300;

function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);

  sliderRange(100, 200);
  var gui = createGui('p5.gui');
  gui.addGlobals('distanz','rotation','groesse');
  noLoop();
}

function draw() {
  background(0);

  noFill();
  stroke(215, 190, 168);


  for (let x = 0; x < width; x += distanz) {
    for (let y = 0; y < height; y += distanz) {


  push();
  translate(50 + groesse, 50 + groesse);
  rotate(rotation + x + y);
  translate(-50 + groesse, -50 + groesse);

      beginShape();
      vertex(0 + x, 0 + y);
      quadraticVertex(0 + x, 50 + y, 50 + x, 50 + y);
      quadraticVertex(100 + x, 50 + y, 100 + x, 100 + y);
      endShape(CLOSE)
  pop();


    push();
      beginShape();
      translate(50 + groesse, 50 + groesse);
      rotate(rotation + x + y);
      translate(-50 + groesse, -50 + groesse);
      vertex(0 + x, 100 + y);
      quadraticVertex(50 + x, 100 + y, 50 + x, 50 + y);
      quadraticVertex(50 + x, 0 + y, 100 + x, 0 + y);
      endShape(CLOSE)

  pop();

      /*beginShape();
      vertex(0, 100);
      quadraticVertex(50, 100, 50, 50);
      quadraticVertex(50, 0, 100, 0);
      endShape(CLOSE)*/


    }

  }

}
