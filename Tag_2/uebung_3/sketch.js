function setup() {
  createCanvas(800, 800);
  noFill();
}

function draw() {

  strokeWeight(2);
  background(194, 223, 227);


  for (let x = 100; x <= width; x += 150) {
    for (let y = 0; y <= height; y += 100) {
      stroke(0);
      fill(100, 100);
      ellipse(x, y, 100, 100);

    }
  }


  for (let x = 0; x <= width; x += 150) {
    for (let y = 0; y <= height; y += 100) {
      stroke(0);
      fill(255, 100);
      ellipse(x, y, 100, 100);

    }

  }

  for (let x = 50; x <= width; x += 150) {
    for (let y = 50; y <= height; y += 100) {
      stroke(0);
      fill(50, 100, 120, 100);
      ellipse(x, y, 80, 80);


    }

  }







}
