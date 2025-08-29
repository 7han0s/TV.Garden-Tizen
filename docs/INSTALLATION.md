# Installation Guide

This guide covers the installation process for TV.Garden-Tizen on your Samsung TV.

## Prerequisites

### Hardware Requirements
- Samsung Smart TV (2017 or newer)
- Internet connection
- USB drive (optional, for alternate installation methods)

### Software Requirements
- [TizenBrew](https://github.com/reisxd/TizenBrew) installed on your TV
- TV in Developer Mode (for testing/development)

## Installation Methods

### 1. TizenBrew Installation (Recommended)

1. Open TizenBrew on your TV
2. Navigate to "Add Module"
3. Enter module name: `@7han0s/tvgarden-tizen`
4. Select Install
5. Wait for download and installation
6. Launch from TizenBrew main menu

### 2. Direct GitHub Installation

1. Open TizenBrew
2. Go to "Add Module"
3. Select "GitHub"
4. Enter: `7han0s/TV.Garden-Tizen`
5. Follow installation prompts
6. Launch when complete

### 3. Development Installation

For developers and testers:

1. Enable Developer Mode on TV
   - Go to Apps
   - Press "1", "2", "3", "4", "5" in sequence
   - Enable Developer Mode
   - Note your TV's IP address

2. Install Development Package
   ```bash
   # Build package
   npm run build
   npm run package

   # Install using Tizen CLI
   tizen install -n dist/tv.garden.wgt
   ```

## Post-Installation

### First Launch
1. Accept any required permissions
2. Allow network access if prompted
3. Register remote control keys when asked

### Configuration
- No additional configuration needed
- App automatically adapts to TV screen size
- Remote control ready by default

## Troubleshooting

### Common Issues

1. Installation Fails
   - Verify TizenBrew is up to date
   - Check internet connection
   - Ensure TV model is compatible

2. App Won't Launch
   - Clear TizenBrew cache
   - Reinstall application
   - Check for updates

3. Remote Not Working
   - Restart application
   - Check battery in remote
   - Verify no interference

### Getting Help

If you encounter issues:

1. Check [GitHub Issues](https://github.com/7han0s/TV.Garden-Tizen/issues)
2. Join our Discord community
3. Submit a bug report

## Updating

### Automatic Updates
- TizenBrew checks for updates
- Install when prompted
- Restart app after update

### Manual Update
1. Open TizenBrew
2. Go to Module Manager
3. Select TV.Garden
4. Choose Update

## Uninstallation

### Via TizenBrew
1. Open TizenBrew
2. Go to Module Manager
3. Select TV.Garden
4. Choose Remove
5. Confirm uninstallation

### Manual Removal
1. Open TV Settings
2. Go to Apps
3. Find TV.Garden
4. Select Uninstall

## Security Notes

- Only install from trusted sources
- Keep TizenBrew updated
- Review permissions carefully
- Report security issues

## Support

For additional support:
- GitHub Issues
- Discord Community
- Email Support
