# AI Agent Instructions for TV.Garden-Tizen

This document provides guidelines for AI agents, LLMs, and IDE assistants working on the TV.Garden-Tizen project.

## Project Overview

TV.Garden-Tizen is a TizenBrew application module that provides a TV remote-friendly interface for tv.garden's IPTV streams. The project focuses on spatial navigation and optimal TV viewing experience.

## Key Components

### 1. Navigation System
- Location: `/app/navigation/`
- Purpose: D-pad remote control navigation
- Key files:
  - `focus-manager.js`: Manages spatial focus movement
  - `remote-control.js`: Handles TV remote input events
  - `focus-style.css`: Defines focus state styles

### 2. TizenBrew Integration
- Package Type: Application Module
- Entry Point: `app/index.html`
- Configuration: `package.json` and `config.xml`

## Development Guidelines

### Code Style
```javascript
// Prefer vanilla JavaScript - No TypeScript
// Use ES2020 features supported by Tizen WebView
// Always include error handling
try {
  // code
} catch (error) {
  console.error('Context-specific message:', error);
}
```

### Spatial Navigation Principles
1. Always maintain clear focus state
2. Ensure predictable focus movement
3. Keep UI elements TV-remote accessible

### Error Handling Priority
1. Network/Stream errors
2. Navigation edge cases
3. Resource loading failures

## File Organization

```
app/
├── index.html          # Main entry point
├── navigation/         # D-pad navigation system
└── assets/            # Static resources
docs/                  # Documentation
```

## Task Categories

### High Priority
- Stream playback issues
- Navigation problems
- Focus management bugs

### Medium Priority
- Performance optimizations
- Error recovery improvements
- Documentation updates

### Low Priority
- Code style fixes
- Minor UI enhancements
- Refactoring

## Branch Strategy

### Main Branches
- `main`: Production-ready code
- `develop`: Integration branch

### Feature Branches
- Format: `feature/descriptive-name`
- Focus: Single responsibility
- Lifecycle: Delete after merge

## Documentation Requirements

### Code Comments
```javascript
/**
 * @function handleFocusMove
 * @param {string} direction - 'up'|'down'|'left'|'right'
 * @description Moves focus in specified direction following spatial rules
 * @throws {Error} If no focusable elements in direction
 */
```

### Commit Messages
```
type(scope): Short description

- Detailed point 1
- Detailed point 2

Refs: #issue-number
```

## Testing Considerations

1. TV Remote Simulation
   - Arrow keys for D-pad
   - Enter for Select
   - Escape for Back

2. Focus Management
   - Edge of screen behavior
   - Grid navigation patterns
   - Focus retention on updates

3. Stream Playback
   - Loading states
   - Error recovery
   - Quality switches

## Pull Request Guidelines

1. Scope
   - Single responsibility
   - Clear objective
   - Minimal dependencies

2. Required Checks
   - No navigation regressions
   - Focus management intact
   - Error handling covered

3. Documentation
   - Update relevant docs
   - Add inline comments
   - Include testing notes

## TizenBrew Compatibility

1. Module Requirements
   - Follow package.json schema
   - Maintain config.xml
   - Register required keys

2. Asset Management
   - Relative paths only
   - Optimize for TV
   - Cache appropriately

## Performance Guidelines

1. Focus Management
   - Debounce focus updates
   - Optimize DOM queries
   - Maintain smooth transitions

2. Stream Handling
   - Progressive loading
   - Quality adaptation
   - Memory management

## Security Considerations

1. Input Validation
   - Sanitize URLs
   - Validate stream sources
   - Check navigation targets

2. Error Exposure
   - Sanitize error messages
   - Log safely
   - Handle gracefully

## Accessibility Requirements

1. Visual Feedback
   - Clear focus indicators
   - Loading states
   - Error messages

2. Navigation
   - Predictable patterns
   - No focus traps
   - Recovery options
