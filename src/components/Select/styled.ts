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
    lg: "40px",
    md: "32px",
    sm: "24px",
    xl: "48px",
  };

  return mapSizeToHeights[props._size];
};

const getFontSize = (props: ThemedStyledProps<StyledSelectProps, any>) => {
  const mapSizeToFontSize: { [key in Size]: string } = {
    lg: "16px",
    md: "14px",
    sm: "12px",
    xl: "18px",
  };

  return mapSizeToFontSize[props._size];
};

const getPadding = (props: ThemedStyledProps<StyledSelectProps, any>) => {
  const mapSizeToPadding: { [key in Size]: string } = {
    lg: "0 40px 0 16px",
    md: "0 40px 0 12px",
    sm: "0 40px 0 8px",
    xl: "0 40px 0 16px",
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
    transform: translate(0, -50%) rotate(135deg);
    border-top: solid 2px ${defaultColors.disabled.dark};
    border-right: solid 2px ${defaultColors.disabled.dark};
    pointer-events: none;
  }
`;

export const StyledSelect = styled.select<StyledSelectProps>`
  width: 100%;
  border-radius: 4px;
  border: solid 2px ${defaultColors.disabled.dark};
  padding: ${getPadding};
  height: ${getHeight};
  font-size: ${getFontSize};
  appearance: none; // hide the arrow
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: ${({ theme }) => theme.colors.primary.main} 0 0 0 1px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
