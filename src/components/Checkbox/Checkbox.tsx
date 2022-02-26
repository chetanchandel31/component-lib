import React from "react";
import { StyledCheckboxContainer } from "./styled";

export const Checkbox = () => {
  return (
    <StyledCheckboxContainer>
      <input type="checkbox" />
      <span className="haki-checkbox" />
    </StyledCheckboxContainer>
  );
};
