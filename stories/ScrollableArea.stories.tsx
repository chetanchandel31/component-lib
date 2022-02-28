import { Meta, Story } from "@storybook/react";
import React, { CSSProperties } from "react";
import { HakiProvider, HakiScrollableAreaProps, ScrollableArea } from "../src";

const meta: Meta = {
  title: "Components/ScrollableArea",
  component: ScrollableArea,
};

export default meta;

const Template: Story<HakiScrollableAreaProps> = (args) => (
  <HakiProvider>
    <ScrollableArea {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: Array(20)
    .fill("🤠")
    .map((el, i) => <div key={i}>{el}</div>),
  style: { height: "200px", overflowY: "scroll", width: "200px" },
};

export const Comparison = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };

  const sectionStyles: CSSProperties = {
    height: "200px",
    overflowY: "scroll",
    width: "200px",
  };

  return (
    <HakiProvider>
      <main style={containerStyles}>
        <ScrollableArea style={sectionStyles}>
          Scrollable area
          {Array(20)
            .fill("😁")
            .map((el, i) => (
              <div key={i}>{el}</div>
            ))}
        </ScrollableArea>

        <div style={sectionStyles}>
          Native scroll
          {Array(20)
            .fill("😐")
            .map((el, i) => (
              <div key={i}>{el}</div>
            ))}
        </div>
      </main>
    </HakiProvider>
  );
};
