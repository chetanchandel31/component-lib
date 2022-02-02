import styled from "styled-components";
import { StyledBackdrop } from "../Backdrop/styled";

type StyledImageProps = {
  height?: string;
  width?: string;
  minHeight?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
};

export const StyledContainer = styled.span<StyledImageProps>`
  display: inline-flex;
  position: relative;

  cursor: pointer;
  user-select: none;

  height: ${(props) => props.height ?? "auto"};
  width: ${(props) => props.width ?? "auto"};
  min-height: ${(props) => props.minHeight ?? 0};
  min-width: ${(props) => props.minWidth ?? 0};
  max-height: ${(props) => props.maxHeight ?? "none"};
  max-width: ${(props) => props.maxWidth ?? "none"};
`;

export const StyledPreviewContainer = styled(StyledBackdrop)`
  position: fixed;
  z-index: 999;
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`;
