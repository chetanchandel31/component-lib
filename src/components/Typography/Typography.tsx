import React from "react";
import { ReactNode } from "react";
import { ColorName } from "../../theme/theme";
import { StyledText } from "./styled";

export type HakiTextVariant = "body1" | "body2" | "caption";
export type HakiFontWeight = "regular" | "semi-bold" | "bold";
export type HakiTypographyColor = "default" | ColorName | "disabled";

export type HakiTextProps = {
  children: ReactNode;
  variant?: HakiTextVariant;
  weight?: HakiFontWeight;
  color?: HakiTypographyColor;
};

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
