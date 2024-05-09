let canvas;
let dayTimeColors
let nightTimeColors 
// setInterval(drawGradient, 1000);

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  dayTimeColors = [color(91, 142, 190), color(242, 242, 242)]
  nightTimeColors = [color(0, 0, 0), color(82, 82, 82)]
}

function drawGradient(c1, c2) {
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
   
function draw() {
  angleMode(DEGREES);

  let hours = hour()
  let minutes = minute()
  let c1, c2;

  if (hours > 4 && hours < 19){
    c1 = dayTimeColors[0];
    c2 = dayTimeColors[1];
  } else if (hours >= 19 && hours <= 20) {
    ratio = map(minutes, 0, 59, 0, 1)
    c1 = lerpColor(dayTimeColors[0], nightTimeColors[0], ratio);
    c2 = lerpColor(dayTimeColors[1], nightTimeColors[1], ratio);
  } else if (hours >= 3 && hours <= 4) {
    ratio = map(minutes, 0, 59, 1, 0)
    c1 = lerpColor(dayTimeColors[0], nightTimeColors[0], ratio);
    c2 = lerpColor(dayTimeColors[1], nightTimeColors[1], ratio);
  } else if (hours < 4 && hours > 19) {
    c1 = nightTimeColors[0];
    c2 = nightTimeColors[1];
  }

  drawGradient(c1, c2);

  if(width < 800){
    translate(-500, 0)
  }

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
  fill(235, 241, 165,);
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