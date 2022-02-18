import React, {
  MouseEventHandler,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { StyledBackdrop } from "./styled";

export type HakiBackdropProps = {
  children?: ReactNode;
  blur?: number;
  show?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

/**
 * The backdrop component will add a dimmed layer as background. It'll try to completely cover the nearest
 * non-static parent element. Any children passed to it will be aligned to the center by default. `show`
 * prop can be used to toggle backdrop's visibility.
 * */
export const Backdrop = ({
  children,
  blur = 0,
  show = false,
  onClick,
}: HakiBackdropProps) => {
  /* an intermediary state to toggle mount/unmount just so we could delay the unmount to run exit animation */
  const [doShow, setDoShow] = useState(show);
  const [animation, setAnimation] = useState("mount 0.5s forwards");
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (show) {
      setDoShow(show);
      setAnimation("mount 0.5s forwards");
    } else {
      timeoutId = setTimeout(() => setDoShow(show), 1000);
      setAnimation("unmount 0.5s forwards");
    }

    return () => clearTimeout(timeoutId as NodeJS.Timeout);
  }, [show]);

  return (
    <>
      {doShow && (
        <StyledBackdrop onClick={onClick} blur={blur} style={{ animation }}>
          {children}
        </StyledBackdrop>
      )}
    </>
  );
};
