import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BookSearchFilters } from "./index";
import { StoreDecorator } from "@/shared/config/storybook/store-decorator";

export default {
  title: "pages/BookSearch/SearchFilters",
  component: BookSearchFilters,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BookSearchFilters>;

const Template: ComponentStory<typeof BookSearchFilters> = (args) => (
  <BookSearchFilters {...args} />
);

export const Primary = Template.bind({});
Primary.args = {

};
Primary.decorators = [StoreDecorator({
  books: {}
})]
