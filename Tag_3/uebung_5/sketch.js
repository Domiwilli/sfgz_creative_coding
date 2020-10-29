//Achtung gratis key unterstützt SSL nicht und läuft bloss auf localhost!!



function setup() {
  createCanvas(displayWidth, displayHeight);
	rectMode(CENTER);
  noStroke();
  var r = 20;
}

function draw(){
  background(0, 0, 0, 50);
  stroke('#89094F');
  ellipse(width/2, height/2, 50 ,50);
  translate(width/2, height/2);
  noFill();

for (var b = 20; b < 401; b = b * 1.5) {
	for (var i = 0; i < 8; i++) {

push();
beginShape();
translate(50, 50);
rotate(TWO_PI * i / 8);
translate(-1 * (50 + b), -1 * (50 + b));
vertex(0, 0);
quadraticVertex(0, 50, 50, 50);
quadraticVertex(100, 50, 100, 100);
endShape(CLOSE)
pop();


push();
beginShape();
translate(50, 50);
rotate(TWO_PI * i / 8);
translate(-1 * (50 + b), -1 * (50 + b));
vertex(0, 100);
quadraticVertex(50, 100, 50, 50);
quadraticVertex(50, 0, 100, 0);
endShape(CLOSE)
pop();

}
}

push();
beginShape();
translate(50, 50);
rotate(angle);
translate(-50, -50);
vertex(0, 100);
quadraticVertex(50, 100, 50, 50);
quadraticVertex(50, 0, 100, 0);
endShape(CLOSE)

}
