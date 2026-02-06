export type PaletteKeys =
  | "bg0"
  | "bg1"
  | "bg2"
  | "fg0"
  | "fg1"
  | "comment"
  | "keyword"
  | "function"
  | "type"
  | "string"
  | "variable"
  | "constant"
  | "module"
  | "operator"
  | "error"
  | "info";

export type PaletteLike = { [K in PaletteKeys]: string };
