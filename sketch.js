function setup() {
  // Creates a canvas 400 pixels wide and 400 pixels high
  let cnv = createCanvas(400, 400);
  
  // Centers the canvas with an offset to move it lower
  let x = windowWidth - width - 20; // 20px offset from the right edge
  let y = windowHeight - height - 20; // 20px offset from the bottom edge
  cnv.position(x, y);
}

function draw() {
  // Sky blue background
  background(189, 204, 212);
  
  // Sun in top-right corner
  fill(235, 207, 88);
  circle(280, 50, 70);
  
  // Grass on bottom half
  fill(220, 232, 195);
  rect(0, 200, 400, 200);

  // Mountain
  fill(170, 203, 140);
  stroke(0);
  strokeWeight(1);
  triangle(50, 220, 78, 160, 106, 220); // Adjust

  // Emojis
  textSize(75);
  text("🐺", 280, 250); // Wolf
  textSize(50);
  text("🛖", 80, 250); // Straw
  text("🏚️", 120, 290); // Wood
  text("🏠", 100, 350); // Brick
  text("🐷", 30, 380); // Brick
  text("🐷", 60, 350); // Brick
  text("🐷", 55, 390); // Brick
  text("🌪️", mouseX, mouseY); // Tornado
}

function windowResized() {
  // Repositions the canvas at the bottom-right corner when the window is resized
  resizeCanvas(400, 400);
  let x = windowWidth - width - 20; // 20px offset from the right edge
  let y = windowHeight - height - 20; // 20px offset from the bottom edge
  let cnv = select('canvas');
  cnv.position(x, y);
}
