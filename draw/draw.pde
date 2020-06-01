PGraphics[] userFrame = new PGraphics[400];
int scalefactor=window.innerHeight/192;
int canvasoffset=window.innerWidth/2-(256*scalefactor)/2;
void setup() {
  size(window.innerWidth, window.innerHeight, P2D);
  background(203, 78, 1);
  cf=0; // Current frame
}
void draw() {
  if (userFrame[cf]==null) {
    userFrame[cf] = createGraphics(256, 192);
    userFrame[cf].beginDraw();
    userFrame[cf].background(255);
    userFrame[cf].endDraw();
  }
  userFrame[cf].beginDraw();
  userFrame[cf].pushMatrix();
  userFrame[cf].translate(-canvasoffset/scalefactor,0);
  userFrame[cf].line(cursorXP1/scalefactor, cursorYP1/scalefactor, cursorX/scalefactor, cursorY/scalefactor);
  userFrame[cf].line(cursorXP2/scalefactor, cursorYP2/scalefactor, cursorXP1/scalefactor, cursorYP1/scalefactor);
  userFrame[cf].line(cursorXP3/scalefactor, cursorYP3/scalefactor, cursorXP2/scalefactor, cursorYP2/scalefactor);
  userFrame[cf].popMatrix();
  userFrame[cf].endDraw();
  pushMatrix();
  scale(scalefactor);
  background(203, 78, 1);
  image(userFrame[0],canvasoffset/scalefactor,0);
  popMatrix();
}