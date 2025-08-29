# TV.Garden TizenBrew Module

This document describes the TV.Garden TizenBrew module implementation.

## Overview

TV.Garden TizenBrew module provides a D-pad navigation-friendly interface for accessing tv.garden streams on Tizen TVs. It packages the web interface with custom navigation controls optimized for TV remote usage.

## Module Type

This is an **Application Module** type in TizenBrew's classification, meaning it serves a complete web application rather than injecting code into an existing site.

## Features

- D-pad remote control navigation
- Spatial focus management
- Native Tizen TV integration
- Stream playback support

## Installation

1. Install TizenBrew on your TV following the [official guide](https://github.com/reisxd/TizenBrew/blob/main/docs/README.md)
2. In TizenBrew, select "Add Module"
3. Enter module name: "@7han0s/tvgarden-tizen"
4. Install and launch

## Structure

- `app/` - Main application files
  - `index.html` - Entry point
  - `navigation/` - Custom D-pad navigation system
    - `focus-manager.js` - Spatial navigation logic
    - `remote-control.js` - Remote control event handling
    - `focus-style.css` - Focus state styling
  - `assets/` - Static assets

## Development

### Prerequisites
- Node.js
- Tizen Studio (for testing)
- TizenBrew (for deployment)

### Building
```bash
# Install dependencies
npm install

# Build the app
npm run build

# Create Tizen package
npm run package
```

### Testing
1. Enable Developer Mode on your TV
2. Install built package using TizenBrew or Tizen Studio
3. Launch and test navigation

## Publishing Updates

1. Update version in package.json
2. Build and test package
3. Publish to npm registry
4. Users can update through TizenBrew
