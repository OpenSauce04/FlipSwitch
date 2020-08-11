// General init
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var scalefactor = HEIGHT / 192;
var canvasoffset = WIDTH / 2 - (256 * scalefactor) / 2;

// Touch init
var touchX, touchY, ptouchX, ptouchY;
  
addEventListener('touchmove', function(e) {
  ptouchX = touchX;
  ptouchY = touchY;
  touchX = e.touches[0].clientX;
  touchY = e.touches[0].clientY;
}, false);

addEventListener('touchstart', function(e) {
  touchX = e.touches[0].clientX;
  touchY = e.touches[0].clientY;
  ptouchX = touchX;
  ptouchY = touchY;
}, false);