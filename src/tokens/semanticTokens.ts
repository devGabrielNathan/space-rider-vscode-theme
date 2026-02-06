import type { PaletteLike } from "../modes/paletteTypes";

export const getSemanticTokenColors = (
  palette: PaletteLike,
): Record<string, string> => ({
  comment: palette.comment,
  keyword: palette.keyword,
  operator: palette.operator,
  string: palette.string,
  number: palette.constant,
  boolean: palette.constant,
  regexp: palette.string,
  class: palette.type,
  struct: palette.type,
  interface: palette.type,
  enum: palette.type,
  enumMember: palette.constant,
  type: palette.type,
  function: palette.function,
  method: palette.function,
  macro: palette.function,
  variable: palette.variable,
  parameter: palette.variable,
  property: palette.variable,
  namespace: palette.module,
  module: palette.module,
  label: palette.operator,
  decorator: palette.function,
});
