import React, {
  MouseEventHandler,
  ReactNode,
  useState,
  useEffect,
} from "react";
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
  /** have glassy background for alert ✨ */
  glass?: boolean;
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

/** `<Alert.Title />`, `<Alert.Body />` and `onClose` property are there to allow faster development without needing
 * to spend too much time thinking about minor details. But if you need more freedom you can just pass any custom jsx to
 * `<Alert />` as `children` and it should still work fine.
 *  */
export const Alert = ({
  alertPositionX = "left",
  alertPositionY = "bottom",
  children,
  color = "primary",
  fullWidth = false,
  glass = false,
  onClose,
  show = false,
}: HakiAlertProps) => {
  /* an intermediary state to toggle mount/unmount just so we could delay the unmount to run exit animation */
  const [doShow, setDoShow] = useState(show);
  const [animation, setAnimation] = useState("mount-alert 0.4s forwards");
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (show) {
      setDoShow(show);
      setAnimation("mount-alert 0.4s forwards");
    } else {
      timeoutId = setTimeout(() => setDoShow(show), 1000);
      setAnimation("unmount-alert 0.4s forwards");
    }

    return () => clearTimeout(timeoutId as NodeJS.Timeout);
  }, [show]);

  if (!doShow) return null;

  return (
    <StyledAlertContainer
      alertPositionX={alertPositionX}
      alertPositionY={alertPositionY}
      style={{ animation }}
    >
      <StyledAlert
        color={color}
        fullWidth={fullWidth}
        glass={glass}
        onClose={onClose}
      >
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
