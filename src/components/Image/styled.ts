import styled from "styled-components";
import { StyledBackdrop } from "../Backdrop/styled";
import { ImageDimensionProps } from "./Image";

type StyledImageProps = ImageDimensionProps;

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
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`;
