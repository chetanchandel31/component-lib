import styled, { ThemedStyledProps } from "styled-components";
import { elevated } from "../../global-styles/global.styles";
import { defaultColors } from "../../theme/theme";
import { CardVariant } from "./Card";

type StyledCardContainerProps = {
  maxWidth: number | undefined;
  variant: CardVariant;
};

type StyledCardActionsContainerProps = {
  justifyContent: "start" | "end" | "center";
};

const getVariant = ({
  variant,
}: ThemedStyledProps<StyledCardContainerProps, any>) =>
  variant === "outlined"
    ? `border: solid 1px ${defaultColors.disabled.main}`
    : elevated;

// styles
export const StyledCardContainer = styled.div<StyledCardContainerProps>`
  border-radius: 4px;
  overflow: hidden;
  max-width: ${({ maxWidth }) => `${maxWidth}px` ?? "none"};
  ${getVariant}
`;

/* card header styles start */
export const StyledCardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const StyledCardAvatarContainer = styled.div`
  margin-right: 1rem;
`;

export const StyledCardHeaderContent = styled.div`
  flex: 1;
`;
/* card header styles end */

export const StyledCardContentContainer = styled.div`
  padding: 1rem;
`;

export const StyledCardActionsContainer = styled.div<StyledCardActionsContainerProps>`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: 0.5rem;
`;
