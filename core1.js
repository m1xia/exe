let canvas;




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    }



function setup (){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);





slider = createSlider(50, 300, 100);
slider.position(400, 700);
slider.style('width', '800px');


a = createA('core2.html', 'Come');
a.position(730, 300);
a.style('font-size', '40px');
a.style('color', 'black');



}

