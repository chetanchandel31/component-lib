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
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset"; // remove if type `DOMAttributes<HTMLButtonElement>` is used for props in future
};

export type HakiButtonProps = {
  color?: ColorName;
  /** can be used if button is being used as a Floating Action Button */
  elevated?: boolean;
  fullWidth?: boolean;
  size?: Size;
  /** can be any icon from a react-library like "react-icons" */
  endIcon?: ReactNode;
  isLoading?: boolean;
  rounded?: boolean;
  /** can be any icon from a react-library like "react-icons" */
  startIcon?: ReactNode;
  variant?: ButtonVariant;
} & BaseButtonProps;

// DOMAttributes<HTMLButtonElement>;

// TODO: `as` prop for react router and href

/** Buttons allow users to take actions, and make choices, with a single tap.  */
export const Button = ({
  children,
  className,
  color = "primary",
  disabled = false,
  elevated = false,
  endIcon,
  fullWidth = false,
  isLoading = false,
  onClick,
  rounded = false,
  type,
  size = "md",
  startIcon,
  style,
  variant = "filled",
  ...restProps
}: HakiButtonProps) => {
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
      color={color}
      disabled={disabled || isLoading}
      elevated={elevated}
      fullWidth={fullWidth}
      onClick={onClick}
      rounded={rounded}
      style={style}
      size={size}
      type={type}
      variant={variant}
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
