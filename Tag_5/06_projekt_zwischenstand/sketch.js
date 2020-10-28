
let angle = 0;

var gui;

var distanz = 100;
var distanz2 = 200;
var distanz3 = 100;
var staerke = 0;
var staerkeMin = 0;
var staerkeMax = 10;
var staerkeStep = 1;
var windrichtung = 360;
var temperatur = 0;
var temperaturMax = 40;

let key='06e280b15621fb57f14de8e91c05e79e'; // https://weatherstack.com/product -- dein key!

function setup() {
  createCanvas(displayWidth, displayHeight);
  let url = 'https://api.weatherstack.com/current?access_key='+key+'&query=Neapel'; //Achtung gratis key unterstützt SSL nicht
  loadJSON(url, gotWeather);
  angleMode(DEGREES);

  sliderRange(100, 200);
  var gui = createGui('p5.gui');
  gui.addGlobals('distanz', 'staerke', 'temperatur', 'windrichtung');
}

function draw() {
  background(0, 0, 0, 50);
  stroke(lerpColor(color('#89094F'), color('#04d3fc'), map(temperatur, 0, 40, 0, 1)));

  for (let x = 0; x < width; x += distanz) {
    for (let y = 0; y < height; y += distanz) {

      push();
      beginShape();
      translate(50 + x, 50 + y);
      rotate(-angle);
      translate(-1 * (50 + x), -1 * (50 + y));
      vertex(0 + x, 0 + y);
      quadraticVertex(0 + x, 50 + y, 50 + x, 50 + y);
      quadraticVertex(100 + x, 50 + y, 100 + x, 100 + y);
      endShape(CLOSE)

      pop();

    }
  }

  for (let x = 0; x < width; x += distanz) {
    for (let y = 0; y < height; y += distanz) {


      push();
      beginShape();
      translate(50 + x, 50 + y);
      rotate(-angle);
      translate(-1 * (50 + x), -1 * (50 + y));
      vertex(0 + x, 100 + y);
      quadraticVertex(50 + x, 100 + y, 50 + x, 50 + y);
      quadraticVertex(50 + x, 0 + y, 100 + x, 0 + y);
      endShape(CLOSE)

      pop();
    }
  }

//stroke(temperatur, 50, 190, 168);
stroke(lerpColor(color('#E176B0'), color('#20658f'), map(temperatur, 0, 40, 0, 1)));
noFill();


  for (let z = 0; z < width; z += distanz2) {
    for (let g = 0; g < height; g += distanz2) {

      push();

      beginShape();

      translate(50 + z, 50 + g);
      rotate(angle);
      translate(-1 * (50 + z), -1 * (50 + g));
      vertex(0 + z, 0 + g);
      quadraticVertex(0 + z, 50 + g, 50 + z, 50 + g);
      quadraticVertex(100 + z, 50 + g, 100 + z, 100 + g);
      endShape(CLOSE)

      pop();
    }
  }

  for (let z = 0; z < width; z += distanz2) {
    for (let g = 0; g < height; g += distanz2) {

      push();
      beginShape();
      translate(50 + z, 50 + g);
      rotate(angle);
      translate(-1 * (50 + z), -1 * (50 + g));
      vertex(0 + z, 100 + g);
      quadraticVertex(50 + z, 100 + g, 50 + z, 50 + g);
      quadraticVertex(50 + z, 0 + g, 100 + z, 0 + g);
      endShape(CLOSE)


      pop();

    }
  }

  //stroke(temperatur, 180, 250, 250);
  noFill();
  stroke(lerpColor(color('#694873'), color('#02fdcc'), map(temperatur, 0, 40, 0, 1)));

  for (let n = 0; n < width; n += distanz3) {
    for (let f = 0; f < width; f += distanz3) {


      push();
      beginShape();
      translate(50 + n, 50 + f);
      rotate(-windrichtung);
      translate(-1 * (50 + n), -1 * (50 + f));
      vertex(0 + n, 100 + f);
      quadraticVertex(50 + n, 100 + f, 50 + n, 50 + f);
      endShape(CLOSE)
      pop();

    }
  }

push();
   stroke('#C2C6A7');
      beginShape();
      translate(350, 350);
      rotate(-angle);
      translate(-350, -350);
      vertex(250, 250);
      quadraticVertex(250, 350, 350, 350);
      quadraticVertex(450, 350, 450, 450);
      endShape(CLOSE)
pop();
push();
stroke('#C2C6A7');
      beginShape();
      translate(350, 350);
      rotate(-angle);
      translate(-350, -350);
      vertex(450, 250);
      quadraticVertex(350, 250, 350, 350);
      quadraticVertex(350, 450, 250, 450);
      endShape(CLOSE)
pop();

push();
noStroke();
fill('#ffffff');
ellipse(350, 350, 20, 20);
pop();

push();
   stroke('#C2C6A7');
      beginShape();
      translate(550, 750);
      rotate(-angle);
      translate(-550, -750);
      vertex(450, 650);
      quadraticVertex(450, 750, 550, 750);
      quadraticVertex(650, 750, 650, 850);
      endShape(CLOSE)
pop();
push();
stroke('#C2C6A7');
      beginShape();
      translate(550, 750);
      rotate(-angle);
      translate(-550, -750);
      vertex(650, 650);
      quadraticVertex(550, 650, 550, 750);
      quadraticVertex(550, 850, 450, 850);
      endShape(CLOSE)
pop();

push();
noStroke();
fill('#ffffff');
ellipse(550, 750, 20, 20);
pop();


push();
   stroke('#C2C6A7');
      beginShape();
      translate(1150, 550);
      rotate(-angle);
      translate(-1150, -550);
      vertex(1050, 450);
      quadraticVertex(1050, 550, 1150, 550);
      quadraticVertex(1250, 550, 1250, 650);
      endShape(CLOSE)
pop();
push();
stroke('#C2C6A7');
      beginShape();
      translate(1150, 550);
      rotate(-angle);
      translate(-1150, -550);
      vertex(1250, 450);
      quadraticVertex(1150, 450, 1150, 550);
      quadraticVertex(1150, 650, 1050, 650);
      endShape(CLOSE)
pop();


push();
noStroke();
fill('#ffffff');
ellipse(1150, 550, 20, 20);
pop();


  angle = angle + staerke;


}

function gotWeather(weather) {
    // Get the wind speed in km
    staerke = weather.current.wind_speed;
    staerke = map(staerke, 0, 200, 0, 20); // in Rotationsgrad mappen. Bei 200stdkm dreht sich das Windrad nun 10 Grad weiter pro Frame

    console.log(staerke)

}
