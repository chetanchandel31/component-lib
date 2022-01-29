import React, { CSSProperties } from "react";
import { ColorName } from "../../theme/theme";
import { StyledCircularProgress } from "./styled";

export type HakiCircularProgressProps = {
  size?: number;
  color?: ColorName | "disabled";
  thickness?: number;
  className?: string;
  style?: CSSProperties;
};

export const CircularProgress = ({
  size = 40,
  color = "primary",
  thickness = 4,
  className,
  style,
}: HakiCircularProgressProps) => {
  return (
    <StyledCircularProgress
      className={className}
      style={style}
      size={size}
      color={color}
      thickness={thickness}
    />
  );
};
