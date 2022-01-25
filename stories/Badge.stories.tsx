import React from "react";
import { Meta, Story } from "@storybook/react";
import { Badge, HakiBadgeProps, Button, HakiProvider } from "../src";

const meta: Meta = {
  title: "Components/Badge",
  component: Badge,
};

export default meta;

const Template: Story<HakiBadgeProps> = (args) => (
  <HakiProvider>
    <Badge {...args}>
      <Button color="warning">button with badge</Button>
    </Badge>
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  badgeContent: 8,
};

export const BadgeDanger = Template.bind({});

BadgeDanger.args = {
  badgeContent: 800,
  color: "danger",
};

export const BadgeWithText = Template.bind({});

BadgeWithText.args = {
  badgeContent: "text",
};

export const BadgeDot = Template.bind({});

BadgeDot.args = {
  variant: "dot",
  color: "danger",
};
