import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
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
  components: {},
});

export default theme;
