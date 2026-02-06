import type { PaletteLike } from "../../paletteTypes";
import { basePalette } from "../palette";
import { makeSoftVariant } from "../../variantNeutrals";

export const soft: PaletteLike = makeSoftVariant(basePalette, {
  comment: basePalette.variable,
});
