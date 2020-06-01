void setup() {
  size(window.innerWidth, window.innerHeight, P2D);
  background(255);
}
void draw() {
  line(cursorXP1, cursorYP1, cursorX, cursorY);
  line(cursorXP2, cursorYP2, cursorXP1, cursorYP1);
  line(cursorXP3, cursorYP3, cursorXP2, cursorYP2);
}