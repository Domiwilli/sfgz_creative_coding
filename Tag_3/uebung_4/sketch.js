var gui;

var distanz = 150;


function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);

  sliderRange(100, 150);
  var gui = createGui('p5.gui');
  gui.addGlobals('distanz');
  noLoop();
}

function draw() {
  background(255, 255, 255, 10);

  noFill();
  stroke(215, 190, 168);

  for (let x = 0; x < width; x += distanz) {
    for (let y = 0; y < height; y += distanz) {

      push();
      beginShape();
      translate(50, 50);
      rotate();
      vertex(0 + x, 0 + y);
      quadraticVertex(0 + x, 50 + y, 50 + x, 50 + y);
      quadraticVertex(100 + x, 50 + y, 100 + x, 100 + y);
      endShape(CLOSE)
      pop();

      beginShape();
      vertex(0 + x, 100 + y);
      quadraticVertex(50 + x, 100 + y, 50 + x, 50 + y);
      quadraticVertex(50 + x, 0 + y, 100 + x, 0 + y);
      endShape(CLOSE)



      /*beginShape();
      vertex(0, 100);
      quadraticVertex(50, 100, 50, 50);
      quadraticVertex(50, 0, 100, 0);
      endShape(CLOSE)*/


    }

  }

}
