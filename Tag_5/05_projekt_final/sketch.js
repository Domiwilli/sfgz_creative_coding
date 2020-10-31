//Variabeln
let angle = 0;
let input, button;

var distanz2 = 200;
var distanz3 = 100;

//Variabeln, die im GUI abgebildet werden
var gui;
var luftfeuchtigkeit = 200;
var windstaerke = 0;
var windstaerkeMin = 0;
var windstaerkeMax = 10;
var windstaerkeStep = 1;
var windrichtung = 360;
var temperatur = 0;
var temperaturMax = 40;

//Wetter API Verknüpfung
let key = '06e280b15621fb57f14de8e91c05e79e'; // https://weatherstack.com/product -- dein key!

function setup() {
  createCanvas(displayWidth, displayHeight);
  let url = 'https://api.weatherstack.com/current?access_key=' + key + '&query=Bern'; //Achtung gratis key unterstützt SSL nicht
  loadJSON(url, gotWeather);
  angleMode(DEGREES);

  input = createInput();
  input.position(300, 50);
  button = createButton('SUBMIT');
  button.position(470, 50);
  button.mousePressed(reloadJson);

  sliderRange(100, 200);
  var gui = createGui('p5.gui');
  gui.addGlobals('windstaerke', 'temperatur', 'luftfeuchtigkeit', 'windrichtung');
}

//Windräder wenig Zwischenraum
function draw() {
  background(0, 0, 0, 50);
  noFill();
  stroke(lerpColor(color('#20658f'), color('#89094F'), map(temperatur, 0, 40, 0, 1)));

  for (let x = 0; x < width; x += luftfeuchtigkeit) {
    for (let y = 0; y < height; y += luftfeuchtigkeit) {

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

  for (let x = 0; x < width; x += luftfeuchtigkeit) {
    for (let y = 0; y < height; y += luftfeuchtigkeit) {

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

  noFill();
  stroke(lerpColor(color('#04d3fc'), color('#FA63CC'), map(temperatur, 0, 40, 0, 1)));


  //Windräder mit mehr Zwischenraum
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

  //Windrichtung
  noFill();
  stroke(lerpColor(color('#02fdcc'), color('#FC01D6'), map(temperatur, 0, 40, 0, 1)));

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

  //Grosses Windrad 1
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

  //Grosses Windrad 2
  push();
  stroke('#C2C6A7');
  beginShape();
  translate(950, 150);
  rotate(-angle);
  translate(-950, -150);
  vertex(850, 50);
  quadraticVertex(850, 150, 950, 150);
  quadraticVertex(1050, 150, 1050, 250);
  endShape(CLOSE)
  pop();

  push();
  stroke('#C2C6A7');
  beginShape();
  translate(950, 150);
  rotate(-angle);
  translate(-950, -150);
  vertex(1050, 50);
  quadraticVertex(950, 50, 950, 150);
  quadraticVertex(950, 250, 850, 250);
  endShape(CLOSE)
  pop();

  push();
  noStroke();
  fill('#ffffff');
  ellipse(950, 150, 20, 20);
  pop();

  //Grosses Windrad 3
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

  angle = angle + windstaerke;
}

//Wetter API empfangen
function gotWeather(weather) {
  // Get the wind speed in km
  windstaerke = weather.current.wind_speed;
  console.log(windstaerke)
}

// reload JSon kreiert eine neue url für die API mit dem Ort, den die User eingegeben haben
function reloadJson() {
  let ort = input.value();
  let url = 'https://api.weatherstack.com/current?access_key=' + key + '&query=' + ort;

  // dann lädt die Funktion gotWeather diese neuen Daten
  loadJSON(url, gotWeather);
}
