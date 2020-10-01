function setup() {
  createCanvas(displayWidth, displayHeight);
  noFill();
}


function draw() {

  strokeWeight(2);
  background(0);

 let z=0;

  for (let x = 100; x <= width; x += 150) {
    for (let y = 0; y <= height; y += 100) {
      stroke(255);
      fill(100, 100);
      if(z%2 == 0){
        ellipse(x, y, 100, 100);
      }

      z++;

    }

  }


  for (let x = 0; x <= width; x += 150) {
    for (let y = 0; y <= mouseY; y += 100) {
      stroke(255);
      fill(255, 100);
      ellipse(x, y, 100, 100);

    }

  }

  for (let x = 50; x <= mouseX; x += 150) {
    for (let y = 50; y <= height; y += 100) {
      stroke(255);
      fill(50, 100, 120, 100);
      ellipse(x, y, 80, 80);

    }




  }


}
