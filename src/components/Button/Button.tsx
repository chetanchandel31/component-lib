import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { ColorName, Size } from "../../theme/theme";
import { StyledButton } from "./styled";
import { CircularProgress } from "../CircularProgress/CircularProgress";

export type ButtonVariant = "filled" | "ghost" | "outlined";

type BaseButtonProps = {
  /** any string or valid react child  */
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type HakiButtonProps = {
  size?: Size;
  color?: ColorName;
  variant?: ButtonVariant;
  isLoading?: boolean;
  rounded?: boolean;
  elevation?: boolean;
};

export type ButtonProps = BaseButtonProps & HakiButtonProps;
// DOMAttributes<HTMLButtonElement>;

// TODO:  FAB
// startIcon and endIcon
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
  rounded = false,
  /** can be used if button is being used as a Floating Action Button */
  elevation = false,
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
      rounded={rounded}
      elevation={elevation}
      {...restProps}
    >
      {isLoading && (
        <CircularProgress
          size={15}
          thickness={2}
          color="disabled"
          style={{ marginRight: "4px" }}
        />
      )}
      {children}
    </StyledButton>
  );
};
