# TV.Garden for Tizen

This project is a port of the [tv.garden](https://tv.garden/) web application for Tizen-based smart TVs. It is designed to be installed and run through the [TizenBrew](https://github.com/reisxd/TizenBrew) homebrew application store.

The primary goal of this project is to make the rich selection of global IPTV streams from tv.garden accessible on Tizen TVs, which traditionally lack a suitable web browser for pointer-based interfaces.

## Features

*   **Full tv.garden Experience:** Access the complete user interface and channel list from the original tv.garden web app.
*   **D-Pad Navigation:** A custom-built spatial navigation system allows for full control of the application using a standard TV remote control.
*   **TizenBrew Module:** Packaged as a TizenBrew "Application Module" for easy installation.

## Installation

This application is designed to be installed via the TizenBrew app on your TV.

1.  **Install TizenBrew:** Follow the instructions on the [TizenBrew GitHub repository](https://github.com/reisxd/TizenBrew) to install it on your TV.
2.  **Install from GitHub:** Once TizenBrew is running, you can install this application by providing it with the URL of this GitHub repository. The user name and repository name is `7han0s/TV.Garden-Tizen`. TizenBrew will handle the download and installation.

## Development

This project was built by packaging the original web assets of tv.garden and adding a JavaScript-based navigation layer.

*   `/app`: Contains the original HTML, CSS, and JavaScript assets from tv.garden.
*   `/navigation`: Contains the custom scripts and styles for D-pad remote control support.
    *   `remote-control.js`: Captures remote key presses.
    *   `focus-manager.js`: Implements a spatial navigation algorithm to move focus between UI elements.
    - `focus-style.css`: Provides the visual highlight for the focused element.
*   `config.xml`: The Tizen application manifest.
*   `package.json`: The TizenBrew module manifest.

The core challenge was to adapt a pointer-based web app for a remote control without modifying the original source code. This was achieved by injecting a navigation layer that programmatically manages focus and simulates clicks on interactive elements.
