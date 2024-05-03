let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  c1 = color(91, 142, 190);
  c2 = color(242, 242, 242);

  c1 = color(39, 39, 40);
  c2 = color(83, 132, 132);

  drawGradient();
}

function drawGradient() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let distance = dist(x, y, width / 2, height / 2);
      let maxDist = dist(0, 0, width / 2, height / 2);
      let interp;

      if (distance < maxDist * 1) {
        interp = map(distance, 0, maxDist * 2, 0, 1);
      } else {
        interp = map(distance, maxDist * 2, maxDist, 0.5, 1);
      }

      let newc = lerpColor(c1, c2, interp);
      set(x, y, newc);
    }
  }
  updatePixels();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvas.position(0, 0); // Reset canvas position
  drawGradient();
}
   
function draw() {
  angleMode(DEGREES);

  // antena right
  push()
  fill(69, 48, 48);
  noStroke();
  shearX(-10);
  rect(750, 170, 10, 130, 40)
  pop()

    // antena left
  push()
  fill(69, 48, 48);
  noStroke();
  shearX(10);
  rect(600, 170, 10, 130, 40)
  pop()
  
    // bulb
  push()
  fill(235, 241, 165, 28);
  noStroke();
  ellipse(680, 505, 80, 120)
  pop()
  
    // antena body
  push()
  fill(69, 48, 48);
  noStroke();
  ellipse(680, 400, 130, 240)
  pop()
  
    // wing bottom left
  push()
  fill(218,224,232, 30);
  noStroke();
  shearX(-45);
  ellipse(940, 395, 170, 170)
  pop()
  
    // wing bottom right
  push()
  fill(218,224,232, 30);
  noStroke();
  shearX(45);
  ellipse(417, 395, 170, 170); 
  pop()
  
    // wing left
  push()
  fill(218,224,232, 30);
  noStroke();
  ellipse(526, 330, 270, 100)
  pop()
  
    // wing right
  push()
  fill(218,224,232, 30);
  noStroke();
  ellipse(830, 330, 270, 100); 
  pop()
  
  
    // so no head?
  push()
  fill(62,42,42);
  noStroke();
  circle(680, 300, 90, 90)
  pop()


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}