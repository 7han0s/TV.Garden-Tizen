# Development Guide

This guide covers the setup, development, and deployment process for TV.Garden-Tizen.

## Prerequisites

1. Development Environment
   - Node.js 18+
   - Tizen Studio
   - Samsung TV Certificate
   - TizenBrew (for testing)

2. TV Requirements
   - Samsung Tizen TV (2017 or newer)
   - Developer Mode enabled
   - Network connectivity

## Setup

1. Clone Repository
   ```bash
   git clone https://github.com/7han0s/TV.Garden-Tizen.git
   cd TV.Garden-Tizen
   ```

2. Install Dependencies
   ```bash
   npm install
   ```

3. Configure TV
   - Enable Developer Mode
   - Note TV IP address
   - Configure connection in Tizen Studio

## Development Workflow

### Local Development

1. Build Project
   ```bash
   npm run build  # Copies files to dist/
   ```

2. Watch Changes
   ```bash
   npm run watch  # Auto-rebuilds on changes
   ```

3. Create Package
   ```bash
   npm run package  # Creates .wgt file
   ```

### Testing

1. Using TizenBrew
   - Add module via GitHub URL
   - Test navigation
   - Verify stream playback

2. Using Tizen Studio
   - Launch Emulator
   - Deploy package
   - Debug using DevTools

## Code Organization

```
/
├── app/                # Application source
│   ├── index.html     # Entry point
│   ├── navigation/    # Navigation system
│   └── assets/        # Static files
├── docs/              # Documentation
└── config.xml         # Tizen config
```

## Navigation System

### Focus Management

1. Moving Focus
   ```javascript
   FocusManager.moveFocus('right');
   ```

2. Handling Selection
   ```javascript
   FocusManager.clickFocusedElement();
   ```

3. Custom Navigation
   ```javascript
   // Define focusable elements
   const focusable = FocusManager.getAllFocusableElements();
   ```

### Remote Control

1. Key Mapping
   ```javascript
   case 38: // ArrowUp
     FocusManager.moveFocus('up');
     break;
   ```

2. Special Keys
   ```javascript
   case 10009: // Return/Back
     window.history.back();
     break;
   ```

## Stream Handling

1. Playback
   ```javascript
   // Initialize player
   const player = document.querySelector('video');
   player.src = streamUrl;
   ```

2. Error Recovery
   ```javascript
   player.onerror = (error) => {
     console.error('Playback error:', error);
     // Implement recovery logic
   };
   ```

## Building for Production

1. Prepare Release
   ```bash
   npm version patch  # Update version
   npm run build     # Build project
   npm run package   # Create .wgt
   ```

2. Testing Package
   - Install via TizenBrew
   - Verify all features
   - Check performance

3. Publishing
   - Create GitHub release
   - Update documentation
   - Notify users

## Troubleshooting

### Common Issues

1. Focus Problems
   - Check element visibility
   - Verify focus order
   - Debug focus movement

2. Stream Issues
   - Validate stream URL
   - Check network connection
   - Verify player state

3. TV Connection
   - Confirm TV IP
   - Check developer mode
   - Verify certificates

### Debug Tools

1. Tizen Studio
   - Web Inspector
   - Console logs
   - Network monitor

2. TV Debugging
   - Remote debugging
   - Performance tools
   - Error console

## Best Practices

1. Code Style
   - Use vanilla JavaScript
   - Follow TV guidelines
   - Handle all errors

2. Performance
   - Optimize focus updates
   - Manage memory usage
   - Clean up resources

3. Testing
   - Test with remote
   - Verify all paths
   - Check edge cases
