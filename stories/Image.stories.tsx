import { Meta, Story } from "@storybook/react";
import React from "react";
import { Image, HakiImageProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Image",
  component: Image,
};

export default meta;

const Template: Story<HakiImageProps> = (args) => (
  <HakiProvider>
    <Image {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  src: "https://picsum.photos/id/1027/500",
  alt: "haki-image-demo",
  height: 300,
  width: 300,
};

export const BuiltInFallback = Template.bind({});

BuiltInFallback.args = {
  src: "https://broken/path",
  alt: "haki-image-demo",
  height: 300,
  width: 300,
};
