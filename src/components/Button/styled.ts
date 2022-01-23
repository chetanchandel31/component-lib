import styled, { ThemedStyledProps } from "styled-components";
import { defaultColors, Theme } from "../../Providers/theme";
import { Colors, Sizes } from "../../types/types";

type StyledButtonProps = {
  size: Sizes;
  color: Colors;
  fontColor: string;
};

const getBackgroundColor = (
  props: ThemedStyledProps<StyledButtonProps, any>
) => {
  const theme: Theme = props.theme;
  const colors = theme.colors || defaultColors;
  return colors[props.color].main;
};

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 8px;
  border: none;
  background-color: ${getBackgroundColor};
  color: ${(props) => props.fontColor};
  padding: 4px 8px;

  &:hover {
    cursor: pointer;
  }
`;
