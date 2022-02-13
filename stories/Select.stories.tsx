import { Meta, Story } from "@storybook/react";
import React from "react";
import { HakiSelectProps, HakiProvider, Select } from "../src";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
};

export default meta;

const Template: Story<HakiSelectProps> = (args) => (
  <HakiProvider>
    <Select {...args}>
      <option>aalu</option>
      <option>bhaalu</option>
      <option>chaalu</option>
    </Select>
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
