import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { ColorName } from "../../theme/theme";
import { StyledClickableArea } from "./styled";

export type ClickableAreaColor = "default" | ColorName;

export type HakiClickableAreaProps = {
  children: ReactNode;
  className?: string;
  color?: ColorName;
  onClick?: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
};

/** make an element appear more clickable */
export const ClickableArea = ({
  children,
  className,
  color = "primary",
  onClick,
  style,
}: HakiClickableAreaProps) => {
  return (
    <StyledClickableArea
      color={color}
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
    </StyledClickableArea>
  );
};
