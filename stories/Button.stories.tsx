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
    <Button {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: "click me",
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: "click me",
  disabled: true,
};

export const Danger = Template.bind({});

Danger.args = {
  children: "click me",
  color: "danger",
};

export const SmallOutlined = Template.bind({});

SmallOutlined.args = {
  children: "click me",
  variant: "outlined",
  size: "sm",
};

export const GhostExtraLarge = Template.bind({});

GhostExtraLarge.args = {
  children: "click me",
  variant: "ghost",
  size: "xl",
  color: "secondary",
};
