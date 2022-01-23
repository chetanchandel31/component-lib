import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { Colors, Sizes } from "../../types/types";
import { StyledButton } from "./styled";

type BaseButtonProps = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export type ButtonProps = {
  size: Sizes;
  color?: Colors;
  fontColor?: string;
  isLoading?: boolean;
} & BaseButtonProps;

export const Button = (props: ButtonProps) => {
  const {
    children,
    color = "primary",
    fontColor = "white",
    size,
    style,
    className,
    onClick,
    disabled,
    isLoading,
  } = props;

  return (
    <StyledButton
      className={className}
      style={style}
      onClick={onClick}
      size={size}
      color={color}
      fontColor={fontColor}
      disabled={disabled || isLoading}
    >
      {children}
    </StyledButton>
  );
};
