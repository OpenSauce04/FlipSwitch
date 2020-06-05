var userFrame = [];
var scalefactor=window.innerHeight/192;
var canvasoffset=window.innerWidth/2-(256*scalefactor)/2;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight, P2D);
  background(203, 78, 1);
  cf=0; // Current frame
  noSmooth();
}
function draw() {
  if (userFrame[cf]==undefined) {
    userFrame[cf] = createGraphics(256, 192);
    userFrame[cf].background(255);
  }
  userFrame[cf].push();
  userFrame[cf].translate(-canvasoffset/scalefactor,0);
  for(let x=0;x<100;x++) {
    userFrame[cf].line(pmouseX/scalefactor, pmouseY/scalefactor, mouseX/scalefactor, mouseY/scalefactor);
  }
  userFrame[cf].pop();
  push();
  scale(scalefactor);
  background(203, 78, 1);
  image(userFrame[0],canvasoffset/scalefactor,0);
  pop();
}