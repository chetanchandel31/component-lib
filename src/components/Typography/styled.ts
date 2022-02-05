import styled, { ThemedStyledProps } from "styled-components";
import { Theme } from "../../theme/theme";
import {
  HakiFontWeight,
  HakiTextVariant,
  HakiTypographyColor,
} from "./Typography";

type StyledHeadingProps = {
  weight: HakiFontWeight;
  color: HakiTypographyColor;
};

type StyledTextProps = {
  variant: HakiTextVariant;
} & StyledHeadingProps;

/* helpers-start */
const getFontSize = (props: ThemedStyledProps<StyledTextProps, any>) => {
  const mapVariantToFontSize: { [key in HakiTextVariant]: string } = {
    body1: `var(--fs-body1)`,
    body2: `var(--fs-body2)`,
    caption: `var(--fs-caption)`,
  };
  return mapVariantToFontSize[props.variant];
};

const getFontWeight = (
  props: ThemedStyledProps<StyledTextProps | StyledHeadingProps, any>
) => {
  const mapWeightToFontWeight: { [key in HakiFontWeight]: number } = {
    bold: 800,
    regular: 400,
    "semi-bold": 600,
  };
  return mapWeightToFontWeight[props.weight];
};

const getFontColor = (
  props: ThemedStyledProps<StyledTextProps | StyledHeadingProps, any>
) => {
  const theme: Theme = props.theme;

  const mapWeightToFontWeight: { [key in HakiTypographyColor]: string } = {
    danger: theme.colors.danger.main,
    default: "#000",
    disabled: theme.colors.disabled.dark,
    primary: theme.colors.primary.main,
    secondary: theme.colors.secondary.main,
    warning: theme.colors.warning.main,
  };
  return mapWeightToFontWeight[props.color];
};
/* helpers-end */

/* styles */
export const StyledText = styled.div<StyledTextProps>`
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
`;

export const StyledH1 = styled.h1<StyledHeadingProps>`
  font-size: var(--fs-h1);
  font-weight: ${getFontWeight};
  color: ${getFontColor};
`;

export const StyledH2 = styled.h2<StyledHeadingProps>`
  font-size: var(--fs-h2);
  font-weight: ${getFontWeight};
  color: ${getFontColor};
`;

export const StyledH3 = styled.h3<StyledHeadingProps>`
  font-size: var(--fs-h3);
  font-weight: ${getFontWeight};
  color: ${getFontColor};
`;

export const StyledH4 = styled.h4<StyledHeadingProps>`
  font-size: var(--fs-h4);
  font-weight: ${getFontWeight};
  color: ${getFontColor};
`;
