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

/** Make an element appear more clickable. Can be used on menu items, list items etc. as needed. */
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
