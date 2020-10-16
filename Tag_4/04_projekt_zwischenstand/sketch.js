var gui;

var distanz = 100;
var rotation = 360;

function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);

  sliderRange(100, 200);
  var gui = createGui('p5.gui');
  gui.addGlobals('distanz','rotation');
  noLoop();
}

function draw() {
  background(0);

  noFill();
  stroke(215, 190, 168);


  for (let x = 0; x < width; x += distanz) {
    for (let y = 0; y < height; y += distanz) {

  push();

      beginShape();
      vertex(0 + x, 0 + y);
      quadraticVertex(0 + x, 50 + y, 50 + x, 50 + y);
      quadraticVertex(100 + x, 50 + y, 100 + x, 100 + y);
      endShape(CLOSE)
      fill(255, 0, 0);
      ellipse(50 + x, 50 + y, 20, 20,);
  pop();

/*

    push();
      beginShape();
      translate(50, 50);
      rotate(rotation);
      translate(-50, -50);
      vertex(0 + x, 100 + y);
      quadraticVertex(50 + x, 100 + y, 50 + x, 50 + y);
      quadraticVertex(50 + x, 0 + y, 100 + x, 0 + y);
      endShape(CLOSE)

  pop();
*/
      /*beginShape();
      vertex(0, 100);
      quadraticVertex(50, 100, 50, 50);
      quadraticVertex(50, 0, 100, 0);
      endShape(CLOSE)*/


    }

  }

}
