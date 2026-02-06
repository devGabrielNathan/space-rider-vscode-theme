<p align="right">
  <a href="../README.md">en</a>
</p>

<h1 align="center">
  <br>
  <a href="../images/icon-v2.png">
    <img src="https://raw.githubusercontent.com/gabrielnathan/space-rider-vscode-theme/main/images/icon-v2.png" alt="Space Rider" width="360" style="border-radius: 50%;">
  </a>
  <br>
  Space Rider
  <br>
</h1>

<h4 align="center">Sistema modular de tema para VS Code com hierarquia semantica clara</h4>

## About

Sistema de temas para VS Code com hierarquia perceptiva e estrutura pensada para forks.

## Modes and variants

- Base: modo principal com ajustes de contraste soft e vivid
- High-Contrast: modo cognitivo separado com ajustes internos soft e vivid
- Soft e Vivid ajustam apenas neutros, sem mudar matiz semantica

## Installation

Dependencias (necessarias antes da instalacao):

- Node.js e npm
- VS Code
- VSCE (`npm install -g @vscode/vsce`)

Build e instalacao local:

```
npm install
npm run build:all
npx vsce package
code --install-extension space-rider-*.vsix
```

Se `code` nao estiver no PATH, instale o comando de shell do VS Code e tente novamente.

## Typography

Estilo cinema pulp, minimalista e legivel:

- Titulos (principal): Bebas Neue - https://fonts.google.com/specimen/Bebas+Neue
- Corpo do texto: Inter (ou sans-serif neutra) - https://fonts.google.com/specimen/Inter
- Codigo (editor): Space Mono como principal, com alternativas opcionais

Voce precisa de 2 a 3 fontes no total:

1. Bebas Neue para titulos
2. Inter para corpo do texto
3. Uma fonte mono para codigo

### Recommended mono fonts (pick one)

- Space Mono (principal): https://fonts.google.com/specimen/Space+Mono
- Courier Prime (opcional): https://fonts.google.com/specimen/Courier+Prime
- IBM Plex Mono (opcional): https://fonts.google.com/specimen/IBM+Plex+Mono
- Victor Mono (opcional): https://rubjo.github.io/victor-mono/
- JetBrains Mono (opcional): https://www.jetbrains.com/lp/mono/

O VS Code nao consegue aplicar fontes via tema. Voce precisa instalar as fontes no sistema e depois definir no VS Code.

Como definir fontes no VS Code:

1. Abra Settings e procure por "Font Family"
2. Ou abra Command Palette e rode "Preferences: Open Settings (JSON)"
3. Adicione as configuracoes abaixo

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

Coloque as fontes baixadas em `~/.local/share/fonts/` (usuario) ou `/usr/local/share/fonts/` (sistema).

1. Baixe os arquivos `.ttf` das fontes
2. Copie para `~/.local/share/fonts/` (usuario) ou `/usr/local/share/fonts/` (sistema)
3. Atualize o cache de fontes:
  ```bash
  fc-cache -f -v
  ```
4. Reinicie os apps (VS Code, terminal, etc.)

#### Windows

Coloque as fontes baixadas em `C:\\Windows\\Fonts` (ou use a opcao Install).

1. Extraia o zip das fontes
2. Clique com o botao direito nos arquivos `.ttf` e selecione "Install" ou "Install for all users"
3. Alternativa: arraste para `C:\\Windows\\Fonts`
4. Reinicie os apps

## System structure

```
src/
├── modes/
│   ├── base/
│   │   ├── palette/           # paleta base canonica
│   │   └── variants/          # soft/vivid do modo base
│   ├── high-contrast/
│   │   ├── palette/           # paleta high-contrast
│   │   └── variants/          # soft/vivid do modo high-contrast
│   ├── paletteTypes.ts        # chaves e tipos compartilhados
│   └── variantNeutrals.ts     # ajustes de neutros (soft/vivid)
├── tokens/                     # tokens de sintaxe e semanticos
├── workbench/                  # cores de UI
├── themes/                     # composicao e registro de temas
└── build.ts                    # geracao dos JSONs
themes/                          # saida JSON para VS Code
```

## How to create your own theme

1. Duplique uma paleta
   - Base: copie `src/modes/base/palette/`
   - High-Contrast: copie `src/modes/high-contrast/palette/`
2. Ajuste apenas as cores listadas no SPEC correspondente
3. Crie um tema em `src/themes/` usando `createThemeFromPalette`
4. Registre a saida em `src/themes/registry.ts`
5. Adicione a nova entrada no `package.json`

Exemplo (tema a partir de uma paleta nova):

```ts
import { createThemeFromPalette } from "./index";
import { paletteMyTheme } from "./modes/my-mode/palette";

export const myTheme = createThemeFromPalette(
  "Space Rider My Theme",
  paletteMyTheme,
);
```

## Design philosophy

- Hierarquia semantica acima de estilo
- Saturacao nao define importancia
- UI deve recuar para o codigo
- Cores tem funcao, nao decoracao

## License

MIT. Forks sao encorajados.
