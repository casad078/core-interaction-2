var canvas;

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
canvas.style('z-index','-1');
    c1 = color (91,142,190);
    c2 = color(242, 242, 242);
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let distance = dist(x, y, width / 2, height / 2);
      let maxDist = dist(0, 0, width / 2, height / 2);
      let interp;

      if (distance < maxDist * 1) {
        interp = map(distance, 0, maxDist * 1, 0, 0.5);
      } else {
        interp = map(distance, maxDist * 2, maxDist, 0.5, 1);
      }

      let newc = lerpColor(c1, c2, interp);
      set(x, y, newc);
    }
  }
  updatePixels();
}
   
function draw() {
  angleMode(DEGREES);
  
  push()
  fill(69, 48, 48);
  noStroke();
  shearX(-10);
  rect(550, 150, 10, 200)
  pop()
  
  push()
  fill(69, 48, 48);
  noStroke();
  shearX(10);
  rect(400, 150, 10, 200)
  pop()
  
  push()
  fill(235, 241, 165, 28);
  noStroke();
  ellipse(width/2,height/1.31, 70, 120)
  pop()
  
  push()
  fill(69, 48, 48);
  noStroke();
  ellipse(width/2,height/1.57, 130, 240)
  pop()
  
  push()
  fill(218,224,232, 30);
  noStroke();
  shearX(-45);
  ellipse(750, 395, 170, 170)
  pop()
  
  push()
  fill(218,224,232, 30);
  noStroke();
  shearX(45);
  ellipse(210, 395, 170, 170); 
  pop()
  
  push()
  fill(218,224,232, 30);
  noStroke();
  ellipse(335, 330, 270, 100)
  pop()
  
  push()
  fill(218,224,232, 30);
  noStroke();
  ellipse(626, 330, 270, 100); 
  pop()
  
  push()
  fill(62,42,42);
  noStroke();
  circle(width/2,height/2, 90, 90)
  pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}