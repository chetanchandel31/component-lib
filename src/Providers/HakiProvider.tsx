import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.styles";
import { defaultTheme } from "./theme";

interface HakiProviderProps {
  children: ReactNode;
  theme?: Object; // TODO: change
}

/** applies global styles and ability to customize theme for haki components*/
export const HakiProvider = (props: HakiProviderProps) => {
  const { children, theme } = props;

  const finalTheme = { ...defaultTheme, theme };

  return (
    <ThemeProvider theme={finalTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
