import React, { CSSProperties, MouseEventHandler, useState } from "react";
import { StyledContainer, StyledFallback, StyledImage } from "./styled";

export type AvatarVariant = "circular" | "rounded" | "square";

export type HakiAvatarProps = {
  src: string;
  alt: string;
  variant?: AvatarVariant;
  bgColor?: string;
  children?: string;
  size?: number;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
};

/** Image avatars can be created by passing `src` and `alt` props. Any string passed as children will be used as fallback. In absence of `children`, first alphabet of `alt` will be used as fallback. */
export const Avatar = ({
  children,
  alt,
  src,
  size = 40,
  bgColor = "#ff5722",
  variant = "circular",
  onClick,
  className,
  style,
}: HakiAvatarProps) => {
  const [doShowFallback, setDoShowFallback] = useState(false);

  return (
    <StyledContainer
      className={className}
      style={style}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {doShowFallback ? (
        <StyledFallback bgColor={bgColor}>
          {children || alt[0] || "H"}
        </StyledFallback>
      ) : (
        <StyledImage
          src={src}
          alt={alt}
          onError={() => setDoShowFallback(true)}
        />
      )}
    </StyledContainer>
  );
};
