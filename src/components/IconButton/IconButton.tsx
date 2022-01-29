import React, { ReactNode } from "react";
import { Size } from "../../theme/theme";
import { StyledIconButton } from "./styled";

type HakiIconButtonProps = {
  children: ReactNode;
  size: Size;
};

const IconButton = ({ children, size = "md" }: HakiIconButtonProps) => {
  return (
    <StyledIconButton _size={size} size="sm">
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
