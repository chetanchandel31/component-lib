import React, { MouseEventHandler, ReactNode } from "react";
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
