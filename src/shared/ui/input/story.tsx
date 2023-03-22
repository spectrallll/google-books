import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./index";

export default {
  title: "shared/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Type text",
};

export const Readonly = Template.bind({});
Readonly.args = {
  before: "Type>:",
  value: "123",
  readonly: true
}
