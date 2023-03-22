import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./index";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Send",
  theme: ButtonTheme.PRIMARY,
};
export const Clear = Template.bind({});
Clear.args = {
  children: "Clear",
  theme: ButtonTheme.CLEAR,
};
export const OutlinedLight = Template.bind({});
OutlinedLight.args = {
  children: "Outlined",
  theme: ButtonTheme.OUTLINE,
};

export const OutlinedSizeM = Template.bind({});
OutlinedSizeM.args = {
  children: "Outlined",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M,
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
  children: "Outlined",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
  children: "Outlined",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const Square = Template.bind({});
Square.args = {
  children: "Square",
  square: true,
  theme: ButtonTheme.PRIMARY,
};
