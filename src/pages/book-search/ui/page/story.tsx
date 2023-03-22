import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookSearch from "./index";
import { StoreDecorator } from "@/shared/config/storybook/store-decorator";
import { baseImg } from "@/shared/const/assets";

export default {
  title: "pages/BookSearch",
  component: BookSearch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BookSearch>;

const Template: ComponentStory<typeof BookSearch> = (args) => (
  <BookSearch {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};

Primary.decorators = [StoreDecorator({
  books: {
    ids: ["0", "1", "2"],
    entities: {
      "0": {
        id: "0",
        title: "Hello World",
        image: baseImg,
        categories: ["Science"],
        authors: ["Author Name"]
      },
      "1": {
        id: "1",
        title: "Hello World",
        image: baseImg,
        categories: ["Science"],
        authors: ["Author Name"]
      },
      "2": {
        id: "2",
        title: "Hello World",
        image: baseImg,
        categories: ["Science"],
        authors: ["Author Name"]
      }
    }
  }
})]
