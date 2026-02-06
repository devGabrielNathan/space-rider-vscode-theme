import { createThemeFromPalette, type Theme } from "../index";
import { highContrastVariants } from "../modes/high-contrast/variants";

export const highContrastTheme: Theme = createThemeFromPalette(
  "Space Rider High Contrast",
  highContrastVariants.dark,
);

export const highContrastSoftTheme: Theme = createThemeFromPalette(
  "Space Rider High Contrast Soft",
  highContrastVariants.soft,
);

export const highContrastVividTheme: Theme = createThemeFromPalette(
  "Space Rider High Contrast Vivid",
  highContrastVariants.vivid,
);
