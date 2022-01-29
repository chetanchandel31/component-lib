import React from "react";
import { ColorName } from "../../theme/theme";
import { StyledCircularProgress } from "./styled";

export type CircularProgressProps = {
  size?: number;
  color?: ColorName;
  thickness?: number;
};

export const CircularProgress = ({
  size = 40,
  color = "primary",
  thickness = 4,
}: CircularProgressProps) => {
  return (
    <StyledCircularProgress size={size} color={color} thickness={thickness} />
  );
};
