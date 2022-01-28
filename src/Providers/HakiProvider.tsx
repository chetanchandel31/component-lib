import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.styles";
import {
  defaultTheme,
  getFinalTheme,
  Theme,
  UserEditableTheme,
} from "../theme/theme";

interface HakiProviderProps {
  children: ReactNode;
  theme?: UserEditableTheme;
}

/** applies global styles and ability to customize theme for haki components*/
export const HakiProvider = (props: HakiProviderProps) => {
  const { children, theme } = props;

  const finalTheme: Theme = getFinalTheme(theme, defaultTheme);

  return (
    <ThemeProvider theme={finalTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
