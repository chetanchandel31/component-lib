import { Meta, Story } from "@storybook/react";
import React, { CSSProperties } from "react";
import { Input, HakiInputProps, HakiProvider } from "../src";
import { AiOutlineUser, AiFillEyeInvisible } from "react-icons/ai";

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
  placeholder: "abc@xyz.com",
  error: true,
  errorMessage: "invalid email",
};

export const InputWithEndIcon = Template.bind({});

InputWithEndIcon.args = {
  type: "password",
  placeholder: "password",
  rightAdornment: (
    <AiFillEyeInvisible style={{ color: "rgba(0, 0, 0, 0.5)" }} />
  ),
};

export const InputWithStartIcon = Template.bind({});

InputWithStartIcon.args = {
  placeholder: "username",
  leftAdornment: <AiOutlineUser style={{ color: "rgba(0, 0, 0, 0.5)" }} />,
};
