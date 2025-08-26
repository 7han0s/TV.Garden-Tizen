const FocusManager = {
  init: function(iframeDoc) {
    // 1. Inject the CSS for the .focused class into the iframe
    const style = iframeDoc.createElement('style');
    style.textContent = `
      .focused {
        outline: 3px solid #64D2FF !important;
        outline-offset: 3px;
        box-shadow: 0 0 12px #64D2FF, 0 0 5px #fff;
        border-radius: 5px;
      }
    `;
    iframeDoc.head.appendChild(style);

    // 2. Set initial focus on the first available element
    this.setInitialFocus(iframeDoc);
  },

  getAllFocusableElements: function(iframeDoc) {
    // Find all elements that are typically interactive.
    // Filter out those that are hidden or disabled.
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];
    const elements = iframeDoc.querySelectorAll(selectors.join(', '));
    return Array.from(elements).filter(el => {
      return el.offsetParent !== null && window.getComputedStyle(el).visibility !== 'hidden';
    });
  },

  setInitialFocus: function(iframeDoc) {
    const focusable = this.getAllFocusableElements(iframeDoc);
    if (focusable.length > 0) {
      focusable[0].classList.add('focused');
      focusable[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  },

  clickFocusedElement: function(iframeDoc) {
    const focusedElement = iframeDoc.querySelector('.focused');
    if (focusedElement) {
      focusedElement.click();
    }
  },

  moveFocus: function(direction, iframeDoc) {
    const focusable = this.getAllFocusableElements(iframeDoc);
    let currentElement = iframeDoc.querySelector('.focused');

    if (!currentElement && focusable.length > 0) {
        currentElement = focusable[0];
        currentElement.classList.add('focused');
    }

    if (!currentElement) {
      return;
    }

    const currentRect = currentElement.getBoundingClientRect();
    let bestCandidate = null;
    let minDistance = Infinity;

    focusable.forEach(el => {
      if (el === currentElement) return;

      const elRect = el.getBoundingClientRect();
      const dx = (elRect.left + elRect.width / 2) - (currentRect.left + currentRect.width / 2);
      const dy = (elRect.top + elRect.height / 2) - (currentRect.top + currentRect.height / 2);

      let isCandidate = false;
      if (direction === 'up' && dy < 0) isCandidate = true;
      if (direction === 'down' && dy > 0) isCandidate = true;
      if (direction === 'left' && dx < 0) isCandidate = true;
      if (direction === 'right' && dx > 0) isCandidate = true;

      if (isCandidate) {
        // Use Euclidean distance
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
          minDistance = distance;
          bestCandidate = el;
        }
      }
    });

    if (bestCandidate) {
      currentElement.classList.remove('focused');
      bestCandidate.classList.add('focused');
      bestCandidate.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }
};
