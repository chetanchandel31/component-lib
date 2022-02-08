import { Meta, Story } from "@storybook/react";
import React, { CSSProperties } from "react";
import { Input, HakiInputProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
};

export default meta;

const Template: Story<HakiInputProps> = (args) => (
  <HakiProvider>
    <Input {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: "username",
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  value: "disabled input",
};

export const Sizes = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <Input size="sm" />
        <Input size="md" />
        <Input size="lg" />
        <Input size="xl" />
      </div>
    </HakiProvider>
  );
};

export const ErrorMessage = Template.bind({});

ErrorMessage.args = {
  error: true,
  errorMessage: "invalid email",
};
