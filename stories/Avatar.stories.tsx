import React from "react";
import { Meta, Story } from "@storybook/react";
import { Avatar, HakiAvatarProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Avatar",
  component: Avatar,
};

export default meta;

const Template: Story<HakiAvatarProps> = ({ children, ...args }) => (
  <HakiProvider>
    <Avatar {...args}>{children}</Avatar>
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  src: "https://picsum.photos/id/1027/100",
  alt: "Emma",
};

export const LetterAvatar = Template.bind({});

LetterAvatar.args = {
  src: "/broken-path/broken-image.jpg",
  alt: "broken image",
  children: "GG",
};

export const CustomColoredLetterAvatar = Template.bind({});

CustomColoredLetterAvatar.args = {
  src: "/broken-path/broken-image.jpg",
  alt: "broken image",
  children: "GG",
  bgColor: "#673ab7",
};

export const SquareAvatar = Template.bind({});

SquareAvatar.args = {
  src: "https://picsum.photos/id/237/200/300",
  alt: "bruno",
  variant: "square",
};

export const SizedAvatar = Template.bind({});

SizedAvatar.args = {
  src: "https://picsum.photos/id/237/200/300",
  alt: "bruno",
  variant: "rounded",
  size: 100,
};
