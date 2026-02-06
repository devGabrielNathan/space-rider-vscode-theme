import type { Theme } from "../index";
import { baseTheme, softTheme, vividTheme } from "./baseThemes";
import {
  highContrastSoftTheme,
  highContrastTheme,
  highContrastVividTheme,
} from "./highContrastThemes";

export const themes = {
  base: baseTheme,
  highContrast: highContrastTheme,
  highContrastSoft: highContrastSoftTheme,
  highContrastVivid: highContrastVividTheme,
  soft: softTheme,
  vivid: vividTheme,
};

export type ThemeOutput = { theme: Theme; fileName: string };

export const themeOutputs: ThemeOutput[] = [
  { theme: themes.base, fileName: "space-rider-color-theme.json" },
  {
    theme: themes.highContrast,
    fileName: "space-rider-high-contrast-color-theme.json",
  },
  {
    theme: themes.highContrastSoft,
    fileName: "space-rider-high-contrast-soft-color-theme.json",
  },
  {
    theme: themes.highContrastVivid,
    fileName: "space-rider-high-contrast-vivid-color-theme.json",
  },
  { theme: themes.soft, fileName: "space-rider-soft-color-theme.json" },
  { theme: themes.vivid, fileName: "space-rider-vivid-color-theme.json" },
];
