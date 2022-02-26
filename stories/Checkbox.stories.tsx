import { Meta, Story } from "@storybook/react";
import React, { CSSProperties, useState } from "react";
import { Checkbox, HakiCheckboxProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Checkbox",
  component: Checkbox,
};

export default meta;

const Template: Story<HakiCheckboxProps> = (args) => (
  <HakiProvider>
    <Checkbox {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {};

export const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <HakiProvider>
      <Checkbox
        checked={checked}
        onChange={({ target }) => setChecked(target.checked)}
      />
    </HakiProvider>
  );
};

export const Colors = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    gap: "8px",
  };

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <Checkbox />
        <Checkbox color="secondary" />
        <Checkbox color="danger" />
        <Checkbox color="warning" />
      </div>
    </HakiProvider>
  );
};

export const Sizes = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <Checkbox />
        <Checkbox color="secondary" size="lg" />
        <Checkbox color="danger" />
        <Checkbox color="warning" size="lg" />
      </div>
    </HakiProvider>
  );
};
