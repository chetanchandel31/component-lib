import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { Colors, Sizes } from "../../types/types";
import { StyledButton } from "./styled";

export type ButtonVariants = "filled" | "ghost" | "outlined";

type BaseButtonProps = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type HakiButtonProps = {
  size: Sizes;
  color?: Colors;
  variant?: ButtonVariants;
  isLoading?: boolean;
};

export type ButtonProps = BaseButtonProps & HakiButtonProps;
// DOMAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const {
    children,
    color = "primary",
    size = "md",
    style,
    className,
    onClick,
    disabled,
    isLoading,
    variant = "filled",
    ...restProps
  } = props;

  return (
    <StyledButton
      className={className}
      style={style}
      onClick={onClick}
      size={size}
      color={color}
      variant={variant}
      disabled={disabled || isLoading}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};
