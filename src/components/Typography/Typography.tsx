import React from "react";
import { ReactNode } from "react";
import { ColorName } from "../../theme/theme";
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledText } from "./styled";

export type HakiTextVariant = "body1" | "body2" | "caption";
export type HakiFontWeight = "regular" | "semi-bold" | "bold";
export type HakiTypographyColor = "default" | ColorName | "disabled";

/* props-start */
type BaseTextProps = {
  children: ReactNode;
  weight?: HakiFontWeight;
  color?: HakiTypographyColor;
};

export type HakiTextProps = BaseTextProps & {
  variant?: HakiTextVariant;
};

export type HakiHeadingProps = BaseTextProps;
/* props-end */

/** component to render body text and paragraphs with easily customisable size, weight and color */
export const Text = ({
  children,
  variant = "body1",
  weight = "regular",
  color = "default",
}: HakiTextProps) => {
  // TODO: display: inline
  return (
    <StyledText variant={variant} weight={weight} color={color}>
      {children}
    </StyledText>
  );
};

/** Heading tags components wrappers around native heading tags(h1, h2, h3, h4) with some useful props to manipulate font-weight and color */
export const H1 = ({
  children,
  color = "default",
  weight = "regular",
}: HakiHeadingProps) => {
  return (
    <StyledH1 color={color} weight={weight}>
      {children}
    </StyledH1>
  );
};

export const H2 = ({
  children,
  color = "default",
  weight = "regular",
}: HakiHeadingProps) => {
  return (
    <StyledH2 color={color} weight={weight}>
      {children}
    </StyledH2>
  );
};

export const H3 = ({
  children,
  color = "default",
  weight = "regular",
}: HakiHeadingProps) => {
  return (
    <StyledH3 color={color} weight={weight}>
      {children}
    </StyledH3>
  );
};

export const H4 = ({
  children,
  color = "default",
  weight = "regular",
}: HakiHeadingProps) => {
  return (
    <StyledH4 color={color} weight={weight}>
      {children}
    </StyledH4>
  );
};
