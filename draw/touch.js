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