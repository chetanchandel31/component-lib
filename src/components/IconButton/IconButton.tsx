import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { CircularProgress } from "../..";
import { ColorName, Size } from "../../theme/theme";
import { ButtonVariant } from "../Button/Button";
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
  rounded?: boolean;
} & BaseIconButtonProps;

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
  rounded = false,
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
      rounded={rounded}
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
