var userFrame = [];
function setup() {
  createCanvas(WIDTH, HEIGHT, P2D);
  background(203, 78, 1);
  cf=0; // Current frame
  ellipseMode(CORNER);
  textAlign(CENTER);
  buttonsInit();
  buttonsDraw();
}
function draw() {
  if (userFrame[cf]==undefined) {
    userFrame[cf] = createGraphics(256, 192);
    userFrame[cf].background(255);
  }
  userFrame[cf].push();
  userFrame[cf].translate(-canvasoffset/scalefactor,0);
  for(let x=0;x<100;x++) {
    userFrame[cf].line(ptouchX/scalefactor, ptouchY/scalefactor, touchX/scalefactor, touchY/scalefactor);
  }
  userFrame[cf].pop();
  push();
  scale(scalefactor);
  image(userFrame[cf],canvasoffset/scalefactor,0);
  pop();
  strokeWeight(5);
}