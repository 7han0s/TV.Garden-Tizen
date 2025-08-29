# TV.Garden for Tizen

<div align="center">
  <h3>A TV remote-friendly interface for tv.garden IPTV streams on Samsung Tizen TVs</h3>
</div>

## Overview

TV.Garden-Tizen brings the rich selection of global IPTV streams from [tv.garden](https://tv.garden/) to Samsung Tizen TVs through TizenBrew. It provides a custom navigation system optimized for TV remote controls, making the web interface easily accessible on your TV.

## Features

- **D-pad Navigation**: Full TV remote control support with intuitive spatial navigation
- **Stream Integration**: Direct access to tv.garden's IPTV streams
- **TV Optimization**: Interface designed for TV viewing distance
- **TizenBrew Module**: Easy installation through TizenBrew package manager

## Installation

### Prerequisites
- Samsung Tizen TV (2017 or newer)
- [TizenBrew](https://github.com/reisxd/TizenBrew) installed on your TV

### Steps
1. Open TizenBrew on your TV
2. Select "Add Module"
3. Enter: `@7han0s/tvgarden-tizen`
4. Install and launch

For detailed installation instructions, see our [Installation Guide](docs/INSTALLATION.md).

## Development

### Setup
```bash
# Clone repository
git clone https://github.com/7han0s/TV.Garden-Tizen.git
cd TV.Garden-Tizen

# Install dependencies
npm install

# Build project
npm run build

# Create package
npm run package
```

For detailed development instructions, see our [Development Guide](docs/DEVELOPMENT.md).

## Documentation

- [Architecture Overview](docs/ARCHITECTURE.md)
- [Development Guide](docs/DEVELOPMENT.md)
- [Module Documentation](docs/MODULE.md)
- [AI Agent Instructions](AGENTS.md)

## Contributing

We welcome contributions! Please see our [Contributing Guide](docs/CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [tv.garden](https://tv.garden/) for the IPTV platform
- [TizenBrew](https://github.com/reisxd/TizenBrew) for the package manager
- Samsung Tizen team for the TV platform
