import React, { FC, ReactNode } from "react";
import { StyledButton } from "./styled";

export interface ButtonProps {
  children: ReactNode;
  color?: string;
}

export const Button: FC<ButtonProps> = ({ children, color }) => {
  return (
    <StyledButton style={{ color: color || "black" }}>{children}</StyledButton>
  );
};
