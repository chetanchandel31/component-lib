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
  icon: ReactNode;
  size?: Size;
  variant?: ButtonVariant;
  color?: ColorName;
  isLoading?: boolean;
  circular?: boolean;
  elevation?: boolean;
} & BaseIconButtonProps;

/** I am using `<CircularProgress />` from this library as icon for the sake of example but any icon from a react library like "react-icons" should also work fine. Most of the props are similar to `Button` component */
export const IconButton = ({
  /** should be a react element, ideally something imported from "react-icons" */
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
  elevation = false,
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
      elevation={elevation}
      /** useful for creating FAB */
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
