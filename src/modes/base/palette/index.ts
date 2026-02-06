import { neutrals } from "./neutrals";
import { semantics } from "./semantics";
import { states } from "./states";

export const basePalette = { ...neutrals, ...semantics, ...states } as const;

export type BasePalette = typeof basePalette;
