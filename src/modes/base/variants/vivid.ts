import type { PaletteLike } from "../../paletteTypes";
import { basePalette } from "../palette";
import { makeVividVariant } from "../../variantNeutrals";

export const vivid: PaletteLike = makeVividVariant(basePalette, {
  comment: basePalette.fg1,
});
