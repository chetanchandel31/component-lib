import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { Colors, Sizes } from "../../theme/theme";
import { StyledButton } from "./styled";

export type ButtonVariants = "filled" | "ghost" | "outlined";

type BaseButtonProps = {
  /** any string or valid react child  */
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type HakiButtonProps = {
  size?: Sizes;
  color?: Colors;
  variant?: ButtonVariants;
  isLoading?: boolean;
};

export type ButtonProps = BaseButtonProps & HakiButtonProps;
// DOMAttributes<HTMLButtonElement>;

// TODO: icon button and FAB
// loading will be same as disabled but with loader and optional loading text
// `as` prop for react router

/** Buttons allow users to take actions, and make choices, with a single tap.  */
export const Button = ({
  children,
  color = "primary",
  size = "md",
  style,
  className,
  onClick,
  disabled = false,
  isLoading = false,
  variant = "filled",
  ...restProps
}: ButtonProps) => {
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
