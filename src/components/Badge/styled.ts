import styled, { ThemedStyledProps } from "styled-components";
import { defaultColors, Theme } from "../../Providers/theme";
import { Colors } from "../../types/types";

type StyledBadgeContainerProps = {
  color: Colors;
  variant: "standard" | "dot";
};

const getColors = (
  props: ThemedStyledProps<StyledBadgeContainerProps, any>
) => {
  const theme: Theme = props.theme;
  const colors = theme.colors || defaultColors;

  return `
      color: ${colors[props.color].contrastText};
      background-color: ${colors[props.color].main};
    `;
};

export const StyledContainer = styled.span`
  display: inline-flex;
  position: relative;
`;

export const StyledBadgeContainer = styled.span<StyledBadgeContainerProps>`
  min-height: 20px;
  min-width: 20px;
  padding: 0 6px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.75rem;
  ${(props) => {
    if (props.variant === "dot")
      return `
        min-height: 8px;
        min-width: 8px;
        padding: 0;
      `;
    return ``;
  }}
  ${getColors}

  display: inline-flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);
`;
