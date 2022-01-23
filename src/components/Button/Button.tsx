import React, {
  forwardRef,
  ReactNode,
  // RefObject,
} from "react";
import { Sizes } from "../../types/types";
import { StyledButton } from "./styled";

export interface ButtonProps {
  children: ReactNode;
  size: Sizes;
}

export const Button = (props: ButtonProps) => {
  const { children, size } = props;
  console.log(size);

  return <StyledButton>{children}</StyledButton>;
};

export const ButtonTwo = forwardRef(
  (_props: { size: "lg" | "md" }, ref: any) => {
    return <button ref={ref}>2</button>;
  }
);
