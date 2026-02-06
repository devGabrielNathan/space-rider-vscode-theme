import { neutrals } from "./neutrals";
import { semantics } from "./semantics";
import { states } from "./states";

export const highContrastPalette = {
  ...neutrals,
  ...semantics,
  ...states,
} as const;

export type HighContrastPalette = typeof highContrastPalette;
