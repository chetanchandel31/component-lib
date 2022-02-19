import { Meta, Story } from "@storybook/react";
import React, { CSSProperties } from "react";
import { MdSave, MdSend } from "react-icons/md";
import { Button, HakiButtonProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

const Template: Story<HakiButtonProps> = (args) => (
  <HakiProvider>
    <Button {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: "click me",
};

export const LoadingButton = Template.bind({});

LoadingButton.args = {
  children: "click me",
  isLoading: true,
};

export const Colors = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    gap: "8px",
  };

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    </HakiProvider>
  );
};

export const Variants = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    gap: "8px",
  };

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <Button>filled</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="ghost">ghost</Button>
      </div>
    </HakiProvider>
  );
};

export const Sizes = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "8px 0",
  };

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <Button size="sm" variant="ghost">
          small
        </Button>
        <Button size="md" variant="ghost">
          medium
        </Button>
        <Button size="lg" variant="ghost">
          large
        </Button>
        <Button size="xl" variant="ghost">
          extra large
        </Button>
      </div>
      <div style={containerStyles}>
        <Button color="danger" size="sm" variant="outlined">
          small
        </Button>
        <Button color="danger" size="md" variant="outlined">
          medium
        </Button>
        <Button color="danger" size="lg" variant="outlined">
          large
        </Button>
        <Button color="danger" size="xl" variant="outlined">
          extra large
        </Button>
      </div>
      <div style={containerStyles}>
        <Button color="secondary" size="sm">
          small
        </Button>
        <Button color="secondary" size="md">
          medium
        </Button>
        <Button color="secondary" size="lg">
          large
        </Button>
        <Button color="secondary" size="xl">
          extra large
        </Button>
      </div>
    </HakiProvider>
  );
};

export const ElevatedButton = Template.bind({});

ElevatedButton.args = {
  children: "click me",
  elevated: true,
};

export const Rounded = Template.bind({});

Rounded.args = {
  children: "click me",
  rounded: true,
};

export const StartIconButton = Template.bind({});

StartIconButton.args = {
  children: "save",
  startIcon: <MdSave />,
};

export const EndIconButton = Template.bind({});

EndIconButton.args = {
  children: "send",
  endIcon: <MdSend />,
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: "click me",
  disabled: true,
};
