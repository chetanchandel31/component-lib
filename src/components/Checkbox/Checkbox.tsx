import React, { ChangeEventHandler, CSSProperties } from "react";
import { ColorName } from "../../theme/theme";
import { StyledCheckboxContainer } from "./styled";

export type HakiCheckboxProps = {
  color?: ColorName;
  checked?: boolean | undefined;
  className?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: "md" | "lg";
  style?: CSSProperties;
};

// TODO: disabled
export const Checkbox = ({
  checked = undefined,
  className,
  color = "primary",
  name,
  onChange,
  size = "md",
  style,
}: HakiCheckboxProps) => {
  return (
    <StyledCheckboxContainer
      color={color}
      className={className}
      size={size}
      style={style}
    >
      <input
        checked={checked}
        name={name}
        onChange={onChange}
        type="checkbox"
      />
      <span className="haki-checkbox" />
    </StyledCheckboxContainer>
  );
};
