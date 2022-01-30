import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global-styles/global.styles";
import {
  defaultTheme,
  getFinalTheme,
  Theme,
  UserEditableTheme,
} from "../theme/theme";
// import { Helmet } from "react-helmet";

type HakiProviderProps = {
  children: ReactNode;
  theme?: UserEditableTheme;
};

/** applies global styles and ability to customize theme for haki components*/
export const HakiProvider = (props: HakiProviderProps) => {
  const { children, theme } = props;

  const finalTheme: Theme = getFinalTheme(theme, defaultTheme);

  return (
    <>
      {/* <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}
      <ThemeProvider theme={finalTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};
