
function setup() {
  createCanvas(600, 400);

  noStroke();
}

function draw() {
  background(76, 84, 84);

  let durchmesser=150;
  let a=0;

  fill(30, 168, 150,100);
  ellipse(a,height/2,durchmesser,durchmesser);

  //kreis 1
  a+=20;
  //a=a+60;
  ellipse(a,height/1.5,90,90);
  stroke(5);

  //kreis 2
  durchmesser=120;
  a+=80;
  ellipse(a,height/2,durchmesser,durchmesser);
  noStroke();

  //kreis 3
  a+=20;
  ellipse(a,height/2.5,90,90);

  //kreis 4
  durchmesser=150;
  a+=80;
  ellipse(a,height/2,durchmesser,durchmesser);

  //kreis 5
  a+=20;
  ellipse(a,height/1.5,90,90);
    stroke(5);

  //kreis 6
  durchmesser=120;
  a+=80;
  ellipse(a,height/2,durchmesser,durchmesser);
  noStroke();

  //kreis 7
  a+=20;
  ellipse(a,height/2.5,90,90);

  //kreis 8
  durchmesser=150;
  a+=80;
  ellipse(a,height/2,durchmesser,durchmesser);

  //kreis 9
  a+=20;
  ellipse(a,height/1.5,90,90);
  stroke(5);

  //kreis 10
  durchmesser=120;
  a+=80;
  ellipse(a,height/2,durchmesser,durchmesser);
  noStroke();

  //kreis 11
  a+=20;
  ellipse(a,height/2.5,90,90);

  //kreis 12
  durchmesser=150;
  a+=80;
  ellipse(a,height/2,durchmesser,durchmesser);

  //kreis 13
  a+=20;
  ellipse(a,height/1.5,90,90);

}
