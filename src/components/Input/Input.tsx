import React, { ChangeEventHandler, CSSProperties } from "react";
import { Size } from "../../theme/theme";
import { StyledInput, StyledInputContainer } from "./styled";
import { Text } from "../Typography/Typography";

type BaseInputProps = {
  className?: string;
  disabled?: boolean;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "password" | "number" | "date"; // HTMLInputTypeAttribute;
  value?: any;
};

export type HakiInputProps = {
  size?: Size;
  fullWidth?: boolean;
  /** input state when user enters invalid input */
  error?: boolean;
  /** an optional small hint about error */
  errorMessage?: string;
} & BaseInputProps;

export const Input = ({
  className,
  disabled = false,
  error = false,
  errorMessage,
  size = "md",
  fullWidth = false,
  name,
  onChange,
  placeholder,
  required = false,
  style,
  type = "text",
  value,
}: HakiInputProps) => {
  return (
    <StyledInputContainer fullWidth={fullWidth}>
      <StyledInput
        className={className}
        disabled={disabled}
        error={error}
        placeholder={placeholder}
        _size={size}
        name={name}
        required={required}
        style={style}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && (
        <Text className="error-text" color="danger">
          {errorMessage}
        </Text>
      )}
    </StyledInputContainer>
  );
};

// allow text to be span using `as`. make an input container , position error text relative to it
// TODO: autoFocus: boolean: If true, the input element is focused during the first mount.
