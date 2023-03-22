import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Skeleton } from "./index";

export default {
  title: "shared/Skeleton",
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: "100%",
  height: 200,
};
