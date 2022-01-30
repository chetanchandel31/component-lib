import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { ColorName, Size } from "../../theme/theme";
import {
  StyledButton,
  StyledEndIconContainer,
  StyledStartIconContainer,
} from "./styled";
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
  /** can be used if button is being used as a Floating Action Button */
  elevation?: boolean;
  /** can be any icon from a react-library like "react-icons" */
  startIcon?: ReactNode;
  /** can be any icon from a react-library like "react-icons" */
  endIcon?: ReactNode;
};

export type ButtonProps = BaseButtonProps & HakiButtonProps;
// DOMAttributes<HTMLButtonElement>;

// TODO: `as` prop for react router and href

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
  elevation = false,
  startIcon,
  endIcon,
  ...restProps
}: ButtonProps) => {
  let _startIcon;
  let _endIcon;

  if (startIcon) _startIcon = startIcon;
  if (endIcon) _endIcon = endIcon;

  if (isLoading)
    _startIcon = <CircularProgress size={15} thickness={2} color="disabled" />;
  if (endIcon && isLoading) {
    // we don't want to show 2 loaders when endIcon is being used 😅
    _startIcon = undefined;
    _endIcon = <CircularProgress size={15} thickness={2} color="disabled" />;
  }

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
      {_startIcon && (
        <StyledStartIconContainer style={{ marginRight: "4px" }}>
          {_startIcon}
        </StyledStartIconContainer>
      )}
      {children}
      {_endIcon && (
        <StyledEndIconContainer style={{ marginLeft: "4px" }}>
          {_endIcon}
        </StyledEndIconContainer>
      )}
    </StyledButton>
  );
};
