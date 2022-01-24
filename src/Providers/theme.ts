import { Colors } from "../types/types";

interface Color {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export const defaultColors: { [key in Colors]: Color } = {
  primary: {
    main: "#6C63FF",
    light: "#ebeaff",
    dark: "#564fc2",
    contrastText: "#fff",
  },
  secondary: {
    main: "#00BFA6",
    light: "#ddf4f0",
    dark: "#008263",
    contrastText: "#fff",
  },
  danger: {
    main: "#F50057",
    light: "#ffe4eb",
    dark: "#bb004e",
    contrastText: "#fff",
  },
  warning: {
    main: "#F9A826",
    light: "#fff9c4",
    dark: "#f57f18",
    contrastText: "#fff",
  },
};

export const defaultTheme = {
  colors: defaultColors,
};

export type Theme = typeof defaultTheme;

export type UserEditableTheme = {
  primary?: Color;
  secondary?: Color;
  danger?: Color;
  warning?: Color;
};

export const getFinalTheme = (
  userEditableTheme: UserEditableTheme | undefined,
  defaultTheme: Theme
) => {
  // TODO: better way of customising theme?
  if (userEditableTheme?.primary)
    defaultTheme.colors.primary = userEditableTheme.primary;
  if (userEditableTheme?.secondary)
    defaultTheme.colors.secondary = userEditableTheme.secondary;
  if (userEditableTheme?.danger)
    defaultTheme.colors.danger = userEditableTheme.danger;

  return defaultTheme;
};
