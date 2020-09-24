function setup() {
  createCanvas(800, 800);
  noFill();
}

function draw() {

  strokeWeight(12);
  background(220);

  for(let x=1;x<=11;x++){
      rect(25*x,25*x,500,500);

      }
}
