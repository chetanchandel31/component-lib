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

export const defaultTheme = {
  colors: defaultColors,
};

export type Theme = typeof defaultTheme;

export type UserEditableTheme = {
  primary?: string;
  secondary?: string;
  danger?: string;
};

export const getFinalTheme = (
  userEditableTheme: UserEditableTheme | undefined,
  defaultTheme: Theme
) => {
  if (userEditableTheme?.primary)
    defaultTheme.colors.primary.main = userEditableTheme.primary;
  if (userEditableTheme?.secondary)
    defaultTheme.colors.secondary.main = userEditableTheme.secondary;
  if (userEditableTheme?.danger)
    defaultTheme.colors.danger.main = userEditableTheme.danger;

  return defaultTheme;
};
