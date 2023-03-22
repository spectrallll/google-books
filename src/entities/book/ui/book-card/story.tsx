import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BookCard } from "./index";
import { baseImg } from "@/shared/const/assets";

export default {
  title: "entities/Book/BookCard",
  component: BookCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => <BookCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    id: "1",
    title: "Тихий Дон",
    authors: ["Михаил Шолохов"],
    categories: ["Роман"],
    image: baseImg
  }
};