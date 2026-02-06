import { dark } from "./dark";
import { soft } from "./soft";
import { vivid } from "./vivid";

export const variants = {
  dark,
  soft,
  vivid,
};

export type VariantName = keyof typeof variants;
