import { MouseEventHandler } from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { ColorName, Theme } from "../../theme/theme";
import { ChipSize, ChipVariant } from "./Chip";

type StyledChipProps = {
  color: ColorName;
  onClose?: MouseEventHandler<HTMLSpanElement>;
  size: ChipSize;
  variant: ChipVariant;
};

type StyledCrossButtonProps = {
  color: ColorName;
  size: ChipSize;
  variant: ChipVariant;
};

/* helpers start */
const getColors = (props: ThemedStyledProps<StyledChipProps, any>) => {
  const theme: Theme = props.theme;
  const color = props.color;
  const variant = props.variant;

  if (variant === "filled") {
    return `
    color: ${theme.colors[color].contrastText};
    background-color: ${theme.colors[color].main};
  `;
  }

  return `
    color: ${theme.colors[color].main};
  `;
};

const getChipColors = (
  props: ThemedStyledProps<StyledCrossButtonProps, any>
) => {
  const theme: Theme = props.theme;
  const color = props.color;

  if (props.variant === "outlined")
    return `
      background-color: ${theme.colors[color].main};
      color: ${theme.colors[color].light};
    `;

  return `
    background-color: ${theme.colors[color].light};
    color: ${theme.colors[color].main};
  `;
};

const setPaddingForCloseButton = ({
  onClose,
  size,
}: ThemedStyledProps<StyledChipProps, any>) => {
  if (!onClose) return ``;

  return size === "md" ? `padding-right: 5px;` : `padding-right: 3px;`;
};
/* helpers end */

/* styles */
export const StyledChip = styled.span<StyledChipProps>`
  cursor: default;
  display: inline-flex;
  align-items: center;
  border: solid 1px;
  border-color: ${({ color, theme }) => theme.colors[color].main};
  border-radius: 56px;
  height: ${({ size }) => (size === "md" ? `32px` : `24px`)};
  padding: 0 ${({ size }) => (size === "md" ? `12px` : `8px`)};

  ${getColors}
  ${setPaddingForCloseButton}
`;

export const StyledCrossButton = styled.span<StyledCrossButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 0;

  cursor: pointer;
  font-size: ${({ size }) => (size === "md" ? `12px` : `10px`)};
  font-weight: 700;
  margin-left: 6px;

  border: solid 1px white;
  border-radius: 50%;

  height: ${({ size }) => (size === "md" ? `18px` : `14px`)};
  width: ${({ size }) => (size === "md" ? `18px` : `14px`)};

  ${getChipColors}

  &:hover {
    filter: brightness(104%);
  }
  &:active {
    filter: brightness(98%);
  }
`;
