import { TypeBackground } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface TypeBackground {
    alt: string;
  }
}
