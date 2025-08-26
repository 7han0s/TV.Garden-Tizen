const FocusManager = {
  init: function() {
    // Set initial focus on the first available element.
    // The stylesheet is now linked directly in index.html, so no injection is needed.
    this.setInitialFocus();
  },

  getAllFocusableElements: function() {
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
    const elements = document.querySelectorAll(selectors.join(', '));
    return Array.from(elements).filter(el => {
      return el.offsetParent !== null && window.getComputedStyle(el).visibility !== 'hidden';
    });
  },

  setInitialFocus: function() {
    const focusable = this.getAllFocusableElements();
    if (focusable.length > 0) {
      focusable[0].classList.add('focused');
      focusable[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  },

  clickFocusedElement: function() {
    const focusedElement = document.querySelector('.focused');
    if (focusedElement) {
      focusedElement.click();
    }
  },

  moveFocus: function(direction) {
    const focusable = this.getAllFocusableElements();
    let currentElement = document.querySelector('.focused');

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
        // Use Euclidean distance, but heavily weight the primary axis of movement
        const primaryDistance = (direction === 'up' || direction === 'down') ? Math.abs(dy) : Math.abs(dx);
        const secondaryDistance = (direction === 'up' || direction === 'down') ? Math.abs(dx) : Math.abs(dy);
        const distance = primaryDistance + secondaryDistance * 2; // Penalize off-axis movement

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
