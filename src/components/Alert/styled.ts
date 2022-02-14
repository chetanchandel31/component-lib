import { MouseEventHandler } from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { ColorName } from "../../theme/theme";
import { AlertPositionY, AlertPositionX } from "./Alert";

type StyledAlertContainerProps = {
  alertPositionY: AlertPositionY;
  alertPositionX: AlertPositionX;
};

type StyledAlertProps = {
  color: ColorName;
  fullWidth: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
};

/* helpers start */
const getAlertPositionStyles = ({
  alertPositionY,
}: ThemedStyledProps<StyledAlertContainerProps, any>) => {
  const mapPositionToStyles: { [key in AlertPositionY]: string } = {
    bottom: `
        bottom: 16px;
    `,
    middle: `
        top: 50%;
        transform: translate(0, -50%);
    `,
    top: `
        top: 16px;
    `,
  };
  return mapPositionToStyles[alertPositionY];
};

const getAlertDirection = ({
  alertPositionX,
}: ThemedStyledProps<StyledAlertContainerProps, any>) => {
  const mapAlertDirectionToDirection: { [key in AlertPositionX]: string } = {
    center: "center",
    left: "start",
    right: "end",
  };
  return mapAlertDirectionToDirection[alertPositionX];
};
/* helpers end */

/* styles */
export const StyledAlertContainer = styled.div<StyledAlertContainerProps>`
  position: fixed;
  right: 16px;
  left: 16px;
  ${getAlertPositionStyles}
  z-index: 2;

  display: flex;
  justify-content: ${getAlertDirection};
  pointer-events: none;

  @media (max-width: 40em) {
    right: 8px;
    left: 8px;
  }
`;

export const StyledAlert = styled.div<StyledAlertProps>`
  position: relative;

  color: ${({ theme, color }) => theme.colors[color].dark};
  background-color: ${({ theme, color }) => theme.colors[color].light};
  border: solid 2px ${({ theme, color }) => theme.colors[color].dark};
  border-radius: 2px;

  padding: 16px ${({ onClose }) => (onClose ? `34px` : `8px`)} 16px 8px;
  ${({ fullWidth }) => (fullWidth ? `width: 100%;` : ``)}
  pointer-events: auto;
`;

export const StyledIconContainer = styled.span`
  display: inline-flex;
  position: absolute;
  top: 6px;
  right: 8px;
`;
