import React, { MouseEventHandler, ReactNode } from "react";
import { ColorName } from "../../theme/theme";
import {
  StyledAlert,
  StyledAlertContainer,
  StyledIconContainer,
} from "./styled";
import { IconButton } from "../IconButton/IconButton";
import { Text } from "../Typography/Typography";

export type AlertDirection = "right" | "left" | "center";

export type AlertPosition = "top" | "bottom" | "middle";

/* props-start */
export type HakiAlertProps = {
  alertDirection?: AlertDirection;
  alertPosition?: AlertPosition;
  children?: ReactNode;
  color?: ColorName;
  fullWidth?: boolean;
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

// TODO: better explanation for passing content as children vs using in built components when we go for mdx

/** `<Alert.Title />`, `<Alert.Content />` and `onClose` property are there to allow faster development without needing
 * to spend too much time thinking about minor details. But if you need more freedom you can just pass any custom jsx to
 * `<Alert />` as `children` and it should still work fine.
 *  */
export const Alert = ({
  alertDirection = "left",
  alertPosition = "bottom",
  children,
  color = "primary",
  fullWidth = false,
  onClose,
  show = false,
}: HakiAlertProps) => {
  if (!show) return null;

  return (
    <StyledAlertContainer
      alertDirection={alertDirection}
      alertPosition={alertPosition}
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

Alert.Actions = ({ children }: HakiAlertBodyProps) => {
  return <Text variant="body2">{children}</Text>;
};
