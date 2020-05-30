PGraphics display;
void setup() {
  display = createGraphics(256, 192);
  size(window.innerWidth, window.innerHeight);
  background(203, 78, 1);
  display.beginDraw();
  display.background(203, 78, 1);
  display.endDraw();
  image(display,0,0,width,height);
}