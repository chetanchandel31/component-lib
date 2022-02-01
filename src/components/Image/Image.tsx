import React, { CSSProperties, MouseEventHandler, useState } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import { StyledContainer, StyledImage, StyledPreviewContainer } from "./styled";

export type ImageDimensionProps = {
  /** should be suffixed by a valid css unit eg "90px", "90em", "90%", "90vh" */
  height?: string;
  /** should be suffixed by a valid css unit eg "90px", "90em", "90%", "90vw" */
  width?: string;
  /** should be suffixed by a valid css unit eg "90px", "90em", "90%", "90vh" */
  minHeight?: string;
  /** should be suffixed by a valid css unit eg "90px", "90em", "90%", "90vw" */
  minWidth?: string;
  /** should be suffixed by a valid css unit eg "90px", "90em", "90%", "90vh" */
  maxHeight?: string;
  /** should be suffixed by a valid css unit eg "90px", "90em", "90%", "90vw" */
  maxWidth?: string;
};

export type HakiImageProps = {
  src: string;
  alt: string;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
} & ImageDimensionProps;

export const Image = ({
  src,
  alt,
  style,
  className,
  onClick,
  height,
  width,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
}: HakiImageProps) => {
  const [doShowBackdrop, setDoShowBackdrop] = useState(false);
  const handleShowBackdrop = () => setDoShowBackdrop(true);
  const handleHideBackdrop = () => setDoShowBackdrop(false);

  const [doShowPreview, setDoShowPreview] = useState(false);
  const handleToggleShowPreview = () => setDoShowPreview((prev) => !prev);

  return (
    <>
      <StyledContainer
        style={style}
        className={className}
        onClick={onClick}
        height={height}
        width={width}
        minHeight={minHeight}
        minWidth={minWidth}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        // toggle backdrop
        onMouseEnter={handleShowBackdrop}
        onMouseLeave={handleHideBackdrop}
      >
        <StyledImage src={src} alt={alt} />

        <Backdrop show={doShowBackdrop} onClick={handleToggleShowPreview}>
          <small style={{ color: "white" }}>Preview</small>
        </Backdrop>
      </StyledContainer>

      {doShowPreview && (
        <StyledPreviewContainer blur={4} onClick={handleToggleShowPreview}>
          <img src={src} alt={alt} height="100%" />
        </StyledPreviewContainer>
      )}
    </>
  );
};
