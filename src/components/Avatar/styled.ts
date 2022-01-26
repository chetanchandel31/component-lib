import styled from "styled-components";
import { AvatarVariant } from "./Avatar";

type StyledContainerProps = {
  variant: AvatarVariant;
  size: number;
};

type StyledFallbackProps = {
  bgColor: string;
};

export const StyledContainer = styled.span<StyledContainerProps>`
  display: inline-flex;
  overflow: hidden;
  color: #fff;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: ${(props) =>
    props.variant === "circular"
      ? "50%"
      : props.variant === "rounded"
      ? "4px"
      : "0"};
`;

export const StyledFallback = styled.span<StyledFallbackProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};

  height: 100%;
  width: 100%;
`;

export const StyledImage = styled.img`
  display: inline-flex;
  height: 100%;
  width: 100%;
`;
