import { Colors } from "../types/types";

interface Color {
  main: string;
}

export const defaultColors: { [key in Colors]: Color } = {
  primary: {
    main: "#6C63FF",
  },
  secondary: {
    main: "#00BFA6",
  },
  danger: {
    main: "#F50057",
  },
  ghost: {
    main: "transparent",
  },
};

export interface Theme {
  colors: typeof defaultTheme;
}

export const defaultTheme = {
  colors: defaultColors,
};
