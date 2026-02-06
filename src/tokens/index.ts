import type { PaletteLike } from "../modes/paletteTypes";
import { getSemanticTokenColors } from "./semanticTokens";
import { getSyntaxTokens, type TokenColor } from "./syntaxTokens";

export type { TokenColor };

export type Tokens = {
  tokenColors: TokenColor[];
  semanticTokenColors: Record<string, string>;
};

export const getTokens = (palette: PaletteLike): Tokens => ({
  tokenColors: getSyntaxTokens(palette),
  semanticTokenColors: getSemanticTokenColors(palette),
});
