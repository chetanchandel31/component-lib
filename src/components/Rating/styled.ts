import styled, { ThemedStyledProps } from "styled-components";
import { Size } from "../../theme/theme";

type StyledRatingContainerProps = {
  size: Size;
};

type StyledStarProps = {
  selected: boolean;
};

const getSize = ({
  size,
}: ThemedStyledProps<StyledRatingContainerProps, any>) => {
  const sizes: { [key in Size]: string } = {
    sm: "1.125rem",
    md: "1.5rem",
    lg: "1.875rem",
    xl: "2.125rem",
  };

  return sizes[size];
};

export const StyledRatingContainer = styled.div<StyledRatingContainerProps>`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  font-size: ${getSize};
  user-select: none;
`;

export const StyledStar = styled.span<StyledStarProps>`
  color: ${({ selected, theme }) =>
    selected ? "gold" : theme.colors.disabled.main};
  transition: color 0.3s;
`;
