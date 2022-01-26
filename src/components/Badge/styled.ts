import styled, { ThemedStyledProps } from "styled-components";
import { defaultColors, Theme } from "../../Providers/theme";
import { Colors } from "../../types/types";
import { BadgePosition } from "./Badge";

type StyledBadgeContainerProps = {
  color: Colors;
  badgePosition: BadgePosition;
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

const getPosition = (
  props: ThemedStyledProps<StyledBadgeContainerProps, any>
) => {
  switch (props.badgePosition) {
    case "top-left":
      return `
        top: 0;
        left: 0;
        transform: translate(-40%, -40%);
      `;

    case "bottom-left":
      return `
        bottom: 0;
        left: 0;
        transform: translate(-40%, 40%);
      `;

    case "bottom-right":
      return `
        bottom: 0;
        right: 0;
        transform: translate(40%, 40%);
      `;

    default:
      return `
        top: 0;
        right: 0;
        transform: translate(40%, -40%);
      `;
  }
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
  ${getPosition}
`;
