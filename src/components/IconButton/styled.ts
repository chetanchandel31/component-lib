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
      return "48px";
    case "lg":
      return "40px";
    case "md":
      return "32px";
    case "sm":
      return "24px";
    default:
      return "32px";
  }
};

export const StyledIconButton = styled(Button)<StyledIconButtonProps>`
  height: ${getButtonDimension};
  width: ${getButtonDimension};
  padding: 0;
  ${(props) => (props.circular ? `border-radius: 50%;` : ``)}
`;
