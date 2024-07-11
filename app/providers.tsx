"use client";

import { store } from "@/redux/store";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";

export default function Providers(props: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{props.children}</Provider>
    </ThemeProvider>
  );
}
