import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text, TextSize, TextTheme } from "./index";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title lorem ipsum",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "lorem ipsum san lsa ipsum lorem",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
  theme: TextTheme.ERROR,
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
  size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
  size: TextSize.L,
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: "Title lorem ipsum",
  text: "lorem ipsum san lsa ipsum lorem",
  size: TextSize.S,
};
