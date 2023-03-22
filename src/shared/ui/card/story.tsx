import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "../text";
import { Card } from "./index";

export default {
  title: "shared/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Text title="TEXT" text="hello world world world world" />,
};
