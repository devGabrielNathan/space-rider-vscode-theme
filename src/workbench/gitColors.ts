import type { PaletteLike } from "../modes/paletteTypes";

export const gitColors = (palette: PaletteLike): Record<string, string> => ({
  "gitDecoration.addedResourceForeground": palette.info,
  "gitDecoration.modifiedResourceForeground": palette.operator,
  "gitDecoration.deletedResourceForeground": palette.error,
  "gitDecoration.untrackedResourceForeground": palette.info,
  "gitDecoration.ignoredResourceForeground": palette.comment,
  "gitDecoration.conflictingResourceForeground": palette.error,
  "gitDecoration.submoduleResourceForeground": palette.module,
});
