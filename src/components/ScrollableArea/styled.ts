import styled from "styled-components";
import { defaultColors } from "../../theme/theme";

export const StyledScrollableArea = styled.div`
  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${defaultColors.disabled.light};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${defaultColors.disabled.main};
    border-radius: 5rem;
  }
`;
