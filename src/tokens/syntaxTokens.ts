import type { PaletteLike } from "../modes/paletteTypes";

export type TokenColor = {
  scope: string[] | string;
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
};

export const getSyntaxTokens = (palette: PaletteLike): TokenColor[] => [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: { foreground: palette.comment },
  },
  {
    scope: ["keyword", "storage.type"],
    settings: { foreground: palette.keyword },
  },
  {
    scope: ["keyword.operator", "punctuation"],
    settings: { foreground: palette.operator },
  },
  {
    scope: ["entity.name.function", "support.function"],
    settings: { foreground: palette.function },
  },
  {
    scope: ["entity.name.type", "support.type"],
    settings: { foreground: palette.type },
  },
  {
    scope: ["string", "constant.other.symbol"],
    settings: { foreground: palette.string },
  },
  {
    scope: ["variable", "identifier"],
    settings: { foreground: palette.variable },
  },
  {
    scope: ["constant.numeric", "constant.language"],
    settings: { foreground: palette.constant },
  },
  {
    scope: ["entity.name.namespace", "support.module"],
    settings: { foreground: palette.module },
  },
  {
    scope: ["invalid", "invalid.illegal"],
    settings: { foreground: palette.error },
  },
];
