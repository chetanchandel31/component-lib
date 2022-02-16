import React, { MouseEventHandler, ReactNode } from "react";
import { ColorName } from "../../theme/theme";
import { IconButton } from "../IconButton/IconButton";
import { Text } from "../Typography/Typography";
import {
  StyledAlert,
  StyledAlertContainer,
  StyledIconContainer,
} from "./styled";

export type AlertPositionX = "left" | "center" | "right";
export type AlertPositionY = "top" | "middle" | "bottom";

/* props-start */
export type HakiAlertProps = {
  /** alert's position along the x axis */
  alertPositionX?: AlertPositionX;
  /** alert's position along the y axis */
  alertPositionY?: AlertPositionY;
  children?: ReactNode;
  color?: ColorName;
  fullWidth?: boolean;
  /** if this function is passed as prop, a cross icon button will be present on the alert
   *  component and this function will run when that button is clicked
   */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  show?: boolean;
};

export type HakiAlertTitleProps = {
  children?: ReactNode;
};

export type HakiAlertBodyProps = {
  children?: ReactNode;
};
/* props-end */

/** `<Alert.Title />`, `<Alert.Content />` and `onClose` property are there to allow faster development without needing
 * to spend too much time thinking about minor details. But if you need more freedom you can just pass any custom jsx to
 * `<Alert />` as `children` and it should still work fine.
 *  */
export const Alert = ({
  alertPositionX = "left",
  alertPositionY = "bottom",
  children,
  color = "primary",
  fullWidth = false,
  onClose,
  show = false,
}: HakiAlertProps) => {
  if (!show) return null;

  return (
    <StyledAlertContainer
      alertPositionX={alertPositionX}
      alertPositionY={alertPositionY}
    >
      <StyledAlert color={color} fullWidth={fullWidth} onClose={onClose}>
        {children}
        {onClose && (
          <StyledIconContainer>
            <IconButton
              icon="x"
              color={color}
              size="sm"
              circular
              style={{ fontWeight: "400" }}
              onClick={onClose}
            />
          </StyledIconContainer>
        )}
      </StyledAlert>
    </StyledAlertContainer>
  );
};

Alert.Title = ({ children }: HakiAlertTitleProps) => {
  // TODO: better alternative to inline styles
  return (
    <Text weight="semi-bold" style={{ marginBottom: "0.4rem" }}>
      {children}
    </Text>
  );
};

Alert.Body = ({ children }: HakiAlertBodyProps) => {
  return <Text variant="body2">{children}</Text>;
};
