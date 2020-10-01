

var gui;

var anz = 10;
var distanz = 25;
var oben = 0;
var seitlich = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noFill();
  var gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');
  noLoop();
}


function draw() {
  strokeWeight(2);
  background(242, 161, 10);

  for (let i = 1; i <= anz; i++) {
    strokeWeight(i);
    ellipse(oben * i, distanz * i, 100, 100);
    ellipse(distanz * i, oben * i, 100, 100);

  }
}
