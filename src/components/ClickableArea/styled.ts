import styled from "styled-components";
import { ColorName } from "../../theme/theme";

type StyledClickableAreaProps = {
  color: ColorName;
};

export const StyledClickableArea = styled.div<StyledClickableAreaProps>`
  display: inline-flex;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.4s, filter 0.4s;
  user-select: none;

  &:hover {
    background-color: ${({ color, theme }) => theme.colors[color].light};
  }
  &:active {
    background-color: ${({ color, theme }) => theme.colors[color].light};
    filter: brightness(95%);
  }
`;
