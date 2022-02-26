import styled from "styled-components";

export const StyledCheckboxContainer = styled.label`
  display: inline-flex;
  /* hide input */
  & > input[type = checkbox] {
    display: none;
  }
  /* use this span as box instead */
  & > .haki-checkbox {
    height: 18px;
    width: 18px;
    position: relative;
    border: solid 2px ${(props) => props.theme.colors.primary.main};
    border-radius: 4px;
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
    transform: rotate(-45deg);

    position: absolute;
    top: 2px;
    left: 0;
  }
  /* what to do when checked */
  & > input[type = checkbox]:checked + .haki-checkbox {
    background-color: ${(props) => props.theme.colors.primary.main};
  }

  & > input[type = checkbox]:checked + .haki-checkbox::after {
    content: "";
  }
`;