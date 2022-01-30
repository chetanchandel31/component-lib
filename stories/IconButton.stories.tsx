import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  IconButton,
  HakiIconButtonProps,
  HakiProvider,
  CircularProgress,
} from "../src";

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
  icon: <CircularProgress size={20} thickness={2} />,
};

export const CircularIconButton = Template.bind({});

CircularIconButton.args = {
  icon: <CircularProgress size={20} thickness={2} />,
  circular: true,
};

export const OutlinedIconButton = Template.bind({});

OutlinedIconButton.args = {
  icon: <CircularProgress size={20} thickness={2} />,
  variant: "outlined",
};

export const DisabledIconButton = Template.bind({});

DisabledIconButton.args = {
  icon: <CircularProgress size={20} thickness={2} color="disabled" />,
  disabled: true,
};
