import {
  TypeBackground,
  PaletteColor,
} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface TypeBackground {
    alt: string;
  }
  export interface PaletteColor {
    [key: string]: string;
  }
}
