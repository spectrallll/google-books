import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoadMoreBooksButton } from "./index";
import { StoreDecorator } from "@/shared/config/storybook/store-decorator";

export default {
  title: "features/Book/LoadMoreBooksButton",
  component: LoadMoreBooksButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoadMoreBooksButton>;

const Template: ComponentStory<typeof LoadMoreBooksButton> = (args) => (
  <LoadMoreBooksButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {

};
Primary.decorators = [StoreDecorator({
  books: {}
})]
