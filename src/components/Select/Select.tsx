import React, { ChangeEventHandler, CSSProperties, ReactNode } from "react";
import { Size } from "../../theme/theme";
import { StyledSelect, StyledSelectContainer } from "./styled";

export type HakiSelectProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  /** take full width of parent element */
  fullWidth?: boolean;
  name?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  size?: Size;
  style?: CSSProperties;
  value?: any;
};

export const Select = ({
  children,
  className,
  disabled = false,
  fullWidth = false,
  name,
  onChange,
  size = "md",
  style,
  value,
}: HakiSelectProps) => {
  return (
    <>
      <StyledSelectContainer fullWidth={fullWidth} _size={size}>
        <StyledSelect
          _size={size}
          className={className}
          disabled={disabled}
          name={name}
          onChange={onChange}
          style={style}
          value={value}
        >
          {children}
        </StyledSelect>
      </StyledSelectContainer>
    </>
  );
};
