import type { PaletteLike } from "../../paletteTypes";
import { highContrastPalette } from "../palette";
import { makeVividVariant } from "../../variantNeutrals";

export const highContrastVivid: PaletteLike =
  makeVividVariant(highContrastPalette);
