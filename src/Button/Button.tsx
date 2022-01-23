import React, { FC } from 'react';
import { StyledButton } from './styled';

export interface ButtonProps {
  text: string;
  color?: string;
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};
