// This script initializes the FocusManager and handles remote control key events.

// Wait for the parent window to load completely
window.addEventListener('load', () => {
  const iframe = document.querySelector('iframe');

  // The iframe needs to be fully loaded before we can interact with its content
  iframe.addEventListener('load', () => {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    FocusManager.init(iframeDoc);
  });

  // Listen for keydown events on the main document
  document.addEventListener('keydown', function(e) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // If there's no document in the iframe, do nothing
    if (!iframeDoc) {
      return;
    }

    switch (e.keyCode) {
      case 38: // ArrowUp
        FocusManager.moveFocus('up', iframeDoc);
        e.preventDefault();
        break;
      case 40: // ArrowDown
        FocusManager.moveFocus('down', iframeDoc);
        e.preventDefault();
        break;
      case 37: // ArrowLeft
        FocusManager.moveFocus('left', iframeDoc);
        e.preventDefault();
        break;
      case 39: // ArrowRight
        FocusManager.moveFocus('right', iframeDoc);
        e.preventDefault();
        break;
      case 13: // Enter
        FocusManager.clickFocusedElement(iframeDoc);
        e.preventDefault();
        break;
      case 10009: // Return/Back
        // For now, we can try to use the browser's back functionality,
        // or implement a custom back-navigation logic within the FocusManager.
        // A simple history.back() might not work as expected with iframes.
        window.history.back();
        e.preventDefault();
        break;
    }
  });
});
