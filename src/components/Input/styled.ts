import styled, { ThemedStyledProps } from "styled-components";
import { Size } from "../../theme/theme";

type StyledInputProps = {
  _size: Size;
  fullWidth: boolean;
};

const getHeight = (props: ThemedStyledProps<StyledInputProps, any>) => {
  const mapSizeToHeights: { [key in Size]: string } = {
    lg: "40px",
    md: "32px",
    sm: "24px",
    xl: "48px",
  };

  return mapSizeToHeights[props._size];
};

const getFontSize = (props: ThemedStyledProps<StyledInputProps, any>) => {
  const mapSizeToFontSize: { [key in Size]: string } = {
    lg: "16px",
    md: "14px",
    sm: "12px",
    xl: "18px",
  };

  return mapSizeToFontSize[props._size];
};

const getPadding = (props: ThemedStyledProps<StyledInputProps, any>) => {
  const mapSizeToPadding: { [key in Size]: string } = {
    lg: "0 16px",
    md: "0 12px",
    sm: "0 8px",
    xl: "0 16px",
  };

  return mapSizeToPadding[props._size];
};

export const StyledInput = styled.input<StyledInputProps>`
  padding: ${getPadding};
  height: ${getHeight};
  width: ${({ fullWidth }) => (fullWidth ? `100%` : `auto`)};
  outline: none;
  border-radius: 0.25rem;
  border: solid 2px ${({ theme }) => theme.colors.disabled.main};
  font-size: ${getFontSize};

  &:hover {
    border-color: ${({ theme }) => theme.colors.disabled.dark};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: ${({ theme }) => theme.colors.primary.main} 0 0 0 1px;
  }
`;
