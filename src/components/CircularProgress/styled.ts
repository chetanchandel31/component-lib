import styled from "styled-components";
import { ColorName } from "../../theme/theme";

export type StyledCircularProgressProps = {
  size: number;
  color: ColorName;
  thickness: number;
};

export const StyledCircularProgress = styled.div<StyledCircularProgressProps>`
  border-radius: 50%;
  border: solid ${(props) => props.theme.colors[props.color].light};
  border-width: ${(props) => props.thickness}px;
  border-top: solid ${(props) => props.theme.colors[props.color].main};
  border-top-width: ${(props) => props.thickness}px;

  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;

  animation: animate 0.8s infinite linear;

  @keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
