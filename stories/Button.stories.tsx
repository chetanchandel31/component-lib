import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => (
  <HakiProvider>
    <Button {...args}></Button>
  </HakiProvider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  children: "bb",
};
