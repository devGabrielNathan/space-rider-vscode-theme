import type { PaletteLike } from "../modes/paletteTypes";
import { editorColors } from "./editorColors";
import { explorerColors } from "./explorerColors";
import { gitColors } from "./gitColors";

export const getWorkbenchColors = (
  palette: PaletteLike,
): Record<string, string> => ({
  ...editorColors(palette),
  ...explorerColors(palette),
  ...gitColors(palette),
});
