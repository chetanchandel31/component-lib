import React, { ChangeEventHandler, useState } from "react";
import { Size } from "../../theme/theme";
import { StyledRatingContainer, StyledStar } from "./styled";

export type HakiRatingProps = {
  initialRating?: number;
  /**  The name attribute of the radio input elements. This input name should be unique within the page */
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  size?: Size;
  value?: number;
};

/** Ratings allow users to share a measurement of the quality of their experiences */
export const Rating = ({
  name,
  onChange,
  readOnly = false,
  size = "md",
  value = 0,
}: HakiRatingProps) => {
  const [hoverRating, setHoverRating] = useState<null | number>(null);

  return (
    <StyledRatingContainer size={size}>
      {Array(5)
        .fill(null)
        .map((_el, i) => (
          <label
            key={i}
            onMouseEnter={() => !readOnly && setHoverRating(i + 1)}
            onMouseLeave={() => !readOnly && setHoverRating(null)}
          >
            <StyledStar selected={i + 1 <= (hoverRating || value)}>
              &#9733;
            </StyledStar>
            <input
              checked={value === i + 1}
              disabled={readOnly}
              name={name}
              onChange={onChange}
              readOnly
              style={{ display: "none" }}
              type="radio"
              value={i + 1}
            />
          </label>
        ))}
    </StyledRatingContainer>
  );
};
