import styled from "styled-components";
import { ColorName } from "../../theme/theme";

export type StyledCheckboxContainerProps = {
  color: ColorName;
  size: "md" | "lg";
};

export const StyledCheckboxContainer = styled.label<StyledCheckboxContainerProps>`
  display: inline-flex;
  cursor: pointer;

  /* hide input */
  & > input[type="checkbox"] {
    display: none;
  }
  /* use this span as box instead */
  & > .haki-checkbox {
    height: ${({ size }) => (size === "md" ? `1.125rem` : `1.5rem`)};
    width: ${({ size }) => (size === "md" ? `1.125rem` : `1.5rem`)};
    position: relative;
    border: solid 3px ${({ color, theme }) => theme.colors[color].main};
    border-radius: 4px;
    transition: background-color 0.2s;
  }
  /* the checkmark */
  & > .haki-checkbox::after {
    content: none;
    display: block;
    height: 4px;
    width: 9px;
    border-left: solid 2px;
    border-bottom: solid 2px;
    border-color: #fff;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%) rotate(-45deg);
  }
  /* what to do when checked */
  & > input[type="checkbox"]:checked + .haki-checkbox {
    background-color: ${({ color, theme }) => theme.colors[color].main};
  }

  & > input[type="checkbox"]:checked + .haki-checkbox::after {
    content: "";
  }
`;
