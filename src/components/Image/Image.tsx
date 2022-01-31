import React, { CSSProperties, MouseEventHandler, useState } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import { StyledContainer, StyledPreviewContainer } from "./styled";

export type ImageProps = {
  src: string;
  alt: string;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
};

export const Image = ({ src, alt, style, className, onClick }: ImageProps) => {
  const [doShowBackdrop, setDoShowBackdrop] = useState(false);

  const handleShowBackdrop = () => setDoShowBackdrop(true);
  const handleHideBackdrop = () => setDoShowBackdrop(false);

  const [doShowPreview, setDoShowPreview] = useState(false);

  const handleToggleShowPreview = () => setDoShowPreview((prev) => !prev);

  return (
    <>
      <StyledContainer
        onMouseEnter={handleShowBackdrop}
        onMouseLeave={handleHideBackdrop}
      >
        <img
          src={src}
          alt={alt}
          style={style}
          className={className}
          onClick={onClick}
        />

        <Backdrop show={doShowBackdrop} onClick={handleToggleShowPreview}>
          <small style={{ color: "white" }}>Preview</small>
        </Backdrop>
      </StyledContainer>

      {doShowPreview && (
        <StyledPreviewContainer blur={4} onClick={handleToggleShowPreview}>
          <img src={src} alt={alt} style={{ height: "100%" }} />
        </StyledPreviewContainer>
      )}
    </>
  );
};
