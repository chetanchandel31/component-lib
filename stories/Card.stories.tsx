import { Meta, Story } from "@storybook/react";
import React from "react";
import {
  Avatar,
  Button,
  Card,
  HakiCardProps,
  HakiProvider,
  IconButton,
} from "../src";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
};

export default meta;

const Template: Story<HakiCardProps> = (args) => (
  <HakiProvider>
    <Card {...args}></Card>
  </HakiProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <div>
      <Card.Content>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Card.Content>
      <Card.Actions>
        <Button size="sm" variant="ghost">
          Learn more
        </Button>
      </Card.Actions>
    </div>
  ),
  maxWidth: 350,
  variant: "outlined",
};

export const ComplexCard = () => {
  return (
    <HakiProvider>
      <Card maxWidth={500} variant="elevated">
        <Card.Header
          avatar={<Avatar alt="C" />}
          title="Cooper"
          subTitle="Arlong park"
          action={<IconButton icon="x" size="sm" color="danger" />}
        />

        <Card.Media
          src="https://picsum.photos/id/237/600/300"
          alt="doggo"
          height={294}
        />

        <Card.Content>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Card.Content>

        <Card.Actions justifyContent="end">
          <Button variant="ghost">SHARE</Button>
          <Button variant="ghost">LEARN MORE</Button>
        </Card.Actions>
      </Card>
    </HakiProvider>
  );
};
