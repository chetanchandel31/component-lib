import { Meta, Story } from "@storybook/react";
import React from "react";
import { FaRedo } from "react-icons/fa";
import { HakiIconButtonProps, HakiProvider, IconButton } from "../src";

const meta: Meta = {
  title: "Components/IconButton",
  component: IconButton,
};

export default meta;

const Template: Story<HakiIconButtonProps> = (args) => (
  <HakiProvider>
    <IconButton {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  icon: <FaRedo />,
};

export const LoadingIconButton = Template.bind({});

LoadingIconButton.args = {
  icon: <FaRedo />,
  isLoading: true,
};

export const CircularIconButton = Template.bind({});

CircularIconButton.args = {
  icon: <FaRedo />,
  circular: true,
};

export const OutlinedIconButton = Template.bind({});

OutlinedIconButton.args = {
  icon: <FaRedo />,
  variant: "outlined",
};

export const ColoredSmallIconButton = Template.bind({});

ColoredSmallIconButton.args = {
  icon: <FaRedo />,
  color: "secondary",
  size: "sm",
};

export const ElevatedIconButton = Template.bind({});

ElevatedIconButton.args = {
  icon: <FaRedo />,
  elevated: true,
};

export const DisabledIconButton = Template.bind({});

DisabledIconButton.args = {
  icon: <FaRedo />,
  disabled: true,
};
