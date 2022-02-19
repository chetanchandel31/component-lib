import { Meta, Story } from "@storybook/react";
import React, { CSSProperties } from "react";
import { FaRedo } from "react-icons/fa";
import { HakiIconButtonProps, HakiProvider, IconButton } from "../src";

const meta: Meta = {
  title: "Components/IconButton",
  component: IconButton,
};

export default meta;

const Template: Story<HakiIconButtonProps> = (args) => (
  <HakiProvider>
    <IconButton {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  icon: <FaRedo />,
};

export const LoadingIconButton = Template.bind({});

LoadingIconButton.args = {
  icon: <FaRedo />,
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
        <IconButton icon={<FaRedo />} />
        <IconButton icon={<FaRedo />} color="secondary" />
        <IconButton icon={<FaRedo />} color="warning" />
        <IconButton icon={<FaRedo />} color="danger" />
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
        <IconButton icon={<FaRedo />} />
        <IconButton icon={<FaRedo />} variant="outlined" />
        <IconButton icon={<FaRedo />} variant="ghost" />
      </div>
    </HakiProvider>
  );
};

export const ElevatedIconButton = Template.bind({});

ElevatedIconButton.args = {
  icon: <FaRedo />,
  elevated: true,
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
        <IconButton icon={<FaRedo />} size="sm" />
        <IconButton icon={<FaRedo />} size="md" />
        <IconButton icon={<FaRedo />} size="lg" />
        <IconButton icon={<FaRedo />} size="xl" />
      </div>
    </HakiProvider>
  );
};

export const CircularIconButtons = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <IconButton circular icon={<FaRedo />} />
        <IconButton circular icon={<FaRedo />} color="secondary" />
        <IconButton circular icon={<FaRedo />} size="sm" />
        <IconButton circular icon={<FaRedo />} variant="outlined" />
      </div>
    </HakiProvider>
  );
};

export const DisabledIconButton = Template.bind({});

DisabledIconButton.args = {
  icon: <FaRedo />,
  disabled: true,
};
