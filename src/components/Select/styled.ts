import styled, { ThemedStyledProps } from "styled-components";
import { defaultColors, Size } from "../../theme/theme";

type StyledSelectProps = {
  _size: Size;
};

type StyledSelectContainerProps = {
  fullWidth: boolean;
  _size: Size;
};

/* helpers start */
const getHeight = (props: ThemedStyledProps<StyledSelectProps, any>) => {
  const mapSizeToHeights: { [key in Size]: string } = {
    lg: "2.5rem",
    md: "2rem",
    sm: "1.5rem",
    xl: "3rem",
  };

  return mapSizeToHeights[props._size];
};

const getFontSize = (props: ThemedStyledProps<StyledSelectProps, any>) => {
  const mapSizeToFontSize: { [key in Size]: string } = {
    lg: "1rem",
    md: "0.875rem",
    sm: "0.75rem",
    xl: "1.125rem",
  };

  return mapSizeToFontSize[props._size];
};

const getPadding = (props: ThemedStyledProps<StyledSelectProps, any>) => {
  const mapSizeToPadding: { [key in Size]: string } = {
    lg: "0 2.5rem 0 1rem",
    md: "0 2.5rem 0 0.75rem",
    sm: "0 2.5rem 0 0.5rem",
    xl: "0 2.5rem 0 1rem",
  };

  return mapSizeToPadding[props._size];
};
/* helpers end */

// styles
export const StyledSelectContainer = styled.span<StyledSelectContainerProps>`
  display: inline-flex;
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? `100%` : `202px`)};

  &:after {
    content: "";
    height: ${({ _size }) => (_size === "sm" ? `0.25rem` : `0.5rem`)};
    width: ${({ _size }) => (_size === "sm" ? `0.25rem` : `0.5rem`)};
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translate(0, -75%) rotate(135deg);
    border-top: solid 2px ${defaultColors.disabled.dark};
    border-right: solid 2px ${defaultColors.disabled.dark};
    pointer-events: none;
  }
`;

export const StyledSelect = styled.select<StyledSelectProps>`
  width: 100%;
  border-radius: 4px;
  border: solid 2px ${defaultColors.disabled.main};
  padding: ${getPadding};
  height: ${getHeight};
  font-size: ${getFontSize};
  appearance: none; // hide the arrow
  outline: none;
  transition: border-color 0.4s, box-shadow 0.4s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: ${({ theme }) => theme.colors.primary.main} 0 0 0 1px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
