import React, { CSSProperties } from "react";
import { Meta, Story } from "@storybook/react";
import { Chip, HakiChipProps, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Chip",
  component: Chip,
};

export default meta;

const Template: Story<HakiChipProps> = (args) => (
  <HakiProvider>
    <Chip {...args} />
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: "haki",
};

export const Colors = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    gap: "8px",
  };

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <Chip>Aalu</Chip>
        <Chip color="secondary">Bhaalu</Chip>
        <Chip color="warning">Chaalu</Chip>
        <Chip color="danger">Laalu</Chip>
      </div>
    </HakiProvider>
  );
};

export const OutlinedChips = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    gap: "8px",
  };

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <Chip variant="outlined">Aalu</Chip>
        <Chip color="secondary" variant="outlined">
          Bhaalu
        </Chip>
        <Chip color="warning" variant="outlined">
          Chaalu
        </Chip>
        <Chip color="danger" variant="outlined">
          Laalu
        </Chip>
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
        <Chip>Aalu</Chip>
        <Chip size="sm">Smol Aalu</Chip>
      </div>
    </HakiProvider>
  );
};

export const CloseableChips = () => {
  const containerStyles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const handleClose = () =>
    alert("this function runs when cross icon is clicked");

  return (
    <HakiProvider>
      <div style={containerStyles}>
        <Chip onClose={handleClose}>Aalu</Chip>
        <Chip onClose={handleClose} variant="outlined">
          Bhaalu
        </Chip>
        <Chip color="danger" onClose={handleClose}>
          Chaalu
        </Chip>
      </div>
    </HakiProvider>
  );
};
