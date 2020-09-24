function setup() {
  createCanvas(800, 800);
  noFill();
}

function draw() {

  strokeWeight(2);
  background(194, 223, 227);

  for(let x=1;x<=5;x++){
    stroke(255);
      rect(25*x,25*x,200,400);
      }

  for(let x=1;x<=5;x++){
    stroke(255);
      rect(25*x,25*x,400,200);

      }

  for(let x=2;x<=10;x++){
    stroke(255);
      rect(25*x,25*x,400,200);

      }

  for(let x=2;x<=10;x++){
    stroke(255);
      rect(25*x,25*x,200,400);

      }


}
