import { Meta, Story } from "@storybook/react";
import React from "react";
import { MdSave, MdSend } from "react-icons/md";
import { Button, HakiButtonProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

const Template: Story<HakiButtonProps> = (args) => (
  <HakiProvider>
    <Button {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: "click me",
};

export const LoadingButton = Template.bind({});

LoadingButton.args = {
  children: "click me",
  isLoading: true,
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

export const ElevatedButton = Template.bind({});

ElevatedButton.args = {
  children: "click me",
  elevated: true,
};

export const Rounded = Template.bind({});

Rounded.args = {
  children: "click me",
  rounded: true,
};

export const StartIconButton = Template.bind({});

StartIconButton.args = {
  children: "save",
  startIcon: <MdSave />,
};

export const EndIconButton = Template.bind({});

EndIconButton.args = {
  children: "send",
  endIcon: <MdSend />,
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: "click me",
  disabled: true,
};
