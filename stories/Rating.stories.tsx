import { Meta, Story } from "@storybook/react";
import React, { CSSProperties, useState } from "react";
import { Rating, Button, HakiRatingProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Rating",
  component: Rating,
};

export default meta;

const Template: Story<HakiRatingProps> = (args) => (
  <HakiProvider>
    <Rating {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  value: 2,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  readOnly: true,
  value: 2,
};

export const ControlledRating = () => {
  const [rating, setRating] = useState(4);

  return (
    <HakiProvider>
      <Rating
        name="demo"
        value={rating}
        onChange={({ target }) => setRating(Number(target.value))}
      />
    </HakiProvider>
  );
};

export const Sizes = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <Rating name="small" size="sm" value={1} />
        <Rating name="medium" size="md" value={1} />
        <Rating name="large" size="lg" value={1} />
        <Rating name="extra-large" size="xl" value={1} />
      </div>
    </HakiProvider>
  );
};
