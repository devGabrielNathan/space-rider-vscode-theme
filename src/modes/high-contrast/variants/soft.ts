import type { PaletteLike } from "../../paletteTypes";
import { highContrastPalette } from "../palette";
import { makeSoftVariant } from "../../variantNeutrals";

export const highContrastSoft: PaletteLike =
  makeSoftVariant(highContrastPalette);
