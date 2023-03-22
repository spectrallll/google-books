import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BookRelevanceSort } from "./index";
import { StoreDecorator } from "@/shared/config/storybook/store-decorator";

export default {
  title: "features/Book/BookRelevanceSort",
  component: BookRelevanceSort,
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
} as ComponentMeta<typeof BookRelevanceSort>;

const Template: ComponentStory<typeof BookRelevanceSort> = (args) => (
  <BookRelevanceSort {...args} />
);

export const Primary = Template.bind({});
Primary.args = {

};
Primary.decorators = [StoreDecorator({
  books: {}
})]
