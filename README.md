# Color Palette Generator

An interactive tool for generating harmonious color palettes from a hex color code. It’s designed for designers and developers looking to explore and easily copy color codes.

**App URL: [https://lightness-jpd.netlify.app/](https://lightness-jpd.netlify.app/)**

---

## Features

1. **Palette Generation:**
   - Enter a valid hex color code (e.g., `#ff5733`).
   - A palette of 11 shades (different brightness levels) is dynamically generated from this code.

2. **Dynamic Display:**
   - The palette is displayed as colored blocks, each showing its hex color code.
   - The app’s background changes according to the generated colors, with a smooth gradient effect.

3. **Quick Copy:**
   - Click on a block to instantly copy the color code to the clipboard.
   - A visual notification confirms the action.

---

## Dependencies

For the project to work correctly, the following libraries must be installed:

- **`color-convert`**: To convert colors between different formats (HEX, HSL, etc.).
- **`notyf`**: To display elegant notifications (success or error).
- **`notyf/notyf.min.css`**: Associated stylesheet for Notyf.

Install them using:
```bash
npm install color-convert notyf
```

---

## Code Overview

### **Main Structure**
- **`app.js`**: 
  - Handles user interactions (form submission, clicks).
  - Displays the palette and updates the user interface dynamically.

- **`utils.js`**: 
  - Contains utility functions:
    - `generatePalette(hex)`: Generates a palette based on brightness levels.
    - `isHexColor(hex)`: Validates the format of a hex color code.
    - `hexToCSSHSL(hex)`: Converts a hex code to HSL (used for CSS variables).

- **`Color.js`**: 
  - Declares a `Color` class to create and display each color.
  - Handles HSL to HEX conversion and applies necessary styles.

### **Generation Process**
1. **User Input:**
   - The hex color code is validated using the `isHexColor` function.
2. **Palette Creation:**
   - A palette of 11 shades is generated using `generatePalette`, adjusting only the brightness (HSL).
3. **Display:**
   - Each color is instantiated using the `Color` class and dynamically added to the interface.
4. **Click to Copy:**
   - When a block is clicked, its color code is copied to the clipboard via the `navigator.clipboard` API.

---

## Installation and Launch

1. Clone this repository:
   ```bash
   git clone <YOUR_REPO_URL>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start a local server for testing:
   ```bash
   npm start
   ```

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it.
