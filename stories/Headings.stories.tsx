import { Meta, Story } from "@storybook/react";
import React from "react";
import { Text, HakiTextProps, HakiProvider, H1, H2, H3, H4 } from "../src";

const meta: Meta = {
  title: "Components/Typography/Headings",
  component: H1,
};

export default meta;

const Template: Story<HakiTextProps> = (args) => (
  <HakiProvider>
    <H1 {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: "Quick brown fox jumped over the lazy dog",
};

export const CurrentlyAvailableHeadings = () => {
  return (
    <HakiProvider>
      <H1>Quick brown fox jumped over the lazy dog</H1>
      <H2>Quick brown fox jumped over the lazy dog</H2>
      <H3>Quick brown fox jumped over the lazy dog</H3>
      <H4>Quick brown fox jumped over the lazy dog</H4>
    </HakiProvider>
  );
};

export const DifferentWeights = () => {
  return (
    <HakiProvider>
      <H3>Quick brown fox jumped over the lazy dog</H3>
      <H3 weight="semi-bold">Quick brown fox jumped over the lazy dog</H3>
      <H3 weight="bold">Quick brown fox jumped over the lazy dog</H3>
    </HakiProvider>
  );
};

export const Colors = () => {
  return (
    <HakiProvider>
      <H3>Quick brown fox jumped over the lazy dog</H3>
      <H3 color="disabled">Quick brown fox jumped over the lazy dog</H3>
      <H3 color="secondary">Quick brown fox jumped over the lazy dog</H3>
    </HakiProvider>
  );
};
