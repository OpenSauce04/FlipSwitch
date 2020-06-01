PGraphics[] userFrame = new PGraphics[400];
void setup() {
  size(window.innerWidth, window.innerHeight, P2D);
  background(255);
  strokeWeight(7);
  cf=0; // Current frame
}
void draw() {
  if (userFrame[cf]==null) {
    userFrame[cf] = createGraphics(width/4, height/4);
  }
  userFrame[cf].beginDraw();
  userFrame[cf].line(cursorXP1/4, cursorYP1/4, cursorX/4, cursorY/4);
  userFrame[cf].line(cursorXP2/4, cursorYP2/4, cursorXP1/4, cursorYP1/4);
  userFrame[cf].line(cursorXP3/4, cursorYP3/4, cursorXP2/4, cursorYP2/4);
  userFrame[cf].endDraw();
  pushMatrix();
  scale(4);
  image(userFrame[0],0,0);
  popMatrix();
}