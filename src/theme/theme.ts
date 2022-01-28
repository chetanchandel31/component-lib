export type Sizes = "sm" | "md" | "lg" | "xl";

// colors
export type Colors = "primary" | "secondary" | "warning" | "danger";

type Color = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
};

type ColorPalette = {
  [key in Colors]: Color;
} & { disabled: Color };

export const defaultColors: ColorPalette = {
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
  disabled: {
    main: "rgba(0, 0, 0, 0.26)",
    light: "rgba(0, 0, 0, 0.12)",
    dark: "rgba(0, 0, 0, 0.5)",
    contrastText: "#fff",
  },
};

// theme object
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

/** customize default theme using user entered values */
export const getFinalTheme = (
  userEditableTheme: UserEditableTheme | undefined,
  defaultTheme: Theme
) => {
  // TODO: better way of customising theme?
  const modifiedTheme = { ...defaultTheme };

  if (userEditableTheme?.primary)
    modifiedTheme.colors.primary = userEditableTheme.primary;
  if (userEditableTheme?.secondary)
    modifiedTheme.colors.secondary = userEditableTheme.secondary;
  if (userEditableTheme?.danger)
    modifiedTheme.colors.danger = userEditableTheme.danger;

  return modifiedTheme;
};
