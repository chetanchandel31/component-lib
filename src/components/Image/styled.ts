import styled from "styled-components";
import { StyledBackdrop } from "../Backdrop/styled";

export const StyledContainer = styled.span`
  display: inline-flex;
  position: relative;

  cursor: pointer;
  user-select: none;
`;

export const StyledPreviewContainer = styled(StyledBackdrop)`
  position: fixed;
`;
