<p align="right">
  <a href="docs/README.pt-BR.md">pt-BR</a>
</p>

<h1 align="center">
  <br>
  <a href="images/icon-v2.png">
    <img src="https://raw.githubusercontent.com/gabrielnathan/space-rider-vscode-theme/main/images/icon-v2.png" alt="Space Rider" width="360" style="border-radius: 50%;">
  </a>
  <br>
  Space Rider
  <br>
</h1>

<h4 align="center">Modular VS Code theme system with clear semantic hierarchy</h4>

## About

Theme system for VS Code with perceptual hierarchy and a fork-friendly structure.

## Modes and variants

- Base: main mode with soft and vivid contrast adjustments
- High-Contrast: separate cognitive mode with internal soft and vivid adjustments
- Soft and Vivid adjust only neutrals without changing semantic hues

## Installation

Dependencies (required before install):

- Node.js and npm
- VS Code
- VSCE (`npm install -g @vscode/vsce`)

Local build and install:

```
npm install
npm run build:all
npx vsce package
code --install-extension space-rider-*.vsix
```

If `code` is not on PATH, install the VS Code shell command and try again.

## Typography

Cinema pulp style, minimal and readable:

- Titles (primary): Bebas Neue - https://fonts.google.com/specimen/Bebas+Neue
- Body text: Inter (or neutral sans-serif) - https://fonts.google.com/specimen/Inter
- Code (editor): Space Mono as primary, with optional alternatives

You only need 2 to 3 fonts total:

1. Bebas Neue for titles
2. Inter for body text
3. One mono font for code

### Recommended mono fonts (pick one)

- Space Mono (primary): https://fonts.google.com/specimen/Space+Mono
- Courier Prime (optional): https://fonts.google.com/specimen/Courier+Prime
- IBM Plex Mono (optional): https://fonts.google.com/specimen/IBM+Plex+Mono
- Victor Mono (optional): https://rubjo.github.io/victor-mono/
- JetBrains Mono (optional): https://www.jetbrains.com/lp/mono/

VS Code cannot enforce fonts via themes. You must install the fonts on your system and then set them in VS Code.

How to set fonts in VS Code:

1. Open Settings and search for "Font Family"
2. Or open Command Palette and run "Preferences: Open Settings (JSON)"
3. Add the settings below

### Editor font settings (optional)

```
{
  "editor.fontFamily": "Space Mono, Courier Prime, IBM Plex Mono, Victor Mono, JetBrains Mono, monospace",
  "editor.fontLigatures": true,
  "editor.fontWeight": "400"
}
```

### Font installation

Downloads:

- Bebas Neue: https://fonts.google.com/specimen/Bebas+Neue
- Inter: https://fonts.google.com/specimen/Inter

#### Linux

Place downloaded fonts in `~/.local/share/fonts/` (user) or `/usr/local/share/fonts/` (system).

1. Download the `.ttf` files
2. Copy to `~/.local/share/fonts/` (user) or `/usr/local/share/fonts/` (system)
3. Refresh font cache:
  ```bash
  fc-cache -f -v
  ```
4. Restart apps (VS Code, terminals)

#### Windows

Place downloaded fonts in `C:\\Windows\\Fonts` (or use the Install action).

1. Extract the font zip
2. Right-click the `.ttf` files and choose "Install" or "Install for all users"
3. Alternative: copy to `C:\\Windows\\Fonts`
4. Restart apps

## System structure

```
src/
├── modes/
│   ├── base/
│   │   ├── palette/           # base canonical palette
│   │   └── variants/          # soft/vivid for base mode
│   ├── high-contrast/
│   │   ├── palette/           # high-contrast palette
│   │   └── variants/          # soft/vivid for high-contrast mode
│   ├── paletteTypes.ts        # shared keys and types
│   └── variantNeutrals.ts     # neutral adjustments (soft/vivid)
├── tokens/                     # syntax and semantic tokens
├── workbench/                  # UI colors
├── themes/                     # theme composition and registry
└── build.ts                    # JSON generation
themes/                          # VS Code JSON output
```

## How to create your own theme

1. Duplicate a palette
   - Base: copy `src/modes/base/palette/`
   - High-Contrast: copy `src/modes/high-contrast/palette/`
2. Adjust only the colors listed in the relevant SPEC
3. Create a theme in `src/themes/` using `createThemeFromPalette`
4. Register the output in `src/themes/registry.ts`
5. Add the new entry to `package.json`

Example (theme from a new palette):

```ts
import { createThemeFromPalette } from "./index";
import { paletteMyTheme } from "./modes/my-mode/palette";

export const myTheme = createThemeFromPalette(
  "Space Rider My Theme",
  paletteMyTheme,
);
```

## Design philosophy

- Semantic hierarchy over style
- Saturation does not define importance
- UI must recede behind code
- Colors have function, not decoration

## License

MIT. Forks are encouraged.
