import React, { CSSProperties, ReactNode } from "react";
import { Colors } from "../../types/types";
import { StyledBadgeContainer, StyledContainer } from "./styled";

export type BadgeVariant = "standard" | "dot";

export type BadgePosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

type BaseBadgeProps = {
  /** the badge will be added relative to this element  */
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
};

export type HakiBadgeProps = {
  /** any valid react child, preferably a small string or number */
  badgeContent?: ReactNode;
  badgePosition?: BadgePosition;
  /** dot variant can be used as a notification that something has changed without giving a count */
  variant?: BadgeVariant;
  color?: Colors;
  invisible?: boolean;
  /** badge automatically hides itself as `badgeContent` becomes 0 but this behaviour can be toggled via this prop */
  showZero?: boolean;
} & BaseBadgeProps;

/** Badge generates a small badge to the top-right of its child(ren). */
export const Badge = ({
  children,
  badgeContent,
  badgePosition = "top-right",
  showZero = false,
  invisible = false,
  color = "primary",
  variant = "standard",
  className,
  style,
}: HakiBadgeProps) => {
  const doHideBecauseZero = !showZero && badgeContent === 0;
  const doHideBecauseNoBadgeContent =
    badgeContent === undefined && variant === "standard";

  const doHideBadgeContent =
    invisible || doHideBecauseZero || doHideBecauseNoBadgeContent;

  return (
    <>
      <StyledContainer>
        {children}
        {!doHideBadgeContent && (
          <StyledBadgeContainer
            className={className}
            style={style}
            color={color}
            variant={variant}
            badgePosition={badgePosition}
          >
            {variant === "standard" && badgeContent}
          </StyledBadgeContainer>
        )}
      </StyledContainer>
    </>
  );
};
