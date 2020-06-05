/* @pjs preload="logo.png"; */
void setup() {
  PImage logo=loadImage("logo.png");
  size(window.innerWidth, window.innerHeight);
  background(203, 78, 1);
  imageMode(CENTER);
  textAlign(CENTER);
  PFont font;
  font = loadFont("../resources/SwitchUI.ttf"); 
  textFont(font, 32); 

  image(logo,width/2,height/2.5,logo.width/2, logo.height/2);
  text("Press the A button or tap the screen", width/2, height/5*4);
}