import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchBooks } from "./index";
import { StoreDecorator } from "@/shared/config/storybook/store-decorator";

export default {
  title: "features/Book/BookSearch",
  component: SearchBooks,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SearchBooks>;

const Template: ComponentStory<typeof SearchBooks> = (args) => (
  <SearchBooks {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};

Primary.decorators = [StoreDecorator({
  books: {}
})]
