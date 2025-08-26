// This script handles remote control key events.

// Since this script is now loaded directly into index.html,
// we can directly listen for events and call the FocusManager.
document.addEventListener('DOMContentLoaded', () => {
  FocusManager.init();
});

document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
    case 38: // ArrowUp
      FocusManager.moveFocus('up');
      e.preventDefault();
      break;
    case 40: // ArrowDown
      FocusManager.moveFocus('down');
      e.preventDefault();
      break;
    case 37: // ArrowLeft
      FocusManager.moveFocus('left');
      e.preventDefault();
      break;
    case 39: // ArrowRight
      FocusManager.moveFocus('right');
      e.preventDefault();
      break;
    case 13: // Enter
      FocusManager.clickFocusedElement();
      e.preventDefault();
      break;
    case 10009: // Return/Back
      // A simple history.back() should work now.
      window.history.back();
      e.preventDefault();
      break;
  }
});
