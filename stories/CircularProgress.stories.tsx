import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  CircularProgress,
  HakiCircularProgressProps,
  HakiProvider,
} from "../src";

const meta: Meta = {
  title: "Components/CircularProgress",
  component: CircularProgress,
};

export default meta;

const Template: Story<HakiCircularProgressProps> = (args) => (
  <HakiProvider>
    <CircularProgress {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {};

export const SecondaryCircularProgress = Template.bind({});

SecondaryCircularProgress.args = {
  color: "secondary",
};

export const SmallerCircularProgress = Template.bind({});

SmallerCircularProgress.args = {
  size: 20,
};

export const ThinnerCircularProgress = Template.bind({});

ThinnerCircularProgress.args = {
  size: 20,
  thickness: 2,
};
