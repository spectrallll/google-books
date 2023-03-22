import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BookCategorySort } from "./index";
import { StoreDecorator } from "@/shared/config/storybook/store-decorator";

export default {
  title: "features/Book/BookCategorySort",
  component: BookCategorySort,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "100px" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BookCategorySort>;

const Template: ComponentStory<typeof BookCategorySort> = (args) => (
  <BookCategorySort {...args} />
);

export const Primary = Template.bind({});
Primary.args = {

};

Primary.decorators = [StoreDecorator({
  books: {}
})]
