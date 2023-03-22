import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BookCardSkeleton } from "./index";

export default {
  title: "entities/Book/BookCardSkeleton",
  component: BookCardSkeleton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BookCardSkeleton>;

const Template: ComponentStory<typeof BookCardSkeleton> = (args) => <BookCardSkeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};