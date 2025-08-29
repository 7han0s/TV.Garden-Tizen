# Technical Architecture

This document outlines the technical architecture of the TV.Garden-Tizen application.

## Overview

TV.Garden-Tizen is structured as a TizenBrew application module, providing a TV-optimized interface for tv.garden's IPTV streams. The application uses vanilla JavaScript and standard web technologies supported by Tizen WebView.

## Core Components

### 1. Spatial Navigation System

The spatial navigation system is the core of the TV interface, comprising three main components:

```
navigation/
├── focus-manager.js   # Focus movement logic
├── remote-control.js  # Input handling
└── focus-style.css   # Visual feedback
```

#### Focus Manager
- Implements spatial algorithm for focus movement
- Maintains focus state
- Handles edge cases and wrapping

#### Remote Control
- Captures D-pad input events
- Maps to focus movement
- Handles special keys (Enter, Back)

### 2. Stream Handling

The application interfaces with tv.garden's stream infrastructure:

- Direct stream playback
- Quality selection
- Error recovery
- Buffering states

### 3. UI Components

The UI is optimized for TV viewing:

- Large, clear typography
- High contrast for visibility
- Generous spacing for focus
- Clear focus indicators

## Data Flow

1. User Input
   ```
   Remote Control → Key Events → Focus Manager → UI Updates
   ```

2. Stream Playback
   ```
   Stream Selection → Quality Check → Player Init → Playback
   ```

3. Error Handling
   ```
   Error Detection → User Notification → Recovery Action
   ```

## Technology Stack

- **Runtime**: Tizen WebView
- **Language**: JavaScript (ES2020)
- **Styling**: CSS3
- **Package Manager**: TizenBrew
- **Build Tool**: Simple copy/package

## Performance Considerations

1. Focus Management
   - Event debouncing
   - DOM query optimization
   - RAF for animations

2. Stream Handling
   - Lazy loading
   - Quality adaptation
   - Memory management

3. Resource Usage
   - Asset optimization
   - Event cleanup
   - Memory monitoring

## Security Model

1. Input Validation
   - URL sanitization
   - Stream source verification
   - Navigation safety

2. Error Handling
   - Safe error logging
   - User-friendly messages
   - Graceful degradation

## Testing Strategy

1. Unit Tests
   - Focus movement
   - Event handling
   - Stream management

2. Integration Tests
   - Navigation flows
   - Stream playback
   - Error scenarios

3. TV Testing
   - Remote control
   - Different TV models
   - Network conditions

## Deployment Process

1. Build
   ```bash
   npm run build  # Copies files to dist/
   ```

2. Package
   ```bash
   npm run package  # Creates .wgt file
   ```

3. Distribution
   - TizenBrew package
   - GitHub releases
   - Version management

## Future Considerations

1. Performance
   - Stream caching
   - Preload optimization
   - Component lazy loading

2. Features
   - Offline support
   - Quality preferences
   - Custom shortcuts

3. Integration
   - Additional stream sources
   - External player support
   - System integration
