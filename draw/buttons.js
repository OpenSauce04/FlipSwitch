class button {
  constructor(buttonText, buttonTextSize, buttonX, buttonY, buttonW, buttonH) {
    this.buttonText = buttonText;
    this.buttonTextSize = buttonTextSize;
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonW = buttonW;
    this.buttonH = buttonH;
  }
  draw() {
    ellipse(this.buttonX, this.buttonY, this.buttonW, this.buttonH);
    textSize(this.buttonTextSize);
    text(this.buttonText, this.buttonX + (this.buttonW / 2), this.buttonY + (this.buttonH/2) + (this.buttonTextSize/4));
  }
}

function buttonsInit() {
  button_prevFrame = new button("←", 50, 25, 25, canvasoffset - 50, canvasoffset - 50);
  button_nextFrame = new button("→", 50,  WIDTH - canvasoffset + 25, 25, canvasoffset - 50, canvasoffset - 50);
}
function buttonsDraw() {
  button_prevFrame.draw();
  button_nextFrame.draw();
}