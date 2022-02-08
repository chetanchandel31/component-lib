import styled, { ThemedStyledProps } from "styled-components";
import { Size } from "../../theme/theme";

type StyledInputProps = {
  _size: Size;
  error: boolean;
};

type StyledInputContainerProps = {
  fullWidth: boolean;
};

/* helpers start */
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
/* helpers end */

export const StyledInputContainer = styled.span<StyledInputContainerProps>`
  display: inline-flex;
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? `100%` : `auto`)};

  & > .error-text {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(0, 100%);
    font-size: 9px;
    margin-left: 2px;
  }
`;

export const StyledInput = styled.input<StyledInputProps>`
  padding: ${getPadding};
  height: ${getHeight};
  width: 100%;
  outline: none;
  border-radius: 0.25rem;
  border: solid 2px
    ${({ theme, error }) =>
      error ? theme.colors.danger.main : theme.colors.disabled.main};
  font-size: ${getFontSize};

  &:hover {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.danger.dark : theme.colors.disabled.dark};
  }
  &:focus {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.danger.main : theme.colors.primary.main};
    box-shadow: ${({ theme, error }) =>
        error ? theme.colors.danger.main : theme.colors.primary.main}
      0 0 0 1px;
  }
`;
