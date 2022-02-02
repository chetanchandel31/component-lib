import { Meta, Story } from "@storybook/react";
import React from "react";
import { Backdrop, HakiBackdropProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Backdrop",
  component: Backdrop,
};

export default meta;

const Template: Story<HakiBackdropProps> = (args) => {
  return (
    <HakiProvider>
      lorem ipsum
      <Backdrop {...args}>backdrop with slight blur</Backdrop>
    </HakiProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  show: true,
  blur: 1.5,
};
