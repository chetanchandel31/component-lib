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
  glass: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
};

/* helpers start */
const getAlertPositionStyles = ({
  alertPositionY,
}: ThemedStyledProps<StyledAlertContainerProps, any>) => {
  const mapPositionToStyles: { [key in AlertPositionY]: string } = {
    bottom: `
        bottom: 1rem;
    `,
    middle: `
        top: 50%;
        transform: translate(0, -50%);
    `,
    top: `
        top: 1rem;
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
  right: 1rem;
  left: 1rem;
  ${getAlertPositionStyles}
  z-index: 2;

  display: flex;
  justify-content: ${getAlertDirection};
  pointer-events: none;

  @media (max-width: 40em) {
    right: 0.5rem;
    left: 0.5rem;
  }

  /* mount & unmount animations */
  animation: mount-alert 0.4s forwards;

  @keyframes mount-alert {
    0% {
      transform: translate(100vw);
    }
    90% {
      transform: translate(-20px);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes unmount-alert {
    from {
      transform: translate(0);
    }
    to {
      transform: translate(100vw);
    }
  }
`;

export const StyledAlert = styled.div<StyledAlertProps>`
  position: relative;

  color: ${({ theme, color }) => theme.colors[color].dark};
  background-color: ${({ theme, color }) => theme.colors[color].light}${({ glass }) => (glass ? `99` : ``)};
  ${({ glass }) => (glass ? `backdrop-filter: blur(5px);` : ``)}

  border: solid 2px ${({ theme, color }) => theme.colors[color].dark};
  border-radius: 2px;

  padding: 1rem ${({ onClose }) => (onClose ? `2.125rem` : `0.5rem`)} 1rem
    0.5rem;
  ${({ fullWidth }) => (fullWidth ? `width: 100%;` : ``)}
  pointer-events: auto;
`;

export const StyledIconContainer = styled.span`
  display: inline-flex;
  position: absolute;
  top: 0.375rem;
  right: 0.5rem;
`;
