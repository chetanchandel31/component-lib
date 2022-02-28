import React, { CSSProperties, ReactNode } from "react";
import { StyledScrollableArea } from "./styled";

export type HakiScrollableAreaProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** have good looking scrollbar for your elements which stay consistent irrespective of user's OS 😀 */
export const ScrollableArea = ({
  children,
  className,
  style,
}: HakiScrollableAreaProps) => {
  return (
    <StyledScrollableArea className={className} style={style}>
      {children}
    </StyledScrollableArea>
  );
};
