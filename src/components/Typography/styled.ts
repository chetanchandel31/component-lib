import styled, { ThemedStyledProps } from "styled-components";
import { Theme } from "../../theme/theme";
import {
  HakiFontWeight,
  HakiTextVariant,
  HakiTypographyColor,
} from "./Typography";

type StyledTextProps = {
  variant: HakiTextVariant;
  weight: HakiFontWeight;
  color: HakiTypographyColor;
};

const getFontSize = (props: ThemedStyledProps<StyledTextProps, any>) => {
  const mapVariantToFontSize: { [key in HakiTextVariant]: string } = {
    body1: `var(--fs-body1)`,
    body2: `var(--fs-body2)`,
    caption: `var(--fs-caption)`,
  };
  return mapVariantToFontSize[props.variant];
};

const getFontWeight = (props: ThemedStyledProps<StyledTextProps, any>) => {
  const mapWeightToFontWeight: { [key in HakiFontWeight]: number } = {
    bold: 800,
    regular: 400,
    "semi-bold": 600,
  };
  return mapWeightToFontWeight[props.weight];
};

const getFontColor = (props: ThemedStyledProps<StyledTextProps, any>) => {
  const theme: Theme = props.theme;

  const mapWeightToFontWeight: { [key in HakiTypographyColor]: string } = {
    danger: theme.colors.danger.main,
    default: "#000",
    disabled: theme.colors.disabled.main,
    primary: theme.colors.primary.main,
    secondary: theme.colors.secondary.main,
    warning: theme.colors.warning.main,
  };
  return mapWeightToFontWeight[props.color];
};

export const StyledText = styled.div<StyledTextProps>`
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
`;
