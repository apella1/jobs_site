import { green, purple, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#1D1F98",
        light: "#3f51b5",
        dark: "#303f9f",
      },
      secondary: {
        main: "#DD2B3A",
        light: "#f44336",
        dark: "#d32f2f",
      },
      error: {
        main: "#f44336",
        light: "#e57373",
        dark: "#d32f2f",
      },
      warning: {
        main: "#ff9800",
        light: "#ffb74d",
        dark: "#f57c00",
      },
      info: {
        main: "#2196f3",
        light: "#64b5f6",
        dark: "#1976d2",
      },
      success: {
        main: "#4caf50",
        light: "#81c784",
        dark: "#388e3c",
      },
      divider: "#c8ccd0",
      text: {
        primary: yellow[900],
        secondary: green[500],
      },
    },
  }
  /* palette: {
    primary: { main: "#1D1F95" },
    secondary: { main: "#000" },
    warning: { main: "#c1004b" },
    divider: "#c8ccd0",
    text: {
      primary: "#000000",
      secondary: "#DD2B3A",
    },
    background: {
      default: "#f7f9fc",
      paper: "#FFFF",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h6: {
      fontSize: "15pt",
    },
    subtitle1: {
      fontSize: "12pt",
    },
    body1: {
      fontSize: "10pt",
    },
  },
  components: {}, */
);

export default theme;
