function setup () {
  createCanvas(windowWidth, windowHeight). position(0.0).style('z-index',-1);
  createA("https://github.com/ItsPinina","You won 1.000.000 dlrs. Please write your credit card number","_blank").id("god");
  textSize(5000);
}

function draw() {
  textSize(50);
  text("💸", mouseX, mouseY);
}

  function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}