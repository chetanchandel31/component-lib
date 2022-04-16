import React, { CSSProperties, ReactNode } from "react";
import { ColorName } from "../../theme/theme";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledText,
} from "./styled";

export type HakiTextVariant = "body1" | "body2" | "caption";
export type HakiFontWeight = "regular" | "semi-bold" | "bold";
export type HakiTypographyColor = "default" | ColorName | "disabled";

/* props-start */
type BaseTextProps = {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  as?: any;
  children: ReactNode;
  className?: string;
  weight?: HakiFontWeight;
  color?: HakiTypographyColor;
  style?: CSSProperties;
};

export type HakiTextProps = BaseTextProps & {
  variant?: HakiTextVariant;
};

export type HakiHeadingProps = BaseTextProps;
/* props-end */

/** component to render body text and paragraphs with easily customisable size, weight and color */
export const Text = ({
  as,
  children,
  className,
  variant = "body1",
  weight = "regular",
  color = "default",
  style,
}: HakiTextProps) => {
  // TODO: display: inline
  return (
    <StyledText
      as={as}
      className={className}
      variant={variant}
      weight={weight}
      color={color}
      style={style}
    >
      {children}
    </StyledText>
  );
};

/** Heading tags components wrappers around native heading tags(h1, h2, h3, h4) with some useful props to manipulate font-weight and color */
export const H1 = ({
  as,
  children,
  color = "default",
  weight = "regular",
}: HakiHeadingProps) => {
  return (
    <StyledH1 as={as} color={color} weight={weight}>
      {children}
    </StyledH1>
  );
};

export const H2 = ({
  as,
  children,
  color = "default",
  weight = "regular",
}: HakiHeadingProps) => {
  return (
    <StyledH2 as={as} color={color} weight={weight}>
      {children}
    </StyledH2>
  );
};

export const H3 = ({
  as,
  children,
  color = "default",
  weight = "regular",
}: HakiHeadingProps) => {
  return (
    <StyledH3 as={as} color={color} weight={weight}>
      {children}
    </StyledH3>
  );
};

export const H4 = ({
  as,
  children,
  color = "default",
  weight = "regular",
}: HakiHeadingProps) => {
  return (
    <StyledH4 as={as} color={color} weight={weight}>
      {children}
    </StyledH4>
  );
};

export const H5 = ({
  as,
  children,
  color = "default",
  weight = "regular",
}: HakiHeadingProps) => {
  return (
    <StyledH5 as={as} color={color} weight={weight}>
      {children}
    </StyledH5>
  );
};
