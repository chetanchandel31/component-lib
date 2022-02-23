import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import {
  ClickableArea,
  Button,
  HakiClickableAreaProps,
  HakiProvider,
} from "../src";

const meta: Meta = {
  title: "Components/ClickableArea",
  component: ClickableArea,
};

export default meta;

const Template: Story<HakiClickableAreaProps> = (args) => (
  <HakiProvider>
    <ClickableArea {...args}>
      <span style={{ padding: "8px" }}>
        just a regular span wrapped in clickable area
      </span>
    </ClickableArea>
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {};
