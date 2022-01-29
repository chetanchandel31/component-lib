import React from "react";
import { ColorName } from "../../theme/theme";
import { StyledCircularProgress } from "./styled";

export type HakiCircularProgressProps = {
  size?: number;
  color?: ColorName;
  thickness?: number;
};

export const CircularProgress = ({
  size = 40,
  color = "primary",
  thickness = 4,
}: HakiCircularProgressProps) => {
  return (
    <StyledCircularProgress size={size} color={color} thickness={thickness} />
  );
};
