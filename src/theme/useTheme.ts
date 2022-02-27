import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { defaultTheme, Theme } from "./theme";

/** lets you access the theme object inside your React components */
export const useTheme = () => {
  const themeFromContext = useContext(ThemeContext);
  const theme: Theme = themeFromContext || defaultTheme;

  return theme;
};
