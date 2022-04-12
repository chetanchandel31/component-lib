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
  placeholder?: string;
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
  placeholder = "Select your option",
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
          defaultValue=""
          name={name}
          onChange={onChange}
          style={style}
          value={value}
        >
          <option disabled style={{ display: "none" }} value="">
            {placeholder}
          </option>
          {children}
        </StyledSelect>
      </StyledSelectContainer>
    </>
  );
};
