import React, { MouseEventHandler, ReactNode } from "react";
import { StyledBackdrop } from "./styled";

type BackdropProps = {
  children?: ReactNode;
  blur?: number;
  show?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

/** The backdrop component will add a dimmed layer as background. It'll try to completely cover the nearest non-static parent element. Any children passed to it will be aligned to the center by default. */
export const Backdrop = ({
  children,
  blur = 0,
  show = false,
  onClick,
}: BackdropProps) => {
  return (
    <>
      {show && (
        <StyledBackdrop onClick={onClick} blur={blur}>
          {children}
        </StyledBackdrop>
      )}
    </>
  );
};
