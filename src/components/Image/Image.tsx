import React, { CSSProperties, SyntheticEvent, useState } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import { getPixelStringFromNumber } from "./helpers/getPixelStringFromNumber";
import {
  StyledContainer,
  StyledImage,
  StyledPreviewContainer,
  StyledPreviewImg,
} from "./styled";

export type ImageDimensionProps = {
  /** can be suffixed with a valid css unit eg "90px", "90em", "90%", "90vh". if a number is passed, it'll be assumed to be in `px`(pixels) */
  height?: string | number;
  /** can be suffixed by with valid css unit eg "90px", "90em", "90%", "90vh". if a number is passed, it'll be assumed to be in `px`(pixels) */
  width?: string | number;
  /** can be suffixed by with valid css unit eg "90px", "90em", "90%", "90vh". if a number is passed, it'll be assumed to be in `px`(pixels) */
  minHeight?: string | number;
  /** can be suffixed by with valid css unit eg "90px", "90em", "90%", "90vh". if a number is passed, it'll be assumed to be in `px`(pixels) */
  minWidth?: string | number;
  /** can be suffixed by with valid css unit eg "90px", "90em", "90%", "90vh". if a number is passed, it'll be assumed to be in `px`(pixels) */
  maxHeight?: string | number;
  /** can be suffixed by with valid css unit eg "90px", "90em", "90%", "90vh". if a number is passed, it'll be assumed to be in `px`(pixels) */
  maxWidth?: string | number;
};

export type HakiImageProps = {
  src: string;
  alt: string;
  style?: CSSProperties;
  className?: string;
} & ImageDimensionProps;

/**
 * Can be used to render easily sizeable, fault-resistant images with in-built preview feature(try clicking the image).
 * It's recommended to use `height` and `width` props if you plan to make use of in-built fallback image because your
 * image and fallback image's dimensions may differ and might cause layout jumps.
 */
export const Image = ({
  src,
  alt,
  style,
  className,
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

  const [isError, setIsError] = useState(false);
  const handleError = ({
    currentTarget,
  }: SyntheticEvent<HTMLImageElement, Event>) => {
    currentTarget.onerror = null; // prevents looping
    setIsError(true);
    currentTarget.src =
      "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg";
  };

  const _height = getPixelStringFromNumber(height);
  const _width = getPixelStringFromNumber(width);
  const _minHeight = getPixelStringFromNumber(minHeight);
  const _minWidth = getPixelStringFromNumber(minWidth);
  const _maxHeight = getPixelStringFromNumber(maxHeight);
  const _maxWidth = getPixelStringFromNumber(maxWidth);

  return (
    <>
      <StyledContainer
        style={style}
        className={className}
        height={_height}
        width={_width}
        minHeight={_minHeight}
        minWidth={_minWidth}
        maxHeight={_maxHeight}
        maxWidth={_maxWidth}
        // toggle backdrop
        onMouseEnter={handleShowBackdrop}
        onMouseLeave={handleHideBackdrop}
      >
        <StyledImage src={src} alt={alt} onError={handleError} />

        <Backdrop
          show={doShowBackdrop && !isError}
          onClick={handleToggleShowPreview}
        >
          <small style={{ color: "white" }}>Preview</small>
        </Backdrop>
      </StyledContainer>

      {doShowPreview && (
        <StyledPreviewContainer blur={4} onClick={handleToggleShowPreview}>
          <StyledPreviewImg src={src} alt={alt} />
        </StyledPreviewContainer>
      )}
    </>
  );
};
