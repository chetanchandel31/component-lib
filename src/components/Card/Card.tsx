import React, { CSSProperties, ReactNode } from "react";
import { Image } from "../Image/Image";
import { Text } from "../Typography/Typography";
import {
  StyledCardActionsContainer,
  StyledCardAvatarContainer,
  StyledCardContainer,
  StyledCardContentContainer,
  StyledCardHeaderContainer,
  StyledCardHeaderContent,
} from "./styled";

export type CardVariant = "outlined" | "elevated";

export type HakiCardProps = {
  children: ReactNode;
  maxWidth?: number;
  style?: CSSProperties;
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

// TODO: mdx docs
/** A card can be used to display content related to a single subject. Card can consist of card header, card media, card content and card actions  */
export const Card = ({
  children,
  maxWidth,
  style,
  variant = "outlined",
  ...restProps
}: HakiCardProps) => {
  return (
    <StyledCardContainer
      maxWidth={maxWidth}
      style={style}
      variant={variant}
      {...restProps}
    >
      {children}
    </StyledCardContainer>
  );
};

Card.Header = ({ action, avatar, subTitle, title }: HakiCardHeaderProps) => {
  return (
    <StyledCardHeaderContainer>
      <StyledCardAvatarContainer>{avatar}</StyledCardAvatarContainer>
      <StyledCardHeaderContent>
        <Text>{title}</Text>
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
