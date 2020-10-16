

var gui;

var distanz = 100;
var distanz2 = 200;
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

      beginShape();

      translate(50 + x, 50 + y);
      rotate(rotation);
      translate(-1*(50 + x), -1*(50+y));
      vertex(0 + x, 0 + y);
      quadraticVertex(0 + x, 50 + y, 50 + x, 50 + y);
      quadraticVertex(100 + x, 50 + y, 100 + x, 100 + y);
      endShape(CLOSE)

  pop();

}}

    for (let x = 0; x < width; x += distanz) {
      for (let y = 0; y < height; y += distanz) {


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

  stroke(farbe, 50, 190, 168);


  for (let z = 0; z < width; z += distanz2) {
    for (let g = 0; g < height; g += distanz2) {

  push();

      beginShape();

      translate(50 + z, 50 + g);
      rotate(-rotation);
      translate(-1*(50 + z), -1*(50 + g));
      vertex(0 + z, 0 + g);
      quadraticVertex(0 + z, 50 + g, 50 + z, 50 + g);
      quadraticVertex(100 + z, 50 + g, 100 + z, 100 + g);
      endShape(CLOSE)

  pop();
}}

for (let z = 0; z < width; z += distanz2) {
  for (let g = 0; g < height; g += distanz2) {

push();
  beginShape();
  translate(50 + z, 50 + g);
  rotate(-rotation);
  translate(-1*(50 + z), -1*(50 + g));
  vertex(0 + z, 100 + g);
  quadraticVertex(50 + z, 100 + g, 50 + z, 50 + g);
  quadraticVertex(50 + z, 0 + g, 100 + z, 0 + g);
  endShape(CLOSE)


pop();

}}


}
