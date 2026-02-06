import type { TokenColor } from "./tokens";
import { getTokens } from "./tokens";
import { getWorkbenchColors } from "./workbench";
import type { PaletteLike } from "./modes/paletteTypes";
import { variants, type VariantName } from "./modes/base/variants";

export type Theme = {
  name: string;
  type: "dark";
  colors: Record<string, string>;
  tokenColors: TokenColor[];
  semanticTokenColors: Record<string, string>;
};

export const createTheme = (name: string, variantName: VariantName): Theme => {
  const variant = variants[variantName];
  return createThemeFromPalette(name, variant);
};

export const createThemeFromPalette = (
  name: string,
  palette: PaletteLike,
): Theme => {
  const tokens = getTokens(palette);
  const colors = getWorkbenchColors(palette);

  return {
    name,
    type: "dark",
    colors,
    tokenColors: tokens.tokenColors,
    semanticTokenColors: tokens.semanticTokenColors,
  };
};
