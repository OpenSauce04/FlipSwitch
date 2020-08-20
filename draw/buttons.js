class button {
  constructor(buttonText, buttonTextSize, buttonX, buttonY, buttonW, buttonH) {
    this.buttonText = buttonText;
    this.buttonTextSize = buttonTextSize;
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonW = buttonW;
    this.buttonH = buttonH;
    this.buttonFunction;
  }
  draw() {
    ellipse(this.buttonX, this.buttonY, this.buttonW, this.buttonH);
    textSize(this.buttonTextSize);
    text(this.buttonText, this.buttonX + (this.buttonW / 2), this.buttonY + (this.buttonH/2) + (this.buttonTextSize/4));
  }
  check() {
    if (touchX >= this.buttonX
    &&  touchX <= this.buttonX + this.buttonW
    &&  touchY >= this.buttonY
    && touchY <= this.buttonY + this.buttonH) {
      this.buttonFunction();
    }
  }
}

function buttonsInit() {
  button_prevFrame = new button("←", 50, 25, 25, canvasoffset - 50, canvasoffset - 50);
  button_nextFrame = new button("→", 50, WIDTH - canvasoffset + 25, 25, canvasoffset - 50, canvasoffset - 50);
  
  button_prevFrame.buttonFunction = function () {
    if (cf > 0) {
      cf--;
    }
  };
  button_nextFrame.buttonFunction = function () {
    cf++;
  };
}
function buttonsDraw() {
  button_prevFrame.draw();
  button_nextFrame.draw();
}
function mouseClicked() {
  button_prevFrame.check();
  button_nextFrame.check();
}