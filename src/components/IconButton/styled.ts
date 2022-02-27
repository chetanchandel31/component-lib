import styled, { ThemedStyledProps } from "styled-components";
import { Size } from "../../theme/theme";
import { Button } from "../Button/Button";

type StyledIconButtonProps = {
  _size: Size;
  circular: boolean;
};

const getButtonDimension = (
  props: ThemedStyledProps<StyledIconButtonProps, any>
) => {
  switch (props._size) {
    case "xl":
      return "3rem";
    case "lg":
      return "2.5rem";
    case "md":
      return "2rem";
    case "sm":
      return "1.5rem";
    default:
      return "2rem";
  }
};

export const StyledIconButton = styled(Button)<StyledIconButtonProps>`
  height: ${getButtonDimension};
  width: ${getButtonDimension};
  padding: 0;
  ${(props) => (props.circular ? `border-radius: 50%;` : ``)}
`;
