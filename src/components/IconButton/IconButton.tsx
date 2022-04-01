import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { ColorName, Size } from "../../theme/theme";
import { ButtonVariant } from "../Button/Button";
import { CircularProgress } from "../CircularProgress/CircularProgress";
import { StyledIconButton } from "./styled";

type BaseIconButtonProps = {
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset"; // remove if type `DOMAttributes<HTMLButtonElement>` is used for props in future
};

export type HakiIconButtonProps = {
  /** should be a react element, ideally something imported from "react-icons" */
  icon: ReactNode;
  size?: Size;
  variant?: ButtonVariant;
  color?: ColorName;
  isLoading?: boolean;
  /** useful when using `IconButton` as a Floating Action Button */
  circular?: boolean;
  elevated?: boolean;
} & BaseIconButtonProps;

/** Please note the icons will have to be imported from some other react-library(preferably from "react-icons"). Most of the props are similar to `Button` component */
export const IconButton = ({
  icon,
  size = "md",
  variant = "filled",
  color = "primary",
  style,
  className,
  onClick,
  disabled = false,
  isLoading = false, // can be directly passed to button but we don't and just dynamically change the child element of StyledIconButton
  circular = false,
  elevated = false,
  type,
  ...restProps
}: HakiIconButtonProps) => {
  return (
    <StyledIconButton
      className={className}
      onClick={onClick}
      disabled={disabled || isLoading}
      _size={size}
      variant={variant}
      color={color}
      style={style}
      elevated={elevated}
      circular={circular}
      type={type}
      {...restProps}
    >
      {isLoading ? (
        // TODO: size needs to change as per IconButton `size`
        <CircularProgress size={15} thickness={2} color="disabled" />
      ) : (
        icon
      )}
    </StyledIconButton>
  );
};
