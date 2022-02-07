import React, {
  ChangeEventHandler,
  CSSProperties,
  HTMLInputTypeAttribute,
} from "react";
import { Size } from "../../theme/theme";
import { StyledInput } from "./styled";

type BaseInputProps = {
  className?: string;
  disabled?: boolean;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  value?: any;
};

type HakiInputProps = {
  size?: Size;
  fullWidth?: boolean;
} & BaseInputProps;

export const Input = ({
  className,
  disabled,
  size = "md",
  fullWidth = false,
  name,
  onChange,
  placeholder,
  required,
  style,
  type,
  value,
}: HakiInputProps) => {
  return (
    <StyledInput
      className={className}
      placeholder={placeholder}
      _size={size}
      fullWidth={fullWidth}
      name={name}
      required={required}
      style={style}
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
};

// TODO: autoFocus: boolean: If true, the input element is focused during the first mount.
