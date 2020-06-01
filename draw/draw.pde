void setup() {
  size(window.innerWidth, window.innerHeight, P2D);
  frameRate(1000)
}
void draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}