import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { ColorName, Size } from "../../theme/theme";
import { ButtonVariant } from "../Button/Button";
import { CircularProgress } from "../CircularProgress/CircularProgress";
import { StyledIconButton } from "./styled";

type BaseIconButtonProps = {
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
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

/** Please note that the icons will have to be imported from some other react-library(preferably from "react-icons"). Most of the props are similar to `Button` component */
export const IconButton = ({
  icon,
  size = "md",
  variant = "filled",
  color = "primary",
  style,
  className,
  onClick,
  disabled,
  isLoading, // can be directly passed to button but we don't and just dynamically change the child element of StyledIconButton
  circular = false,
  elevated = false,
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
