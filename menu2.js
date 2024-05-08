let canvas;
let a;
let fondo;
let nivel1;
let nivel2;
let nivel3;
let nivel4;
let ojoala;

let nivel11;
let nivel22;
let nivel33;
let nivel44;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup(){
  canvas = createCanvas(windowWidth, windowHeight); 
  canvas.position(0, 0);
a = createA('nivel1.html', 'nivel 1');
a.position(730, 150);
a.style('font-size', '32px');
a.style('color', 'red');

a = createA('nivel2.html', 'nivel 2');
a.position(250, 400);
a.style('font-size', '32px');
a.style('color', 'red');

a = createA('nivel3.html', 'nivel 3');
a.position(1200, 400);
a.style('font-size', '32px');
a.style('color', 'red');

a = createA('nivel3.html', 'nivel 4');
a.position(730, 600);
a.style('font-size', '32px');
a.style('color', 'red');

textFont('Homemade Apple');


fondo = loadImage ("intro/menu.jpg");
nivel1 = loadImage ("intro/nivel1.jpg");
nivel2 = loadImage ("intro/nivel2.jpg");
nivel3 = loadImage ("intro/nivel3.jpg");
nivel4 = loadImage ("intro/nivel4.jpg");
ojoala = loadImage ("intro/ojoala.png");

nivel11=loadImage("intro/nivel11.jpg");
nivel22=loadImage("intro/nivel22.jpg");
nivel33=loadImage("intro/nivel33.jpg");
nivel44=loadImage("intro/nivel44.jpg");
}

function draw () {
  image (fondo, 0, 0, windowWidth, windowHeight);
  strokeWeight (7);
  stroke(255);
  fill (255, 80);

  image (nivel11, 650, 100, 250, 140 );
  rect (650, 100, 250, 140);
  if(mouseX < 900 && mouseY < 240){
    if (mouseX>650 && mouseY > 100){
 image (nivel1, 650, 100, 250, 140 );
      if (mouseIsPressed) {
        image (nivel1, 650, 100, 250, 140 );
      fill (255, 0, 0);
        textSize(75);
        text("NO", 190, 370);
        text("NO", 590, 470);
        text("NO", 590, 490);
      }     
  }}

  
  image (nivel22, 170, 350, 250, 140);
  rect (170, 350, 250, 140);
  if(mouseX < 420 && mouseY < 490){
    if (mouseX>170 && mouseY > 350){
      image (nivel2, 170, 350, 250, 140);
      if (mouseIsPressed) {
        image (nivel2, 170, 350, 250, 140);
      fill (255, 0, 0);
        textSize(15);
        text("NO SE", 390, 250);
        text("NO SE", 390, 270);
        text("NO SE", 390, 290);
      }     
  }}

  image (nivel33, 1120, 350, 250, 140);
  rect (1120, 350, 250, 140);
  if(mouseX < 1370 && mouseY < 490){
    if (mouseX>1120 && mouseY > 350){
      image (nivel3, 1120, 350, 250, 140);
      if (mouseIsPressed) {
        image (nivel3, 1120, 350, 250, 140);
      fill (255, 0, 0);
        textSize(75);
        text("NO SE", 1190, 250);
        text("NO SE", 1190, 270);
        text("NO SE", 1190, 290);
      }     
  }}
  
  image (nivel44, 650, 550, 250, 140);
  rect (650, 550, 250, 140);
  if(mouseX < 900 && mouseY < 690){
    if (mouseX>650 && mouseY > 550){
      image (nivel4, 650, 550, 250, 140);
      if (mouseIsPressed) {
        image (nivel4, 650, 550, 250, 140);
      fill (255, 0, 0);
        textSize(15);
        text("NO SE", 1090, 550);
        text("NO SE", 1090, 570);
        text("NO SE", 1090, 590);
      }     
  }}
  image (ojoala, mouseX, mouseY, 90, 90);

}