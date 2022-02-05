import { Meta, Story } from "@storybook/react";
import React from "react";
import { Text, HakiTextProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Typography/Text",
  component: Text,
};

export default meta;

const Template: Story<HakiTextProps> = (args) => (
  <HakiProvider>
    <Text {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: "Quick brown fox jumped over the lazy dog",
};

export const Sizes = () => {
  return (
    <HakiProvider>
      <Text>Quick brown fox jumped over the lazy dog</Text>
      <Text variant="body2">Quick brown fox jumped over the lazy dog</Text>
      <Text variant="caption">Quick brown fox jumped over the lazy dog</Text>
    </HakiProvider>
  );
};

export const FontWeights = () => {
  return (
    <HakiProvider>
      <Text>Quick brown fox jumped over the lazy dog</Text>
      <Text weight="semi-bold">Quick brown fox jumped over the lazy dog</Text>
      <Text weight="bold">Quick brown fox jumped over the lazy dog</Text>
    </HakiProvider>
  );
};

export const Colors = () => {
  return (
    <HakiProvider>
      <Text>Quick brown fox jumped over the lazy dog</Text>
      <Text color="disabled">Quick brown fox jumped over the lazy dog</Text>
      <Text color="primary">Quick brown fox jumped over the lazy dog</Text>
    </HakiProvider>
  );
};
