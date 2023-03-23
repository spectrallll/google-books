import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "./index";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Укажите значение",
  options: [
    { value: "moscow", content: "Москва" },
    { value: "spb", content: "Санкт-Петербург" },
    { value: "vladimir", content: "Владимир" },
  ],
};