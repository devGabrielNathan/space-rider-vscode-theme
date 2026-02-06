import type { PaletteLike } from "./paletteTypes";

type NeutralOverrides = Partial<
  Pick<PaletteLike, "bg0" | "bg1" | "bg2" | "fg0" | "fg1" | "comment">
>;

export const makeSoftVariant = (
  palette: PaletteLike,
  overrides: NeutralOverrides = {},
): PaletteLike => ({
  ...palette,
  bg0: palette.bg1,
  bg1: palette.bg2,
  bg2: palette.bg2,
  fg0: palette.fg1,
  fg1: palette.comment,
  comment: palette.comment,
  ...overrides,
});

export const makeVividVariant = (
  palette: PaletteLike,
  overrides: NeutralOverrides = {},
): PaletteLike => ({
  ...palette,
  bg0: palette.bg0,
  bg1: palette.bg0,
  bg2: palette.bg1,
  fg0: palette.fg0,
  fg1: palette.fg0,
  comment: palette.comment,
  ...overrides,
});
