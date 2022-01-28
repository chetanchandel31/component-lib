import styled, { ThemedStyledProps } from "styled-components";
import { Colors, defaultColors, Sizes, Theme } from "../../theme/theme";

import { ButtonVariants } from "./Button";

type StyledButtonProps = {
  size: Sizes;
  color: Colors;
  variant: ButtonVariants;
};

// helpers
const getColors = (props: ThemedStyledProps<StyledButtonProps, any>) => {
  const theme: Theme = props.theme;
  const colors = theme.colors || defaultColors;

  if (props.variant === "filled") {
    return `
    color: ${colors[props.color].contrastText};
    background-color: ${colors[props.color].main};
    &:hover {
      background-color: ${colors[props.color].dark};
    }
  `;
  }

  return `
    background-color: ${colors[props.color].contrastText};
    color: ${colors[props.color].main};
    &:hover {
      background-color: ${colors[props.color].light};
    }
  `;
};

const getPadding = (props: ThemedStyledProps<StyledButtonProps, any>) => {
  switch (props.size) {
    case "xl":
      return "0 24px";
    case "lg":
      return "0 16px";
    case "sm":
      return "0 8px";
    default:
      return "0 12px";
  }
};

const getHeight = (props: ThemedStyledProps<StyledButtonProps, any>) => {
  switch (props.size) {
    case "xl":
      return "48px";
    case "lg":
      return "40px";
    case "sm":
      return "24px";
    default:
      return "32px";
  }
};

// styles
export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 600;
  padding: ${getPadding};
  height: ${getHeight};
  border: ${(props) =>
    props.variant === "outlined"
      ? `solid 1px ${props.theme.colors[props.color].main}`
      : "none"};
  ${getColors}

  &:hover {
    cursor: pointer;
  }
`;
