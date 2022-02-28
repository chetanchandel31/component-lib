import React, { CSSProperties, ReactNode } from "react";
import { StyledScrollableArea } from "./styled";

export type ScrollableAreaProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const ScrollableArea = ({
  children,
  className,
  style,
}: ScrollableAreaProps) => {
  return (
    <StyledScrollableArea className={className} style={style}>
      {children}
    </StyledScrollableArea>
  );
};
