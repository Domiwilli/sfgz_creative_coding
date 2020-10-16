var gui;

var distanz = 100;
var rotation = 360;
var farbe = (255, 0, 255);


function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);

  sliderRange(100, 200);
  var gui = createGui('p5.gui');
  gui.addGlobals('distanz','rotation', 'farbe');
  noLoop();
}

function draw() {
  background(0,0,0,50);

  noFill();
  stroke(farbe, 215, 190, 168);


  for (let x = 0; x < width; x += distanz) {
    for (let y = 0; y < height; y += distanz) {



  push();
    let z=0;
      beginShape();
      translate(50 + x, 50 + y);
      rotate(rotation);
      translate(-1*(50 + x), -1*(50+y));
      vertex(0 + x, 0 + y);
      quadraticVertex(0 + x, 50 + y, 50 + x, 50 + y);
      quadraticVertex(100 + x, 50 + y, 100 + x, 100 + y);
      endShape(CLOSE)
      fill(215, 190, 168);

      if(z%2 == 0){
        ellipse(50 + x,50 + y, 10, 10);
            }

z++;


  pop();

    push();
      beginShape();
      translate(50 + x, 50 + y);
      rotate(rotation);
      translate(-1*(50 + x), -1*(50+y));
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