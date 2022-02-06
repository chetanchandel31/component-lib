import React, { ReactNode } from "react";
import {
  StyledCardActionsContainer,
  StyledCardAvatarContainer,
  StyledCardContainer,
  StyledCardContentContainer,
  StyledCardHeaderContainer,
  StyledCardHeaderContent,
} from "./styled";
import { Text } from "../Typography/Typography";
import { Image } from "../Image/Image";

export type CardVariant = "outlined" | "elevated";

export type HakiCardProps = {
  children: ReactNode;
  maxWidth?: number;
  variant?: CardVariant;
};

export type HakiCardHeaderProps = {
  title: string;
  subTitle?: string;
  /** The avatar element that will be displayed at the left hand side inside card header */
  avatar?: ReactNode;
  /** ideally a header action button that will be displayed at the right hand side inside card header */
  action?: ReactNode;
};

type HakiCardMediaProps = {
  src: string;
  alt: string;
  height?: number;
};

type HakiCardContentProps = {
  children: ReactNode;
};

type HakiCardActionsProps = {
  children: ReactNode;
  justifyContent?: "start" | "end" | "center";
};

/** A card can be used to display content related to a single subject. Card can consist of card header,  */
export const Card = ({
  children,
  maxWidth,
  variant = "outlined",
}: HakiCardProps) => {
  return (
    <StyledCardContainer maxWidth={maxWidth} variant={variant}>
      {children}
    </StyledCardContainer>
  );
};

Card.Header = ({ action, avatar, subTitle, title }: HakiCardHeaderProps) => {
  return (
    <StyledCardHeaderContainer>
      <StyledCardAvatarContainer>{avatar}</StyledCardAvatarContainer>
      <StyledCardHeaderContent>
        <Text> {title}</Text>
        <Text variant="body2" color="disabled">
          {subTitle}
        </Text>
      </StyledCardHeaderContent>
      <div>{action}</div>
    </StyledCardHeaderContainer>
  );
};

Card.Media = ({ src, alt, height }: HakiCardMediaProps) => {
  return <Image src={src} alt={alt} height={height} width="100%" />;
};

Card.Content = ({ children }: HakiCardContentProps) => {
  return <StyledCardContentContainer>{children}</StyledCardContentContainer>;
};

Card.Actions = ({
  children,
  justifyContent = "start",
}: HakiCardActionsProps) => {
  return (
    <StyledCardActionsContainer justifyContent={justifyContent}>
      {children}
    </StyledCardActionsContainer>
  );
};
